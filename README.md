Some Cool App in Node + Express + Knex + Bookshelfjs
===================
This project is the backend api service for a dating site written entirely in javascript.

# Dependencies
The backend will use the following technologies and frameworks:

  - [NodeJS](http://nodejs.org/)
  - [Mysql](http://www.mysql.com/)
  - [Node-Mysql](https://github.com/felixge/node-mysql)
  - [Bookshelfjs](http://bookshelfjs.org)


# Installation steps for MacOS
This procedure explains how to install [MySQL](https://www.mysql.com) using [Homebrew](http://brew.sh) on macOS Sierra 10.12

## Install Homebrew
* Installing Homebrew is effortless, open Terminal and enter :
 `$  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* **Note:** Homebrew will download and install Command Line Tools for Xcode 8.0 as part of the installation process.

## Install MySQL
At this time of writing, Homebrew has MySQL version **5.7.17** as default formulae in its main repository :

* Enter the following command : `$ brew info mysql`
* Expected output: **mysql: stable 5.7.17 (bottled)**

To install MySQL enter : `$ brew install mysql`

### Additional configuration

* Install **brew services** first : `$ brew tap homebrew/services`
* Load and start the MySQL service : `$ brew services start mysql`.
Expected output : **Successfully started `mysql` (label: homebrew.mxcl.mysql)**

* Verify the installed MySQL instance : `$ mysql -V`.
Expected output : **Ver 14.14 Distrib 5.7.15, for osx10.12 (x86_64)**

## Install npm
At this time of writing, Homebrew has npm version **7.7.2** as default formulae in its main repository :

* Enter the following command : `$ brew info npm`
* Expected output: **node: stable 7.7.2 (bottled)**

To install MySQL enter : `$ brew install npm`

## Clone repository
Clone this repository to your local machine via;
```bash
git clone git@github.com:salimkapadia/express-knex.git
```

## Install project dependencies
```bash
cd express-knex
npm install
```

## Load database
```bash
NODE_ENV=default $(npm bin)/knex migrate:latest --knexfile src/server/utils/knexfile.js --cwd src/server/database/
```

# Workflow

### Starting the Application using production configuration

 `$ npm start`

### Starting the Application using environment specific configuration

`$ NODE_ENV=development node index.js`

### Stopping the Application

       $ npm stop

### Making changes

#### Database (Mysql)
Database changes are managed through [knex](http://knexjs.org/#Migrations).

* When creating migrations with [knex](http://knexjs.org/#Migrations), please use the following convention for the `migrationName`:
  - `create-tableName` when your script is creating a table ```bash NODE_ENV=default $(npm bin)/knex migrate:make create-event --knexfile src/server/utils/knexfile.js --cwd src/server/database/```
  - `drop-tableName` when your script is dropping a table. ```bash NODE_ENV=default $(npm bin)/knex migrate:make drop-event --knexfile src/server/utils/knexfile.js --cwd src/server/database/```
  - `alter-tableName` when your script is altering a table ```bash NODE_ENV=default $(npm bin)/knex migrate:make alter-event --knexfile src/server/utils/knexfile.js --cwd src/server/database/```
  - `insert-tableName` when your script is inserting into a table. ```bash NODE_ENV=default $(npm bin)/knex migrate:make insert-event --knexfile src/server/utils/knexfile.js --cwd src/server/database/```
  - `update-tableName` when your script is update a record in a table. ```bash NODE_ENV=default $(npm bin)/knex migrate:make update-event --knexfile src/server/utils/knexfile.js --cwd src/server/database/```

* Table names should be singular. See [stackoverflow](http://stackoverflow.com/questions/338156/table-naming-dilemma-singular-vs-plural-names) for explanation.
* Foreign keys should be lowercase like so: fk\_foreignKeyTableName\_primaryKeyTableName

#### Controllers

* Should be saved in the controllers directory.
* Filename should be camelCased and end with the word Controller like so - bookController.js

# Testing
Please keep in mind that during the build process, the test directory is not packaged. The application can be tested like so:

       $ npm test

# Seed data
If you need to add seed data for your tests, use [knex seed-cli](http://knexjs.org/#Seeds-CLI).

- Adding a seed file:
```bash
$(npm bin)/knex seed:make --knexfile src/server/utils/knexfile.js --cwd test/data insert-dummy-data.js
```

- Running seed files:
```bash
$(npm bin)/knex seed:run --knexfile src/server/utils/knexfile.js --cwd test/data
```

License
=========
MIT [http://rem.mit-license.org](http://rem.mit-license.org)
