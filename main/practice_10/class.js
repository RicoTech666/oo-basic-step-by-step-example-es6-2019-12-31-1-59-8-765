class Class {
	constructor(number) {
		this.number = number;
	}
	assignLeader(studentObj) {
		if (studentObj.klass.number === this.number) {
			this.leader = studentObj;
		} else {
			console.log(`It is not one of us.`);
		}
	}
	getDisplayName() {
		return `Class ${this.number}`;
	}
	appendMember(studentObj) {
		studentObj.klass = this;
	}
}

module.exports = Class;
