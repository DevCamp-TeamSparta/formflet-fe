import puppeteer from 'puppeteer';
import NotionComponent from '@/components/notion/notion';

async function openToggles(page) {
  let isClosedToggleExist = true;
  while (isClosedToggleExist) {
    // div[aria-label="열기"] 요소들을 찾아 클릭
    isClosedToggleExist = await page.evaluate(() => {
      const toggles = Array.from(document.querySelectorAll('div[aria-label="열기"]'));
      toggles.forEach((toggle) => toggle.click());
      return toggles.length > 0;
    });
    if (isClosedToggleExist) {
      await page.waitForTimeout(1000);
    }
  }
}

export async function getData() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const url =
    'https://teamsparta.notion.site/notion-crawler-a81a79959195404c9f0a7e2e96772b46?pvs=4';
  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  await openToggles(page);
  const notionAppHTML = await page.evaluate(() => {
    const element = document.getElementById('notion-app');
    return element ? element.innerHTML : '';
  });

  await browser.close();
  const domainName = new URL(url).hostname;
  return { props: { notionAppHTML, domainName } };
}

export default async function NotionCrawlerPage() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className={'flex w-full justify-center'}>
        <NotionComponent
          notionBodyHTML={data.props.notionAppHTML}
          domainName={data.props.domainName}
        />
      </div>
    </main>
  );
}
