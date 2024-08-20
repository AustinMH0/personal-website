import boto3
import json

# Define the DynamoDB table that Lambda will connect to
table_name = "site-count"

# Create the DynamoDB resource
dynamo = boto3.resource('dynamodb').Table(table_name)


def lambda_handler(event, context):
    
    response = dynamo.update_item(
        TableName='site-count',
        Key = {
            'stat': {'S': 'view-count'}
        },
        UpdateExpression = 'ADD Quantity :inc',
        ExpressionAttributeValues = {":inc" : {"N": "1"}},
        ReturnValues = 'UPDATED_NEW'
        )
        
    value = response['Attributes']['Quantity']['N']
    
    
    return {      
            'statusCode': 200,
            'body': value}
    
