module.exports = (sequelize, DataTypes) => {
	const schema = {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		genre: DataTypes.STRING,
		isbn: DataTypes.STRING,
	};
	// *** CHANGE ***
	// return sequelize.define("item string. eg book", schema);
};
