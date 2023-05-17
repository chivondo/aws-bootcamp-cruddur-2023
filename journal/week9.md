# Week 9 — CI/CD with CodePipeline, CodeBuild and CodeDeploy

Many ways to do this. We will focus with CodePipeline, the idea is to automate pushing and deploying images.

Artifact are the files that are worked on by actions in the pipeline.  It's stored in a s3 bucket.

You need a source code repository

## Required Homework

### CICD Pipeline Security
* OWASP Top 10 CI/CD Security Risk
#### Best practice AWS
* Compliance standard of your region
* Amazon Organizations SCP, to restrict actions in the CI/CD pipeline services
* AWS CloudTrain is enabled & monitored to trigger alerts 
* GuardDuty is enabled for monitoring suspicious DNS comms and automated for auto-remediation
* AWS Config Rules is enabled.

#### Security Best Practice - Application
* Access Control -Roles or IAM Users for making changes in CICD
* Security of the CI/CD Pipeline - source control, secret management, container registry
* Security in the CI/CD Pipeline - Code security best practices - SCA, SAST, Secret Scanner, DAST implemented in the CI/CD
* Security of the CI/CD pipeline entry points 
* Enable Encryption in transit using TLS/SSL certification
* Only use Trusted Source Control for sending changes to CI/CD
* Develop process for continously verifying if there is a change that may compromise the known state of a CI/CD pipeline


### Configuring CodeBuild Part 1

Create a Pipelin with Default location and Default AWS Managed key. Use GitHub (Version 2) and connect to your repo.
Create a new branch in your github. Checked "Start the pipeline on source code change" and use CodePipeline default
Use Amazon ECS for deployment and pick your images from Fargate
Build a CodeBuild project. 
Do not select a VPC setting
Create buildspec.yml for the CodeBuild configuration

### Configuring CodeBuild Part 2

Go to Pull request and create Pull request `main -> prod `

First build failed because I was missing a policy. I created a Policy [CodeBuildECR](https://github.com/chivondo/aws-bootcamp-cruddur-2023/blob/main/aws/policies/CodeBuildECR) needed and attached it to my codebuild-cruddur-backend role.

After that I was able to build the CodeBuild sucessfully.

![CodeBuild](assets/CodeBuild.png)


### Configuring CodePipeline
Add build stage
Output image for the build stage is `ImageDefinition`
Input image for the deploy stage is `ImageDefinition`
Click `Release change` and pipeline is created.

![Code Pipeline Success](assets/pipeline.png)

Check our backend health check to see if its running:

![HealthCheck](assets/health-check.png)

Modify health check to a new version in our `app.py` file.

We make a new pull-merge from Prod it triggers the source and a new build is processing.

![newBuild](assets/newBuild.png)

New health-check version deployed

![HealthCheckv1](assets/health-checkv1.png)

New deploy took around 14 min from the merge pull to full deploy

![newDeploy](assets/newDeploy.png)






