---
title: Setting up a gatsby blog
date: "2019-04-30T22:40:32.169Z"
author: Lewis Fidlers
authorEmail: lewis.fidlers@borealisgroup.com
authorAvatar: "https://www.gravatar.com/avatar/fba5cc09df8d258978f01f7924611cc6?s=50d=mp"
authorSocial: "https://www.github.com/lewis-fidlers"
description: Setup a Gatsby blog using mardown files as a source
---

## Remark
At time of writing node 12.0 was just released but had some issues with dependencies, so I switched to 11.4.0

## Prerequisites
* [Nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) (node version manager)
* [Git](https://git-scm.com/)
 #####OBSOLETE? * [Homebrew](https://docs.brew.sh/Installation)
 #####OBSOLETE? * [Chocolatey](https://chocolatey.org/)

 #####OBSOLETE? On macOS you can use Homebrew to install things, on Windows Chocolatey should do the trick. Manually installing packages is of course also an option.

## Let's get started

### Install nvm
> You can skip this if you already have a working node installation, however I would still recommend using it.

This is a node version manager. It will allow you to install different versions of node on your machine and set the version per project you are working on.

On mac/linux run the following command in your terminal
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

On Windows have a look at [nvm-windows](https://github.com/coreybutler/nvm-windows)

Pick a location for your blog, we'll put it in `~/git/personal/blog`
in the directory you would like to initialize youre blog run nvm use 11.4.0

next up use nvm to install the desired node version:
```shell
nvm install 11.4.0
```

This does not pickup chagnes to the post itself

Now set the active node version for the current directory to 11.4.0
```shell
nvm use 11.4.0
```

Other useful commands
```shell
nvm ls # Versions installed on your system
nvm ls-remote # All versions available for installation
nvm current # Show the node version in use (node -v should return the same)
```

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
