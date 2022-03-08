const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class Util extends Sequelize.Model {
		static associate(db) {
			Util.hasMany(db.Users);
			Util.hasMany(db.Group);
		};
	}
	
	Util.init({
		username: {
			type: Sequelize.STRING,
       	 	allowNull: false,
       	 	unique: true,
       	 	validate: {
       	 		notEmpty: true
       	 	}
		},
		password: {
			type: Sequelize.STRING,
       	 	allowNull: false,
       	 	validate: {
       	 		notEmpty: true
       	 	}
		}
	}, {
		sequelize,
		modelName: 'Util'
	});
	
	return Util;

};
