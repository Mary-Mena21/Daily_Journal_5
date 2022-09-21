// /* ---------------------------------------Daily _Journal_3---------------------------------------------------- */
// //Write a function that takes in the date from the journal entry and returns the day of the week
// function dayOfWeek(d, m, y) {
//     let t = [0,3,3,6,1,4,6,2,5,0,3,5];
//     y -= m < 3 ? 1 : 0;
//     return (y + y / 4 - y / 100 + y / 400 + t[m - 1] + d) % 7;
// }

// // function dayOfWeek(d, m, y) {
// //     y -= m < 3;
// //     return (y + y / 4 - y / 100 + y / 400 + "-bed=pen+mad."[m] + d) % 7;
// // }

// //dow(m,d,y){y-=m<3;return(y+y/4-y/100+y/400+"-bed=pen+mad."[m]+d)%7;}
// // Driver Code

// let day = dayOfWeek(08, 12, 2022);

// console.log(Math.round(day));
// function getDay() {
//     if (Math.round(day) == 1) {
//         return "Monday";
//     } else if (Math.round(day) == 2) {
//         return "Tuesday";
//     } else if (Math.round(day) == 3) {
//         return "Wednesday";
//     } else if (Math.round(day) == 4) {
//         return "Thursday";
//     } else if (Math.round(day) == 5) {
//         return "Friday";
//     } else if (Math.round(day) == 6) {
//         return "Saturday";
//     } else {
//         return "Sunday";
//     }
// }
// console.log(getDay());
