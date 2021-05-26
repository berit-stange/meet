import puppeteer from 'puppeteer';

// {
//     headless: false,
//     slowMo: 250, // slow down by 250ms
//    ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
//   }

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch(); // inside () add headless mode: (code above)
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });
    afterAll(() => {
        browser.close();
    });

    // Scenario 1
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull(); //is not existing
    });

    // Scenario 2
    test('User can expand an event to see its details', async () => {
        await page.click('.event .btn-details');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();//is existing
    });

    // Scenario 3
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .btn-hide-details');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();//is not existing
    });

});

describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extensions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.CitySearch');
    });
    afterAll(() => {
        browser.close();
    });

    // Scenario 1
    // no action, just page loaded

    // Scenario 2
    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('.city', 'Berlin');
        const suggestionsList = await page.$('.suggestions');
        expect(suggestionsList).toBeDefined();
    });

    // Scenario 3
    // test('User can select a city from the suggested list', async () => {
    //     await page.click('.suggestions li').at(0);

    //     // const selectedCity = await page.$('.suggestions');
    //     // expect(selectedCity).toBeDefined();

    //     expect(AppWrapper.state('events')).toEqual('Berlin');
    // });

});