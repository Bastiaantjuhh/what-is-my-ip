# what-is-my-ip

Make a "What is my IP" website that works with both IPv4 and IPv6 addresses. Require a little bit of configuration to get it working. Backend (for getting IP) is made in pure PHP. And the frontend webpage is made with native JavaScript and HTML.

## Table of content
- [what-is-my-ip](#what-is-my-ip)
  - [Table of content](#table-of-content)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
    - [Setup DNS](#setup-dns)
    - [Configure script](#configure-script)
  - [Repository summary](#repository-summary)
  - [License](#license)

## Features

- View IPv4 and IPv6 Address.
- Background images are random chosen from [Unsplash](https://unsplash.com/).

## Screenshots

![Screenshot](https://github.com/Bastiaantjuhh/what-is-my-ip/blob/master/.github/screenshot.png)

## Installation

### Setup DNS

You need to configure two types of DNS records. One with a IPv4 only and you need one with a IPv6 only. Upload the ```backend``` directory to both of the subdomains.

Record | Type | Value
--- | --- | ---
v4 | A | ```IPv4 Address```
v6 | AAAA | ```IPv6 Address```

### Configure script

Edit ```/web/assets/js/ip.js```

```js
// Endpoints
const endpointIPv4 = "https://v4.your-domain.com/json.php";
const endpointIPv6 = "https://v6.your-domain.com/json.php";
```

## Repository summary

Description | Status
---- | ------
License | ![GitHub](https://img.shields.io/github/license/Bastiaantjuhh/what-is-my-ip)
Commits | ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Bastiaantjuhh/what-is-my-ip)
Language | ![GitHub top language](https://img.shields.io/github/languages/top/Bastiaantjuhh/what-is-my-ip)
Open issues | ![GitHub issues](https://img.shields.io/github/issues/Bastiaantjuhh/what-is-my-ip)
Closed issues | ![GitHub closed issues](https://img.shields.io/github/issues-closed/Bastiaantjuhh/what-is-my-ip)
Pull requests | ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/Bastiaantjuhh/what-is-my-ip)
Closed pull requests | ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/Bastiaantjuhh/what-is-my-ip)
Repo Size | ![GitHub repo size](https://img.shields.io/github/repo-size/Bastiaantjuhh/what-is-my-ip)

## License
This project is licensed under the [MIT License](https://github.com/Bastiaantjuhh/what-is-my-ip/blob/master/LICENSE). You are encouraged to embed the project into your other projects, as long as the license permits.

> MIT License
> 
> Copyright (c) 2022 Bastiaan de Hart
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
