# Products-list-example

## Description

Product List with different characteristics to see every detail from the Product you would like to buy.

## Features

- Search Product by title.
- Filter every Product by gender.
- Filter Products by Sales, this mean if the Product Price in Sales is less than the normal Product Price.
- Expand every Product to see different Images from it.
- Load more products (firstly will be only shown 100 Products).

## Technologies

This application uses a number of open source projects to work properly:

- [ReactJS] - A JavaScript library for building user interfaces!
- [Styled Components] - Visual primitives for the component age.
- [Typescript] - JavaScript with syntax for types.
- [Testing Library] -Simple and complete testing utilities that encourage good testing practices.
- [Jest] - JavaScript Testing Framework with a focus on simplicity.

## Instalation

Install the dependencies and devDependencies and start the server.

```sh
cd product-list-case-study
npm i
npm start
```

## Development

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run test`

Run the test from the Project.

## Components

This is an example of how I structured the Components, all of them have:

- an interface or a type.
- Styled Component or Components.
- An exported const in order to use it anywhere else.

```js
import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface ImageProps {
  src?: string;
}

const Image = (props: ImageProps) => <ImageStyled src={props.src} />;

export default Image;
```

## Plugins

This application uses some plugins in order to make the life a bit easier.

| Plugin          | Main Goal                                                  |
| --------------- | ---------------------------------------------------------- |
| react-papaparse | The powerful, in-browser CSV parser for big boys and girls |

## Challenges

- Deal with these massive amount of data after pasing it from CSV to JSON.
- Writing all the logic and tests for the application to run smoothly.

## License

MIT

**Free Software, use and colaborate :)!**
