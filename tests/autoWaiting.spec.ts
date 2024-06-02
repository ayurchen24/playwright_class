import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax/')
    await page.getByText('Button Triggering AJAX Request').click()
    
} )

test('auto waitng', async({page})=>{
 const sucessButton = page.locator('.bg-success')
//  await sucessButton.click()

// const text = await sucessButton.textContent()

await sucessButton.waitFor({state: "attached"})

const text = await sucessButton.allTextContents()

expect(text).toContain('Data loaded with AJAX get request.')
})

test('alternative waits', async({page})=> {
    const sucessButton = page.locator('.bg-success')

    // wait for selector

    await page.waitForSelector('.bg-success')

    // wait for particular responce

    await page.waitForResponse("http://uitestingplayground.com/ajaxdata")



//  wait for network call to be completed 
    await page.waitForLoadState("networkidle")


    const text = await sucessButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')


})