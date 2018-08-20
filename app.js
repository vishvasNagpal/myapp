const express = require('express');
const app = express();
const path = require('path');
require("./server/config/Globals")(__dirname);

const init = require('./init');


global._app = app;
global._express = express;
global._rootDir = __dirname;

init(app);