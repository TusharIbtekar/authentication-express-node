<p>Express Authentication</p>

## Built with
- **Framework**: [Expressjs](https://expressjs.com/)
- **Password Manager**: [Bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Validator**: [express validator](https://express-validator.github.io/docs/)
- **JWT**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- **API UI**: [swagger](https://github.com/scottie1984/swagger-ui-express)

## Running Locally

```sh
git clone git@github.com:TusharIbtekar/authentication-express-node.git
cd authentication-express-node && pnpm install
pnpm dev
```

## Running with docker

```sh
git clone git@github.com:TusharIbtekar/authentication-express-node.git
cd authentication-express-node
docker compose up -d
```

The above commands will start the application on [http://localhost:3000/](http://localhost:3000)

Visit [http://localhost:3000/api](http://localhost:3000/api) to see the api docs.

