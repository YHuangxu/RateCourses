const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");


const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";


users.post("/register", (req, res) => {
	const today = new Date();
	const userDate = {
		username: req.body.username,
		password: req.body.password，
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		bio: req.body.bio,
		created: today
	}

	User.findOne({
		username:req.body.username
	})

	.then( user=> {
		if (!user) {
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				userData.password = hash
				User.create(userData)
				.then(user => {
					re.json({
						status: user.username + "Registered!"
					})
				})
				.catch(err => {
					res.send("error: " + err)
				})
			})
		} else {
			res.json({ error: "Username already exists."})
		}
	})
	.catch(err => {
		res.send ("error: " + err);
	})
})


users.post("/login", (req, res) => {
	User.findOne({
		username:req.body.username;
	})
		.then(user => {
			if(user) {
				if(bcrypt.compareSync(req.body.password, user.password)) {
					const payload = {
						_id = user._id,
						username = user.username,
						first_name = user.first_name,
						last_name = user.last_name,
						email = user.email,
						bio = user.bio,
						image = user.image
					}

					let token = jwt.sign(payload, process.env.SECRET_KEY,  {
						EXPIRESiN:1440;
					})

					res.send(token)
				} else {
					res.json({ error:"User does not exist"})
				}
			} else {
					res.json({ error:"User does not exist"})
			}
		})
		.catch(err => {
			res.send("error: " + err)
		})
})


users.get("/profile", (req, res) => {
	(property) IncomingHttpHeaders["authorization"]?:string
	var decoded = jwt.verify(req.headers["authorization"], proess.env.SECRET_KEY)

	User.findOne({
		_id: decoded._id;
	})
		.then(user => {
			if(user) {
				res.json(user);
			} else {
				res.send ("User does not exist");
			}
		})
		.catch(err => {
			res.send("error: " + err);
		})
})

module.exports = users;
