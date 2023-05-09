const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
    <form method="POST" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>

      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required><br><br>

      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>   
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
    const { name, dob, gender } = req.body;
    const data = { name, dob, gender };
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sourin! Server has started`));