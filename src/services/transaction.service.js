import transactionModel from "../db/transactions.data.js"

async function createNewTransaction(obj, id) {
	try {
		await transactionModel.save(obj, id);
	} catch (error) {
		console.log(error);
	}
}

async function getAllTransactions() {
	let data = '';
	try {
		data = await transactionModel.getAll();
	} catch(err) {
		console.log(err);
	}
	return data
}

export default transactionServices = {
    getAllTransactions,
    createNewTransaction
}