const Sequelize = require("sequelize");

// *** CHANGE ***
// const >>my_model<< = require("./>>my_model<<.js");

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
	const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
		host: PGHOST,
		port: PGPORT,
		dialect: "postgres",
		logging: false,
	});
	// const >>Item<< = >>my_model<<(connection, Sequelize);
	connection.sync({ alter: true });
	// return { >>Item<< };
};

module.exports = setupDatabase();
