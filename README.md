# Nextify


Nextjs is a wonderful tool for bootstrapping a new project, but what if you need more?
I've made some opinionated decision with Nextify to allow the creation of a new
website in moments, ready to deploy on Netlify or Vercel.



## Features

Nextify creates static websites, and falls under the principles of the [Jamstack](https://jamstack.org).
It has built-in SEO from the `next-seo` library, a custom starter template, tailwindcss integration,
and many other features!


## Quick start

Clone the repository, install the dependencies, add your content and build! With a netlify or
vercel account, you can have a functioning website in moments

```
git clone git@github.com:johnckealy/nextify.git
```

>Note: Nextify is still in development, and I haven't streamlined the git workflow just yet,
>so please also follow the instructions below for now and I'll have something a little more
user-friendly soon!

First, we need to instatiate a new git repo. You can do this by running this commmand in the
terminal:

```
rm -rf .git && git init && git add . && git commit -am "inital commit"
```

Then we can get going:
```
yarn install && yarn build
```

Or to run the development server,
```
yarn dev
```
