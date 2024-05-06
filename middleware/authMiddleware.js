const jwt = require ('jsonwebtoken');
const User = require ('../models/User');

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt;
	
	if (token) {
		jwt.verify(token, 'incorrect', (err, decodedToken) => {
			if (err) {
				console.log(err.message);
				res.redirect('/login');
			} else {
				console.log(decodedToken);
				next();
			}
			});
			} else {
				res.redirect('/login');
				}
				};

const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		jwt.verify(token, 'incorrect', async (err, decodedToken) => {
			if (err){
				res.locals.user = null;
				next();
			} else {
				let user = await User.findOne({email: decodedToken.id});
				res.locals.user = user;
				next();
			}
			});
			} else {
				res.locals.user = null;
				next();				
			}
			};

const requireAuth2 = (req, res, next) => {
	const token = req.cookies.jwt;
	
	if (token) {
		jwt.verify(token, 'incorrect', (err, decodedToken) => {
			if (err) {
				console.log(err.message);
				res.redirect('/login');
			} else {
				if (decodedToken.id === "admin@admin.com"){
					console.log(decodedToken);
					next()
				}
				else {
					res.redirect('/products')
					console.log(decodedToken);
				}
			}
			});
			} else {
				res.redirect('/login');
				}
				};
			
				
module.exports = { requireAuth, checkUser, requireAuth2 };
