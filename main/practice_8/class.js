class Class {
	constructor(number) {
		this.number = number;
	}
	assignLeader(studentObj) {
		if (studentObj.klass.number === this.number) {
			this.leader = studentObj;
		}
	}
	getDisplayName() {
		return `Class ${this.number}`;
	}
}

module.exports = Class;
