# GameDev.tv Web Developer Challenge

At GameDev.tv we build lots of automation to ensure we can build courses quickly with a high quality bar. We are looking to hire a new contractor to help us grow this platform of tools.

Are you a web developer with the skills we need? Have a go at our challenge to see.

## The Challenge

We want to track the performance of our review scores over time. Your task is to create a backend to do this and a front end to display it.

If you visit a course landing page such as the [our new Unity course](https://www.udemy.com/unitycourse2/). You will notice that it shows an average rating. Over time this changes as new reviews come in.

Every hour, your solution should snapshot this value to at least 2 decimal places (that’s right, it can’t be done simply by screen-scraping the page).

The UI for your solution need not be any more complicated than a table displaying the values with the dates of the snapshot. It should automatically refresh when new values come in (a delay is acceptible).

The spec of the task is deliberately vague to see where you take it so be creative. However, don’t over engineer your solution either. We want to see what it you be like to iterate ideas with you.

## The Rules

1. Before you begin, fill out the [application form](https://goo.gl/forms/xvMqt1Zq55obCmK52).
1. Use this repo as a starting point.
1. Finish before the deadline you gave yourself on the form.
1. Use the technology stack set out below.
1. You can contact us if you need clarifications.
1. When you finish, send me a message and stop committing.
1. Have fun with it!

We look forward to seeing what you create.

## Technology Stack

We don't need you to be an expert in these technologies, but we would like to see that you are flexible enough to use them. For that reason, your solution should be restricted to the following stack:

+ React.js
+ RESTful APIs
+ Python 3
+ SQLite

You are free to use any node modules or python packages you choose. Make sure they are tracked so that they will be installed with the steps below.

## Installing Dependencies

Install the front-end dependencies.
```
cd frontend
yarn install
```
(You can use npm if you prefer)

Create a venv and install the python dependencies.
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

or on Windows use:
```
.\venv\Scripts\Activate.ps1
```

## Running

Run the client:
```
cd frontend
yarn start
```

And elsewhere run the API server:
```
cd backend
python ./server.py
```
