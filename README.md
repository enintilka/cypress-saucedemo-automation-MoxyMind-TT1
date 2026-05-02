# Cypress SauceDemo Automation For MoxyMind TT1

## Description

This project contains automated tests for the SauceDemo website using Cypress.
The goal is to verify the main functionality of the application.

---

## Overview

In this project, I created automated end-to-end tests for the SauceDemo website using Cypress.
The tests cover the main user flow, including login, product validation, adding items to the cart, and completing the checkout process.

---

## Test Cases

### 1. Login and Navigation

* The user opens the SauceDemo website
* The login page is displayed correctly
* The user logs in with valid credentials
* The user is redirected to the inventory page

**Why this is important:**
Login is required to access the system.

---

### 2. Product Visibility

* The user sees the product page after login
* The title "Products" is visible
* A product name and price are displayed

**Why this is important:**
Users must be able to see available products.

---

### 3. Add Product to Cart

* The user selects a product
* Clicks "Add to Cart"
* The button changes to "Remove"
* The cart icon shows 1 item

**Why this is important:**
Adding items to the cart is a key feature of the system.

---

### 4. Cart and Checkout Navigation

* The user adds a product to the cart
* Opens the cart page
* The correct product is displayed
* The "Checkout" button is visible

**Why this is important:**
The cart must correctly show selected items.

---

### 5. Complete Checkout Process

* The user adds a product and goes to checkout
* Enters personal information
* Continues to overview page
* Verifies payment and shipping information
* Verifies price, tax, and total
* Completes the order
* Sees a success message
* Returns to the product page

**Why this is important:**
This test verifies the full purchase flow.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/enintilka/cypress-saucedemo-automation-MoxyMind-TT1
```

2. Navigate to the project folder:
```bash
cd cypress-saucedemo-automation-MoxyMind-TT1
```

3. Install dependencies:
```bash
npm install
```


## Run Tests

From command line:

* Run tests (headless):
  npm run cypress:run

* Open Cypress UI:
  npm run cypress:open

---

## Technologies Used

* Framework: Cypress
* Language: JavaScript
 
