## Table of contents
* [General info](#general-info)
* [Functional Requirements](#functional-requirements)
* [Technologies](#technologies)
* [Database preview](#database-preview)
* [Aplication preview](#aplication-preview)
* [Setup](#setup)



## General info
<div>
<p align="justify"> 
Co-created web application for analyzing the popularity of music genres in various countries based on data from Spotify and Deezer.
The analysis in the application is based on playlists containing the 50 most popular songs in a given country. Each country is assigned only one playlist, 
which is updated daily by the Spotify service. Data from the Spotify service is retrieved using a dedicated Web API. 
The project also utilizes the Deezer API to obtain information about music genres.
</p>
</div>

## Functional requirements
###### • The user has the ability to register and log in.
###### • The user has the ability to select a country from a list for which they want to conduct an analysis.
###### • The user should have the ability to see the most popular music genres in a given country.
###### • The user has the ability to view a summary of the generated results.
###### • The system has an administrator panel, where the administrator can edit the data in the database (adding, editing, and deleting countries).
###### • User data should be secured using JWT tokens.
###### • The system displays data from the database.



## Technologies 

React, Spring Boot, Java, MySQL



## Database preview

#### Project tree:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/570a793c-198c-4cb2-a9e1-690f0ee73624)

#### Database structure:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/510ce620-cb87-43a1-97fc-335260e52a80)

#### Excample data in play_list entity:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/cf99f098-c4b9-4ebc-b9a2-3d68d2d5fda5)



## Aplication preview

#### LogIn page view:
![obraz](https://github.com/Bunzu013/Spotify_data/assets/83347605/6e2c7520-4c6d-487c-ac2c-40abc58cf166)

#### Registry page view:
![obraz](https://github.com/Bunzu013/Spotify_data/assets/83347605/1c2ef098-d77a-4910-8dee-3b8d2891d333)

#### Main page view before choosing country:
![obraz](https://github.com/Bunzu013/Spotify_data/assets/83347605/5505915c-6c36-4259-a832-5fd1c3e2c3d6)

#### Main page before choosing country. In this case Germany:
![obraz](https://github.com/Bunzu013/Spotify_data/assets/83347605/82669ba8-86d9-44de-89e5-025b868e213f)

#### Admin panel page view:
![obraz](https://github.com/Bunzu013/Spotify_data/assets/83347605/6dcf4b45-c978-496e-a551-fe27102a8628)



## Setup
#### Used ports:
```
front-end:3000
back-end: 8080
database: 3306
```

#### 1. Create database with name: Spotify
#### 2. Server side
```
$ mvn clean install
$ mvn spring-boot:run
```
#### 3. Client side
```
$ npm install
$ npm start
```

##### 4. Register new user and then change his isAdmin flag in database manualy. After that login and start adding new countries - example data in playList_seed file.



