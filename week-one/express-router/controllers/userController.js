
const getRoute = async (req, res) => {



	try {

		res.send('success using get method');
	} catch (err) {
		console.log(err);
	}
};

const postRoute = (req, res) => {


	res.send('success using post method');
};

const putRoute = (req, res) => {


	res.send('success using put method');
};

const deleteRoute = (req, res) => {


	res.send('success using delete method');
};

module.exports = {
	getRoute,
	postRoute,
	putRoute,
	deleteRoute,
};