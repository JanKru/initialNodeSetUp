## Table of Contents
* [About the Project](#about-the-project)
* [Usage](#usage)

## About The Project

My standard node-project setup

### Prerequisites

You need the following software

* nodejs & npm [download](https://www.nodejs.org)

### Installation

1. Clone the repo
```sh
git clone https://github.com/JanKru/initialNodeSetUp.git
```
2. Navigate to initialNodeSetUp
```sh
cd ./initialNodeSetUp
```
3. Create a .env-file (like the example below)
```JS
NODE_ENV=development
SERVER_PORT=4041
MONGO_HOST=mongodb://localhost/mushroomClassifier

```
4. Install NPM packages
```sh
npm install
```

## Usage

When your work on Mac your linter may marks the linebreaks. Go to .eslintrc and change linebreak style to unix

```sh
 "linebreak-style": ["error", "unix"]
 ```