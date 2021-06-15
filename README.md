This project is used with nodejs, initiate project with clean code architecture.

## How to run

Project run on the `expressjs`, to run this project just run command below

```bash
$ npm run start
```

but you can change the framework on `./src/app/http` directory, `./src/app/Server.ts`, and in `index.ts` on the root direcory.
The server running on port `:8080` and prefix of endpoint is `/api`, so the full path of url is `http://localhost:8080/api`

## Response Format

Theres two response format, first is success and second one is error response format, so how it look like? you can look at the format below

### Response Success

```json
{
  "status": 200,
  "message": "success message",
  "data": "response data"
}
```

### Response Error

The response status is must be an number of response error status code, it can be 400, 401, 500 etc. the example below using 400 for bad request status code. and the `data` attribute is gone for this format, but theres `errors` attribute for wrapping the error list

```json
{
  "status": 400,
  "message": "success message",
  "errors": "list of errors"
}
```

example for the error response, the `errors` attribute is wrapping the errors message with an array list.

```json
{
  "status": 400,
  "message": "bad request",
  "errors": {
    "email": ["The email field is required."],
    "password": ["The password field is required."]
  }
}
```
