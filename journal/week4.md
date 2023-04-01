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

Make takeaways is to use best security practice for a AWS RDS database. The principle is that the database shouldn't connect directly to the internet and public. Since we are on a developing face, is ok to have the database public but still need to create security policy to only allow permitted IP addresses.

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

Use command `\x on` to easily display tables in the terminal

Need to add psycopg in the requirements.txt file for the postgres drive in the backend
```
psycopg[binary]
psycopg[pool]

```
Create file db.py in the "lib" folder and import the ConnectionPool

After implementing the pool conenction and the changes in homeactivities.py we got our first query in the app


![FirstQuery](assets/FirstQueryShown.png)

### Connect Gitpod to RDS Instance

Created script called "rds-update-sg-rule". So everytime we open Gitpod, the security rule for AWS RDS automatically will change to the new IP address assigned by gitpod. 

```
#! /usr/bin/bash

#echo "==rds-update-sg-rule"
CYAN='\033[1;36m'
NO_COLOR='\033[0m'
LABEL="rds-update-sg-rule"
printf "${CYAN}== ${LABEL}${NO_COLOR}\n"

aws ec2 modify-security-group-rules \
    --group-id $DB_SG_ID \
    --security-group-rules "SecurityGroupRuleId=$DB_SG_RULE_ID,SecurityGroupRule={Description=GITPOD,IpProtocol=tcp,FromPort=5432,ToPort=5432,CidrIpv4=$GITPOD_IP/32}"
```
Need to also make sure that the script is run during Gitpod startup by adding the following in the gitpod.yml

```
command: |
      export GITPOD_IP=$(curl ifconfig.me)
      source "$THEIA_WORKSPACE_ROOT/backend-flask/bin/rds-update-sg-rule"
```
Finally update the "db-connect" script so we can run the script and connect to the production database.
### Create AWS Cognito trigger to insert user into databse

We need to pass the "cognito_user_id" to our database to authenticate the user, and the best way is using a the AWS cognito hook by deploying a AWS Lambda code.

Add the code in a new file called "crddur-post-confirmation" in a folder

### Create new activities with a database insert
