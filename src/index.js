let url = "http://localhost:3000/dogs";
let tableBody = document.querySelector("#table-body");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let dogRow = document.createElement("tr");
      let dogData = document.createElement("td");
      let dogBreed = document.createElement("td");
      let dogSex = document.createElement("td");
      let dogButton = document.createElement("button");

      dogData.innerHTML = element.name;
      dogBreed.innerHTML = element.breed;
      dogSex.innerHTML = element.sex;
      dogButton.innerHTML = "Edit 🐶";

      dogRow.appendChild(dogData);
      dogRow.appendChild(dogBreed);
      dogRow.appendChild(dogSex);
      dogRow.appendChild(dogButton);
      tableBody.appendChild(dogRow);
    }
  });
