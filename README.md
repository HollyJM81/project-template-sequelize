# project-template-sequelize

\***\*REPLACE THIS README WHEN YOU'RE READY\*\*** A template starter-kit for
projects utilising Sequelize.

## Installation

navigate to parent folder in CLI

```bash
 git clone https://github.com/HollyJM81/project-template-sequelize.git >>new_project_name<<
```

create new github repo with >>new_project_name<<

```bash
cd >>new_project_name<<
```

```bash
git init
```

```bash
git remote add origin https://github.com/HollyJM81/>>new_project_name<<.git
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
npm init
```

```bash
npx eslint --init
```

(Answer the questions to configure it for common js that runs in node. You
should end up with a .eslintrc.json file)

```bash
npm install --save sequelize
```

```bash
npm i -S express
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

Add a temporary start script to package.json of " nodemon index.js"

```bash
npm start
```

to test.

Add a get route to / in your app.js. It should return a 200 status code and a
Hello World string. Run your app and send a GET request to localhost:4000 in
postman. If you get a Hello World then you know that your app is working.

---

Setup .env and .env.test file with the following values:

    PGPASSWORD=>>my_password<<
    PGDATABASE=>>project_name<<
    PGUSER=postgres
    PGHOST=localhost
    PGPORT=5432
    PORT=3000

Change PGDATABASE in .env.test to a different name

Make a file called .prettierrc.json, and populate it with:

{ "trailingComma": "es5", "tabWidth": 2, "semi": true, "singleQuote": true }

You can now give the command

```bash
npx prettier --write .
```

to style all files before each commit.

Change function and variable names in src and test files, as directed in
comments

Change scripts (replace [asterix] with \*) to:

...

"scripts": { "prestart": "node scripts/create-database.js", "start": "nodemon -r
dotenv/config index.js", "pretest": "node scripts/create-database.js test",
"test": "mocha tests/[asterix][asterix]/[asterix].js --exit --recursive
--timeout 60000 --file ./tests/test-setup.js", "posttest": "node
scripts/drop-database.js" }

...

```bash
npm test
```

Start writing your tests and code!
