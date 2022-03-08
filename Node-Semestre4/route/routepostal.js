const personCtrl = require('../controllers/person_ctrl');
const postaly = require('../controllers/postal_ctrl');

module.exports = [
    
    {
        url: '/person/:person_id/postalAddress',
        method: 'get',
        func: [personCtrl.load_by_id, postaly.get_user_postals],
    },

    {
        url: '/person/:person_id/postalAddress',
        method: 'post',
        func: [personCtrl.load_by_id, postaly.create_postal],
    },

    {
        url: '/person/:person_id/postalAddress/:postal_address_id',
        method: 'get',
        func: [personCtrl.load_by_id, postaly.get_postal_id],
    },

    {
        url: '/person/:person_id/postalAddress/:postal_address_id',
        method: 'put',
        func: [personCtrl.load_by_id, postaly.update_postal_id],
    },

    {
        url: '/person/:person_id/postalAddress/:postal_address_id',
        method: 'delete',
        func: [personCtrl.load_by_id, postaly.delete_postal_id],
    },

];
