# Week 10 — CloudFormation Part 1

## Required homework

CloudFormation is AWS IaC tool and AWS manages it for you which is an advantage against Terraform.

CloudFormation can be written in JSON or YAML. We will use YAML for our project.

### Security 
#### AWS
* Compliance standard and is available in the region you need to perate in.
* Use AWS SCP to restrict actions like creation, deletion and modification of production Cloudformation Templates/Resource etc
* AWS CloudTrail is enabled & monitored to trigger alerts for malicious activities, for example change to production Environment
* Use AWS Audit Manger, IAM Access Analyzer, etc
#### CLient side

* Access control  -roles
* Security of the Cloudformation - Configuration access
* Security int he Cloudformation - Code Security Best Practices - SCA, SAST, Secret Scanner, DAST implemented in the CI/CD pipeline
* Security of the CloudFormation entry points e.g - private access points using AWS Private Link, etc
* Only use Trusted source control for sending changes to CFN.
* Develop process for continously verifying if there is a change or any compromise the known state of a CI/CD pipeline.

Create a cfn folder in our repo and start with the `template.yaml`. Is good idea to have the templates in your project.

MultiLayer architecture : Web tier ; Applications Tier; Database Tier

Find sample templates to figure out what is required for the AWS service - Eg: [ECS](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-ecs.html#quickref-ecs-example-1.yaml)

Create a bin script to deploy the CFN.

After deploying, check in the AWS portal under Cloud Formation the change set to make sure everything is in order

CloudTrail is very good to check API event logs and check for error.

Install cfn-lint to check for errors `pip install cfn-lint`

CFN Guard is a Policy-as-Code `cargo install cfn-guard` . This is good to set up policy so users cannot create CFN templates agaisnt the policy. For example , setting up a S3  bucket to be always private. Users  will not be able to create a public  S3-bucket.

Create a unique name S3 bucket `cfn-artifacts-jv84` in AWS and add it to the Cloud formation portal. Include it in the deploy script with command `--s3-bucket "cfn-artifacts-jv84` and run the script.

The template will be saved in the S3 bucket.

![S3template](assets/s3template.png)


### Networking layer

Create a new networking folder with file `template.yaml`. [Networking](link)
You need the following components:
* VPC
* IGW
* Route Table
* Subnets
* Outputs

Result in CloudFormation:

![Networking](assets/networking.png)

Networking Diagram - [NetDiagram](https://lucid.app/lucidchart/22207a1a-dae1-4147-8836-8a75f8a9419f/edit?viewport_loc=-342%2C7%2C2933%2C1394%2CWAPZBnZ3av3o&invitationId=inv_d6c467eb-15fa-4278-804e-7cb35cad388e)

![netdiagram](assets/netdiagram.png)

### Cluster Layer

Create a Cluster template [Cluster](https://github.com/chivondo/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cluster/template.yaml)

Use  [Cross-stack reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html) to export resource from one stack to another. This way you can use a layered services and don't include all the resources in one template file

Install cfn-toml `gem install cfn-toml`

CFN cluster created in CLoudFormation
![cfnCluster](assets/cfnCluster.png)

### Service Layer

Create a Service template similar to the networking and cluster stack

Delete the existing executing role in the IAM console since it cannot have duplicate names.

After creating the Service Stack in cloudformation ECS backend task is failing because RDS is in different VPC and subnets. Need to first create a RDS service associated to the Same VPC as the new backend Service Stack.

### RDS Layer stack

Create RDS Service template.

Make sure to change the parameters in the Parameter Store to the new DB instance.

![cfnRDS](assets/cfnRDS.png)

After creating the new RDS instance. We need change in the parameter store the Connection URL of the new RDS database that the backend service needs to connect.

BackEnd Service Stack is created successfully.
![CfnBackend](assets/cfnBackend.png)

### DDB 

Install SAM Template and add it to gitpod.yml

SAM build

SAM package

SAM deploy

DDB stack Created

![ddb-stack](assets/ddb-stack.png)


### CICD

Create a nested folder with codebuild.yaml 

CFN CICD stack created
![cfnCICD](assets/cfnCICD.png)

Need to update the pending connection in the CodePipeline settings

### CFN FrontEnd

Create Naked domain and www domain. The www domain will point to the naked domain. We are going to use CloudFront to static hosting.

Create cong.toml and template.yaml for the Frontend

CFN for the FrontEnd created:
![cfnFrontend](assets/cfnFrontend.png)



