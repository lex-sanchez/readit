const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/reddit', async (req, res, next) => {
    const { subreddit } = req.query;
    const url = "https://reddit.com";

    try {
        const response = await axios.get(`https://www.reddit.com/r/all.json`);
        res.json(response.data.data.children);
    } catch (e) {
        console.error(e);
    }

});

module.exports = router;