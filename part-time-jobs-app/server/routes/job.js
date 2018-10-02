var express = require('express');
var router = express.Router();

const Job = require('../models/job');

router.post('/', (req, res, next) => {
	const job = new Job({
    name: req.body.job.name,
    description: req.body.job.description,
    category: req.body.job.category,
    location: req.body.job.location,
    hourlyRate: +req.body.job.hourlyRate,
    preferredDate: req.body.job.preferredDate,
    preferredTime: req.body.job.preferredTime
	});

	job.save((err, job) => {
		if (err) {
			return res.status(500).json({
				title: 'Error happened when creating new Job',
				error: err
			});
		}
		res.status(201).json({
			message: 'Job created',
      job: job
		});
	})
});

router.get('/', (req, res, next) => {
	Job.find({}, (err, jobs) => {
		if (err) {
			return res.status(500).json({
				title: 'Error happened when fetching Job',
				error: err
			});
		}

		if (jobs) {
			return res.status(200).json({
				message: 'Jobs found',
        jobs: jobs
			});
		}

		return res.json({
			message: 'Jobs not found',
      jobs: null
		});
	});
});

router.get('/:id', (req, res, next) => {
	Job.findById(req.params.id, (err, job) => {
		if (err) {
			return res.status(500).json({
				title: 'Error happened when fetching Job by id ' + req.params.id,
				error: err
			});
		}

		if (job) {
			return res.status(200).json({
				message: 'Job found',
        job: job
			});
		}

		return res.json({
			message: `Expense with ${eq.params.id} not found`,
      job: null
		});
	});
});

module.exports = router;
