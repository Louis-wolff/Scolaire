const { Users, Phone } = require('../models/indexmodel');

module.exports = {
	
	get_user_phones: (req, res, next) => {
        if(req.query.label){
            return Phone.findAll({
                where: {
                    UserId : req.person.id,
                    label: req.query.label
                }
            })
            .then(phone => res.json(phone))
            .catch(next);
        } else {
            return Phone.findAll({
        	   where : {UserId : req.person.id}
            })
            .then(phone => res.json(phone))
            .catch(next);
        }
    },

    create_phone: (req, res, next) => {
        return req.person.createPhone(req.body)
            .then(phone => res.json(phone))
            .catch(next);
    },

    get_phone_id: (req, res, next) => {
		return Phone.findByPk(req.params.phone_address_id)
            .then(phone => {
            	if (!phone) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (phone.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	res.json(phone)
            })
            .catch(next);
    },

    delete_phone_id: (req, res, next) => {
		return Phone.findByPk(req.params.phone_address_id)
            .then(phone => {
            	if (!phone) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (phone.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	return phone.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },

    update_phone_id: (req, res, next) => {
		return Phone.findByPk(req.params.phone_address_id)
            .then(phone => {
            	if (!phone) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (phone.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	Object.assign(phone, req.body);
                return phone.save();
            })
            .then(phone => res.json(phone))
            .catch(next);
    },

};