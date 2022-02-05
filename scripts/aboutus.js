let btn_aboutUs = document.getElementsByClassName("btn-aboutus")[0];
let btn_ourHistory = document.getElementsByClassName("btn-ourhistory")[0];
let btn_mission = document.getElementsByClassName("btn-mission")[0];
let btn_whyChooseUs = document.getElementsByClassName("btn-whychooseus")[0];
let text_aboutUs = document.getElementsByClassName("text-aboutus")[0];
let text_ourHistory = document.getElementsByClassName("text-ourhistory")[0];
let text_mission = document.getElementsByClassName("text-mission")[0];
let text_whyChooseUs = document.getElementsByClassName("text-whychooseus")[0];

btn_aboutUs.addEventListener(
  "click",
  (myFunction = function () {
    if (text_aboutUs.classList.contains("display-none")) {
      text_aboutUs.classList.remove("display-none");
      text_ourHistory.classList.add("display-none");
      text_mission.classList.add("display-none");
      text_whyChooseUs.classList.add("display-none");
    }
  })
);
btn_ourHistory.addEventListener(
  "click",
  (myFunction = function () {
    if (text_ourHistory.classList.contains("display-none")) {
      text_ourHistory.classList.remove("display-none");
      text_aboutUs.classList.add("display-none");
      text_mission.classList.add("display-none");
      text_whyChooseUs.classList.add("display-none");
    } else {
      text_ourHistory.classList.add("display-none");
      text_aboutUs.classList.remove("display-none");
    }
  })
);
btn_mission.addEventListener(
  "click",
  (myFunction = function () {
    if (text_mission.classList.contains("display-none")) {
      text_mission.classList.remove("display-none");
      text_aboutUs.classList.add("display-none");
      text_ourHistory.classList.add("display-none");
      text_whyChooseUs.classList.add("display-none");
    } else {
      text_mission.classList.add("display-none");
      text_aboutUs.classList.remove("display-none");
    }
  })
);

btn_whyChooseUs.addEventListener(
  "click",
  (myFunction = function () {
    if (text_whyChooseUs.classList.contains("display-none")) {
      text_whyChooseUs.classList.remove("display-none");
      text_aboutUs.classList.add("display-none");
      text_ourHistory.classList.add("display-none");
      text_mission.classList.add("display-none");
    } else {
      text_whyChooseUs.classList.add("display-none");
      text_aboutUs.classList.remove("display-none");
    }
  })
);
