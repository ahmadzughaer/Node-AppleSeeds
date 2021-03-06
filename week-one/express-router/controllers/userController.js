
let numbers =  [1,2,3,4,5,6]

const getRoute = async (req, res) => {

		res.send(numbers);

};

const postRoute = (req, res) => {
    const { newNumber } = req.body;
    numbers.push(parseInt(newNumber));

    res.send(numbers);

};

const putRoute = (req, res) => {
    const { newNumber } = req.body;
    const { updatedNumber } = req.query;
    const idx = numbers.findIndex((el) => el == updatedNumber);
    numbers[idx] = parseInt(newNumber);

    res.send(numbers);
};

const deleteRoute = (req, res) => {


    const { newNumber } = req.body;
    numbers = numbers.filter((el) => el != newNumber);

    res.send(numbers);
};

module.exports = {
	getRoute,
	postRoute,
	putRoute,
	deleteRoute,
};