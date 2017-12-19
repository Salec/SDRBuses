# SDR BUS

React-Redux web application to check the path and time to reach destination of the buses of Santander

Open API used: http://datos.santander.es

Currently cors is disabled for datos.santander.es API, to make it work under chrome install [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

See http://www.tusantander.es/red-lineas for more information of the current Santander coach system.


### Install
Run ```npm install``` to download all the dependencies 
 
### Run
* In development start server with ```npm start``` Server will be deployed in [http://localhost:8080/](http://localhost:8080/) 
* To generate production code, run  ```npm run build```

#### TODO LIST
- [X] Add multilanguage 
- [ ] Show load on fetch times
- [ ] Update webpack
- [X] Publish --> Add ccs
- [ ] Write tests
- [ ] remove console.log in prod (uglifyjs drop_console)
- [X] Add contributor page
- [ ] Add favourite stops
- [ ] Add point to recharge TUS card
- [ ] Add prices of the trips
- [ ] Rework maps to plot different routes  
- [ ] Locate user using HTML5 functions and show nearby stops
- [ ] Cookies disclaimer 
- [X] Github project link
- [ ] Add public contact 
- [ ] create another action to represent current stop on the map (move center to stop)
- [ ] Twitter updates (tags from santanderBus and mentions related...)

#### Contribute

You can submit pull request and comments


#### Contributors


<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars1.githubusercontent.com/u/4624133?s=460&v=4">
        </br>
        <a href="https://github.com/Salec">Fernando Martín</a>
      </td>
    </tr>
  <tbody>
</table>