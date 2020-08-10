# Project - ReactJS app.

Name: John McCann

## Overview.
For this assignment I chose to expand the MoviesApp with developed in the labs to include some nice additional features.

 
 + Feature 1 - My first additional feature enable the user to view the cast details of any movie visible on the app.
 + Feature 2 - The user can then click on a more details link of any actor to view the actors particular details including headshot, biography etc.
 + Feature 3 - I also included a feature which enabled the user to click on a link to view the crew deatils on a particular  movie
 + Feature 4 - The Homepage of the App also includes a link to any upcoming movies, enabling the user to click on this link and view what movies are hitting the big screen soon.
 

## Setup requirements.

Download and unzip this archive. Open a terminal window, go to the base folder and type: $ npm install. To view the App type: $ npm start. To run storybook type: $ npm run storybook

## API Data Model.


......[For projects that expanded the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........
+ Cast Details

[![appcast.jpg](https://i.postimg.cc/WpYHrrVT/appcast.jpg)](https://postimg.cc/XXFL6rXz)

- `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}` - https://api.themoviedb.org/3/movie/581392/credits?api_key=d5c2075c77402f5f5504782f8b185a97 - {
id: 581392,
cast: [
{
cast_id: 2,
character: "Jung-seok",
credit_id: "5c616cf8c3a3684f97d5c13f",
gender: 2,
id: 83014,
name: "Kang Dong-won",
order: 0,
profile_path: "/9rbBUmRPv7DY989yUxBiVjZMFyW.jpg"
},
{
cast_id: 3,
character: "Min-jung",
credit_id: "5c616d009251412fbcfa795c",
gender: 1,
id: 1244822,
name: "Lee Jung-hyun",
order: 1,
profile_path: "/coghPRuqkIs5EohJ1mwgEvEJkzv.jpg"
},
{
cast_id: 4,
character: "Joon",
credit_id: "5d157ba550f7ca001e147cd4",
gender: 1,
id: 1299244,
name: "Lee Re",
order: 2,
profile_path: "/kengkYowGTbsIAfFPb1lELIZ8Ob.jpg"
},
{
cast_id: 5,
character: "Elder Kim",
credit_id: "5d157bae50f7ca00271468fd",
gender: 2,
id: 554945,
name: "Kwon Hae-hyo",
order: 3,
profile_path: "/3sCMSQVdY2mqYYq3jj4u9JWRoTt.jpg"
},
{
cast_id: 11,
character: "Sergeant Hwang",
credit_id: "5e58a58af48b3400197a5b4b",
gender: 2,
id: 573792,
name: "Kim Min-jae",
order: 4,
profile_path: "/tcjIFGpAh3cCWbnquET7pjOs2nv.jpg"
},

+ Crew Details 

[![appcrew.jpg](https://i.postimg.cc/Y9GbzDM7/appcrew.jpg)](https://postimg.cc/hznLSrXZ)

- `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}` - https://api.themoviedb.org/3/movie/581392/credits?api_key=d5c2075c77402f5f5504782f8b185a97 - {
id: 581392,

crew: [
{
credit_id: "5f243fa366eba70035840254",
department: "Sound",
gender: 0,
id: 43565,
job: "Sound Supervisor",
name: "Kim Suk-won",
profile_path: null
},
{
credit_id: "5f243f87e22d280038602a15",
department: "Costume & Make-Up",
gender: 1,
id: 43570,
job: "Costume Design",
name: "Cho Sang-kyung",
profile_path: "/aTd5Tq5P6a41Q4kYRn9yxuj8xy8.jpg"
},
{
credit_id: "5f243f75f0647c00322182dc",
department: "Sound",
gender: 2,
id: 929598,
job: "Original Music Composer",
name: "Mowg",
profile_path: "/zj4xiqKn4eQnGzcKbY7THTSMrN3.jpg"
},
{
credit_id: "5c616cefc3a3684f90d5cf92",
department: "Directing",
gender: 2,
id: 939147,
job: "Director",
name: "Yeon Sang-ho",
profile_path: "/ux5voUQtKPXMpbWIR3WYAboNYAH.jpg"
},
{
credit_id: "5d2e7d9427d9cc00147c2105",
department: "Writing",
gender: 2,
id: 939147,
job: "Writer",
name: "Yeon Sang-ho",
profile_path: "/ux5voUQtKPXMpbWIR3WYAboNYAH.jpg"
},

+ Person Details

[![appperson.jpg](https://i.postimg.cc/Wz9zp8qD/appperson.jpg)](https://postimg.cc/QKTh0pbs)

- `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}` - https://api.themoviedb.org/3/person/31?api_key=d5c2075c77402f5f5504782f8b185a97 - 
{
birthday: "1956-07-09",
known_for_department: "Acting",
deathday: null,
id: 31,
name: "Tom Hanks",
also_known_as: [
"Thomas Jeffrey Hanks",
"Том Хэнкс",
"توم هانكس",
"トム・ハンクス",
"톰 행크스",
"ทอม แฮงส์",
"汤姆·汉克斯",
"Том Генкс",
"Том Хенкс",
"Томас Джеффрі Генкс",
"Τομ Χανκς",
"टॉम हैंक्स",
"ടോം ഹാങ്ക്സ്"
],
gender: 2,
biography: "Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon. Hanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter. Hanks' other notable films include the romantic comedies Sleepless in Seattle (1993) and You've Got Mail (1998); the dramas Apollo 13 (1995), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), and Cloud Atlas (2012); and the biographical dramas Saving Mr. Banks (2013), Captain Phillips (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also appeared as the title character in the Robert Langdon film series, and has voiced Sheriff Woody in the Toy Story film series. Description above from the Wikipedia article Tom Hanks, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
popularity: 47.477,
place_of_birth: "Concord, California, USA",
profile_path: "/mKr8PN8sn80LzVaZMg8L52kmakm.jpg",
adult: false,
imdb_id: "nm0000158",
homepage: null
}

+ Upcoming Movies 

[![appupcomingmovies.jpg](https://i.postimg.cc/Fzt5yLtP/appupcomingmovies.jpg)](https://postimg.cc/WF7Hjt1r)

- `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1` - {
results: [
{
popularity: 95.779,
vote_count: 362,
video: false,
poster_path: "/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
id: 385103,
adult: false,
backdrop_path: "/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
original_language: "en",
original_title: "Scoob!",
genre_ids: [
12,
16,
35,
10751
],
title: "Scoob!",
vote_average: 7.6,
overview: "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
release_date: "2020-07-08"
},
{
popularity: 77.797,
vote_count: 26722,
video: false,
poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
id: 27205,
adult: false,
backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
original_language: "en",
original_title: "Inception",
genre_ids: [
28,
12,
878
],
title: "Inception",
vote_average: 8.3,
overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.",
release_date: "2010-07-15"
},
{
popularity: 69.082,
vote_count: 3,
video: false,
poster_path: "/dKjD3DTZjRI3Ipkf7Oz5zAILnwD.jpg",
id: 659991,
adult: false,
backdrop_path: "/5nRyaVklxyA9OkxqZaPv1KBRqpd.jpg",
original_language: "en",
original_title: "Made in Italy",
genre_ids: [
35,
18
],
title: "Made in Italy",
vote_average: 6.3,
overview: "A bohemian artist travels from London to Italy with his estranged son to sell the house they inherited from his late wife.",
release_date: "2020-08-06"
},
{
popularity: 49.644,
vote_count: 2809,
video: false,
poster_path: "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
id: 508439,
adult: false,
backdrop_path: "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
original_language: "en",
original_title: "Onward",
genre_ids: [
12,
16,
35,
14,
10751
],
title: "Onward",
vote_average: 7.9,
overview: "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
release_date: "2020-02-29"
},
{
popularity: 41.316,
vote_count: 0,
video: false,
poster_path: "/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg",
id: 587792,
adult: false,
backdrop_path: "/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg",
original_language: "en",
original_title: "Palm Springs",
genre_ids: [
35,
14,
9648,
10749
],
title: "Palm Springs",
vote_average: 0,
overview: "When carefree Nyles and reluctant maid of honor Sarah have a chance encounter at a Palm Springs wedding, things get complicated when they find themselves unable to escape the venue, themselves, or each other.",
release_date: "2020-08-20"
},

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories.

[![story.jpg](https://i.postimg.cc/xTBcNk7Z/story.jpg)](https://postimg.cc/w7c6SB95)

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions

+ Cast Details
[![cast.jpg](https://i.postimg.cc/zf7hhzTR/cast.jpg)](https://postimg.cc/PLLNsk3t)
+ Crew Details
[![crew.jpg](https://i.postimg.cc/dDc3Xp8Y/crew.jpg)](https://postimg.cc/RJGvJPss)
+ Person Details
[![person.jpg](https://i.postimg.cc/x1tMZG14/person.jpg)](https://postimg.cc/v4x4gV9r)
+ Upcoming Movies
[![upcoming.jpg](https://i.postimg.cc/MGLR6WR0/upcoming.jpg)](https://postimg.cc/cKQ6TGF6)

### Routing.

...... Insert a list of the routes supported by your app and state the associated view.

+ /movies/:id/credits - displays the cast details for a particular movie.
+ /movies/:id/crewcredits - displays the cast details for a particular movie.
+ /person/:id - detail view of a particular actor.
+ /movie/upcoming - displays the list if all upcoming movies

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/castDetails/index.js
+ useContext hook - src/components/contexts/upcomingmoviesContext.js
+ custom Hooks - src/components/hooks/usePerson.js
+ useReducer hook - src/components/contexts/upcomingmoviesContext.js
+ Extended Link - src/components/personDetails/index.js
+ Programmatic navigation - src/components/castDetails/index.js

# Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 
All technologies/techniques used in this modified App were a continuation of skills developed in REACT lectures/labs and these acted as the only necessary forms of reference to complete this Assignment
