# liBRBary-app
[![Deploy](https://github.com/librbary/librbary-buy-feature/actions/workflows/deploy.yml/badge.svg?branch=develop)](https://github.com/librbary/librbary-buy-feature/actions/workflows/deploy.yml)

## liBRBary Application
> [liBRBary - Buy, Rental, Barter](https://librbary.github.io/librbary-buy-feature/).

## Local workspace setup guidelines
* After checking out your feature branch in your local, first install the packages using below command <br />
``` npm install ```

* To run your project in local, use below command <br />
``` npm run start ```

* To build your application in local, use below command <br />
``` npm run build ```

* For deployment of your changes to **github-pages** from your local, you can use the below command. <br /> 
***THIS APPROACH IS NOT RECOMMENDED*** <br />
``` npm run deploy ```

## CI/CD Pipeline
We are using [**github-actions**](https://github.com/librbary/librbary-buy-feature/actions) for continous integration and continous delivery. You can refer the worflows yml to add/update the jobs in the build/deploy workflow yml.