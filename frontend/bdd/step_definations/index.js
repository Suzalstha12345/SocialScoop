const { expect, assert } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");
const { buildPath } = require("selenium-webdriver/http");

let username =
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  username=  username.substring(0,9)
  const email = `${username}@example.com`;

let search = 
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    search =  search.substring(0,9)

// Given("Test registration", {timeout:30000},async function(){
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/register/");
//     await driver.findElement(By.css("input[type='email']")).sendKeys(email);
//     await driver.findElement(By.css("input[type='text']")).sendKeys(username);
//     await driver.findElement(By.css("input[type='password']")).sendKeys('password');
//     await driver.findElement(By.css('button[type="submit"]')).click();
// });

Given("Test login", {timeout:30000},async function(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://http://localhost:3000/login/");
    await driver.findElement(By.css("input[type='text']")).sendKeys(email);
    await driver.findElement(By.css("input[type='password']")).sendKeys('password');
    await driver.findElement(By.className('btn btn-primary w-100 btn-lg rounded')).click();
});
