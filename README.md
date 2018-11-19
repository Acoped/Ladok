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

Blabla

## Runtime example

Link to video of an example run: