import puppeteer from 'puppeteer';



(async () => {

 const browser = await puppeteer.launch({
    headless: false
 })
const page = await browser.newPage();

await page.goto('https://chatgpt.com/c/93ae277f-7b8b-4137-9a74-9c4e10c62459');

await page.setViewport({width: 1080, height: 1024});


await page.waitForSelector('button.btn.relative.btn-primary.btn-small');
await page.locator('button.btn.relative.btn-primary.btn-small').click();
//encontra os 3pontinhos para clicar:

await page.waitForSelector('.absolute.bottom-0.top-0.to-transparent.ltr\:right-0.ltr\:bg-gradient-to-l.rtl\:left-0.rtl\:bg-gradient-to-r.from-token-sidebar-surface-primary.from-token-sidebar-surface-primary.can-hover\:group-hover\:from-token-sidebar-surface-secondary.w-8.from-0\%.can-hover\:group-hover\:w-10.can-hover\:group-hover\:from-60\%')
await page.locator('.absolute.bottom-0.top-0.to-transparent.ltr\:right-0.ltr\:bg-gradient-to-l.rtl\:left-0.rtl\:bg-gradient-to-r.from-token-sidebar-surface-primary.from-token-sidebar-surface-primary.can-hover\:group-hover\:from-token-sidebar-surface-secondary.w-8.from-0\%.can-hover\:group-hover\:w-10.can-hover\:group-hover\:from-60\%').click();

//encontra o modal

await page.waitForSelector('.flex.items-center.m-1\.5.p-2\.5.text-sm.cursor-pointer.focus-visible\:outline-0.radix-disabled\:pointer-events-none.radix-disabled\:opacity-50.group.relative.hover\:bg-\[\#f5f5f5\].focus-visible\:bg-\[\#f5f5f5\].radix-state-open\:bg-\[\#f5f5f5\].dark\:hover\:bg-token-main-surface-secondary.dark\:focus-visible\:bg-token-main-surface-secondary.rounded-md.my-0.px-3.mx-2.dark\:radix-state-open\:bg-token-main-surface-secondary.gap-2\.5.py-3.text-token-text-error')
await page.locator('.flex.items-center.m-1\.5.p-2\.5.text-sm.cursor-pointer.focus-visible\:outline-0.radix-disabled\:pointer-events-none.radix-disabled\:opacity-50.group.relative.hover\:bg-\[\#f5f5f5\].focus-visible\:bg-\[\#f5f5f5\].radix-state-open\:bg-\[\#f5f5f5\].dark\:hover\:bg-token-main-surface-secondary.dark\:focus-visible\:bg-token-main-surface-secondary.rounded-md.my-0.px-3.mx-2.dark\:radix-state-open\:bg-token-main-surface-secondary.gap-2\.5.py-3.text-token-text-error').click();

await page.waitForSelector('button.btn.relative.btn-danger')
await page.locator('button.btn.relative.btn-danger').click();

await browser.close();

})();



