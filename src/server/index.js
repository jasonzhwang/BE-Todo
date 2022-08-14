const app = require('./app');
const connectToDB = require('./utils/db');

// const PORT = process.env.PORT || 3000;
const PORT = 3001;


connectToDB();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});