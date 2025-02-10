// const user = {
//     id:1,
//     name:"Sardorbek",
//     settings: {
//         theme: "dark",
//         notifications: null,
//     },
// }
// console.log(user?.settings?.theme);
// console.log(user?.settings?.notifications?.email);
// console.log(user?.profile?.age ?? "Ma'lumot yo'q");

const raqam = new Set();

raqam.add(1);
raqam.add(2);
raqam.add(3);
raqam.add(4);
raqam.add(5);
raqam.add("hello");
raqam.add(1n);
console.log(raqam);