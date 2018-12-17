const express = require('express');
const app = express();

app.get('/api/timestamp/:date_string?', (req, res) => {
  let inputDate = req.params.date_string;
  let date = (Number(inputDate)) ? new Date(Number(inputDate)) : new Date(inputDate);
  if(inputDate === undefined) {
    let now = new Date();
    res.status(200).send({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  } else {    
    if (!isNaN(date)) {
      res.status(200).send({
        unix: date.getTime(),
        utc: date.toUTCString()
      });
    } else res.status(500).send({"error" : "Invalid Date"});
  }     
});

app.listen(3000, () => console.log("server on port 3000 working"));