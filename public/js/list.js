
document.addEventListener("DOMContentLoaded", function () {

    fetch("http://localhost:3000/movies") 
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data here
            console.log(data);
            loadData(data);
        })
        .catch(error => {
            // Handle  errors that occurred during the fetch.
            console.error("Fetch error:", error);
        });
});


function loadData(data){

    const noData = document.getElementById('no-data');
    if(data.length === 0){
        noData.style.display = 'table-cell';
    }
    else{
        noData.style.display = 'none';
        const table = $("#movies-table");
        data.forEach(function(dict) {
            const newRow = $("<tr>");
            newRow.addClass("align-middle");
        
            for (const key in dict) {
                if(key !== "_id"){
                    if (dict.hasOwnProperty(key)) {
                        const cell = $("<td>");
                        if(key === "synopsis"){
                            const div = $("<div>").text(dict[key]);
                            
                            cell.append(div);
                            cell.addClass("synopsis");
                        }else{
                            cell.text(dict[key]);
                        }
                        newRow.append(cell);
                    }
                }
            
            }
            table.append(newRow);
      });
    }
}

