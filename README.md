# LadokWS and LadokGUI - A proof of concept with REST API:s

## Description

This system is a 

The project consists of:

- Three REST API:s, two of which implemented in Java JAX, and one implemented in Python's Django
- A client/GUI in HTML/Javascript, calling the GET and POST methods supplied by the REST API:s

## Related repositories

**This repository contains LadokGUI (the Django API) and LadokGUI (the HTML/JS client). The Java REST API:s are located at:**

- ParaplyetWS: https://github.com/Acoped/ParaplyetWS
- IdealWS: https://github.com/Acoped/IdealWS

## Model

Below we present a sequential model of the project:

![Sequential Model](/docs/Sequential_model.png "Sequential Model")

The three different REST API:s consist of these methods:

| Resource | URI | HTTP method | Method |
| :--- | :--- | :--- | :--- |
| IDEAL | /IdealWS/api/checkStudent/{Ideal}/{CourseCode}/{SemesterCode} | GET | checkStudent |
| PARAPLYET | /ParaplyetWS/api/getEnrollCode/{CourseCode}/{SemesterCode} | GET | getEnrollCode |
| LADOK WS | /{Ideal}/{EnrollCode}/{Grade} | POST | setGrade |

## Installation

Blabla

## Runtime example

Link to video of an example run:

# LadokWS and LadokGUI - A proof of concept with REST API:s

## Description

This system is a 

The project consists of:

- Three REST API:s, two of which implemented in Java JAX, and one implemented in Python's Django
- A client/GUI in HTML/Javascript, calling the GET and POST methods supplied by the REST API:s

## Related repositories

**This repository contains LadokGUI (the Django API) and LadokGUI (the HTML/JS client). The Java REST API:s are located at:**

- ParaplyetWS: https://github.com/Acoped/ParaplyetWS
- IdealWS: https://github.com/Acoped/IdealWS

## Model

Below we present a sequential model of the project:

![Sequential Model](/docs/Sequential_model.png "Sequential Model")

The three different REST API:s consist of these methods:

| Resource | URI | HTTP method | Method |
| :--- | :--- | :--- | :--- |
| IDEAL | /IdealWS/api/checkStudent/{Ideal}/{CourseCode}/{SemesterCode} | GET | checkStudent |
| PARAPLYET | /ParaplyetWS/api/getEnrollCode/{CourseCode}/{SemesterCode} | GET | getEnrollCode |
| LADOK WS | /{Ideal}/{EnrollCode}/{Grade} | POST | setGrade |

## Installation

Blabla

## Runtime example

Link to video of an example run:

