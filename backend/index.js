const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
var loginRouter = require("./routerLogin");
const cors = require('cors');

const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const initializePassport = require('./passport-config');
const flash = require('express-flash')
const { User } = require("./db/models/User");

app.use(cors());

require('./db/mongoose');
const Entry = require("./db/models/Entry");

app.use(bodyParser.json());

app.use(cors());
initializePassport(
    passport,
    async email => (await User.findOne({mail: email})),
    async id => (await User.findOne({_id: id}))
);

app.use(flash())
app.use(session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10 // 10 minut
    }
}))
app.use(passport.initialize())
app.use(passport.session())
// app.use(methodOverride('_method'))
// app.use(logger('dev'));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/api/', apiRouter);
app.use('/login', loginRouter);

//server
app.listen(port, function (){
    console.log('server na localhost ' + port);
});