const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: ['--ignore-certificate-errors'] });
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const posts = [];
  page.on('response', async r => { if (r.request().method() === 'POST') { let body=''; try { body = (await r.text()).slice(0,300); } catch(e){} posts.push({ url: r.url(), status: r.status(), body }); } });
  page.on('console', m => { if (m.type()==='error') console.log('console error:', m.text().slice(0,200)); });
  await page.goto('https://ferienwohnung-see-brandenburg.de/kontakt', { waitUntil: 'networkidle', timeout: 90000 });
  const acc = page.getByRole('button', { name: /akzeptieren|zustimmen|accept|alle/i }).first();
  if (await acc.count()) { await acc.click().catch(()=>{}); await page.waitForTimeout(500); }
  await page.fill('#name', 'Testanfrage QA (bitte ignorieren)');
  await page.fill('#email', 'qa-test@example.com');
  await page.selectOption('#unterkunft', { index: 5 });
  await page.fill('#anreise', '2026-10-10'); await page.fill('#abreise', '2026-10-12');
  await page.fill('#personen', '2');
  await page.fill('#message', 'Automatischer Funktionstest des Anfrageformulars beim Aufbau der Website – bitte ignorieren.');
  await page.check('#privacy_consent');
  await page.click('#contact-form button[type=submit]');
  await page.waitForTimeout(7000);
  const txt = await page.evaluate(() => { const f=document.querySelector('#contact-form'); const sec = f ? f.closest('section') : null; return (sec||document.body).innerText; });
  console.log('POSTs:', JSON.stringify(posts));
  console.log('form area text after submit:', txt.replace(/\s+/g,' ').slice(0,700));
  await browser.close();
})().catch(e => { console.error('FAILED', e.message); process.exit(1); });
