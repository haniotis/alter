# Alter marketing website

Alter marketing website, built on [Middleman](http://middlemanapp.com).

## Dependencies

- [Middleman](http://middlemanapp.com)
- [Sass](http://sass-lang.com/)
- [Livereload](https://github.com/middleman/middleman-livereload)
- [Autoprefixer](https://github.com/middleman/middleman-autoprefixer)
- [Webpack](https://github.com/webpack/webpack)
- [Yarn](https://github.com/yarnpkg/yarn)

## Local preview

Once you've installed the dependencies above:

```
git clone git@github.com:haniotis/alter.git
bundle install
yarn
bundle exec middleman
```

## Build and deploy

To build and deploy the website to GitHub pages, run the following commands. This will output the necessary files in the `build` folder and deploy the website.

```
rake build    # Compile all files into the build directory
rake publish  # Build and publish to GitHub Pages
```