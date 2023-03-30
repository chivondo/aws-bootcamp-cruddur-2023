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



### Create Schema for PostGres


### Watched Ashish's Week 4 security Considerations


### Bash Scripting for common database actions



### Install Postgres driver in backend application



### Connect Gitpod to RDS Instance


### Create AWS Cognito trigger to insert user into databse


### Create new activities with a database insert
