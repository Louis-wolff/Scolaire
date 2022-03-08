const personCtrl = require('../controllers/person_ctrl');
const groupy = require('../controllers/group_ctrl');

module.exports = [
    
    {
        url: '/group',
        method: 'get',
        func: [groupy.get_group],
    },

    {
        url: '/group',
        method: 'post',
        func: [groupy.create_group],
    },

    {
        url: '/group/:group_id',
        method: 'get',
        func: [groupy.get_group_id],
    },

    {
        url: '/group/:group_id',
        method: 'put',
        func: [groupy.update_group_id],
    },

    {
        url: '/group/:group_id',
        method: 'delete',
        func: [groupy.delete_group_id],
    },

    //Ce tp 
    {
        url: '/group/:group_id/person',
        method: 'get',
        func: [groupy.load_group_id, groupy.get_group_users],
    },

    {
        url: '/group/:group_id/person/:person_id',
        method: 'post',
        func: [ groupy.load_group_id, personCtrl.load_by_id, groupy.add_userto_group],
    },

    {
        url: '/group/:group_id/person/:person_id',
        method: 'delete',
        func: [groupy.load_group_id, personCtrl.load_by_id, groupy.remove_userto_group],
    }, 

];
