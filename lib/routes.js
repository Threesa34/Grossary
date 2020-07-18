var cors = require('cors');
const security = require('./config/auth');
const corsOpt = require('./config/cors');
const multer = require('multer');
var path = require('path');
var navigation = require('./controller/navigation.controller');
const dir = './app/uploads';
const csvimport = './imports';

const users = require('./controller/user.Ctrl');


let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
	}
});

let importStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, csvimport);
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + '_' + path.extname(file.originalname));
	}
});

let upload = multer({
	storage: storage
});

let dataImport = multer({
	storage: importStorage
});



module.exports = {

	configure: function (app) {
		app.get('/api/getMenuList', cors(corsOpt.corsOptions), function (req, res) {
			navigation.getMenuList(req, res);
		});		
		app.post('/api/authenticateEmployee', cors(corsOpt.corsOptions), function (req, res) {
			users.AuthenticateUser(req, res);
		});		
    }
};