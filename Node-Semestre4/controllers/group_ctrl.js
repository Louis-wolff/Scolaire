const { Users, Group } = require('../models/indexmodel');

module.exports = {
	
    get_group: (req, res, next) => {
        return Group.findAll({
            order: ['title']
        })
            .then(group => res.json(group))
            .catch(next);
    },

    get_group_id: (req, res, next) => {
        return Group.findByPk(req.params.group_id)
            .then(group => {
                if (!group) {
                    throw { status: 404, message: 'Requested Group not found' };
                }
                return res.json(group);
            })
            .catch(next);
    },

    create_group: (req, res, next) => {
        return Group.create(req.body)
            .then(group => res.json(group))
            .catch(next);
    },

    update_group_id: (req, res, next) => {
        return Group.findByPk(req.params.group_id)
            .then(group => {
                if (!group) {
                    throw { status: 404, message: 'Requested Group not found' };
                }
                Object.assign(group, req.body);
                return group.save();
            })
            .then(group => res.json(group))
            .catch(next);
    },

    delete_group_id: (req, res, next) => {
        return Group.findByPk(req.params.group_id)
            .then(group => {
                if (!group) {
                    throw { status: 404, message: 'Requested Group not found' };
                }
                return group.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },

    //Partie 2

    load_group_id: (req, res, next) => {
        return Group.findByPk(req.params.group_id)
            .then(group => {
                if (!group) {
                    throw { status: 404, message: 'Requested Group not found' };
                }
                req.group = group;
                next();
            })
            .catch(next);
    },

    get_group_users:(req, res, next) => {
        return req.group.getUsers()
            .then(users => res.json(users))
            .catch(next);
    },

    add_userto_group:(req, res, next) => {
        return req.group.addUser(req.person)
            .then(() => res.status(200).end())
            .catch(next);
    },

    remove_userto_group:(req, res, next) => {
        return req.group.removeUser(req.person)
            .then(() => res.status(200).end())
            .catch(next);
    },


};