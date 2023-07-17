# to delete index named pages

```
DELETE /products
```

# to create index named products with no of shards and replicas

```
PUT /products
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
  }
}

GET /products
```

# to add new documents in product index

```
POST /products/_doc
{
  "name": "coffe maker",
  "price": 50,
  "in_stock": 3,
  "type": "electronic"
}
```

# to add new documents in product index

```
POST /products/_doc
{
  "name": "zerox machine",
  "price": 100,
  "in_stock": 3,
  "type": "IT Hardware"
}
```

# to add new documents in product index

```
POST /products/_doc
{
  "name": "tea machine",
  "price": 40,
  "in_stock": 2,
  "type": "electronic"
}
```

# to add new documents in product index

```
POST /products/_doc
{
  "name": "Chocolate",
  "price": 5,
  "in_stock": 45,
  "type": "food"
}
```

# to add new documents in product index

```
POST /products/_doc
{
  "name": "Monitor",
  "price": 399,
  "in_stock": 7,
  "type": "IT Hardware"
}
```

# to update the existing document by adding new field value

```
POST /products/_update/<document_id>
{
  "script": {
    "source": "ctx._source.new_field = 'new_value'"
  }
}
```

# to update the existing document by adding new field value (multiple docs in single api)

```
POST /products/_bulk
{ "index": { "_id": "0780YokB8HfOILzqSoJT" } }
{ "script": { "source": "ctx._source.type = 'food'" } }
{ "index": { "_id": "1L80YokB8HfOILzqpoJe" } }
{ "script": { "source": "ctx._source.type = 'IT hardware'" } }
{ "index": { "_id": "VjKkX4kBIi4YHPCgbLEm" } }
{ "script": { "source": "ctx._source.type = 'electronic'" } }
{ "index": { "_id": "VzKkX4kBIi4YHPCgtLGs" } }
{ "script": { "source": "ctx._source.type = 'electronic'" } }
{ "index": { "_id": "WDKpX4kBIi4YHPCgr7FK" } }
{ "script": { "source": "ctx._source.type = 'IT hardware" } }
```

# to fetch all documents in product index

```
GET /products/_search
```

# to fetch only documents which name starts with tea

```
GET /products/_search
{
  "query": {
    "prefix": {
      "type": "ele"
    }
  }
}
```

# to fetch only documents which price in range 40 to 60

```
GET /products/_search
{
  "query": {
    "range": {
      "price": {
        "gte": 30,
        "lte": 60
      }
    }
  }
}
```
