import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-west-1')

table = dynamodb.create_table(
    TableName='austinhendricks_site_count',
    KeySchema=[
        {
            'AttributeName': 'Site',
            'KeyType': 'HASH'  #Partition key
        },
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'Site',
            'AttributeType': 'N'  #Partition key
        },
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 1,
        'WriteCapacityUnits': 1
    }
)

print("Table status:", table.table_status)