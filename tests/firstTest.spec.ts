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

test('User facing locators', async({page})=>{

    await page.getByRole('textbox', {name: "Email"}).first().click()
    await page.getByRole('button', {name: "Sign in"}).first().click()

    await page.getByLabel('Email').click()
    await page.getByPlaceholder('Jane Doe').click()
    await page.getByText('Using the Grid').click()
    await page.getByTestId('SignIn').click()

}

)
test('locating child elements', async({page})=>{
await page.locator('nb-card nb-radio :text-is("Option 2")').click()
await page.locator('nb-card').getByRole('button', {name:"Sign In"}).first().click()

    
})

test('parent element', async({page})=>{

    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).getByRole('textbox', {name: "Password"}).click()

})


