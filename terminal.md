// Connecting Git Repo

echo "# mern-dev-connector" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/JeffKnowlesJr/mern-dev-connector.git
git push -u origin main

// Initializing Project

npm init

// Installing Regular Dependencies

npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

// Installing Dev Dependencies

npm i -D nodemon concurrently

// Starting up Dev Server
npm run server
