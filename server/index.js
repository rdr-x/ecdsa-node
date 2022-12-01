const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const txRouter = require('./src/routes/index.js');

app.use(cors());
app.use(express.json());
app.use(txRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
