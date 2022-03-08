const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class Users extends Sequelize.Model {
		static associate(db) {
			Users.hasMany(db.MailAddress);
			Users.hasMany(db.PostalAddress);
			Users.hasMany(db.Phone);
			Users.belongsToMany(db.Group,{through : 'UserGroup'});
			Users.belongsTo(db.Util);
		};
	}
	
	Users.init({
		firstname: {
			type: Sequelize.STRING,
       	 	defaultValue: ""
		},
		lastname: {
			type: Sequelize.STRING,
       		defaultValue: ""
		}
	}, {
		sequelize,
		modelName: 'Users'
	});
	
	return Users;

};
