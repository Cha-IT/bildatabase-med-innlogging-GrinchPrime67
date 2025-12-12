const express = require('express');
const session = require('express-session');

const kreverinnlogging = (req, res, next) => {

    if (!req.session || !req.session.bruker) {
        return res.status(401).json({ message: 'Du må være logget inn for å komme inn bror.' });
    }
    next();
}


module.exports = { kreverinnlogging };