# blankpage

## Usage Without Docker

### Install

```bash
yarn
yarn build
```

### Run

```bash
yarn start:prod
```

## Usage with Docker

### Build image

```bash
docker built -t troublor/blankpage .
```

### Run Container

```bash
docker run --name blankpage --publish 127.0.0.1:8080:8080/tcp troublor/blankpage
```