const personCtrl = require('../controllers/person_ctrl');
const phony = require('../controllers/phone_ctrl');

module.exports = [
    
    {
        url: '/person/:person_id/Phone',
        method: 'get',
        func: [personCtrl.load_by_id, phony.get_user_phones],
    },

    {
        url: '/person/:person_id/Phone',
        method: 'post',
        func: [personCtrl.load_by_id, phony.create_phone],
    },

    {
        url: '/person/:person_id/Phone/:phone_id',
        method: 'get',
        func: [personCtrl.load_by_id, phony.get_phone_id],
    },

    {
        url: '/person/:person_id/Phone/:phone_id',
        method: 'put',
        func: [personCtrl.load_by_id, phony.update_phone_id],
    },

    {
        url: '/person/:person_id/Phone/:phone_id',
        method: 'delete',
        func: [personCtrl.load_by_id, phony.delete_phone_id],
    },

];
