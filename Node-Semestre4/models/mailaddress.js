const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class MailAddress extends Sequelize.Model {
		static associate(db) {
			MailAddress.belongsTo(db.Users);
		};
	}
	
	MailAddress.init({
		address: {
			type: Sequelize.STRING,
			allowNull: false,
			validate:{
				isEmail: true
			}
		},
		label: {
			type: Sequelize.ENUM,
			values : ['home','work'],
			allowNull: true
		}
	}, {
		sequelize,
		modelName: 'MailAddress'
	});
	
	return MailAddress;

};
