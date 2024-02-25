"use strict";

// ======== ДЗ-1================================================

function getElementWidth(content, padding, border) {
  const a = parseFloat(content);
  const b = parseFloat(padding) * 2;
  const c = parseFloat(border) * 2;
  return a + b + c;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// =================================================================================
// const profile = {
//     username: "Jacob",
//     playTime: 300,

//     changeUsername(newName) {
//         profile.username = newName;
//     },

//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },

//     getInfo(){
// return `${this.username} has ${profile.playTime} active hours!`;
//     },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
