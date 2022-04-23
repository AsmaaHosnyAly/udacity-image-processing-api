# Udacity Image Processing API

<img width="1680" alt="Screenshot 2021-06-02 at 14 15 07" src="https://user-images.githubusercontent.com/11598255/120478616-56ec0900-c3ad-11eb-80d4-97ea7c189de1.png">

## Overview / Tools

Simple Node API for resizing images using [Sharp](https://www.npmjs.com/package/sharp)

Semantic-ui as CSS Framework

Express

TypeScript

Jasmine for testing

Images are gotten from [Unsplash](https://unsplash.com/)

## API Format for resizing images

- /api/images?filename=danceforme&width=400&height=400

## View all thumbnails

- /api/thumbnails

## Requirements

Node 14.16.0

### How to start server

```
 - npm install
 - npm start
```

## How to start client

```
 - cd client
 - npm install
 - npm start
```

## Install Server and Client dependencies

```
  - npm run int
```

On the client, you can view all thumbnails but clicking on the "Thumbnails" tab and you can resize and image by clicking on the "Generate Thumbnails" tab

### Testing

```
 - npm run test

```

### Linting

NOTE: Before running this script ensure dependency for both client and server have been installed by running the command below:

```
  - npm run int
```

```
 - npm run lint

```

### Prettier

```
 - npm run prettier

```

### Improvements

- Add functionality to upload images to assests folder
- Add CI/CD
