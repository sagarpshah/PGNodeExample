# PGNodeExample
A sample node.js application which connects PostgreSQL hosted on RDS in 4 different ways.

Install Node.js® from https://nodejs.org/en/

-- constant.js
    It contains the DB credentials. Replace it with valid data.

-- index.js
    It contains 3 different methods to connect to PostgreSQL DB. node-postgres package is used for DB connection. Please check the detail documentation above node-postgres package here -- https://node-postgres.com/.
    All 3 methods' syntax adheres AWS Lambda protocol.

-- orm.js
    It contains method to connect to PostgreSQL DB via Sequelize ORM. Here is the official documentation of Sequelize -- http://docs.sequelizejs.com/.
    This method can also be used in conjuction with AWS Lambda.

-- invoke.js
    It contains invocation to all 4 methods. Please allow executable access to this file by using _chmod +x invoke.js_ command.
    Running _./invoke.js_ will do the execution.