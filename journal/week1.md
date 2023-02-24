# Week 1 — App Containerization

## Required Homework

### Document the Notification Endpoint for the OpenAI Document##
Added the following code in the openapi-3.0.yml file
```
/api/activities/notifications:
    get:
      description: 'Return a feed of activity for all  of those that I follow'
      tags:
        - activities
      parameters: []
      responses:
        '200':
          description: Returns an array of activities
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Activity'
```

 ###                  
