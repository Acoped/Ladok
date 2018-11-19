/*jshint esversion: 6 */

/* ----- TEST DATA ----- */
var TEST = "http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback";
var TEST2 = 'http://localhost:8080/IdealWS/api/checkStudent/bjrber-7/I0019N/VT17';
var TEST3 = 'http://localhost:8080/IdealWS/api/checkStudent/bjrber-7/I0019N/VT18';

var a = 'http://localhost:8080/IdealWS/api/checkStudent/bjrber-7/I0019N/VT15';
var b = 'http://localhost:8080/IdealWS/api/checkStudent/andkuo-7/I0019N/VT16'; 
var c = 'http://localhost:8080/IdealWS/api/checkStudent/bjrber-7/I0019N/VT18'; 
var d = 'http://localhost:8080/IdealWS/api/checkStudent/andkuo-7/I0019N/VT19'; 
var e = 'http://localhost:8080/IdealWS/api/checkStudent/epijoa-7/D0004N/VT17'; 
var f = 'http://localhost:8080/IdealWS/api/checkStudent/epijoa-7/D0004N/VT18'; 
var g = 'http://localhost:8080/IdealWS/api/checkStudent/epijoa-7/D0006N/VT14';

/* ----- /TEST DATA ----- */

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

// Test the POST http method of LadokWS

var postTEST = 'http://localhost:8000/api/v1/';
var simpleTEST = 'http://localhost:8000/api/v1/?ideal="D"/?enroll_code="E"/?grade="U"';

postAPI(postTEST);


function postAPI(url) {
	var hR = new XMLHttpRequest();
	hR.open('POST', url, false); // syncronous just for POC implementation, should be async in production!
	hR.setRequestHeader('Content-type', 'application/json;charset=UTF-8'); // needed?
	hR.send(JSON.stringify({ideal: "TEST", enroll_code: "TEST", grade: "C"}));
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


function submit(form) {
	alert("hej");
}


function generateForm(ideal, courseCode, semesterCode, grade, enrollCode) {
	var f = document.createElement("form");
	f.setAttribute("method", "POST");
	f.setAttribute("action", "http://localhost:8000/api/v1/");
	// f.setAttribute("onsubmit", "submit(this)");
	

	var iInp = document.createElement("input"); //input element, text
	iInp.setAttribute('type',"text");
	iInp.setAttribute('name',"ideal");
	iInp.setAttribute('value', ideal);
	// iInp.setAttribute('disabled', 'true');

	var cInp = document.createElement("input"); //input element, text
	cInp.setAttribute('type',"text");
	cInp.setAttribute('name',"courseCode");
	cInp.setAttribute('value', courseCode);
	cInp.setAttribute('disabled', 'true');

	var sInp = document.createElement("input"); //input element, text
	sInp.setAttribute('type',"text");
	sInp.setAttribute('name',"semesterCode");
	sInp.setAttribute('value', semesterCode);
	sInp.setAttribute('disabled', 'true');

	var sSel = document.createElement("select"); //input element, text
	sSel.setAttribute('name',"grade");

	var uOpt = document.createElement("option"); //input element, text
	uOpt.setAttribute('value',"U");
	uOpt.innerHTML = "U";

	var gOpt = document.createElement("option"); //input element, text
	gOpt.setAttribute('value',"G");
	gOpt.innerHTML = "G";

	var vgOpt = document.createElement("option"); //input element, text
	vgOpt.setAttribute('value',"VG");
	vgOpt.innerHTML = "VG";

	var eInp = document.createElement("input"); //input element, text
	eInp.setAttribute('type',"text");
	eInp.setAttribute('name',"enroll_code");
	eInp.setAttribute('value', enrollCode);
	// eInp.setAttribute('disabled', 'true');

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