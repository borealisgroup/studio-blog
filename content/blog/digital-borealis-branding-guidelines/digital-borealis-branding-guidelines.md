---
title: "Improving accessibility branding guidelines"
date: "2019-06-13T10:09:32.169Z"
author: "Lennert Van Sever"
authorEmail: "lennert.vansever@borealisgroup.com"
authorAvatar: "https://avatars1.githubusercontent.com/u/23064517?s=400&u=3eef2f2dbadc082c1d74a76aab1a66b4b7ed30a9&v=4"
authorSocial: "https://github.com/lennertVanSever"
description: "Improving the accessibility of the Borealis branding guidelines through a web application"
---
Today the Borealis Branding guidelines are available in PDF format. It's ideal to print out and to read it on physical paper but it's suboptimal in the reality of today where everyone is trying to read them on a computer screen. It's hard to navigate the 128 pages if you are looking for one specific item like the Borealis blue hex colour value.

A second hassle is to find the latest version of the branding guidelines, new employees don't know where they are and some employees don't even know they exist. If however, you get the guidelines, you are never sure that you have the latest version. If there is a newer version available than what you currently have, you are probably too lazy to update it.  

Another inconvenience is the lack of access to resources. When you read about the guidelines on how to use a logo, you don't know where to download that specific logo. It happens quite often that someone downloads the Borealis logo from an unofficial source. This leads to the misuse of logos.

To summarise the accessibility problems with the Borealis branding guidelines: Searchability, versioning and access to resources.

## Proposed solution

An online digital version of the branding guidelines in the form of a web application. Right now only a [static prototype](https://sketch.cloud/s/v1D28/a/1ZZRwb/play) has been developed to showcase the possible capabilities. [**please visit the link before reading further**](https://sketch.cloud/s/v1D28/a/1ZZRwb/play)

Only parts of the guidelines have been prototyped to give an impression of which direction we want to take for the solution. When validated the rest of the guidelines can be prototyped.

### Navigation

The prototype has a side navigation bar including the main items of the Borealis branding guidelines. It can easily be extended and the nature of the design keeps everything scannable. 

[Navigation preview](https://sketch.cloud/s/v1D28/a/bddyVZ/play)

### Header

The header contains a general search bar where anything within the guidelines can be found via a simple search query. Right next to the search bar there is a version selector. Here you can select the version of the design guide. Ideal for testing alpha/beta updates or to go back to previous versions to see the updates. Another nice to have is to see the changelogs for every version.

[Header preview](https://sketch.cloud/s/v1D28/a/qkkyJe/play) 

*The search capabilities are not yet prototyped*

### Specific developers features

Using the guidelines as a developer is a different experience since we can integrate the [libraries](https://github.com/borealisgroup/borealis-js) that follow the guidelines. A toggle should enable developer features. 

*So far this behaviour hasn't been prototyped*

### Scannable and layered information

People on the web [rarely read text word by word](https://www.nngroup.com/articles/how-users-read-on-the-web/). They scan the page and pick out whatever they need. Following this reasoning we made some information layered. Most of the pages contain boxes with the following structure: Image, Title and expandable arrow icon. When the user clicks on the title or arrow it should expand and show more information like a description.

[Expandable box preview](https://sketch.cloud/s/v1D28/a/5eJmVp/play)

*So far the behaviour of opening and closing are not yet prototyped*


### Logo page

On this page, a user can configure the Borealis logo and download it as an SVG file. For developers, a code block from the logo library should appear.

Whenever you configure the logo in a way that is violating the guidelines, for example only selecting the Aurora icon with a solid background. Then a warning ⚠️ should appear explaining that this specific configuration is a violation of the guidelines and downloading the logo should become impossible.

Underneath the logo configuration, there is a section "don'ts" which explains the way the logo **shouldn't** be used. Since this information is so close to the place where users will get their logo, it will naturally lead to less misuse of the logo.

Other information about the logo from the guidelines are listed underneath the "don'ts".

[Logo page preview](https://sketch.cloud/s/v1D28/a/1ZZRwb/play)

*The warning hasn't been prototyped yet*

*Not all the don'ts and information boxes are listed to save time*

### Colours page

Here users can find all the colours mentioned in the Borealis guidelines with a description for every category. Every colour has a name with a hex value that can easily be copied to the clipboard by clicking on it. Shades are also documented and the name of the shaded colour informs how much it deviates from the base colour. 

#### added colour values

We added for every primary colour one darker shade level since we saw in some applications like a side navigation sub menu that darker shades are preferable.

<img src="https://osmium-storybook.s3.eu-central-1.amazonaws.com/images/myborealis-navbar.png" alt="MyBorealis navigation bar" width="200"/>

We also propose to add extra shades to the "additional indicator" colours for the UI elements displayed underneath which is used in some applications

<img src="https://osmium-storybook.s3.eu-central-1.amazonaws.com/images/alert-boxes.png" alt="alert boxes showing shaded colours" width="400"/>

[Colours page preview](https://sketch.cloud/s/v1D28/a/3vzn7r/play)

*Only the primary colours are shown as an example since it takes to much time to prototype all the colours, coding it would be way more time efficient*

### Typography page

The only typographic base values defined in the guidelines are font families. In our [theming library](https://github.com/borealisgroup/borealis-js/blob/master/packages/theme/src/brands/borealis.json) we defined other values like font weight, line heights and font sizes.

Those typographic values are used for the configuration at the top of the page. An extra idea would be to add some preset values for paragraphs, titles (h1, h2, h3, ...), links etc so that we also create consistency for those elements.

The user can input their own text and copy the style via the "copy button" to the clipboard. When pasted in a program like Outlook it should keep the defined style if the correct fonts are set up.

The real benefit here is for developers, for them we could create a CSS code block which is linked to the defined values. Completed integrated with the [theming library](https://github.com/borealisgroup/borealis-js/blob/master/packages/theme/src/brands/borealis.json). 

[Typography page preview](https://sketch.cloud/s/v1D28/a/1ZnbK4/play)

### Icon page

The current guidelines only describe how we should design custom icons and it has a couple of examples. But not enough to display a full icon package. So far within Borealis, we haven't defined any icon package that should be used across digital projects. We propose to custom make or buy a guideline complaint icon package.

To show an **example** what it **could** look like, we copied the [icon package from Ant Design](https://ant.design/components/icon/). When clicking on an icon, it should download the SVG or if you are a developer it should also give you the option to copy the code from a library.

[Icon page preview](https://ant.design/components/icon/)

### Headline system page

A direct copy of the information described in the guidelines. Any extra information can be expanded from its respective box.

[Headline system page preview](https://sketch.cloud/s/v1D28/a/8m2lmY/play)

### Should branding guidelines be public or not?

Many companies already put their branding guidelines publicly online. For example:

- [IBM](https://www.carbondesignsystem.com/)
- [Salesforce](https://www.lightningdesignsystem.com/)
- [Starbucks](https://www.starbucks.com/static/reference/styleguide/)
- [Adobe](https://issuu.com/logobr/docs/adobe_brand_guidelines)
- [Audi](https://www.audi.com/ci/en/renewed-brand.html)
- [Dropbox](https://www.dropbox.com/branding/)
- [Facebook](https://en.facebookbrand.com/)
- [Greenpeace](http://ggw-prototype.goalgorilla.com/)
- [Walmart](http://walmartlabs.github.io/web-style-guide/)
- [...](http://styleguides.io/examples.html)

Making your branding guidelines public could bring the following benefits:

- It ensures that anyone who needs access to the guidelines can just access it with the click of a link. No need for login/registration pages or user management.
- It makes your branding guidelines crawlable for search engines like Google or Bing. When done right the following situation could happen: 
    1. Jane Doe needs the Borealis logo but she doesn't know that Borealis Branding guidelines exist
    2. When Jane doesn't know where to find something she does what every smart person does, she goes to Google and searches: "Borealis Logo"
    3. The first link from the search result is a link from the official Borealis Branding Guideline logo page
    4. Jane clicks on that link because it's exactly what she needs, she can configure/download the Borealis logo following the guidelines and immediately knows how she shouldn't use it. 
    5. Jane now also knows that Borealis Branding guidelines exist and she bookmarks it for later use.
- Making beautiful branding guidelines that are easy to use and accessible convinces naturally to anyone that we are taking a design at Borealis very seriously. Potential hires could be more eager to take a job at Borealis because of this attitude. You can even find [online listings of professional branding guidelines](http://styleguides.io/examples.html).

A reason to not do it is that you don't want that the competition can look into our guidelines and copy them. If someone is copying our guidelines for their own use, it means that we are doing something right. So take it as a compliment. I couldn't find any argument on Google supporting this statement, we just have to think twice about what we put public so that it doesn't hurt our business.