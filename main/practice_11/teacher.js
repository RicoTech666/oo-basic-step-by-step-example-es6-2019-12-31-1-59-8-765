import Person from "./person.js";

class Teacher extends Person {
	constructor(id, name, age, klasses) {
		super(id, name, age);
		this.klasses = klasses;
	}
	introduce() {
		if (this.klasses) {
			return `${super.introduce()} I am a Teacher. I teach Class ${this.klasses
				.map(elem => elem.number)
				.toString()
				.replace(",", ", ")}.`;
		} else {
			return `${super.introduce()} I am a Teacher. I teach No Class.`;
		}
	}
	introduceWith(student) {
		if (student.klass === this.klass) {
			return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
		} else {
			return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
		}
	}
	isTeaching(student) {
		return this.klasses.reduce((isTeaching, elem) => {
			isTeaching = isTeaching || elem.isIn(student);
			return isTeaching;
		}, false);
	}
}

module.exports = Teacher;
