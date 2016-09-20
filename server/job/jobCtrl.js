const Job = require('./jobModel');

module.exports = {

	helloWorld: (req, res) => {
		res.send('hello Jobs');
	},

	createJob: (req, res) => {
		/*var newJob = {
			jobName: req.body.username,
			openings: req.body.openings,
			description: req.body.description,
			max_price: req.body.max_price,
			location_lat: req.body.location_lat,
			location_lng: req.body.location_lng,
			deadline: req.body.deadline,
		}*/
		Job.build(req.body)
			.then(data => res.status(200).send(data))
			.catch(error => error).save();
	},

	getAllJobs: (req, res) => {
		res.send('inside get all jobs');
	},
	
};
