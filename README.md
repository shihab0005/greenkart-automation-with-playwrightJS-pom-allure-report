# Green Kart Full Automation With PlaywrightJs,Page Object Model and Allure Report

User Login With username and password and Select Product dynamically and add to Cart Product.
Successfully purches product which is added to Cart with user details form fillup.There are use Some Assertion 
to Check Validity.Also User Can Successfully Logout.

## Technology used:
- Playwright JS
- Page Object Model
- Allure Report
- Html Report

## Video:
[48cc3d701144a3d4.webm](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/assets/41753677/44667fc6-d636-412e-8456-d86c59463020)


## Screenshots without POM
Successfully Order Palced
![App Screenshot](https://github.com/shihab0005/automation-playwright-js-order-product-ecommerce/blob/main/output/test-finished-1.png?raw=true)

## Allure Report without POM
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/Capture.PNG?raw=true)

## Prerequisite:
- Node Js
- VSCode
  
## Project Installation Process:

- Clone Project Command:
```bash
   git clone https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports.git 
```
- Install All Project Package:
```bash
  npm install  
```
- Run Project:
```bash
  npx playwright test 
```

## Allure Report Generate Process:

- Allure Report Package Install Command:
```bash
  npm i -D @playwright/test allure-playwright
```
- Allure Report Config Command:
```bash
 npx playwright test --reporter=line,allure-playwright  
```
- Generate Allure Report Command:
```bash
  allure generate allure-results -o allure-report --clean
```
- Open Allure Report Command:
```bash
  allure open allure-report
```




