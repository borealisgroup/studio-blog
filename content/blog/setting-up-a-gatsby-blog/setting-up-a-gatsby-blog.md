---
title: Setting up a gatsby blog
date: "2019-04-30T22:40:32.169Z"
author: Lewis Fidlers
authorEmail: lewis.fidlers@borealisgroup.com
authorAvatar: "https://www.gravatar.com/avatar/fba5cc09df8d258978f01f7924611cc6?s=50d=mp"
authorSocial: "https://www.github.com/lewis-fidlers"
description: Setup a Gatsby blog using mardown files as a source
---

## Let's get started
Before we start please make sure you have [Git](https://git-scm.com/) installed.
### Install nvm
> You can skip this if you already have a working node installation, however I would still recommend using it.

This is a node version manager. It will allow you to install different versions of node on your machine and set the version per project you are working on.

On mac/linux run the following command in your terminal
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

On Windows have a look at [nvm-windows](https://github.com/coreybutler/nvm-windows)

Pick a location for your blog, we'll put it in `~/git/personal/blog`

Next up use nvm to install the latest, or a desired node version:
```shell
nvm install 12.2.0 # This was the latest at the time of writing
```

You can verify the node version for the current directory with `nvm current`

Other useful nvm commands
```shell
nvm ls # Versions installed on your system
nvm ls-remote # All versions available for installation
nvm install VERSON_OF_NODE # Install a specific version of node
nvm use VERSON_OF_NODE # Set the node version for the folder you're in
nvm current # Show the node version in use (node -v should return the same)
```

## Setup Gatsby
Gatsby comes with a nice cli, install it using:

```js
install -g gatsby-cli
```
run `gatsby -v` to verify the installation at the time of writing: 2.5.12.

### Choose and install a starter

Now we'll setup a new gatsby site through the cli, using this [Gatsby starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/), have a look at the [Preview](https://gatsby-starter-blog-demo.netlify.com/) before you use it.

If you'd like another one have a look at [this list of starters](https://www.gatsbyjs.org/starters/?s=blog&v=2).

After choosing a starter run the following command, this will initialize the blog inside the directory you made earlier.
```
gatsby new . https://github.com/gatsbyjs/gatsby-starter-blog
```
If you want the blog in a new folder replace the `.` with the folder name.

### verify the installation

If all went well your blog has been setup, however it is not running yet. Run `gatsby develop` in your terminal. Now visit `http://localhost:8000` and you should be able to see your bright and shiny new blog

## Content
Of course a blog needs content, in the current setup content is retrieved through markdown files in the `/content/blog` folder so have a look at these if you want some examples.

Markdown however does not have to be the only way of adding content, more on this later.

### Adding a new blogpost
To add a new post simply add a new folder which contains you post eg: `/content/blog/dummy-post/dummy-post.md`

At the start of the post insert some metadata
```yml
---
title: You're post tile
date: Date you are writing the post eg: "2019-05-17T22:40:32.169Z"
description: A small description which will be displayed in the post overview
---
```

This data will be displayed somewhere on the blogpost.

Below the data you can just start writing your blog as you would any mardown file.

### Altering data
Since everyone hase a slightly different use case, the current data provided might not be enough. Let's change it a bit so it matches what we want to achieve. For our exampel we would like multiple people to write blogposts, it would be nice to have everyone write them in their own name.

#### Graphql
We retrieve data using [graphql](https://graphql.org/), to test queries you can use the [graphical interface](http://localhost:8000/___graphql).

An example can be found on the `/pages/index.js` file At the bottom it has a query which should look like this:
```js
export const pagequery = graphql`
  query {
    site {
      sitemetadata {
        title
      }
    }
    allmarkdownremark(sort: { fields: [frontmatter___date], order: desc }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatstring: "mmmm dd, yyyy")
            title
            description
          }
        }
      }
    }
  }
`;
```

Our goal is to add some info about the author to every blogpost.

#### 1. Provide data in the blogpost  
This step is rather simple, we just add it at the top of our blogpost.

eg:
```yml
---
title: You're post tile
date: Date you are writing the post eg: "2019-05-17T22:40:32.169Z"
description: A small description which will be displayed in the post overview
author: Lewis Fidlers
authorSocial: "https://www.github.com/lewis-fidlers"
---
```

That's it, the data will now be available for us to query.

#### 2. Retrieve the data through your adapted query
Navigate to the [graphical interface](http://localhost:8000/___graphql), here we enter our updated query

```js
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            authorAvatar
          }
        }
      }
    }
  }
```

This query requires a slug to find the actual post, so don't forget to enter this in the query variables section.
For us it looks like this, of course you need to fill this in using your own `/folder/filename.md`
```
{
  "slug": "/setting-up-a-gatsby-blog/setting-up-a-gatsby-blog/"
}
```

If all went well the result will now also return your author and the social link.

#### 3. Display it on the blog post

For our last step we'd like to update The data displayed int he blog post.

Open up the `src/templates/blog-post.js` file, this file is "conveniently" a template for every post we make from here on. At the bottom expand the query so it also queries our newly added data, as we did in the previous step.

The frontmatter part of the query should now look like this:
```js
frontmatter {
  date(formatString: "MMMM DD, YYYY")
  title
  description
  author
  authorSocial
}
```

Now move up in the file and change the Bio component.

```jsx
<Bio
  author={post.frontmatter.author}
  authorSocial={post.frontmatter.authorSocial}
/>
```

Here we pass in the new data to the bio component

For the last step we change the Bio component to display the newly provided info.

Open up `src/components/bio.js` and change

```html
Written by <strong>{author}</strong> who lives and works in San
```

With something you want yourself, our example is:
```html
Written by <a href={`${authorSocial}`}>{author}</a> for <strong>{company}</strong>
```

### That should be about it

This should give you an idea of how to setup and change a blog using [Gatsby](https://www.gatsbyjs.org/) and one of their starters. It is however still a pretty brief summary of what's possible so please check out their docs and play with it.
Feel free to reach out if you have any questions, or if you find anything anything that's incorrect.

