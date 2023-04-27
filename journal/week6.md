# Week 6 — Deploying Containers

## Required Homework

### Watch ECS Security by Ashish

### Provision ECS Cluster

### Create ECR repo and push image for backend-flask

### Deploy Backend Flask app as a service to Fargate

### Create ECR repo and push image for fronted-react-js

### Deploy Frontend React JS app as a service to Fargate

### Provision and configure Application Load Balancer along with target groups


### Manage your domain using Route53 via hosted zone

### Create an SSL cerificate via ACM

### Setup a record set for naked domain to point to frontend-react-js

### Setup a record set for api subdomain to point to the backend-flask

### Configure CORS to only permit traffic from our domain

### Secure Flask by not running in debug mode
``` 
docker run --rm \
-p 4567:4567 \
-e AWS_ENDPOINT_URL="http://dynamodb-local:8000" \
-e CONNECTION_URL="postgresql://postgres:password@db:5432/cruddur" \
-e FRONTEND_URL="https://3000-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}" \
-e BACKEND_URL="https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}" \
-e OTEL_SERVICE_NAME='backend-flask' \
-e OTEL_EXPORTER_OTLP_ENDPOINT="https://api.honeycomb.io" \
-e OTEL_EXPORTER_OTLP_HEADERS="x-honeycomb-team=${HONEYCOMB_API_KEY}" \
-e AWS_XRAY_URL="*4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}*" \
-e AWS_XRAY_DAEMON_ADDRESS="xray-daemon:2000" \
-e AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION}" \
-e AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}" \
-e AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}" \
-e ROLLBAR_ACCESS_TOKEN="${ROLLBAR_ACCESS_TOKEN}" \
-e AWS_COGNITO_USER_POOL_ID="${AWS_COGNITO_USER_POOL_ID}" \
-e AWS_COGNITO_USER_POOL_CLIENT_ID="3k4tj2dvb7e2nknr9a7gnncou7" \   
-it backend-flask-prod
```

### Implement Refresh Token for Amazon Cognito

### Refactor bin directory to be top level

### Configure task defintions to contain x-ray and turn on Container Insights

Add following to task-definition under container
```
  {
        "name": "xray",
        "image": "public.ecr.aws/xray/aws-xray-daemon" ,
        "essential": true,
        "user": "1337",
        "portMappings": [
          {
            "name": "xray",
            "containerPort": 2000,
            "protocol":"udp"
          }
          ]
      },
```
Fix Networking - and create bash scripts for the env variable.
Create Ruby script 

### Change Docker Compose to explicitly use a user-defined network

### Create Dockerfile specfically for production use case

### Using ruby generate out env dot files for docker using erb templates

