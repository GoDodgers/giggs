const Sequelize = require('sequelize');
const connection = require('../db/connection');
const Job = require('../job/jobModel');

const Categories = connection.define('Categories', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true,
	},

	job_id: {
		type: Sequelize.INTEGER,
		references: {
			// This is the reference to another model
			model: Job,
			// This is the column name of the referenced model
			key: 'id',
		},
	},

}, {
	freezeTableName: true,
});

/*Categories.sync({ force: true }).then(function() {
	console.log('Categories table created');
});*/

module.exports = Categories;
