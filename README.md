Hi! This is an app to practice some topics related to te managment of users for a web application.

## Summary:

-   Develop an app for the user managment for a web application.

-   The communication with the application is done through a REST API (HTTP). The application will persist the data, so that if it is stopped, all changes should remain saved.

-   The objective of this application is to practice the concepts related to REST APIs.

## Entity definition

-   User: User registered on the platform, all fields are mandatory.
    -   First name: Minimum of 2 characters and a maximum of 20 (All characters will be valid)
    -   Last name: Minimum of 4 and maximum of 50 (All characters will be valid)
    -   Email: Must comply with [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)
    -   Password: Minimum of 10 characters and maximum of 25 (At least one lowercase, uppercase and one number)

## Functional requirements

-   The user will be able to register in the application by entering the required data.
    -   The email must be unique for each user.
-   The user will be able to authenticate to the application using his/her email and password.
    -   If the authentication is valid, the application will return to the user an identifier that will be used to prove his identity to the application when he wants to change/delete his data.
-   The user will be able to obtain all his data except his password, using his identifier.
-   The user will be able to update his name and surname, the identifier will be necessary.
-   The user will be able to update his email, the identifier and the current password will be necessary.
-   The user will be able to update his password, it will be necessary the identifier and the current password.
-   The user will be able to delete all his data from the platform, the identifier and the current password will be required.

I hope u enjoy it!
