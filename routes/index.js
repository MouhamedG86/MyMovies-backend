var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg2NjU5NDE4ODJjM2U0ZjczNmEwYzI2ODgzNzk4YSIsInN1YiI6IjY1YzM0NzdiYjc2Y2JiMDE4NDBmZjg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wr9O8oOZMzYmqLEcQRAue4zmIlwlNFUoj9Znq5GwdIQ`
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => res.json({ movies: json.results }))
        .catch(err => console.error('error:'+err));
})

module.exports = router;
