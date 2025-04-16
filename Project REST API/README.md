# Target Account Matching API

A RESTful API service that allows frontend clients to authenticate, fetch a list of companies with match scores, and update the target status of specific companies.

## 🚀 Features

- User login via username and password
- Retrieve a list of company accounts with match scores
- Update the target status of individual companies
- JSON-based input/output
- Bearer token authentication

## 📌 Endpoints

### `POST /login`
Authenticate a user and receive a bearer token.

**Request Body:**
```json
{
  "username": "user1",
  "password": "pass123"
}
