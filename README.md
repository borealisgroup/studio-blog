# The Digital Studio Blog

## Summary

We're using [Gatsbyjs](https://www.gatsbyjs.org/) to build our static blog.  
Currently the [blog](https://blog.borealisdigitalstudio.com) itself is hosted through GitHub pages.

A Very rudimentary pipeline has been setup though [Heroku](https://www.heroku.com) so we can have it deployed automatically and so we can have somewhat of a test environment for less tech savvy people.

## Writing a blogpost

### Examples
A simple example about [osmium](/src/examples/blog-post.md) is included in the repo, it contains different markdown elements so you can have a look at what's possible. For more detailed examples please have a look at one if our our blogposts or check out [GitHub's guide to markdown](https://guides.github.com/features/mastering-markdown/).

Currently blog posts are written in markdown and picked up from the [blog folder](/content/blog/) this should make it accessible for everyone. You can of course integrate with different data sources or write in any format you want.

### Writing

#### editors
If you'd like a visual mardown editor have a look at these:

| Os      | Editors                                                  |
|---------|----------------------------------------------------------|
| Mac     | [Macdown](https://macdown.uranusjr.com/)                 |
| Windows | [Typora](https://typora.io/), [Caret](https://caret.io/) |

Of course any other editor will do, and adding posts directly from GitHub is also an option

#### Get started

The first step would be to create a new folder inside [blog folder](/content/blog/), This folder will contain your post and any images you'd like to display. This way we can keep everything somewhat together.

Next up, my advise would be to copy any of the existing blog posts if they match what you had in mind or copy the example blog post about [osmium](/src/examples/blog-post.md).

Don't forget to rename the file you copied, it will help keeping an overview.

Next up fill in the metadata about yourself, it looks like this in the example post
```yml
title: And so Osmium was born
date: "2019-04-29T18:00:00.169Z"
author: Smithson Tennant
authorSocial: "https://en.wikipedia.org/wiki/Smithson_Tennant"
description: A summary on Osmium. The name and the element
```
This is rather important if you'd like people to be able to find your online profile through the blogpost, if you don't fill in your name and link it to Borealis maybe.

As a final step you can finally start writing by editing the file you just created or copied

## deployment

Our pipeline is as follows

 - Create a pull request to `master`
 - Ci will deploy a very small app for this so we can preview it, or you can link people to it. (currently this is a pr app on heroku)
 - Once finished have someone proofread and merge into `master`
 - TODO: Ci will deploy it, this is done to the `gh-pages` branch
 - TODO: if all is well the [blog](https://blog.borealisdigitalstudio.com) is now updated with your post
 - TODO: CROSSPOST TO ALL THE SOCIAL MEDIA! (cue "X all the Y meme")

Deployment to the gh-pages branch can be triggered using:

```bash
npm run deploy
```

This deploys to GitHub pages which has been setup to resolve to our own domain.

## Footnote

And that should be about it, we hope you enjoy writing blog posts. 
For any issues or questions feel free to reach out though the issues on GitHub.

