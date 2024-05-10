const emailErrorCheck = () => {
  const email = document.getElementById("loginEmail").value;
  const emailErrMsg = document.getElementById("emailErrorMsg");
  if (email.includes("@") === false) {
    emailErrMsg.innerText = "이메일이 옳바르지 않습니다";
  } else {
    emailErrMsg.innerText = "";
  }
};

const nameErrorCheck = () => {
  const name = document.getElementById("loginName").value;
  const nameErrMsg = document.getElementById("nameErrorMsg");
  console.log(name);
  if (name === "") {
    nameErrMsg.innerText = "이름이 옳바르지 않습니다";
  } else {
    nameErrMsg.innerText = "";
  }
};

const passwordErrorCheck = () => {
  const password = document.getElementById("loginPassword").value;
  const passwordErrMsg = document.getElementById("passwordErrorMsg");
  if (password === "") {
    passwordErrMsg.innerText = "비밀번호를 입력해 주세요";
  } else {
    passwordErrMsg.innerText = "";
  }
};

const passwordCheckErrorCheck = () => {
  const password = document.getElementById("loginPassword").value;
  const passwordCheck = document.getElementById("loginPasswordCheck").value;
  const passwordCheckErrMsg = document.getElementById("passwordCheckErrorMsg");
  if (passwordCheck === "") {
    passwordCheckErrMsg.innerText = "비밀번호를 다시 입력해 주세요";
  } else if (password !== passwordCheck) {
    passwordCheckErrMsg.innerText = "비밀번호가 일치하지 않습니다";
  } else {
    passwordCheckErrMsg.innerText = "";
  }
};

const regionSelectErrorCheck = () => {
  const region = document.getElementById("regionSelect").value;
  const regionSelectErrorMsg = document.getElementById("regionSelectErrorMsg");

  if (region === "") {
    regionSelectErrorMsg.innerText = "지역을 선택해 주세요";
  } else {
    regionSelectErrorMsg.innerText = "";
  }
};

const genderSelectErrorCheck = () => {
  const gender = document.getElementById("genderSelect").value;
  const genderSelectErrorMsg = document.getElementById("genderSelectErrorMsg");

  if (gender === "") {
    genderSelectErrorMsg.innerText = "성별을 선택해 주세요";
  } else {
    genderSelectErrorMsg.innerText = "";
  }
};

const phoneNumInputHandle = () => {
  const phoneNum1 = document.getElementById("phoneNum1");
  const phoneNum2 = document.getElementById("phoneNum2");
  const phoneNum3 = document.getElementById("phoneNum3");
  const verifyNumberSubmitBtn = document.getElementById(
    "verifyNumberSubmitBtn"
  );
  console.log(phoneNum1.value.length);

  if (phoneNum1.value.length === 3) {
    phoneNum2.focus();
  }
  if (phoneNum2.value.length === 4) {
    phoneNum3.focus();
  }
  if (phoneNum3.value.length === 4) {
    phoneNum3.focus();
  }
};

const handleVerifyNumberSubmitBtn = () => {
  console.log("click");
};
