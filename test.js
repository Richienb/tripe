const test = require("ava")
const tripe = require(".")

test("main", async (t) => {
	t.is(await tripe("Good morning!", "fr"), "Bonjour!")
})
