const { Users, Group } = require('../models/indexmodel');

module.exports = {
	
    get_all: (req, res, next) => {
        if(req.query.lastname){
            return Users.findAll({
                where: {lastname: req.query.lastname}
            })
            .then(people => res.json(people))
            .catch(next);
        } else {
            return Users.findAll({
                order: ['lastname']
            })
            .then(people => res.json(people))
            .catch(next);
        }
    },

    get_by_id: (req, res, next) => {
        return Users.findByPk(req.params.person_id)
            .then(person => {
                if (!person) {
                    throw { status: 404, message: 'Requested Users not found' };
                }
                return res.json(person);
            })
            .catch(next);
    },

    load_by_id: (req, res, next) => {
        return Users.findByPk(req.params.person_id)
            .then(person => {
                if (!person) {
                    throw { status: 404, message: 'Requested Users not found' };
                }
                req.person = person;
                next();
            })
            .catch(next);
    },

    create: (req, res, next) => {
        return Users.create(req.body)
            .then(person => res.json(person))
            .catch(next);
    },

    update_by_id: (req, res, next) => {
        return Users.findByPk(req.params.person_id)
            .then(person => {
                if (!person) {
                    throw { status: 404, message: 'Requested Users not found' };
                }
                Object.assign(person, req.body);
                return person.save();
            })
            .then(person => res.json(person))
            .catch(next);
    },

    delete_by_id: (req, res, next) => {
        return Users.findByPk(req.params.person_id)
            .then(person => {
                if (!person) {
                    throw { status: 404, message: 'Requested Users not found' };
                }
                return person.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },

    //Ce TP

    get_user_groups:(req, res, next) => {
        return req.person.getGroups()
            .then(groups => res.json(groups))
            .catch(next);
    },

    add_groupto_user:(req, res, next) => {
        return req.person.addGroup(req.group)
            .then(() => res.status(200).end())
            .catch(next);
    },

    remove_groupto_user:(req, res, next) => {
        return req.person.removeGroup(req.group)
            .then(() => res.status(200).end())
            .catch(next);
    },
};