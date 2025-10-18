# Backend Stage 0 - Profile API

A simple REST API that returns my profile and a random cat fact.

## About Me
- **Name:** Your Full Name
- **Email:** your.email@example.com
- **Stack:** Node.js + Express

## What This Does
- Returns my profile information
- Fetches a random cat fact from an external API
- Updates timestamp on every request

## How to Run Locally

### Prerequisites
- Node.js installed (v14 or higher)

### Steps
1. Clone this repo
```bash
git clone <your-repo-url>
cd backend-stage0
```

2. Install dependencies
```bash
npm install
```

3. Run the server
```bash
npm start
```

4. Visit: `https://backend-stage0-production-6369.up.railway.app/me`

## API Endpoints

### GET /me
Returns profile with cat fact

**Response Example:**
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T15:30:45.123Z",
  "fact": "Cats sleep 16-20 hours a day."
}
```

## Technologies Used
- Node.js
- Express.js
- Axios
- CORS

## Author
Your Name