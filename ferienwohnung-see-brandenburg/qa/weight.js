const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: ['--ignore-certificate-errors'] });
  for (const [name, opts] of [['mobile', { ...devices['iPhone 13'], ignoreHTTPSErrors: true }], ['desktop', { viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true }]]) {
    const ctx = await browser.newContext(opts); const page = await ctx.newPage();
    let total = 0, video = 0, img = 0, n = 0; const big = [];
    page.on('response', async r => { try { const h = r.headers(); let len = parseInt(h['content-length'] || '0'); if (!len) { const b = await r.body().catch(()=>null); len = b ? b.length : 0; } total += len; n++; const ct = h['content-type'] || ''; if (ct.startsWith('video')) video += len; if (ct.startsWith('image')) img += len; if (len > 200000) big.push([r.url().replace('https://ferienwohnung-see-brandenburg.de',''), len]); } catch (e) {} });
    await page.goto('https://ferienwohnung-see-brandenburg.de/', { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(3000);
    const vidState = await page.evaluate(() => { const v = document.querySelector('[data-hero] video'); if (!v) return 'no video el'; const cs = getComputedStyle(v); return `display=${cs.display} currentSrc=${v.currentSrc ? 'set' : 'empty'} readyState=${v.readyState} paused=${v.paused}`; });
    console.log(`${name}: requests=${n} total=${(total/1e6).toFixed(2)} MB (initial, no scroll) images=${(img/1e6).toFixed(2)} MB video=${(video/1e6).toFixed(2)} MB | video: ${vidState}`);
    console.log('  big:', JSON.stringify(big));
    await ctx.close();
  }
  await browser.close();
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
