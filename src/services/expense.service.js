import expenseModel from "../db/expenses.data.js"

async function createNewExpense(obj, id) {
	try {
		await expenseModel.save(obj, id);
	} catch (error) {
		console.log(error);
	}
};

async function getAllExpenses() {
	let data = '';
	try {
		data = await expenseModel.getAll();
	} catch(err) {
		console.log(err);
	}
	return data;
};

export default expenseServices = {
    getAllExpenses,
    createNewExpense
}