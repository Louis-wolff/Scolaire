const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class Phone extends Sequelize.Model {
		static associate(db) {
			Phone.belongsTo(db.Users);
		};
	}
	
	Phone.init({
		phone: {
			type: Sequelize.STRING,
			allowNull: false,
			validate:{
				isInt: true
			}
		},
		label: {
			type: Sequelize.ENUM,
			values : ['home','work'],
			allowNull: true
		}
	}, {
		sequelize,
		modelName: 'Phone'
	});
	
	return Phone;

};
