import { router } from "./router/index";
let express = require('express');
const cors = require('cors');
import dotenv  from "dotenv";
//let bodyParser = require('body-parser');

const app = express();
dotenv.config();

//app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
// mount the API router to application
app.use('/api', router);

// route
app.get("/", (req, res) => {
  res.json({ message: "It's working" });
});


const PORT = process.env.PORT || 5000;

// starts http server on configured port and hostname
app.listen(PORT, () => console.log(`listening on ${PORT}`));
