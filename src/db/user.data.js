import Noobdb from "noobdb";

const userData = new Noobdb("data/userData");

const userSchema = {
	name: String,
	email: String,
	cpf: Number,
	amount: Number,
	username: String,
	password: String,
}

const userModel = userData.model('userData', userSchema);

export default userModel;