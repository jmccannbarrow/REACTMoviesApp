import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import PersonDetails from "../src/components/personDetails";
import PersonHeader from "../src/components/headerPerson";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";




const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const upcoming = {
  
    adult: false,
    backdrop_path: "/aWsVwgG324dFQS5xHEjB7OCOT9w.jpg",
    belongs_to_collection: {
    id: 619537,
    name: "Train to Busan Collection",
    poster_path: "/tHf6vEy8YlXlICu9HBaHK0kEJ89.jpg",
    backdrop_path: "/5Zc8CFBJOUFLn7hwbXRjILj66Wz.jpg"
    },
    budget: 17000000,
    genres: [
    {
    id: 28,
    name: "Action"
    },
    {
    id: 27,
    name: "Horror"
    },
    {
    id: 53,
    name: "Thriller"
    }
    ],
    homepage: "https://www.wellgousa.com/films/train-to-busan-presents-peninsula",
    id: 581392,
    imdb_id: "tt8850222",
    original_language: "ko",
    original_title: "반도",
    overview: "Peninsula takes place four years after Train to Busan as the characters fight to escape the land that is in ruins due to an unprecedented disaster.",
    popularity: 35.94,
    poster_path: "/7S9RvfMBWSTlUZ4VbxDY7oLeenk.jpg",
    production_companies: [
    {
    id: 20064,
    logo_path: "/6HvsksiEE7DknfZU5HT1mUs563q.png",
    name: "Next Entertainment World",
    origin_country: "KR"
    },
    {
    id: 103875,
    logo_path: null,
    name: "RedPeter Film",
    origin_country: "KR"
    }
    ],
    production_countries: [
    {
    iso_3166_1: "KR",
    name: "South Korea"
    }
    ],
    release_date: "2020-07-15",
    revenue: 0,
    runtime: 114,
    spoken_languages: [
    {
    iso_639_1: "en",
    name: "English"
    },
    {
    iso_639_1: "ko",
    name: "한국어/조선말"
    }
    ],
    status: "Released",
    tagline: "4 years later...",
    title: "Peninsula",
    video: false,
    vote_average: 6.1,
    vote_count: 29
    
};

const actor = {
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
  };




storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));



storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });


  storiesOf("Home Page/UpcomingMoviesHeader", module).add("default", () => (
    <MoviesHeader title="Upcoming Movies" numMovies={10} />
  ));

  storiesOf("Home Page/UpcomingMovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [upcoming, upcoming, upcoming, upcoming, upcoming];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <div></div>
        )}

    

      />
    );
  });


storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));




storiesOf("Person Details Page/PersonDetails", module).add("default", () => (
  <PersonDetails person={actor} />
));




storiesOf("Person Details Page/PersonHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonHeader person={actor} />);


  

 