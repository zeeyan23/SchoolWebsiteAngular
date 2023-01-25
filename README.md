# admin-bite-angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## install dependencies
`npm i`

## if error - 
`npm i --force`
`npm install ngx-print@1.2.0-beta.5 --force`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## DOCKER
## change start command before doing anything in docker
change start command before doing anything in `package.json` script where ng serve is there - 

`ng serve --host 0.0.0.0 --disable-host-check`

add `dockerignore` and `Dockerfile` in your root directory

## To build the docker image 

`docker build -t [image] .`

## To run the image

`docker run --name [container-name] -p 4200:4200 [image]`

