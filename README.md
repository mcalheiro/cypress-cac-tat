# cypress-cac-tat
## Test automation practice with cypress

The application under test is a form page that contains many types of inputs and selections. These need to be validated in order to ensure that they were implemented accordingly.

![alt text](/src/image.png)

In order to have the page available, I used [serve](https://www.npmjs.com/package/serve) to [well...] serve it. So I can access as if it where a website instead of opening an html file. In order to do that I installed the package globally since it can be reused for other projects. 

`npm install --global serve`

Then, in order to run it just use the command and provide the directory where your page files are stored. In this case, [`index.html`](./src/index.html) is stored in the directory `src`.

`serve -s src`

Output will provide the URL you need to access in order to use the page:
```zsh
   ┌───────────────────────────────────────────┐
   │                                           │
   │   Serving!                                │
   │                                           │
   │   - Local:    http://localhost:3000       │
   │   - Network:  http://192.168.1.181:3000   │
   │                                           │
   │   Copied local address to clipboard!      │
   │                                           │
   └───────────────────────────────────────────┘
```

## Installing modules
Cypress is required to automate the tests. I is listed as a dependency in [`package.json`](package.json) file, so you just need to run `npm install`. The version used here is not mandatory, but using different ones may affect execution.

## Using Cypress
Use the command `npx cypress open` to configure the project in cypress. A window will appear. Select "E2E Testing", then yout desired browser -- I chose electron, but feel free to experiment. Then create your first spec and close the Cypress windows. Note that a new directory named [`cypress`](./cypress/) now exists in the project root, as well as a file named [`cypress.config.js`](./cypress.config.js).