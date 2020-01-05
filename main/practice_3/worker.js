import Person from "../../main/practice_2/person.js";

class Worker extends Person {
	constructor(name, age) {
		super(name, age);
	}
	introduce() {
		return `I am a ${Worker.name}. I have a job.`;
	}
}

module.exports = Worker;
