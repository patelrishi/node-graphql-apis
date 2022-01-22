const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/Graphql",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`database connection succesfull`);
  })
  .catch((e) => {
    console.log(`connection failed`);
  });