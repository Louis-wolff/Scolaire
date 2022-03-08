const personCtrl = require('../controllers/person_ctrl');
const maily = require('../controllers/mail_address_ctrl');

module.exports = [
	
	{
		url: '/person/:person_id/mailAddress',
		method: 'get',
		func: [personCtrl.load_by_id, maily.get_user_mails],
	},

	{
		url: '/person/:person_id/mailAddress',
		method: 'post',
		func: [personCtrl.load_by_id, maily.create_mail],
	},

	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'get',
		func: [personCtrl.load_by_id, maily.get_mail_id],
	},

	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'put',
		func: [personCtrl.load_by_id, maily.update_mail_id],
	},

	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'delete',
		func: [personCtrl.load_by_id, maily.delete_mail_id],
	},

];
