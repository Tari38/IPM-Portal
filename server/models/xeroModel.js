import mongoose from "mongoose";

const xeroSchema = mongoose.Schema(
	{
		dateOfTransaction: {
			type: Date,
			required: true
		},
		description: String,
		debitAmount: {
			type: Number,
			required: true
		},
		creditAmount: {
			type: Number,
			required: true
		},
		authorName: {
			type: String,
			required: true
		},
		coAuthorName: {
			type: String,
			required: false
		},
		penName: {
			type: String,
			required: false
		},
		originOfBookSale: {
			type: String,
			required: true
		}
});

const Xero = mongoose.model("Xero", xeroSchema);

export default Xero;
