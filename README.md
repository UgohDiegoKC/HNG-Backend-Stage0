
# Public API for Basic Information


## Description

This is a simple Node.js API that provides basic information in JSON format, including:

* Registered email address
* Current datetime in ISO 8601 format
* GitHub URL of the project

## Technology Stack

* **Programming Language:** JavaScript (Node.js)
* **Framework:** Express.js
* **Deployment:** Hosted on a publicly accessible endpoint
* **CORS Handling:** Enabled via the `<span>cors</span>` package

## API Documentation

### Endpoint

**GET /**

### Response Format (200 OK)

```
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Setup Instructions

### Prerequisites

* Node.js installed

### Installation

```
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
```

### Running Locally

```
npm start
```

### Deploying to Vercel

1. Push code to GitHub
2. Connect repository to Vercel.com
3. Deploy with an Express.js environment

## Related Links

* [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
