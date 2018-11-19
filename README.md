# Ladok student grading - A proof of concept with REST API:s

## Description

This system is a mockup copy of parts of Ladok (a student administration system used at all Swedish universities). 

The purpose of the system is for teachers to register grades. We represent the teacher's input with a preloaded list. The fields are controlled against two databases via API:s, to check if the student is registered at the specific course and semester. If it checks out, it makes the grading of students possible. The teacher can grade the students, and the results are stored via a POST API call to the final database.

The project consists of:

- Three REST API:s, two of which implemented in Java JAX, and one implemented in Python's Django
- A client/GUI in HTML/Javascript, calling the GET and POST methods supplied by the REST API:s

The project was a part of the course [Enterprise Architecture and Service Oriented Architecture](https://www.ltu.se/edu/course/D00/D0031N/D0031N-Enterprise-Architecture-och-SOA-1.67754) at Lulea University of Technology.

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

### MySQL database

There are two SQL scripts available in the /src/resources/ of the two Java projects. Use these to create your MySql databases schema. Make sure to connect to the database accorindgly in the scripts.

### Java JAX

Using Glassfish 5 server and Java EE 7. We used Netbeans 8.2 to set up the project.

### Django

Make sure that you have the correct system dependencies installed (Python 3.7, pipenv). The other dependencies will be loaded to your virtual environment from the pipfile. 

First setup your Django admin account. Then the Django part of the project can be set up with these lines of codes in the command line:

```console
cd LadokWS
pipenv shell                // creates a new virtual environment
pipenv install              // installes dependencies in VE from pipfile
python manage.py runserver
```

## Video walk-through

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Jv-gBUXIeR0
" target="_blank"><img src="http://img.youtube.com/vi/Jv-gBUXIeR0/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>