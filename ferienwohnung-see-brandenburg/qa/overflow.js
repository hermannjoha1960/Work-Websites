const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: ['--ignore-certificate-errors'] });
  for (const url of ['/', '/region', '/ferienhaeuser/maisonette-am-kruepelsee']) {
    for (const [w, h] of [[390, 844], [768, 1024], [1440, 900]]) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: w < 500 ? 3 : 1, ignoreHTTPSErrors: true }); const page = await ctx.newPage();
      const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 80)); });
      await page.goto('https://ferienwohnung-see-brandenburg.de' + url, { waitUntil: 'networkidle', timeout: 120000 });
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
      const r = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, heroImg: (document.querySelector('[data-hero] img') || {}).currentSrc?.split('/').pop(), cards: Array.from(document.querySelectorAll('article img')).map(i => i.currentSrc.split('/').pop().replace(/\.jpg$/, '')).slice(0, 4) }));
      console.log(url, w + 'x' + h, JSON.stringify(r), errs.length ? 'ERR ' + JSON.stringify(errs) : 'ok');
      await ctx.close();
    }
  }
  await browser.close();
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
