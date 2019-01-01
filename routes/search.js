const express = require('express');
const router = express.Router();
const Searched = require('../models/Searched');
const auth = require('../helpers/auth');

router.post('/', auth.verifyToken, (req, res) => {
    Searched.create(req.body)
        .then(post => {
            res.status(201).json({post})
        })
        .catch(err => {
            res.status(500).json({err, msg: 'No se pudo crear'})
        })
});

module.exports = router;