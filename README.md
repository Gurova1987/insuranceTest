# InsuranceApp
### Author: Gustavo Rodriguez

Application is built using a DDD (Domain Driven Design) architecture style

This app is a monolithic application composed of NLayer Modules following common patterns in this architecture style (DDD). The components are named as follow:
  - insuranceApp.AngularWebApplication (Client)
  - insuranceApp.WebApi (Entry point between client and Back End)
  - insuranceApp.Application (This module expose the services to the rest of the world)
  - insuranceApp.Domain (Include all business models)
  - insuranceApp.Infraestructure (Data access layer, using repository-pattern, a single Repository Service for all entities)

  Additional Notes:
    - Application is using 'Autofac' as the DI container
    - Application is using 'AutoMapper' to map dtos and entities
    - As the ORM we are using Entity Framework and Code First
    - In regards of Authentication we are using the built in library in .Net Identity(OAuth) to authenticate users

## Back End Installation
  - Compile Solution (Exclude 'insuranceApp.AngularWebApplication' project)
  - Update the connectionString value in web.config for the 'insuranceApp.WebApi' project to point to the desire database Server
  - Run migrations
    - Use 'NuGet Package Manager Console' and run command 'Update-database'  
  - Publish 'insuranceApp.WebApi' into a local IIS or host server (We need WebApi url to setup the client)

## Client Installation
  The client has been built using https://akveo.github.io/ngx-admin/ template, is a dashboard based on Angular 7+, Bootstrap 4+ and Nebular

    - Requirements
      - Node.js - https://nodejs.org. Please note the version should be >=8
      - Npm - Node.js package manager, comes with Node.js. Please make sure npm version is >=5
    - Go to the application folder for: 'insuranceApp.AngularWebApplication'
    - Update the file: 'src/assests/config.json' and make sure to add the url for the WebApi application
    - Run command: 'npm install' in the root of 'insuranceApp.AngularWebApplication'
    - Run command: 'ng serve'
    - Application should start in 'http://localhost:4200'

#### Additional Notes:
    - You can find service files in 'src/app/@core/data'
    - Main components are located: 'src/app/pages'

## Incomplete Areas
  - Unit Test couldn't be completed due to the time constraint, including UT for .Net and Angular
  - Integration Test couldn't be completed due a time constraint

## Debt Tech
  This is some areas that can be improved but was not possible due to the time constrain of the exercise
  * UnitOfWork as part of the repository pattern
  * Role Based Authorization.
  * For the UI Client, would have been better to use HttpInterceptor to include bearer tokens for api calls


### Comments/Conclusions
