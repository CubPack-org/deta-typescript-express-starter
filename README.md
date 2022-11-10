# Deta Typescript Express Starer

This is a starter template for a Deta project using Node, Express and Typescript.

This project is somewhat opinionated and includes:

 - Handling of unsupported methods with 405 and undefined routes with 404
 - Error handling with Problem+JSON Responses
 - Testing support with Jest
 - CORS configured via environment variables
 - Automated deployment on push to _main_

## Structure

- `src/`: the typescript source files
- `dist/`: the compiled js files
- `index.js`: imports the compiled `index.js` and exports the app for Deta

## Development

Install dependencies.

```
npm i
```

Run `ts-node src/serve.ts` and watch all the typescript files inside `src/`.

```
npm run dev
```

Run `npx jest` and execute all test inside `test/`.

```
npm test
```

## Deployment

Compile the source files. Deploy `index.js` pointing at `dist/index.js` and the other compiled files in `dist/`

```
npm run deploy
```
