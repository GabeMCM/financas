import Noobdb from "noobdb";

const transactionData = new Noobdb("api/data/transactionData");

const transactionSchema = {
	type: String,
	valor: Number,
	date: Date,
}

const transactionModel = transactionData.model('transactionData', transactionSchema);

export default transactionModel;