const { Users, MailAddress } = require('../models/indexmodel');

module.exports = {
	
	get_user_mails: (req, res, next) => {
        if(req.query.label){
            return MailAddress.findAll({
                where: {
                    UserId : req.person.id,
                    label: req.query.label
                }
            })
            .then(mail => res.json(mail))
            .catch(next);
        } else {
            return MailAddress.findAll({
        	   where : {UserId : req.person.id}
            })
            .then(mail => res.json(mail))
            .catch(next);
        }
    },

    create_mail: (req, res, next) => {
        return req.person.createMailAddress(req.body)
            .then(mail => res.json(mail))
            .catch(next);
    },

    get_mail_id: (req, res, next) => {
		return MailAddress.findByPk(req.params.mail_address_id)
            .then(mail => {
            	if (!mail) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (mail.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	res.json(mail)
            })
            .catch(next);
    },

    delete_mail_id: (req, res, next) => {
		return MailAddress.findByPk(req.params.mail_address_id)
            .then(mail => {
            	if (!mail) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (mail.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	return mail.destroy();
            })
            .then(() => res.status(200).end())
            .catch(next);
    },

    update_mail_id: (req, res, next) => {
		return MailAddress.findByPk(req.params.mail_address_id)
            .then(mail => {
            	if (!mail) {
                    throw { status: 404, message: 'Requested Mail not found' };
                } else if (mail.UserId != req.person.id){
                	throw { status: 404, message: 'Requested Mail does not belong to this User.' };
                }
            	Object.assign(mail, req.body);
                return mail.save();
            })
            .then(mail => res.json(mail))
            .catch(next);
    },

};