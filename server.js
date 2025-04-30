const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

const data = {
  title: "My Sample Page",
  description: "This is loaded from the backend.",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...", // base64 placeholder
  link: "https://example.com"
  // Add other fields your frontend uses
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});