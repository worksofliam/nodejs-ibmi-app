## nodejs-ibmi-app Template

A Node.js API template, built specifically for using TypeScript, creating APIs with express, and Mapepire to connect to IBM i.

### Setup

1. Ensure Mapepire is [setup on the server](https://mapepire-ibmi.github.io/guides/sysadmin/).
1. After cloning the repo, change directory to it and use `npm i` to fetch the dependencies
2. Create a copy of `.env.example` named `.env` and update the environment variables with the values you would use to connect to an IBM i

### Testing

Use 'Launch Program' under the debug tab to launch to application.

<img width="491" alt="image" src="https://github.com/worksofliam/nodejs-ibmi-app/assets/3708366/da523197-93c6-4074-8a7b-ba3dc0ef5f8f">

You can also use `npm run start` to launch it outside of VS Code.
