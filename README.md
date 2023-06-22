# Green Kart Full Automation With PlaywrightJs,Page Object Model and Allure Report

Navigate to Green kart webpage and check few Assertion like url,title,search_box,cart_btn,flight booking,items,total items,
item image,item price,print all item name and item price, also cleck all item cart increment and decrement button work or not,check add to cart button 
of all item work properly or not,search item with type.finally order a item successfully.

## Technology used:
- Playwright JS
- Page Object Model
- Allure Report
- Html Report

## Video:
[48cc3d701144a3d4.webm](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/assets/41753677/44667fc6-d636-412e-8456-d86c59463020)


## Screenshots 
Successfully Order Palced
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/test-finished-1.png?raw=true)
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/test-finished-2.png?raw=true)
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/test-finished-3.png?raw=true)

## Allure Report without POM
![App Screenshot](https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report/blob/main/Output/Capture.PNG?raw=true)

## Prerequisite:
- Node Js
- VSCode
  
## Project Installation Process:

- Clone Project Command:
```bash
   git clone https://github.com/shihab0005/greenkart-automation-with-playwrightJS-pom-allure-report.git 
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




