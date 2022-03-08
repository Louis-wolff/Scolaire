const { Sequelize } = require('sequelize');

module.exports = sequelize => {

	class Group extends Sequelize.Model {
		static associate(db) {
			Group.belongsToMany(db.Users,{through : 'UserGroup'});
			Group.belongsTo(db.Util);
		};
	}
	
	Group.init({
		title: {
			type: Sequelize.STRING,
       	 	defaultValue: ""
		}
	}, {
		sequelize,
		modelName: 'Group'
	});
	
	return Group;

};
