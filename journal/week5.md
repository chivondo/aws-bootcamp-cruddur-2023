# Week 5 — DynamoDB and Serverless Caching

## Required Homework

### Watched Week 5 - Data Modelling (Live Stream)

Dynamo DB is a NoSQL database that is not relational and doesn't use SQL to query data. The concept is to use a single table for all the data. It has a key and a value. And is stored as a nested data structure. There are no joins in DynamoDB, you need to plan for a flat table. NoSQL are fast, inexpensive, and scalable.

We need to figure out:
* What data do I need
* When do I need it
* How quickly can I get

Try to pre-plan consistently by modeling the data in a diagram before creating and dumping data in the table. 

We are using DynamoDB in this project for the message systems.
We have 2 screens the Message Group and the Conversation.
For the Message group, and access pattern is to show all conversations, from who and needs to be sorted in descending order.
On the Conversations, the access pattern is all the conversations.

Is recommended to use structure SQL while modeling your data. That way is easier to see what you're trying to map and also there is a way to do queries in DynamoDB with "Partiql"
Model your NoSQL database on how the application wants to interact with that data.
Single table design reduces complexity and you can access your data with a single query. 
A query requires a partition Key and the Sort Key is optional. In most cases, you will use query instead of a scan.

GSI vs LSI. In this project, we are using GSI.

DDb Data Modeling:
| pk                       | sk (create_at or last_reply_at) | display_name (aka other_user_display_name) | handle (aka other_user_handle) | message (aka last_message) | user_uuid | message_group_uuid |
|------------------------- | ------------------------------- | ------------------------------------------ | ------------------------------ | -------------------------- | --------- | ------------------ |
| MSG#{message_group_uuid} | MSG#{created_at}                | Jose Vera | chivondo | Test 123 | 94324355-423432423-43243-43243 | 23423534-423423-2342423 |
| GRP#{my_user_uuid} | GRP#{last_reply_at} | Rafael | rafael | Cool beans | 2345566-4342342-423423-423423 | 23423534-423423-2342423 |
| GRP#{my_user_uuid} | GRP#{last_reply_at} | Jose Vera | chivondo | Test 123 | 94324355-423432423-43243-43243 | 23423534-423423-2342423 |


**Access Pattern A** Conversation
**Access Pattern B** List of conversation
**Access Pattern C** Create a message
**Access Pattern D** Update a group message from the last message



### Watched Ashish's Week 5 - DynamoDB Considerations

### Implement Schema Load Script

### Implement Seed Script


### Implement Scan Script

### Implement Pattern Scripts for Read and List Conversations


### Implement Update Cognito ID Script for Postgres Database

### Implement (Pattern A) Listing Messages in Message Group into Application

### Implement (Pattern B) Listing Messages Group into Application

### Implement (Pattern C) Creating a Message for an existing Message Group into Application

### Implement (Pattern D) Creating a Message for a new Message Group into Application

### Implement (Pattern E) Updating a Message Group using DynamoDB Streams

![cruddur-table](assets/cruddur-table-messages.png)

