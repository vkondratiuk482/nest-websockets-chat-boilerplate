<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

# Websockets chat

I decided to get familiar with websockets in [Nest.js](https://github.com/nestjs/nest), realtime chat is the first thing that came to my mind

## Features

- PassportJS/JWT auth
- Rooms
- Kick/Ban user

## Installation

```bash
$ yarn install
```

## Example of .env file
```bash
JWT_ACCESS_SECRET=ACCESS_SECRET
JWT_REFRESH_SECRET=REFRESH_SECRET
JWT_ACCESS_EXPIRE=60m
JWT_REFRESH_EXPIRE=30d
DB_NAME=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASS=pass123
```

## Running the app

```bash
# start docker containers
$ docker-compose up

# development
$ yarn run start
```

