const { Users, PostalAddress } = require('../models/indexmodel');

module.exports = {
	
	get_user_postals: (req, res, next) => {
        if(req.query.label){
            return PostalAddress.findAll({
                where: {
                    UserId : req.person.id,
                    label: req.query.label
                }
            })
            .then(postal => res.json(postal))
            .catch(next);
        } else {
            return PostalAddress.findAll({
        	   where : {UserId : req.person.id}
            })
            .then(postal => res.json(postal))
            .catch(next);
        }
    },

    create_postal: (req, res, next) => {
        return req.person.createPostalAddress(req.body)
            .then(postal => res.json(postal))
            .catch(next);
    },

    get_postal_id: (req, res, next) => {
		return PostalAddress.findByPk(req.params.postal_address_id)
            .then(postal => {
            	if (!postal) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (postal.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	res.json(postal)
            })
            .catch(next);
    },

    delete_postal_id: (req, res, next) => {
		return PostalAddress.findByPk(req.params.postal_address_id)
            .then(postal => {
            	if (!postal) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (postal.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	return postal.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },

    update_postal_id: (req, res, next) => {
		return PostalAddress.findByPk(req.params.postal_address_id)
            .then(postal => {
            	if (!postal) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (postal.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	Object.assign(postal, req.body);
                return postal.save();
            })
            .then(postal => res.json(postal))
            .catch(next);
    },

};