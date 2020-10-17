const { Router } = require('express');
const pool = require('../db');
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, surname, number } = req.body;
        const newPassport = await pool.query(
            'INSERT INTO passport(name, surname, number) VALUES ($1, $2, $3) RETURNING *',
            [name, surname, number]
        );

        res.json(newPassport.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//get all passports

router.get('/', async (req, res) => {
    try {
        const allPassports = await pool.query('SELECT * FROM passport');
        res.json(allPassports.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//edit a passport

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, number } = req.body;
        const response = await pool.query(
            'SELECT number FROM passport WHERE number = $1',
            [number]
        );
        if (response.rowCount === 0) {
            await pool.query(
                'UPDATE passport SET name = $1, surname = $2, number = $3 WHERE passport_id = $4',
                [name, surname, number, id]
            );
            res.json('Todo was updated!');
        } else {
            res.status(400);
            res.json('');
        }
    } catch (error) {
        console.error(error.message);
    }
});

//delete a todo

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletePassport = await pool.query(
            'DELETE FROM passport WHERE passport_id = $1',
            [id]
        );

        res.json('Passport was deleted!');
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
