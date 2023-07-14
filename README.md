# Backend Challenge - Blessed Bytes

> "Tenho visto que toda perfeição tem seu limite; mas o teu mandamento é ilimitado." Salmos 119.96.

## Challenge:

It consists of creating a CEP (brazilian zipcode) REST API.

API URL: `http://localhost:5000/adress?cep=yourCEP`

## How to run:

First, you need to install [NodeJS](https://nodejs.org/en/download).

***the following commands need to be used inside BE-challenge directory***

Second, use the following command:
```bash
$ npm init -y
```
The command above creates a `package.json` file in the directory.

Next step is to insert the following item in the `package.json` file:

```json
"type": "module"
```

After that, use the following command:

```bash
$ npm install --save express
```
The command above install ExpressJS, a commonly used NodeJS web application framework.

Next step is the following command, which installs axios, a promised-based HTTP client for JavaScript:

```bash
$ npm install axios
```

Now that everything needed is installed, in order to run the server, use the following command:

```bash
$ node index.js
```

Finally, open the `index.html` fil, which is insidein your browser and you should be able to use the CEP API.

Stop server using <kbd>Ctrl</kbd>+<kbd>C</kbd>