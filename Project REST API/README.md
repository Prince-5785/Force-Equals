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
```
## `Response Example:`
```
{
  "message": "Login successful",
  "token": "xyz"
}
```
## `GET /accounts`
Fetch a list of companies with their respective match scores.
Headers:
```
Authorization: Bearer <your_token>
```
## `POST /accounts/:id/status`
Update the target status of a company.
Request Body:
```
{
  "status": "Target"
}
```
Headers:
```
Authorization: Bearer <your_token>
```
## `🛠 Installation`
```
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
```
## `▶️ Usage`
Start the server:
```
node server.js
```
Use Postman or any API client to interact with the endpoints.
Make sure to include the Bearer token in the Authorization header after login.
