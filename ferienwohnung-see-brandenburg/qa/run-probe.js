const { chromium } = require('playwright');
const fs = require('fs');
const [,, url, probePath, out, shotMode] = process.argv;
const probe = fs.readFileSync(probePath, 'utf8');
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: ['--ignore-certificate-errors'] });
  const sizes = [[390,844,'phone'],[768,1024,'tablet'],[1440,900,'desktop']];
  const report = {};
  for (const [w,h,name] of sizes) {
    const ctx = await browser.newContext({ ignoreHTTPSErrors: true, viewport:{width:w,height:h}, deviceScaleFactor:1, isMobile: w<800, hasTouch: w<800, locale:'de-DE' });
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', m => { if (m.type()==='error') errors.push(m.text().slice(0,200)); });
    page.on('pageerror', e => errors.push('pageerror: '+e.message.slice(0,200)));
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(1500);
    const r = await page.evaluate(`window.__larghezzaAttesa=${w}; ${probe}`);
    r.httpStatus = resp && resp.status(); r.consoleErrors = errors;
    r.pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    report[name] = r;
    if (shotMode !== 'none') await page.screenshot({ path: `${out}-${name}.png`, fullPage: (shotMode==='full') });
    await ctx.close();
  }
  await browser.close();
  console.log(JSON.stringify(report, null, 1));
})().catch(e => { console.error('PROBE FAILED', e.message); process.exit(1); });
