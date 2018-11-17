class StudentGrade {

	constructor(ideal, courseCode, semesterCode, grade, enrollCode) {
		this.ideal = ideal;
		this.courseCode = courseCode;
		this.semesterCode = semesterCode;
		this.grade = grade;
		this.enrollCode = enrollCode;
	}
	
	setIdeal(ideal) {
		this.ideal = ideal;
	}
	
	setCourseCode(courseCode) {
		this.courseCode = courseCode;
	}

	setSemesterCode(semesterCode) {
		this.semesterCode = semesterCode;
	}

	setGrade(grade) {
		this.grade = grade;
	}

	setEnrollCode(enrollCode) {
		this.enrollCode = enrollCode;
	}
}