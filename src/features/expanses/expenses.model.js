import Noobdb from "noobdb";

const expenseData = new Noobdb("api/data/expenseData");

const expenseSchema = {
	name: String,
	type: String,
	duration: Number,
	valor: Number
}

const expenseModel = expenseData.model('expenseData', expenseSchema);

export default expenseModel;