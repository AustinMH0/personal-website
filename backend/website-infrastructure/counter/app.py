import json
import boto3

dynamodb = boto3.resource('dynamodb')
ddbTableName = 'site-count'
table = dynamodb.Table(ddbTableName)

def lambda_handler(event, context):

    response = table.get_item(Key= {'id' : 'count'} )
    count = response['Item']['visitor_count']

    new_count = str(int(count)+1)
    response = table.update_item(
        Key={'id': 'count'},
        UpdateExpression='set visitor_count = :c',
        ExpressionAttributeValues={':c': new_count},
        ReturnValues='UPDATED_NEW'
        )

    return {
        'statusCode': 200,
        'headers': {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",  
                "Access-Control-Allow-Methods": "GET" 
            },
        'body': json.dumps({
                'Count': str(new_count)}),
        }