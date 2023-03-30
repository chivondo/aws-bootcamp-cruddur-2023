# Week 4 — Postgres and RDS

## Required Homework

### Create RDS Postgres Instance

We create the RDS instance in AWS using the CLI instead of the UI. Need to add the following code in our AWS CLI:

```
aws rds create-db-instance \
  --db-instance-identifier cruddur-db-instance \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --engine-version  14.6 \
  --master-username root \
  --master-user-password YourPassword\
  --allocated-storage 20 \
  --availability-zone us-east-1a \
  --backup-retention-period 0 \
  --port 5432 \
  --no-multi-az \
  --db-name cruddur \
  --storage-type gp2 \
  --publicly-accessible \
  --storage-encrypted \
  --enable-performance-insights \
  --performance-insights-retention-period 7 \
  --no-deletion-protection
```
The instance is created in AWS: 

![RDSInstance](assets/RDSInstance.png)



### Create Schema for PostGres

Is good idea to obscure your uuid so competitors cannot guess how many users you have.

Created a folder called "DB" with a file called schema.sql and added the following:
`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

Created variables `export CONNECTION_URL="postgresql://postgres:pssword@localhost:5433/cruddur"`

`PROD_CONNECTION_URL="postgresql://root:randompassword@cruddur-db-instance.cmwiefs6f5yu.us-east-1.rds.amazonaws.com:5432/cruddur"`


### Watched Ashish's Week 4 security Considerations


### Bash Scripting for common database actions

Created a folder "bin" to create bash scripts for actions

Added a total of 7 bash scripts for database actions 
- db-connect 
- db-create
- db-drop
- db-schema-load
- db-seed
- db-sessions
- db-setup

Everytime you create a file you need to change permisions with the command chmod
`chmod u+x bin/db-connect`

Use command **sed** to manipulate strings

`NO_DB_CONNECTION_URL=$(sed 's/\/cruddur//g' <<<"$CONNECTION_URL")`


### Install Postgres driver in backend application



### Connect Gitpod to RDS Instance


### Create AWS Cognito trigger to insert user into databse


### Create new activities with a database insert
