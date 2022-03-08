const utily = require('../controllers/util_ctrl');
//const group = require('../controllers/group_ctrl');

module.exports = [
	
	{
		url: '/util',
		method: 'get',
		func: utily.get_all
	},

	{
		url: '/user/:user_id',
		method: 'get',
		func: utily.create
	},

	{
		url: '/user/signup',
		method: 'post',
		func: utily.get_util_id
	},

	{
		url: '/user/signin',
		method: 'post',
		func: [utily.logging, utily.passwording ],
	},

];
