/*jshint esversion: 6 */

/* ----- MOCK DATA ----- */

/* Data with students that are registered on a course at a specific semester, in the databases */
let bjornA = new StudentGrade('bjrber-7', 'I0019N','VT15', '', '');
let andreasA = new StudentGrade('andkuo-7', 'I0019N','VT16', '', '');
let bjornB = new StudentGrade('bjrber-7', 'I0019N','VT18', '', '');
let andreasB = new StudentGrade('andkuo-7', 'I0019N','VT19', '', '');
let pernillaA = new StudentGrade('epijoa-7', 'D0004N','VT17', '', '');
let pernillaB = new StudentGrade('epijoa-7', 'D0004N','VT18', '', '');
let pernillaC = new StudentGrade('epijoa-7', 'D0006N','VT14', '', '');

/* Data with students that are NOT registered on a course at the specific semester*/
let kalleanka = new StudentGrade('kalank-1', 'I0019N', 'VT16', '', '');
let alexanderlukas = new StudentGrade('aleluk-2', 'NOCOURSE1', 'VT13', '', '');

/* ----- /MOCK DATA ----- */

var sgList = [bjornA, andreasA, bjornB, andreasB, pernillaA, pernillaB, pernillaC, kalleanka, alexanderlukas];

// Load enroll code from rest API call, and populate form
for (let x = 0; x < sgList.length; x++) {
	var enrollCode = getEnrollCode(sgList[x].ideal, sgList[x].courseCode, sgList[x].semesterCode);
	sgList[x].enrollCode = enrollCode;
	generateForm(sgList[x].ideal, sgList[x].courseCode, sgList[x].semesterCode, sgList[x].grade, sgList[x].enrollCode);
}


function getAPI(url) {
    var hR = new XMLHttpRequest();
    hR.open('GET', url, false);  // syncronous just for POC implementation, should be async in production!
    hR.send();
    return hR.responseText;
}


function getEnrollCode(ideal, courseCode, semesterCode) {
	const SERVER_STEM = 'http://localhost:8080';
	const API_ENDPOINT = '/IdealWS/api/checkStudent'; 

	var url = SERVER_STEM + API_ENDPOINT + '/' + ideal + '/' + courseCode + '/' + semesterCode;

	var returnText = getAPI(url);
	var returnObj = JSON.parse(returnText);

	return returnObj.enrollCode;
}


function generateForm(ideal, courseCode, semesterCode, grade, enrollCode) {
	var f = document.createElement("form");
	f.setAttribute("method", "POST");
	f.setAttribute("action", "http://localhost:8000/api/v1/");

	var iInp = document.createElement("input");
	iInp.setAttribute('type',"text");
	iInp.setAttribute('name',"ideal");
	iInp.setAttribute('value', ideal);
	iInp.setAttribute('readonly', 'true');

	var cInp = document.createElement("input");
	cInp.setAttribute('type',"text");
	cInp.setAttribute('name',"courseCode");
	cInp.setAttribute('value', courseCode);
	cInp.setAttribute('disabled', 'true');

	var sInp = document.createElement("input");
	sInp.setAttribute('type',"text");
	sInp.setAttribute('name',"semesterCode");
	sInp.setAttribute('value', semesterCode);
	sInp.setAttribute('disabled', 'true');

	var sSel = document.createElement("select");
	sSel.setAttribute('name',"grade");

	var uOpt = document.createElement("option");
	uOpt.setAttribute('value',"U");
	uOpt.innerHTML = "U";

	var gOpt = document.createElement("option");
	gOpt.setAttribute('value',"G");
	gOpt.innerHTML = "G";

	var vgOpt = document.createElement("option");
	vgOpt.setAttribute('value',"VG");
	vgOpt.innerHTML = "VG";

	var eInp = document.createElement("input");
	eInp.setAttribute('type',"text");
	eInp.setAttribute('name',"enroll_code");
	eInp.setAttribute('value', enrollCode);
	eInp.setAttribute('readonly', 'true');

	sSel.append(uOpt);
	sSel.append(gOpt);
	sSel.append(vgOpt);

	f.append(iInp);
	f.append(cInp);
	f.append(sInp);
	f.append(sSel);
	f.append(eInp);

	f.setAttribute("onsubmit", "submit(this)");

	if (enrollCode != 'Student not Registred') {
		var sub = document.createElement("input");
		sub.setAttribute('type', 'submit');
		sub.setAttribute('value', 'submit');
		f.append(sub);
	}

	O('formInserter').appendChild(f);
}