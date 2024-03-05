# BackendDevelopment

## What is this project?

This is my mod 4 project on backend development

## What does this project do?

This project utilizes express and Node.js to retrieve and update data

## What is Node.js

Node.js is a tool developers use to handle tasks such as storing data, managing user and processing transactions. Because it allows javascript to run outside the browser, developers can use one programming language to run the user facing side of the application and the back end or server-side.

## What is Express?

Express is a tool built on top of Node.js that makes it easier to build and scale web applications. It provides a way to organize your application's code.

## Why is Node Express best for Rocket Elevators?

1. Node Express is the best choice for Rocket Elevators because it provides a simply and efficient way to build web applications that provide real-time monitoring of data and system operational status.

2. Node Express applications are higly scalable, allowing Rocket Elevators to grow along side their customer base.

3. Node Express can facilitate real-time communication allowing Rocket ELevators to manage and deliver real-time data to their users and systems.

## Usage Guide for API Endpoints

## GET `/hello`

- Description: Returns a simple greeting message.
- Use: Access `http://localhost:3000/hello` in your web browser or use a tool like Postman to make a GET request.

## GET `/status`

- Description: Returns the current port the application is running on.
- Use: Access `http://localhost:3000/status` in your web browser or use a tool like Postman to make a GET request.

## GET `/error`

- Description: Simulates an error response.
- Use: Access `http://localhost:3000/error` in your web browser or use a tool like Postman to make a GET request.

## GET `/email-list`

- Description: Returns a list of agent emails.
- Use: Access `http://localhost:3000/email-list` in your web browser or use a tool like Postman to make a GET request.

## GET `/region-avg`

- Description: Returns the average rating and fee for agents in a specified region.
- Use: Access `http://localhost:3000/region-avg?region=<region_name>` in your web browser or use a tool like Postman to make a GET request, replacing `<region_name>` with the desired region.

## GET `/calc-res`

- Description: Calculates the number of elevators needed and the final cost based on the number of apartments, floors, and the selected tier.
- Use: Access `http://localhost:3000/calc-res?apartments=<number_of_apartments>&floors=<number_of_floors>&tier=<tier_name>` in your web browser or use a tool like Postman to make a GET request, replacing `<number_of_apartments>`, `<number_of_floors>`, and `<tier_name>` with the appropriate values.

## POST `/contact-us`

- Description: Submits a contact form with a first name, last name, and message.
- Use: Use a tool like Postman to make a POST request to `http://localhost:3000/contact-us` with a JSON body containing `first_name`, `last_name`, and `message`.
