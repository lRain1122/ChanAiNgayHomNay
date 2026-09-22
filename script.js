const movies = [

    {

        name: "j68",

        image: "images/J68.jpg",

        link: "https://example.com"

    },

    {

        name: "j94",

        image: "images/J94.jpg",

        link: "https://example.com"

    },

    {

        name: "j58",

        image: "images/j58.jpg",

        link: "https://example.com"

    },

    {

        name: "83 Oasis",

        image: "images/O83.jpg",

        link: "https://example.com"

    },

    {

        name: "98 Oasis",

        image: "images/O98.jpg",

        link: "https://example.com"

    },

    {

        name: "J90",

        image: "images/J90.jpg",

        link: "https://example.com"

    }

];

const openButton =

    document.getElementById("openButton");

const result =

    document.getElementById("result");

const movieImage =

    document.getElementById("movieImage");

const movieName =

    document.getElementById("movieName");

const movieLink =

    document.getElementById("movieLink");

openButton.addEventListener("click", function () {

    const randomIndex =

        Math.floor(Math.random() * movies.length);

    const movie =

        movies[randomIndex];

    movieImage.src =

        movie.image;

    movieName.textContent =

        movie.name;

    movieLink.href =

        movie.link;

    result.style.display =

        "block";

});
