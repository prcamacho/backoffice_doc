Anotaciones Pablo Camacho:
Al hacer el clone , para instalar las dependencias hacer: npm install --legacy-peer-deps luego van a haber problemas hay que eliminar unos parametros de node_modules/rxfire/firestore/lite/interfaces.d.ts quedaria asi: export type CountSnapshot = lite.AggregateQuerySnapshot<{
count: lite.AggregateField<number>;
}>;
Luego, manualmente si es que trae problemas actualizar la version de swimlane a la 20 o ultima: "@swimlane/ngx-charts": "^20.5.0", y ahi en teoria ya funciona en local.

Update 19/08/24
Lo corregi al error al clonar y querer levantar el servidor, actualizando la dependencia de firebase
Lo unico a tener en cuenta es que cada dependencia nueva debe ir acompañada del legacy sino, dara error.

# Invopay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
