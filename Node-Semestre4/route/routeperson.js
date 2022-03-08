const personCtrl = require('../controllers/person_ctrl');
const group = require('../controllers/group_ctrl');

module.exports = [
	
	{
		url: '/person',
		method: 'get',
		func: personCtrl.get_all
	},

	{
		url: '/person',
		method: 'post',
		func: personCtrl.create
	},

	{
		url: '/person/:person_id',
		method: 'get',
		func: personCtrl.get_by_id
	},

	{
		url: '/person/:person_id',
		method: 'put',
		func: personCtrl.update_by_id
	},

	{
		url: '/person/:person_id',
		method: 'delete',
		func: personCtrl.delete_by_id
	},

	//Ce tp 
	{
		url: '/person/:person_id/group',
		method: 'get',
		func: [personCtrl.load_by_id, personCtrl.get_user_groups],
	},

	{
		url: '/person/:person_id/group/:group_id',
		method: 'post',
		func: [personCtrl.load_by_id, group.load_group_id, personCtrl.add_groupto_user],
	},

	{
		url: '/person/:person_id/group/:group_id',
		method: 'delete',
		func: [personCtrl.load_by_id,  group.load_group_id, personCtrl.remove_groupto_user],
	}, 

];
