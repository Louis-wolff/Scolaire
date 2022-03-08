const { Users, Util, Group } = require('../models/indexmodel');
bcrypt = require('bcrypt');
jsonwebtoken = require('jsonwebtoken');

module.exports = {
	
    get_all: (req, res, next) => {
        return Util.findAll({
                order: ['username']
        })
            .then(util => res.json(util))
            .catch(next);
    },

    get_util_id: (req, res, next) => {
        return Util.findByPk(req.params.user_id)
            .then(util => {
                if (!util) {
                    throw { status: 404, message: 'Requested Util not found' };
                }
                return res.json(util);
            })
            .catch(next);
    },

    
    logging: (req, res, next) => {
        return Util.findOne(req.query.username)
            .then(util => {
                if (!util) {
                    throw { status: 404, message: 'Requested Util not found' };
                }
                req.util = util;
                next();
            })
            .catch(next);
    }, 

    create: (req, res, next) => {
        let hash = bcrypt.hashSync(req.body.password);

        return Util.create(req.body.username, hash)
            .then(util => res.json(util))
            .catch(next);
    },

    passwording: (req, res, next) => {
        let unhash = bcrypt.compareSync(req.util.password, req.query.password);

        if(!unhash){
            throw { status: 404, message: 'Bad password.' };
        }
            
        return Util.findOne(req.body)
            .then(util => res.json(util))
            .catch(next);
    },

    /*
    delete_util_id: (req, res, next) => {
        return Util.findByPk(req.params.util_id)
            .then(util => {
                if (!util) {
                    throw { status: 404, message: 'Requested Util not found' };
                }
                return util.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },
    */

    //Ce TP
    /*
    get_user_groups:(req, res, next) => {
        return req.util.getGroups()
            .then(groups => res.json(groups))
            .catch(next);
    },

    add_groupto_user:(req, res, next) => {
        return req.util.addGroup(req.group)
            .then(() => res.status(200).end())
            .catch(next);
    },

    remove_groupto_user:(req, res, next) => {
        return req.util.removeGroup(req.group)
            .then(() => res.status(200).end())
            .catch(next);
    }, */
};