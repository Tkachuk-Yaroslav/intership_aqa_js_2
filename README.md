# intership_aqa_js_2

## This project tests the "Redmine" site using Playwright. It includes 5 automatic tests to check the functionality of the site.

## Installation

- gh repo clone Tkachuk-Yaroslav/intership_aqa_js_2
- cd intership_aqa_js_2
- npm install

## Testing

- npx playwright test --ui

## Test-cases description:

### Requirements for Test Cases:

Test сase 1: The login and email must be unregistered each time before running the test.
Test case 5: A valid password must be entered each time before running the test.

### Test case 1

Title: Registration of a user on the website using valid data

| #   | Steps                              | Expected result                                                                                                                                                                                            |
| --- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Open the website                   | The main page is displayed                                                                                                                                                                                 |
| 2   | Click the "Зареєструватися" button | The "Register" page is displayed                                                                                                                                                                           |
| 3   | Fill all fields with valid data    | The entered data is displayed in the fields                                                                                                                                                                |
| 4   | Click the "Відправити" button      | The "Обліковий запис успішно створений. Для активації Вашого облікового запису зайдіть по посиланню, яке відіслане вам електронною поштою." text is displayed. The user is redirected to the "Login" page. |

### Test case 2

Title: Registration of a user on the website using invalid email

| #   | Steps                                                                          | Expected result                                                                |
| --- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 1   | Open the website                                                               | The main page is displayed                                                     |
| 2   | Click the "Зареєструватися" button                                             | The "Register" page is displayed                                               |
| 3   | Fill the "Ел. пошта" field with invalid data (without @, without domain, etc.) | The entered data is displayed in the fields                                    |
| 4   | Fill all other fields with valid data                                          | The entered data is displayed in the fields                                    |
| 5   | Click the "Відправити" button                                                  | The "Ел. пошта невірне" error is displayed. The user is left on the same page. |

### Test case 3

Title: Check the documentation on the "User's Guide" page

| #   | Steps                                 | Expected result                                                                                                  |
| --- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | Open the website                      | The main page is displayed                                                                                       |
| 2   | Scroll to the "Documentation" section | The "Documentation" section is displayed                                                                         |
| 3   | Click on the "User's Guide" link      | The "User's Guide" page is displayed                                                                             |
| 4   | Scroll to the "User Guide" section    | The "User Guide" section is displayed                                                                            |
| 5   | Click on the "Getting Started" link   | Step one shown on the page is called "Creating a project". The user is redirected to the "Getting Started" page. |

### Test case 4

Title: Filtering the data on the "issues" page

| #   | Steps                                                             | Expected result                   |
| --- | ----------------------------------------------------------------- | --------------------------------- |
| 1   | Open the website                                                  | The main page is displayed        |
| 2   | Click on the "Питання" link                                       | The "issues" section is displayed |
| 3   | In the "Додати фільтр" selection, select the "Координатор" option | Selected option is displayed      |
| 4   | Click on the "Застосувати" button                                 | Filtered results are displayed    |

### Test case 5

Title: Changing the password on the user page

Preconditions:

- The user is registered on the site (login – tkachuky105105, password - Qweqweqwe0)
- The "My Account" page is open

| #   | Steps                              | Expected result                                                                                       |
| --- | ---------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Click on the "Змінити пароль" link | The password change page is displayed                                                                 |
| 2   | Fill all fields with valid data    | The entered data is displayed in the fields                                                           |
| 3   | Click on the "Застосувати" button  | The "Пароль успішно оновлений." message is displayed. The user is redirected to the "My Account" page |
