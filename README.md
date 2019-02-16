# CRUDHeroes

CRUDHeroes is a web solution to manage heroes profiles, classifing the heroe by power, weakness and studio.
This project provides a good sample of how-to-do a CRUD in Node.js using MongoDB to persist the data's application.

![CRUDHeroes - Home](https://github.com/fabriciohsilva/CRUDHeroes/blob/develop/img_sample/CRUDHeroes_Home.jpg?raw=true)


## Table of Contents

-   [Installation](https://github.com/fabriciohsilva/CRUDHeroes#installation)
	- [Setup](https://github.com/fabriciohsilva/CRUDHeroes#setup)
	- [Browser Compatibility](https://github.com/fabriciohsilva/CRUDHeroes#browser-compatibility)
-   [How it works](https://github.com/fabriciohsilva/CRUDHeroes#how-it-works)
-   [Credits](https://github.com/fabriciohsilva/CRUDHeroes#credits)
	- [Top Contributors](https://github.com/fabriciohsilva/CRUDHeroes#top-contributors)
	- [License](https://github.com/fabriciohsilva/CRUDHeroes#license)


## Installation

First make sure you have all the apps necessaries to execute the solution:

- node.js >= v10.15.1
- mongodb >= v4.0.5
- npm >= v6.4.1

Then checkout the code and install the dependencies:
```
git clone https://github.com/fabriciohsilva/CRUDHeroes.git -b stable --single-branch --recursive

cd ./CRUDHeroes
npm install
```

Running standalone:
```
npm start
```

### Setup

<p>
This solutions is configurated by default to connect in MongoDb without authentication.

If your database requires authentication make sure to setup the information in app.js file.

Configure your informations, using the code below like sample:
</p>

```
mongoose.connect('mongodb://username:password@host:port/CrudHeroes?options...', { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  db.close();
});
```

### Browser Compatibility

CRUDHeroes has been tested successfully with:

-   Chrome 70.0
-   Egde

This solutions it's not compatible with Internet Explorer browser

## How it works

This application allow users to create a database of all their favorites Heroes. They can register the studios and then associate the heroes to the studios registered.

The link default to execute the solution is:

```
http://localhost:3000/
```

To start using the program click "Studio Page" button

![CRUDHeroes - Studio Page](https://github.com/fabriciohsilva/CRUDHeroes/blob/develop/img_sample/CRUDHeroes_Studio_List.jpg?raw=true)

To add a new Studio, click on "Create Studio", fill all necessary data and click "Save".

To edit a Studio informations click on "pencil" icon.

![CRUDHeroes - Studio](https://github.com/fabriciohsilva/CRUDHeroes/blob/develop/img_sample/CRUDHeroes_Studio.jpg?raw=true)

To remove a Studio click on "trash can" icon.

After register the Studio the users can register Heroes.
On Home page click "Heroes Page"


![CRUDHeroes - Heroes Page](https://github.com/fabriciohsilva/CRUDHeroes/blob/develop/img_sample/CRUDHeroes_Hero_List.jpg?raw=true)

To add a new Hero, click on "Create Hero", fill all necessary data and click "Save".

![CRUDHeroes - Hero](https://github.com/fabriciohsilva/CRUDHeroes/blob/develop/img_sample/CRUDHeroes_Hero.jpg?raw=true)

To edit an Hero informations click on "pencil" icon.

To remove an Hero click on "trash can" icon.

## Credits

- NodeJs
- MongoDb
- NPM
- Express Generator
- ESLint 
- Prettier
- Mongoose
- Express Validator
- Materialize CSS


### Top Contributors

|   	|   	|   	|   	|
|:---:	|:---:	|:---:	|:---:	|
[<img src="https://avatars2.githubusercontent.com/u/22605031?s=460&v=4" width="100px;"/><br /><sub><b>Fabrício Henrique</b></sub>](http://fabriciohsilva.github.io/)  | [<img src="https://avatars0.githubusercontent.com/u/38701708?s=400&u=50c50c540d8433772913975dc39cf26ebf2fac34&v=4" width="100px;"/><br /><sub><b>Iolanda Santos</b></sub>](https://www.linkedin.com/in/iolanda-maria-louren%C3%A7o-de-oliveira-santos-187131162/)<br /> | [<img src="https://avatars1.githubusercontent.com/u/47501771?s=460&v=4" width="100px;"/><br /><sub><b>Michele Silva</b></sub>](https://www.linkedin.com/in/michelehorasilva/)<br />          | [<img src="https://avatars2.githubusercontent.com/u/16840541?s=460&v=4" width="100px;"/><br /><sub><b>Thaysa Santos</b></sub>](https://thaymara.github.io/)<br />
|   	|   	|   	|   	|  

### License

CRUDHeroes is released under the  [MIT License](https://github.com/fabriciohsilva/CRUDHeroes/blob/master/LICENSE.md).
