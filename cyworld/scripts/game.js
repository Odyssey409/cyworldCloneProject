const wordCheck = () => {
  let givenWord = document.getElementById("givenWord").innerText;
  let myWord = document.getElementById("wordInput").value;

  let lastGivenWord = givenWord[givenWord.length - 1];
  let firstMyWord = myWord[0];

  if (lastGivenWord === firstMyWord) {
    document.getElementById("givenWord").innerText = myWord;
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("wordInput").value = "";
  } else {
    document.getElementById("result").innerText = "오답입니다ㅠㅠ";
    document.getElementById("wordInput").value = "";
  }
};
