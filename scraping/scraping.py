import asyncio
from pyppeteer import launch
import json

async def scrape_events():
    browser = await launch(headless=True, devtools= True)
    page = await browser.newPage()
    await page.goto('https://perthisok.com/whats-on/')
    # page.on('console', lambda msg: print('Console:', msg.text))
    # page.on('request', lambda request: print('Request:', request.method, request.url))
    # page.on('response', lambda response: print('Response:', response.url))

    # Scroll down to allow the page to load more content
    scroll_height = 0
    # max_scroll = 133160
    max_scroll = 130000
    while scroll_height != max_scroll:
    # await page.evaluate('document.body.scrollHeight'):
        # scroll_height = await page.evaluate('document.body.scrollHeight')
        scroll_height += 2000
        print("scroll_height", scroll_height)
        await page.evaluate(f'window.scrollTo(0, {scroll_height});')
        await asyncio.sleep(5)  # Adjust the sleep interval as needed

    # Now that the page has loaded, extract the content
    page_content = await page.content()

    await browser.close()
    return page_content

def extract_events(content):
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(content, 'html.parser')
    events = []

    for event in soup.find_all('article', class_='flex'):
        event_tag = event.find('span', class_='bg-piok-yellow')
        event_title = event.find('a', class_='hover:underline')
        event_date_container = event.find('div', class_='flex items-center space-x-2 text-sm font-medium uppercase text-piok-black/60')

        if event_title and event_tag and event_date_container:
            event_date_spans = event_date_container.find_all('span')
            
            if len(event_date_spans) >= 2:
                event_date = event_date_spans[0].text
                event_location = event_date_spans[1].text.strip()
                event_href = event_title['href']
                events.append({
                    'date': event_date,
                    'location': event_location,
                    'title': event_title.text,
                    'tag': event_tag.text,
                    'href': event_href,
                })

    return events

def save_events_to_file(events):
    with open('events.json', 'w') as f:
        json.dump(events, f, indent=4)

async def main():
    page_content = await scrape_events()
    events = extract_events(page_content)
    # print(events)
    save_events_to_file(events)
    print("Events saved to 'events.json'")

asyncio.get_event_loop().run_until_complete(main())
