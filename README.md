## Preview

This is a MEAN stack based blog. The static version was hosted on [github pages](https://pages.github.com/), while the online version was deployed to [heroku](https://www.heroku.com/).

 - static: https://nikaple.github.io/blog/
 - online: https://nikaple-blog.herokuapp.com/
 
## Installation

```
git clone https://github.com/Nikaple/blog.git
cd blog
npm install
cd client-src
npm install
```

## Build

This project is built with `angular-cli`, you should first install it globally:
```
npm install -g angular-cli
```

For the static version, first open `client-src/src/app/utils/config.ts`, and change variable `ENV` to `'dev'`.
```
cd client-src
ng serve
```

For the online version, keep the variable `ENV` to `'prod'`. To start the server, run:
```
npm start
```
Open up a new shell window, run:
```
cd client-src
ng serve
```


## License

MIT.
