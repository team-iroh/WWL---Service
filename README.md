<h1 align="center">Welcome to Updates Module 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/team-iroh/WWL---Service#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/team-iroh/WWL---Service/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/team-iroh/WWL---Service/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/team-iroh/Updates Module" />
  </a>
</p>

> This Module displays updates to campaigns and allows users to comment on each update
## Related Projects

  - https://github.com/team-iroh/VA-Service
  - https://github.com/team-iroh/navbar
  - https://github.com/team-iroh/pledge-rewards
  - https://github.com/team-iroh/campaign
  - https://github.com/team-iroh/tab-bar
  
## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Run Tests](#run-tests)
1. [API](#api)

## Usage

```sh
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Run tests

```bash
npm run test
```

## API

GET - endpoint :/api/update/:id result: Pulls update data from the database depending on id

GET - endpoint :/api/comment/:id result: Pulls comments data from the database depending on id

POST - endpoint : /api/comment/  result: Posts comment data to the database using the Update id it pertains when the update is rendered at the client

## Author

👤 **Warner Lin**

* Github: [@team-iroh](https://github.com/team-iroh)
