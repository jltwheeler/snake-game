[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Repo Size][repo-size-shield]][repo-size-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    🐍
  </a>

  <h3 align="center">SNAKE GAME</h3>

  <p align="center">Snake game built with React.js
    <br />
    <br />
    <a href="https://github.com/jltwheeler/snake-game/issues">Report Bug</a>
    |
    <a href="https://github.com/jltwheeler/snake-game/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- put screen shot here?  -->

Snake game built with React.js hooks. Features a Vim controls mode for the 10x
coders out there.

### Built With

- [create react app](https://create-react-app.dev/)
- [styled components](https://styled-components.com/)
- [Docker](https://www.docker.com/)
- And some... [MaterialUI](https://material-ui.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps. Note you
can either use Docker or npm to run the app.

### Prerequisites

- npm
- Docker (**_optional_**)

### Installation using npm

1. Clone the repo

```sh
git clone git@github.com:jltwheeler/snake-game.git
cd snake-game
```

2. Install NPM packages

```sh
npm install
```

3. Run app locally using npm

```sh
npm start
```

For running the app using Docker, see the example in [Usage](##Usage)

<!-- USAGE EXAMPLES -->

## Usage

If you rather run the app locally using Docker, you can do so by following the
steps below:

1. Build local Docker image

```sh
docker build -t snake-game:local .
```

2. Run Docker image on port 3001

```sh
docker run -it --rm -p3001:3000 snake-game:local
```

3. Open your browser and head to https://localhost:3001

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Josh Wheeler

Project Link: [https://github.com/jltwheeler/snake-game](https://github.com/jltwheeler/snake-game)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [othneildrew README template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jltwheeler/snake-game.svg?style=flat-square
[contributors-url]: https://github.com/jltwheeler/snake-game/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/jltwheeler/snake-game.svg?style=flat-square
[stars-url]: https://github.com/jltwheeler/snake-game/stargazers
[issues-shield]: https://img.shields.io/github/issues-raw/jltwheeler/snake-game
[issues-url]: https://github.com/jltwheeler/snake-game/issues
[license-shield]: https://img.shields.io/github/license/jltwheeler/snake-game.svg?style=flat-square
[license-url]: https://github.com/jltwheeler/snake-game/blob/master/LICENSE
[repo-size-shield]: https://img.shields.io/github/repo-size/jltwheeler/snake-game
[repo-size-url]: https://github.com/jltwheeler/snake-game
