# Week 8 — Serverless Image Processing

CDK is IaC tool. 

Check The CDK Book and CDK Day for more information and learning.

## Required Homework

### Implement CDK (Cloud Development Kit) Stack

Most of our code will live in the lib folder and we are using typescript for the CDK code.

#### Create bucket

We are using import function instead of creating a bucket to add a layer of protection to not delete the bucket when we destroy the CDK.

`const bucket = this.importBucket(bucketName);`

#### Create Lambda function

Need to create .env file. The since the .env file might contain confidential information then it cannot be committed to the github. Create a new file .env.example and copy it at the start in your gitpod.yml .

```
cd thumbing-serverless-cdk
cp .env.example .env
```
Use sharp js for your lambda function to process the image.  `npm install sharp`
In addition since we are using AWS Lambda then the following needs to be installed:
``` sh
npm install
rm -rf node_modules/sharp
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install --arch=x64 --platform=linux --libc=glibc sharp
```
`  const lambda = this.createLambda(functionPath, bucketName, folderInput, folderOutput);`

#### Create S3 Event Notification to Lambda

```
   this.createS3NotifyToLambda(folderInput,lambda,bucket)
   this.createS3NotifyToSns(folderOutput,snsTopic,bucket)
```    

#### Create SNS topic

```
 const snsTopic = this.createSnsTopic(topicName)
 this.createSnsSubscription(snsTopic,webhookUrl)
```

#### Create policies and attach them to your lambda

```
 const s3ReadWritePolicy = this.createPolicyBucketAccess(bucket.bucketArn)
  lambda.addToRolePolicy(s3ReadWritePolicy);
```


#### Commands to know: 
* Quickly check your code for errors `cdk synth`
* Bootstrapping `cdk bootstrap "aws://$AWS_ACCOUNT_ID/$AWS_DEFAULT_REGION"`
* Deploy `cdk deploy`

After implementing our CDK. We can upload our images using serverless image process and check the logs.
![dataprocessing](assets/dataprocessing.png)


### Serve Avatars via CloudFront

Need to create a new record in your hosted zone assets.domain.com to Cloudfront alias

Update policies in the s3 bucket to allow cloudfront.

Create new bucket "cruddur-uploaded-avatars-jv84" for the original image and use the existing assets bucket for the processed image. That way it adds an extra layer of security. 

Update scripts and thumbing cdk file to match the 2 buckets. One for upload folder and another for the assets folder.


We can access the processed image on the web
![cloudfrontimage](assets/cloudfrontimage.png)

### Implement Users Profile Page

### Implement Users Profile Form

### Implement Backend Migrations

### Presigned URL generation via Ruby Lambda

### HTTP API Gateway with Lambda Authorizer

### Create JWT Lambda Layer

### Render Avatars in App via CloudFront
