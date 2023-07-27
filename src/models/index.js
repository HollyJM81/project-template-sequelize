const Sequelize = require("sequelize");
const BookModel = require("./books.js");

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
	const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
		host: PGHOST,
		port: PGPORT,
		dialect: "postgres",
		logging: false,
	});
	const Book = BookModel(connection, Sequelize);
	connection.sync({ alter: true });
	return { Book };
};

module.exports = setupDatabase();
