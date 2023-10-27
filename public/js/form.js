$(document).ready(function () {
    $('#movie-form').submit(function (event) {
        event.preventDefault(); 

        const name = $('#name').val();
        const synopsis = $('#synopsis').val();
        const genre = $('#genre').val();
        const duration = $('#duration').val();
        const director = $('#director').val();
        const actors = $('#actors').val().split(',');


        fetch("http://localhost:3000/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, synopsis, genre, duration, director, actors})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle response from the server
            alert("Movie added to the database");
            console.log(data);
            window.location.href = '../html/index.html';
        })
        .catch(error => {
            // Errors that occurred during the fetch.
            aler('There was an error');
            console.error("Fetch error:", error);
        });

        $('#movie-form :input').val('');
        });

        
});
