const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: ['--ignore-certificate-errors'] });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce', ignoreHTTPSErrors: true }); const p = await ctx.newPage();
  await p.goto('https://ferienwohnung-see-brandenburg.de/', { waitUntil: 'networkidle', timeout: 120000 }); await p.waitForTimeout(1000);
  console.log('reduced-motion desktop:', JSON.stringify(await p.evaluate(() => ({ video: getComputedStyle(document.querySelector('[data-hero] video')).display, img: getComputedStyle(document.querySelector('[data-hero] img')).display, imgAnim: getComputedStyle(document.querySelector('[data-hero] img')).animationName, revealOpacity: getComputedStyle(document.querySelector('.reveal')).opacity }))));
  await ctx.close();
  const m = await browser.newContext({ ...devices['iPhone 13'], ignoreHTTPSErrors: true }); const q = await m.newPage();
  await q.goto('https://ferienwohnung-see-brandenburg.de/ferienhaeuser/gaestehaus-am-grossen-zug', { waitUntil: 'networkidle', timeout: 120000 });
  await q.evaluate(() => document.querySelector('#contact-form button[type=submit]').scrollIntoView({ block: 'end' })); await q.waitForTimeout(800);
  console.log('sticky bar vs submit:', JSON.stringify(await q.evaluate(() => { const b = document.querySelector('#contact-form button[type=submit]').getBoundingClientRect(); const bar = document.getElementById('buchungsleiste'); const r = bar ? bar.getBoundingClientRect() : null; return { submitBottom: Math.round(b.bottom), barTop: r ? Math.round(r.top) : null, barHidden: bar ? bar.getAttribute('aria-hidden') : null, barDisplay: bar ? getComputedStyle(bar).display : null, forms: document.querySelectorAll('#contact-form').length, checkboxBeforeSubmit: (() => { const f = document.querySelector('#contact-form'); const c = f.querySelector('#privacy_consent'); const s = f.querySelector('button[type=submit]'); return !!(c && s && (c.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING)); })(), action: document.querySelector('#contact-form').getAttribute('action'), method: document.querySelector('#contact-form').getAttribute('method') }; })));
  await q.screenshot({ path: 'qa/form-bar-390.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  await browser.close();
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
