let url = "http://localhost:3000/dogs";
let tableBody = document.querySelector("#table-body");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let dogeRow = document.createElement("tr");
      let dogeData = document.createElement("td");
      let dogeBreed = document.createElement("td");
      let dogeSex = document.createElement("td");
      let dogeButton = document.createElement("button");

      dogeData.innerHTML = element.name;
      dogeBreed.innerHTML = element.breed;
      dogeSex.innerHTML = element.sex;
      dogeButton.innerHTML = "Edit 🐶";

      dogeRow.appendChild(dogeData);
      dogeRow.appendChild(dogeBreed);
      dogeRow.appendChild(dogeSex);
      dogeRow.appendChild(dogeButton);
      tableBody.appendChild(dogeRow);
    }
  });

const postData = function() {};
