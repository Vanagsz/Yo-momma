let x = 0;
let jk = 0;

let container = document.getElementById("balz");
container.innerHTML = "Select category and amount of jokes";

async function fetchJokes() {
  let container2 = document.getElementById("balz2");
  let kate = document.getElementById("kate").value;
  container2.innerHTML = ""

 async function ReJoke() {
    if (jk >= x) {
      x = 0;
      return;
    }

    fetch('https://yomama-jokes.com/api/random')
      .then(response => response.json())
      .then(data => {
          if(data.joke.includes(kate)) {
              container2.innerHTML += `~ ${data.joke} <br><br>`;
              jk++;
              ReJoke();
          }
          else {
            ReJoke()
          }
      });
  }
  ReJoke()
}

async function listQ() {
  let e = document.getElementById("dropdown").value;
  if (e > 10) {
    return alert("Max jokes 10 vro"); 
  }
  else if (e > 0) {
    x = e;
  }

  fetchJokes();
}
