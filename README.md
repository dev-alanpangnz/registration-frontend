# RegistrationFrontend

In order to run this project properly, you must have executed `docker-compose up` for the registration-api project.
This project is by no means a full function web frontend application, as it queries localhost (reserved for registration-api).

## Dockerfile

Navigate to the project and execute the following commands:
* ng build --prod
* docker build -t "name" .
* docker run -p 3000:80 --rm "name"

Navigate to http://localhost:3000/ for the signup/login page

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

