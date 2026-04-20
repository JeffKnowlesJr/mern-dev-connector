# MERN Dev Connector

## Overview

MERN Dev Connector is a social network for developers: profiles, posts, and authentication, built with the MERN stack (MongoDB, Express, React, Node).

This project was built **alongside the original MERN stack course by [Brad Traversy](https://github.com/bradtraversy)** ([Traversy Media](https://www.traversymedia.com/)). The structure and features follow that curriculum; any extensions or deployment changes here are layered on top of that foundation.

## Features

- User registration and JWT authentication
- Developer profiles (skills, experience, education, social links)
- Forum-style posts, comments, and likes

## Tech Stack

- **Frontend:** React, Redux, React Router
- **Backend:** Node.js, Express
- **Data:** MongoDB, Mongoose

## Installation and setup

1. Clone the repository and install root dependencies: `npm install`
2. Install client dependencies: `npm install --prefix client`
3. Create a `.env` file in the project root (see below) and restart the server after any change.

### Environment variables

| Variable       | Description |
|----------------|-------------|
| `mongoURI`     | MongoDB connection string (e.g. Atlas SRV URI). |
| `mongoDBName`  | Optional. Logical database name in Atlas (e.g. `production`) when the URI has no database path. |
| `jwtSecret`    | Secret used to sign JSON Web Tokens. |
| `githubClientId` / `githubSecret` | Optional, for GitHub repo integration on profiles. |

4. Run API and client together: `npm run dev`  
   - API: `http://localhost:5000`  
   - Client: `http://localhost:3000` (proxies `/api` to the server)

On **Node.js 17+**, the client uses `cross-env` and `NODE_OPTIONS=--openssl-legacy-provider` so Create React App 4 / Webpack 4 can run; upgrading React Scripts is another path if you prefer not to use the legacy OpenSSL provider.

## Usage

Register an account, create a profile, browse **Developers**, and create or comment on posts. Protected routes require a logged-in user.

## Contributing

Issues and pull requests are welcome. For larger changes, open an issue first so direction can be agreed on.

## License

MIT (see `package.json`).

## Acknowledgments

- **[Brad Traversy](https://github.com/bradtraversy)** — original MERN stack course and DevConnector-style project this repo was built with.

## Links

- Repository: [github.com/JeffKnowlesJr/mern-dev-connector](https://github.com/JeffKnowlesJr/mern-dev-connector)
- Issues: [github.com/JeffKnowlesJr/mern-dev-connector/issues](https://github.com/JeffKnowlesJr/mern-dev-connector/issues)
