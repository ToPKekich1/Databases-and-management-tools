const Passport = require('../../models/passportModel/passportModel');

class Passports {
    static async passportList(req, res) {
        try {
            let passports = await Passport.getPassports();
            res.status(200).json(passports);
        } catch (e) {
            res.status(500).json({ err: 'Server error' });
        }
    }

    static async addPassport(req, res) {
        const passport = new Passport(
            req.body.name,
            req.body.surname,
            req.body.number
        );

        if (await passport.addPassport()) {
            res.status(201).json({ message: 'Passport was added' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async editPassport(req, res) {
        const { id } = req.params;
        const passport = new Passport(
            req.body.name,
            req.body.surname,
            req.body.number
        );

        if (await passport.editPassport(id)) {
            res.status(201).json({ message: 'Data was updated' });
        } else {
            res.status(403).json({ err: 'Already exist' });
        }
    }

    static async deletePassport(req, res) {
        const { id } = req.params;
        if (await Passport.deletePassport(id)) {
            res.status(201).json({ message: 'Passport was deleted' });
        } else {
            res.status(403).json({ err: 'Error' });
        }
    }

    static async findPassports(req, res) {
        try {
            const { name, surname, number } = req.body;
            const passports = await Passport.findPassports(
                name,
                surname,
                number
            );
            res.status(200).json(passports);
        } catch (error) {
            res.status(500).json({ err: 'Server error' });
        }
    }
}

module.exports = Passports;
