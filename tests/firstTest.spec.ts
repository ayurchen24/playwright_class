 import {test} from '@playwright/test'


test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
} )

test('locator syntax rules', async({page})=>{
    //by tag name
    
page.locator('input')
//by id
page.locator('#inputEmail1')

//by class value
page.locator('.shape-rectangle')
//by attribute 
page.locator('[placeholder="Email"]')

//by entire class value

page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

// combine different locators

page.locator('input[placeholder="Email"]')
//by partial text match
page.locator(':text("Using")')

//by exact text match 

page.locator(':text-is()"Using the Grid')

})


