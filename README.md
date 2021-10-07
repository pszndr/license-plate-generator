# License Plate Generator

A simple generator for random license plates. Formats currently supported:

- All from [Mercosur/Mercosul](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_Mercosur)

This application is split into a server, that generates a plate every X seconds (default is 5), and feeds a websocket with the generated value from one of the formats (default is to use all supported).

It also has a GET endpoint (`/latest`) so this value can be retrieved instantly without needing to wait the websocket to generate a new value.

## Server setup

Inside `/server` folder:

### Install dependencies

```
npm install
```

### Starts up a server with live-reloading for development

```
npm start
```

## Client setup

Inside `/client` folder:

### Install dependencies

```
npm install
```

### Starts up a server with live-reloading for development

```
npm start
```

### Run unit tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize vue configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Building the app

In the root project folder:

```
npm run build
```

This will generate executables inside the `/build` directory.
