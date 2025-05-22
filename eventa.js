// const form = document.getElementById("event-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   fetch(
//     "https://script.google.com/macros/s/AKfycbyb8CxzsY3Y6uZgMCGUmrybOo7VXk9Q4behcWsS0th5pC7FRC-U35mqsmOFCU4jQ0j3/exec",

//     {
//       method: "POST",
//       body: formData,
//     }
//   )
//     .then(() => {
//       alert("응모가 완료되었습니다!");
//       form.reset();
//     })
//     .catch(() => alert("제출 오류. 다시 시도해주세요."));
// });

// // https://script.google.com/macros/s/AKfycbyb8CxzsY3Y6uZgMCGUmrybOo7VXk9Q4behcWsS0th5pC7FRC-U35mqsmOFCU4jQ0j3/exec

const form = document.getElementById("event-form");

form.addEventListener("submit", function () {
  // 약간의 지연 후 메인 페이지로 이동
  setTimeout(() => {
    alert("응모가 완료되었습니다!");
    window.location.href = "https://movieevnetpage.netlify.app";
  }, 1000); // 1초 후 리디렉션 (전송 시간 고려)
});
