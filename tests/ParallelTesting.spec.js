const { test, expect } = require('@playwright/test');
test.describe.configure({mode: 'parallel'});

test.describe('Group1',()=>{

    test('Test1', async({page})=>{
        console.log('this is test 1....')
    })
    
    test('Test2', async({page})=>{
        console.log('this is test 2....')
    })

    test('Test3', async({page})=>{
        console.log('this is test 3....')
    })
    
    
})

