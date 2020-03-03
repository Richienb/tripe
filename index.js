"use strict"

const { default: ow } = require("ow")
const translate = require("./lib/translate")

module.exports = (text, from, to) => {
	if (!to) {
		to = from
		from = "auto"
	}

	ow(text, ow.string)
	ow(from, ow.string)
	ow(to, ow.string)

	return translate({ text, from, to })
}
