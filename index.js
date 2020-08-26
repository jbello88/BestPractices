const userRoute = require("./routes/user.route");
const pageRoute = require("./routes/page.route");
const express = require("express");
const app = express();
require("dotenv").config();
const connectWithDb = require("./db/connectWithDb");
const cors = require("cors");

(async () => {
  if (!process.env.SECRET) {
    console.error("FATAL ERROR: myprivatekey is not defined.");
    process.exit(1);
  }

  await connectWithDb();

  app.use(express.json());
  app.use(cors());

  app.use("/api/users", userRoute);
  app.use("/api/pages", pageRoute);

  app.use((err, req, res, next) => {
    console.error(new Date(), err.message);
    res.send(
      `Sorry! there was a problem with your last action: ${err.message}`
    );
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Listening on port ${port}...`));
})();
