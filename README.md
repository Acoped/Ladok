# LadokWS and LadokGUI

Below we present a sequential model of the project:

![Sequential Model](/docs/Sequential_model.png "Sequential Model")

The three different REST API:s consist of these methods:

| Resource | URI | HTTP method | Method |
| :--- | :--- | :--- | :--- |
| IDEAL | /IdealWS/api/checkStudent/{Ideal}/{CourseCode}/{SemesterCode} | GET | checkStudent |
| PARAPLYET | /ParaplyetWS/api/getEnrollCode/{CourseCode}/{SemesterCode} | GET | getEnrollCode |
| LADOK WS | /{Ideal}/{EnrollCode}/{Grade} | POST | setGrade |
