const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class PostalAddress extends Sequelize.Model {
		static associate(db) {
			PostalAddress.belongsTo(db.Users);
		};
	}
	
	PostalAddress.init({
		postal: {
			type: Sequelize.STRING,
			allowNull: false
		},
		label: {
			type: Sequelize.ENUM,
			values : ['home','work'],
			allowNull: true
		}
	}, {
		sequelize,
		modelName: 'PostalAddress'
	});
	
	return PostalAddress;

};
