const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// constants
const port = 7000;
let initialPosts = [
  {
    id: 0,
    post: 'Hello, this is first post!',
  },
];

function deletePost(id) {
  initialPosts = initialPosts.filter(el => el.id !== id);
}

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
  res.send(initialPosts);
});

app.post('/posts', (req, res) => {
  initialPosts.unshift({
    id: initialPosts.length,
    post: req.body.data
  });
  res.send('ok');
});

app.delete('/posts/:id', (req, res) => {
  deletePost(+req.params.id);
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
