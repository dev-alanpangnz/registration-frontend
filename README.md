# RegistrationFrontend

In order to run this project properly, you must have executed `docker-compose up` for the registration-api project.
This project is by no means a full function web frontend application, as it queries localhost (reserved for registration-api).

## Dockerfile

####Navigate to the project and execute the following commands:
- ng build --prod
- docker build -t "name" .
- docker run -p 3000:80 --rm "name"

Navigate to http://localhost:3000/ for the signup/login page

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Theres a lot of validation in this project

Please note that the frontend flow will be broken if company network firewall blocks email
verification. The API must be running and must be able to send email verifications.

####Register/Login
- Clicking on each tab will clear out form data and refresh 

####Register
- Username, Email and Password must all be filled in otherwise validation error
- If Email verification was blocked, you will receive a message telling you to tether/hotspot to avoid any firewall issues.
- If Email verification wasn't blocked then you'll be shown the verification code field
- Once user validates, feedback message will show
- If username already exists but email not verified, the api will resend the email with a new verification code.
- If username already exists and email has been verified, user is identified as existing user and you will have to provide a new username.

####Login
- User must have had their email verified to log in, otherwise incorrect username or password.
- Incorrect Username or Password will Result in error message

####Account
- On the accounts page, there are 3 functions available, change email, password and logout
- All fields on the change password form needs to be filled in before submission otherwise error feedback message will show
- Same goes for Email

