# JSON Server Setup

## Install JSON Server
  npm install -g json-server

## Start Mock Server
  npx json-server --watch db.json --port 3001

## Available Endpoints
  GET    http://localhost:3001/employees
  GET    http://localhost:3001/employees/:id
  POST   http://localhost:3001/employees
  PUT    http://localhost:3001/employees/:id
  DELETE http://localhost:3001/employees/:id

## Example Requests

GET all:
  fetch('http://localhost:3001/employees').then(r => r.json()).then(console.log)

POST:
  fetch('http://localhost:3001/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test', department: 'IT', salary: 40000 })
  }).then(r => r.json()).then(console.log)

DELETE:
  fetch('http://localhost:3001/employees/1', { method: 'DELETE' })