# project-template-sequelize

A template starter-kit for projects utilising Sequelize.

## Installation

navigate to parent folder in CLI

```bash
 git clone https://github.com/HollyJM81/project-template-sequelize.git
```

```bash
mv project-template-sequelize >>new_project_name<<
```

```bash
cd >>new_project_name<<
```

```bash
git init
```

```bash
git remote add origin https://github.com/HollyJM81/INSERT_NEW_PROJECT_NAME_HERE.git
```

```bash
git remote -v
```

```bash
git add .
```

```bash
git commit -m "first commit"
```

```bash
git push origin main
```

```bash
touch .gitignore
```

```bash
touch index.js
```

```bash
touch README.md
```

```bash
npm init
```

```bash
npm install --save sequelize
```

```bash
npm install express
```

```bash
npm install pg
```

```bash
npm install -D dotenv
```

```bash
npm install -D nodemon
```

```bash
npm install -D mocha
```

```bash
npm install -D chai
```

```bash
npm install -D supertest
```

```bash
touch .env
```

```bash
touch .env.test
```

```bash
code .
```

Add node_modules, .env and .env.test to your .gitignore file in VS code

Add a pretest script to your package.json. Set the command to: node
scripts/create-database.js test.

Add a test script to your package.json file: mocha tests/\*_/_.js --exit
--recursive --timeout 60000 --file ./tests/test-setup.js

Add a posttest script, set the command to: node scripts/drop-database.js test.

Add a prestart script to your package.json. Set the command to node
scripts/create-database.js.

Add a start script to your package.json file with the following command: nodemon
-r dotenv/config index.js.

Setup .env and .env.test file with the following variables:

    PGPASSWORD=my_password
    PGDATABASE=project_name
    PGUSER=postgres
    PGHOST=localhost
    PGPORT=5432
    PORT=4000

change PGDATABASE in .env.test to a different name
