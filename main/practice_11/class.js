class Class {
	constructor(number) {
		this.number = number;
	}
	getDisplayName() {
		return `Class ${this.number}`;
	}
	assignLeader(studentObj) {
		if (studentObj.klass.number === this.number) {
			this.leader = studentObj;
		} else {
			console.log(`It is not one of us.`);
		}
		const assignLeaderListener = this.assignLeaderListener;
		if (assignLeaderListener) {
			if (assignLeaderListener.isTeaching(studentObj)) {
				console.log(
					`I am ${assignLeaderListener.name}. I know ${studentObj.name} become Leader of Class ${this.number}.`
				);
			}
		}
	}
	appendMember(studentObj) {
		studentObj.klass = this;
		const joinListener = this.joinListener;
		if (joinListener) {
			if (joinListener.isTeaching(studentObj)) {
				console.log(`I am ${joinListener.name}. I know ${studentObj.name} has joined Class ${this.number}.`);
			}
		}
	}
	isIn(studentObj) {
		return studentObj.klass.number === this.number;
	}
	registerJoinListener(teacherObj) {
		this.joinListener = teacherObj;
	}
	registerAssignLeaderListener(teacherObj) {
		this.assignLeaderListener = teacherObj;
	}
}

module.exports = Class;
