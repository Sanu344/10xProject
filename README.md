# Real Estate Catalogue

This repo contains the source code for Real Estate catalogue app [RealEstate](https://one0x-project-real-estate-sanu-bindu.onrender.com). This project is assigned by 10x Academy. In this web app users can view the property and its details posted by other users, user can also add their own property to the property listing.

## Table of Content

- [Features](#features)
- [Technologies used](#technologies-used)
- [Installation](#installation)
- [run local backend](#running-locallybackend)
- [Connect](#reach-me)

## Features

- user can Login / Signup ,can view all property listing, view details about each property, can search for particular property by providing PPDID, can add new property to property listing.
- when user views any property details view count is increased.
- at successful authentication after login, jason web token is created which is used to implement protected routes
- When new user is registered their password is first hashed then stored in data base
- To store image it is converted to base 64 then stored in MongoDb (no multer used)

## Technologies used

-> React js
-> NodeJS
-> Express
-> MongoDB
-> Visual Studio Code
-> GIT
-> GitHub

### Installation

1. `git clone https://github.com/Sanu344/10xProject.git` to clone the repo in your local environment
2. `cd client` then `npm i` to install front end npm dependencies then `npm start` to start front end locally.
3. `cd.. then `cd Server`and`npm install`or`npm i` to install the backend npm dependencies

### Running locally(Backend)

1. Go to Server `cd Server` then open default.json and set the mongo url or use `set DBURL=mongodburl` use your own mongodb url here
2. set environment variable `set RealEstateKey=secretKey` add your own secret key
3. `npm start` to start the server

## Reach me

- [Email](madarabuu132@gmail.com)
