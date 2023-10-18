const puppeteer = require('puppeteer')

const {generateText, checkAndGenerate} = require('./util')


test('should output name and age', () =>{

const text = generateText('Tom', 30)
expect(text).toBe('Tom, (30 years old')
})

test('should generate a valid text output',() =>{
const text = checkAndGenerate('Tom', 30)
expect(text).toBe('Tom, (30 years old)')
})

test('should click around', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage()
    page.goto('http://127.0.0.1:5500/JS%20max/Testing/index.html')
    await page.click('input#name')
    await page.type('input#name', 'Anna')
    await page.click('input#age')
    await page.type('input#age', '29')
    await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-item', el =>el.textContent)
    expect(finalText).toBe('Anna (29 years old)')
})