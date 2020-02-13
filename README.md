# mongoose-schema-add-issue

# issue

Plugin created to add `_id` to schema
Subdocument `_id` will always be generated if the plugin is added at global but the same does not happen if added at schema level

# To run

1. Configure mongo database connection in `config/default.json` - mongodb property
2. Run `npm ci` to install dependencies

## Global Plugin

1. Enable global plugin by going to `mongoose.ts` Line 8 and uncomment
2. Run `npm run dev`
3. Use postman to create a entry to http://localhost:3030/category

```js
{
	"text": "hi",
	"details": [
		{
			"name": "a",
			"info": "b"
		}
	]
}
```

4. Result will be

```js
{
    "text": "hi",
    "details": [
        {
            "name": "a",
            "info": "b",
            "_id": "mcxz96" // extra _id in subdoc
        }
    ],
    "_id": "fr8ror",
    "createdAt": "2020-02-13T15:01:44.957Z",
    "updatedAt": "2020-02-13T15:01:44.957Z",
    "__v": 0
}
```

## Schema Plugin

1. Enable schema plugin by going to `category.model.ts` Line 33 and uncomment
2. Remember to comment `mongoose.ts` Line 8
3. Run `npm run dev`
4. Use postman to create a entry to http://localhost:3030/category

```js
{
	"text": "hi",
	"details": [
		{
			"name": "a",
			"info": "b"
		}
	]
}
```

4. Result will be

```js
{
    "text": "hi",
    "details": [
        {
            "name": "a",
            "info": "b"
        }
    ],
    "_id": "uh2lk",
    "createdAt": "2020-02-13T15:03:22.174Z",
    "updatedAt": "2020-02-13T15:03:22.174Z",
    "__v": 0
}
```