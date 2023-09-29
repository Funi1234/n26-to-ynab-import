


<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- ABOUT THE PROJECT -->
## About The Project

I just wanted to be able to import N26 transactions into YNAB without having to download a CSV and then use the file import tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get this up and running follow these steps.

### Prerequisites

You need NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

You need Docker
* https://docs.docker.com/desktop/install/windows-install/

If using powershell you will need to install the following using an admin powershell
* dotenv
  ```sh
  Install-Module dotenv
  ```
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a Personal Access API Key from [YNAB](https://app.ynab.com/settings/developer)
2. Clone the repo
   ```sh
   git clone https://github.com/Funi1234/n26-to-ynab-import
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. copy .env.template
   ```sh
   cp .env.template .env
   ```
5. Enter your Keys and details in `.env`
   ```sh
    BUDGET_NAME="abcd"
    ACCOUNT_NAME="xwz"
    YNAB_API_TOKEN="123_abc_def"
    DEVICE_TOKEN_UUID="12345678-1234-1234-1234567890ab"
    N26U="Username"
    N26P="Password!"
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

If setup correct you should just be able to run main.js

```sh
  node ./main.js
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dylan Conway - [@Funi1234](https://twitter.com/Funi1234)

Project Link: [https://github.com/Funi1234/n26-to-ynab-import](https://github.com/Funi1234/n26-to-ynab-import)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

These resources helped.

* [guitmz/n26](https://github.com/guitmz/n26)
* [Choose an Open Source License](https://choosealicense.com)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Funi1234/n26-to-ynab-import.svg?style=for-the-badge
[contributors-url]: https://github.com/Funi1234/n26-to-ynab-import/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Funi1234/n26-to-ynab-import.svg?style=for-the-badge
[forks-url]: https://github.com/Funi1234/n26-to-ynab-import/network/members
[stars-shield]: https://img.shields.io/github/stars/Funi1234/n26-to-ynab-import.svg?style=for-the-badge
[stars-url]: https://github.com/Funi1234/n26-to-ynab-import/stargazers
[issues-shield]: https://img.shields.io/github/issues/Funi1234/n26-to-ynab-import.svg?style=for-the-badge
[issues-url]: https://github.com/Funi1234/n26-to-ynab-import/issues
[license-shield]: https://img.shields.io/github/license/Funi1234/n26-to-ynab-import.svg?style=for-the-badge
[license-url]: https://github.com/Funi1234/n26-to-ynab-import/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dylanconway