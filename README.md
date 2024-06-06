Co-created web application for analyzing the popularity of music genres in various countries based on data from Spotify and Deezer.
The analysis in the application is based on playlists containing the 50 most popular songs in a given country. Each country is assigned only one playlist, 
which is updated daily by the Spotify service. Data from the Spotify service is retrieved using a dedicated Web API. 
The project also utilizes the Deezer API to obtain information about music genres.

Functional Requirements:
• The user has the ability to register and log in.
• The user has the ability to select a country from a list for which they want to conduct an analysis.
• The user should have the ability to see the most popular music genres in a given country.
• The user has the ability to view a summary of the generated results.
• The system has an administrator panel, where the administrator can edit the data in the database (adding, editing, and deleting countries).
• User data should be secured using JWT tokens.
• The system displays data from the database.

Ports:
front-end:3000
back-end: 8080
database: 3306

Starting project process described in file: Start

Tehnologies: React, Spring Boot, Java, MySQL
Project tree:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/570a793c-198c-4cb2-a9e1-690f0ee73624)

Database structure:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/510ce620-cb87-43a1-97fc-335260e52a80)

Excample data in play_list entity:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/cf99f098-c4b9-4ebc-b9a2-3d68d2d5fda5)

LogIn page view:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/ed844684-ded5-4f04-a849-9c03bc47cd8a)

Registry page view:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/66735ae1-f398-4500-9ca2-79e3cc567afa)

Main page view before choosing country:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/0e7fcf49-206a-4b8f-be98-2570940bcc6d)

Main page before choosing country. In this case Germany:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/a6f280da-b9f6-450f-b4c8-8aee94310733)

Admin panel page view:
![obraz](https://github.com/Bunzu013/Spotify/assets/83347605/b5cc008a-d6a4-4a67-beb8-81130e72f375)
