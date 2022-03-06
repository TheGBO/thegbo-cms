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
		const postcreated = await pool.query('INSERT INTO posts(title, content, thumbnail) VALUES ($1,$2,$3) RETURNING *', [
			req.body.title,
			req.body.content,
			req.body.thumbnail
		]);
		res.json(suc(true,postcreated.rows[0],"Post Created"));
	} catch (error) {
		res.json(suc(false,{},"Internal Server Error"));
	}
});

router.get('/post', async (req, res) => {
	try {
		const postsRetreived = await pool.query('SELECT id, title, thumbnail, date FROM posts');
		res.json(suc(true,postsRetreived.rows,"Posts Retreived"));
	} catch (error) {
		console.log(error.message);
		res.json(suc(false,{},"Internal Server Error"));
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const postsRetreived = await pool.query('SELECT * FROM posts WHERE id = $1', [req.params.id]);
		res.json(suc(true,postsRetreived.rows[0],"Single Post Retreived"));
	} catch (error) {
		console.log(error.message);
		res.json(suc(false,{},"Internal Server Error"));
	}
});

router.delete('/post/:id', auth, async (req, res) => {
	try {
		const postsRetreived = await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
		res.json(suc(true,{},"Post Deleted"));
	} catch (error) {
		console.log(error.message);
		res.json(suc(false,{},"Internal Server Error"));
	}
});

router.put('/post/:id', auth, async (req, res) => {
	try {
		const postcreated = await pool.query('UPDATE POSTS SET title=$1, content=$2, thumbnail=$3 WHERE id = $4 RETURNING *', [
			req.body.title,
			req.body.content,
			req.body.thumbnail,
			req.params.id
		]);
		res.json(suc(true,postcreated.rows[0],"Post Updated"));
	} catch (error) {
		res.json(suc(false,{},"Internal Server Error"));
	}
});

module.exports = router;