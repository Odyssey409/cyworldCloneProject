let emailValidation = false;
let nameValidation = false;
let passwordValidation = false;
let passwordCheckValidation = false;
let regionValidation = false;
let genderValidation = false;
let numberValidation = false;

const emailErrorCheck = () => {
  const email = document.getElementById("loginEmail").value;
  const emailErrMsg = document.getElementById("emailErrorMsg");
  if (email.includes("@") === false) {
    emailErrMsg.innerText = "이메일이 옳바르지 않습니다";
    emailValidation = false;
  } else {
    emailErrMsg.innerText = "";
    emailValidation = true;
  }
};

const nameErrorCheck = () => {
  const name = document.getElementById("loginName").value;
  const nameErrMsg = document.getElementById("nameErrorMsg");
  if (name === "") {
    nameErrMsg.innerText = "이름이 옳바르지 않습니다";
    nameValidation = false;
  } else {
    nameErrMsg.innerText = "";
    nameValidation = true;
  }
};

const passwordErrorCheck = () => {
  const password = document.getElementById("loginPassword").value;
  const passwordErrMsg = document.getElementById("passwordErrorMsg");
  if (password === "") {
    passwordErrMsg.innerText = "비밀번호를 입력해 주세요";
    passwordValidation = false;
  } else {
    passwordErrMsg.innerText = "";
    passwordValidation = true;
  }
};

const passwordCheckErrorCheck = () => {
  const password = document.getElementById("loginPassword").value;
  const passwordCheck = document.getElementById("loginPasswordCheck").value;
  const passwordCheckErrMsg = document.getElementById("passwordCheckErrorMsg");
  if (passwordCheck === "") {
    passwordCheckErrMsg.innerText = "비밀번호를 다시 입력해 주세요";
    passwordCheckValidation = false;
  } else if (password !== passwordCheck) {
    passwordCheckErrMsg.innerText = "비밀번호가 일치하지 않습니다";
    passwordCheckValidation = false;
  } else {
    passwordCheckErrMsg.innerText = "";
    passwordCheckValidation = true;
  }
};

const regionSelectErrorCheck = () => {
  const regionSelect = document.getElementById("regionSelect");
  const regionSelectErrorMsg = document.getElementById("regionSelectErrorMsg");

  if (regionSelect.value === "regionUnselected") {
    regionSelectErrorMsg.innerText = "지역을 선택해 주세요";
    regionValidation = false;
  } else {
    regionSelectErrorMsg.innerText = "";
    regionValidation = true;
  }
};

const genderSelectErrorCheck = () => {
  const womenCheck = document.getElementById("womenCheck");
  const menCheck = document.getElementById("menCheck");
  const genderSelectErrorMsg = document.getElementById("genderSelectErrorMsg");

  if (!womenCheck.checked && !menCheck.checked) {
    genderSelectErrorMsg.innerText = "성별을 선택해 주세요";
    genderValidation = false;
  } else {
    genderSelectErrorMsg.innerText = "";
    genderValidation = true;
  }
};

const phoneNumInputHandle = () => {
  const phoneNum1 = document.getElementById("phoneNum1");
  const phoneNum2 = document.getElementById("phoneNum2");
  const phoneNum3 = document.getElementById("phoneNum3");
  const verifyNumberSubmitBtn = document.getElementById(
    "verifyNumberSubmitBtn"
  );

  if (phoneNum1.value.length === 3) {
    phoneNum2.focus();
  }
  if (phoneNum2.value.length === 4) {
    phoneNum3.focus();
  }
  if (
    phoneNum1.value.length === 3 &&
    phoneNum2.value.length === 4 &&
    phoneNum3.value.length === 4
  ) {
    verifyNumberSubmitBtn.disabled = false;
    numberValidation = true;
  } else {
    verifyNumberSubmitBtn.disabled = true;
    numberValidation = false;
  }
};

const handleVerifyNumberSubmitBtn = () => {
  const verifyNumber = document.getElementById("verifyNumber");
  const verifyCompleteBtn = document.getElementById("verifyCompleteBtn");
  const verifyNumberSubmitBtn = document.getElementById(
    "verifyNumberSubmitBtn"
  );

  const verifyNumGenerated = String(
    Math.floor(Math.random() * 1000000)
  ).padStart(6, "0");

  verifyNumber.innerText = verifyNumGenerated;

  verifyNumberSubmitBtn.disabled = true;

  verifyCompleteBtn.disabled = false;

  threeMinsTimerStarter();
};

const threeMinsTimer = (remaining) => {
  const remainingMins = document.getElementById("remainingMins");
  const remainingSecs = document.getElementById("remainingSecs");

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  remainingMins.innerText = Math.floor(remaining / 60) % 60;
  remainingSecs.innerText = format(Math.floor(remaining) % 60);
};

const threeMinsTimerStarter = () => {
  let remaining = 180;
  const verifyCompleteBtn = document.getElementById("verifyCompleteBtn");
  const verifyNumberSubmitBtn = document.getElementById(
    "verifyNumberSubmitBtn"
  );
  const verifyNumber = document.getElementById("verifyNumber");

  var timeInterval = setInterval(() => {
    threeMinsTimer(remaining);
    remaining--;
    if (remaining === -1) {
      clearInterval(timeInterval);
      verifyCompleteBtn.disabled = true;
      verifyNumberSubmitBtn.disabled = false;
      verifyNumber.innerText = "000000";
    }
  }, 1000);
};

const handleVerifyComplete = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = false;
  alert("인증이 완료되었습니다");
};

const handleSignUp = () => {
  emailErrorCheck();
  nameErrorCheck();
  passwordErrorCheck();
  passwordCheckErrorCheck();
  regionSelectErrorCheck();
  genderSelectErrorCheck();
  phoneNumInputHandle();

  if (
    emailValidation &&
    nameValidation &&
    passwordValidation &&
    passwordCheckValidation &&
    numberValidation &&
    regionValidation &&
    genderValidation
  ) {
    alert("코드캠프 가입을 축하드립니다");
  } else {
    alert("가입 양식을 다시 한번 확인해주세요");
  }
};
