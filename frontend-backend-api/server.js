const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

const mongoose = require('mongoose');

app.use(cors());

const data = {
  professionalName: "Jane Doe",
  professionalImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...", // example base64 image
  nameLink: "https://janedoe.dev",
  primaryDescription: " | Full Stack Developer",
  workDescription1: "Jane specializes in creating scalable web applications using JavaScript, Node.js, and React.",
  workDescription2: "She also has experience with databases, APIs, and cloud deployment.",
  linkTitleText: "Connect with me:",
  linkedInLink: "https://www.linkedin.com/in/janedoe/",
  githubLink: "https://github.com/janedoe",
  contactText: "You can reach me via LinkedIn or check out my GitHub for projects."
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//MongoDB
mongoose.connect('mongodb://localhost:8080/frontendData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const DataSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String
});

const DataModel = mongoose.model('Data', DataSchema);

app.get('/data', async (req, res) => {
  const record = await DataModel.findOne();
  res.json(record);
});