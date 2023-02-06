let btn = document.getElementsByClassName("btn")[0];
let add = document.createElement("add");
let button = document.getElementsByTagName("button");
let questionNumber = 1;
let arr = [];
let trueAnswer2 = Math.floor(Math.random() * 4);
let trueAnswer3 = Math.floor(Math.random() * 4);
let trueAnswer4 = Math.floor(Math.random() * 4);

console.log(button);
let trueAnswer1 = Math.floor(Math.random() * 4);
button[trueAnswer1].removeAttribute("onclick");
button[trueAnswer1].setAttribute("onclick", `benar(${trueAnswer1})`);
button[trueAnswer1].innerHTML = "15 Januari 2003";

const benar = (a) => {
  let elem = document.getElementsByClassName("btn")[a];
  elem.classList.add("benar");
  setTimeout(() => {
    let lanjut = true;
    if (lanjut) {
      arr.push(1);
      elem.classList.remove("benar");
      for (let i = 0; i < 4; i++) {
        let cek = button[i].classList.contains("salah");
        if (cek) {
          document.getElementsByClassName("btn")[i].classList.remove("salah");
        }
      }

      console.log(arr);
      if (questionNumber == 1) {
        // nilai();
        question_2();
      } else if (questionNumber == 3) {
        question_3();
      } else if (questionNumber == 4) {
        question_4();
      } else if (questionNumber == 5) {
        question_5();
      } else if (questionNumber == 6) {
        nilai();
      }
    }
  }, 2000);
};

const salah = (a) => {
  let elem = document.getElementsByClassName("btn")[a];
  elem.classList.add("salah");
  setTimeout(() => {
    let lanjut = true;
    if (lanjut) {
      elem.classList.remove("salah");
      for (let i = 0; i < 4; i++) {
        let cek = button[i].classList.contains("salah");
        if (cek) {
          document.getElementsByClassName("btn")[i].classList.remove("salah");
        }
      }

      console.log(arr);
      if (questionNumber == 1) {
        // nilai();
        question_2();
      } else if (questionNumber == 3) {
        question_3();
      } else if (questionNumber == 4) {
        question_4();
      } else if (questionNumber == 5) {
        question_5();
      } else if (questionNumber == 6) {
        nilai();
      }
    }
  }, 2000);
};

console.log(arr);

// Question 2

const question_2 = () => {
  // Question
  document.getElementById("question").innerHTML =
    "Siapa Presiden Indonesia sekarang?";

  // Manage Attribute
  button[trueAnswer1].removeAttribute("onclick");
  button[trueAnswer1].setAttribute("onclick", `salah(${trueAnswer1})`);

  button[trueAnswer2].removeAttribute("onclick");
  button[trueAnswer2].setAttribute("onclick", `benar(${trueAnswer2})`);
  //   Option to Answer
  button[0].innerHTML = "Ir. Soekarno";
  button[1].innerHTML = "Puan Maharani";
  button[2].innerHTML = "Megawati Soekarno";
  button[3].innerHTML = "Vladimir Putin";

  //   Right Answer
  button[trueAnswer2].innerHTML = "Ir. Joko Widodo";

  return (questionNumber = 3);
};

// Question 3

const question_3 = () => {
  // Question
  document.getElementById("question").innerHTML = "Rendang Berasal dari?";
  button[trueAnswer2].removeAttribute("onclick");
  button[trueAnswer2].setAttribute("onclick", `salah(${trueAnswer1})`);

  button[trueAnswer3].removeAttribute("onclick");
  button[trueAnswer3].setAttribute("onclick", `benar(${trueAnswer3})`);

  //   Option to Answer
  button[0].innerHTML = "Malaysia";
  button[1].innerHTML = "Thailand";
  button[2].innerHTML = "Vietnam";
  button[3].innerHTML = "Brunei";

  //   Right Answer
  button[trueAnswer3].innerHTML = "Indonesia";

  return (questionNumber = 4);
};

// Question 4
const question_4 = () => {
  // Question
  document.getElementById("question").innerHTML =
    "Universitas Brawijaya terletak di kota?";

  // Manage Attribut
  button[trueAnswer3].removeAttribute("onclick");
  button[trueAnswer3].setAttribute("onclick", `salah(${trueAnswer3})`);

  button[trueAnswer4].removeAttribute("onclick");
  button[trueAnswer4].setAttribute("onclick", `benar(${trueAnswer4})`);

  //   Option to Answer
  button[0].innerHTML = "Jakarta";
  button[1].innerHTML = "Depok";
  button[2].innerHTML = "Kuala Lumpur";
  button[3].innerHTML = "Yogyakarta";

  //   Right Answer
  button[trueAnswer4].innerHTML = "Malang";

  return (questionNumber = 5);
};

// Question 5
const question_5 = () => {
  // Question
  document.getElementById("question").innerHTML =
    "Mie Terenak di dunia adalah ... ";

  // Manage Attribut
  button[trueAnswer4].removeAttribute("onclick");
  button[trueAnswer4].setAttribute("onclick", `salah(${trueAnswer4})`);
  let trueAnswer5 = Math.floor(Math.random() * 4);
  button[trueAnswer5].removeAttribute("onclick");
  button[trueAnswer5].setAttribute("onclick", `benar(${trueAnswer5})`);

  //   Option to Answer
  button[0].innerHTML = "Mie Sedap";
  button[1].innerHTML = "Supermie";
  button[2].innerHTML = "Mie Sukses";
  button[3].innerHTML = "Sarimi";

  //   Right Answer
  button[trueAnswer5].innerHTML = "Indomie";

  return (questionNumber = 6);
};

const nilai = () => {
  // Question
  document.getElementById("question").innerHTML = "Score Anda:";

  // Score
  let score = arr.reduce((n1, n2) => {
    return n1 + n2;
  });

  let clean = document.getElementById("pilihan_ganda");
  clean.replaceWith("");
  let option = document.getElementById("option");
  option.insertAdjacentHTML(
    "afterbegin",
    ` <div class="score" id="score"></div>`
  );

  let boxNilai = document.getElementById("score");
  boxNilai.innerHTML = `${score}` * 20;

  console.log(boxNilai);
  console.log(score);
};
