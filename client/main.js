bodyEl = document.querySelector('ul')
document.getElementById("fortuneCookie").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};
document.getElementById("Motivation").onclick = function () {
  axios.get("http://localhost:4000/api/motivation/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("getClass").onclick = function () {
  axios
    .get("http://localhost:4000/api/students")
    .then(function (response) {
      const data = response.data;
      document.getElementById("people").innerHTML = data
        .map(function (person) {
          return '<li class="row">' + person;
        })
        .join("");
    })
    .catch(function (err) {
      document.getElementById("people").innerHTML =
        '<li class="text-danger">' + err.message + "</li>";
    });
    clear()
};

function clear(){
  bodyEl.innerHTML = ''
}
document.getElementById("getInstructors").onclick = function () {
  axios
    .get("http://localhost:4000/api/instructors")
    .then(function (response) {
      const data = response.data;
      document.getElementById("people").innerHTML = data
        .map(function (person) {
          return '<li class="row">' + person;
        })
        .join("");
    })
    .catch(function (err) {
      document.getElementById("people").innerHTML =
        '<li class="text-danger">' + err.message + "</li>";
    });
    clear()
};

function clear(){
  bodyEl.innerHTML = ''
}
