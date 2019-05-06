---
title: Setting up a gatsby blog
date: "2019-04-29T22:40:32.169Z"
author: Lewis Fidlers
authorSocial: "https://www.github.com/lewis-fidlers"
description: A test post to Gatsby's blog viability
---

## Remark
At time of writing node 12.0 was just released but had some issues with dependancies, so I switched to 11.4.0

## Prerequisites
* nvm (node version manager) or node installed
* Make sure you have git installed.
* homebrew: https://docs.brew.sh/Installation.
* chocolatey: https://chocolatey.org/

Install nvm
```bash 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
verify install with nvm -v

user nvm the install your desired node version:

nvm install v11.4.0

in the directory you would like to initialize youre blog run nvm use 11.4.0

Install node brew install node / choco install node

Verify using node --version -> 11.4.


## Setup
Node comes with it's own package manager which is conveniently called npm (node package manager)

Gatsby comes with a nice cli. install it using:
```npm install -g gatsby-cli ```

run ```gatsby -v ``` to verify the installation ath the time of writing: 2.5.12.

Next up we'll setup a new gatsby site using through the cli, using a `Gatsby starter` The one we'll use is: https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/ Which is a basic one but will do what we need.

If you'd like another one have a look at: https://www.gatsbyjs.org/starters/?s=blog&v=2

```ruby
def hello
  puts "hello"
end
```

Let's finish this
