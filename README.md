# mixpanel-api-jql

## sample

https://mixpanel.com/help/reference/jql/api-reference

```
curl https://mixpanel.com/api/2.0/jql \
    -u YOUR_API_SECRET: \
    --data-urlencode script@my_query.js
```

```
curl https://mixpanel.com/api/2.0/jql \
    -u 3e14d0de13306fe85e2f0c68d4f9c232: \
    --data-urlencode script@my_query.js

#=> [{"key":["User Action"],"value":2}]
```

