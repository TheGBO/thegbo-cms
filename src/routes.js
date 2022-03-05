const express = require('express');
const router = express.Router();
const pool = require('./utils/db');
const auth = require('./middleware/auth');
const suc = require('./utils/responseutils');

router.get('/', async (req, res) => {
    res.status(200).json({
    	message:'welcome to the API!',
        success:true
    });
});

router.post('/post', auth, async (req, res) => {
	try {
		res.json(suc(true,{},"Post Created"));
	} catch (error) {
		res.json(suc(false,{},"Internal Server Error"));
	}
});

module.exports = router;