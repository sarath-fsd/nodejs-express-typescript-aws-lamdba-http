# nestjs-express-typescript-aws-lamdba-http

## Description

Nodejs Express Typescript project to deploy in AWS as lambda function. API Endpoints are accessed using http methods.

## Major Technologies

NodeJs, Express, Typescript, AWS, Serverless and Lambda

## Installation

To run this application, you must have stable NODE 18+ version

Please go to NodeJS to install 18+ version then run the following command

```bash
$ npm install
```

## Running the app in local

```bash
$ npm run start
```

## To deploy in AWS as Lambda function

Install serverless globally in your system using following command

```bash
$ npm i -g serverless
```

Connect to the your AWS account through serverless

    serverless config credentials --provider aws --key <key> --secret <secret-key>

    Navigate to AWS to get the key and secret
    -> Login to the AWS management console
    -> Click on the dropdown next to your name (Which is present at the top right side of the AWS management console page)
    -> Navigate to the "Access Keys" section
    -> Click on "Create access key"
    -> Check the checkbox of "Continue to create access key?"
    -> Click on "Create access key" button.
    -> Above step generates the Access Key and Secret access key.
    -> Replace key and secret in the above given command and execute it.

Need to have configure severless.yml and provider handler method to your to express app
(Already ran below commands to create a serverless.yml and handler.ts file (src/hander.ts). If you would like to create from scrach, please take a backup of serverless.yml, handler.ts and delete .gitignore folder. Then run below commands, update the files by referring to the backup files)
serverless create -t aws-nodejs

```bash
$ serverless create -t aws-nodejs
$ npm i serverless-http
```

Create a build folder then deploy

```bash
$ npm run build
$ serverless deploy
```

## Steps to access the endpoints

After successfully running above steps, AWS endpoints diplayed in the terminal as below.

ANY - https://****\*\*****.execute-api.us-east-1.amazonaws.com/dev

Copy the command and try to access the endpoint either in the browser or postman

https://****\*\*****.execute-api.us-east-1.amazonaws.com/dev/v1/books
