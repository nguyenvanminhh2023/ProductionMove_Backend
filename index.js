const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/index");
const cookieParser = require('cookie-parser');

app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
));

app.use(morgan('combined'));
app.set('trust proxy', true);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

const PORT = 5001;
app.listen(PORT, () => {
    console.log("server listen on port " + PORT);
});