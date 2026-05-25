# NodeJS REST API Boilerplate (Sequelize)

This repository is based on [aslamdoctor/nodejs-rest-api-boilerplate-sequelize](https://github.com/aslamdoctor/nodejs-rest-api-boilerplate-sequelize), updated for **Node.js 20**.

## Requirements

- Node.js **20.x**
- npm **10+**
- MySQL 5.7+ (or compatible)

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your environment file:

   ```bash
   cp .env.sample .env
   ```

3. Update `.env` with your database, JWT, and mail settings.

4. Start the API:

   ```bash
   npm run dev
   ```

   For production mode:

   ```bash
   npm run start
   ```

## Database Migration Notes

To auto-create tables via Sequelize:

1. Set `MIGRATE_DB=TRUE` in `.env`.
2. Start the app once.
3. Set `MIGRATE_DB=FALSE` again after migrations complete.

## Project Structure

- `API/` - sample REST Client request files (`*.rest`)
- `DB/` - sample SQL dump
- `models/` - Sequelize models
- `controllers/` - request handlers
- `routes/` - route definitions
- `middlewares/` - auth/error/validation middlewares
- `app.js` - entry point

## Features

- Sequelize + MySQL setup
- Todo CRUD APIs
- JWT auth flows (signup/login/password reset)
- Email utilities (Mailtrap-friendly defaults)
- File upload example
- Yup input validation
- CORS + Helmet security middleware

## API Testing

Use either:

- VS Code + [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) with files in `API/`
- Postman / any HTTP client

Base URL: `http://localhost:3333`
