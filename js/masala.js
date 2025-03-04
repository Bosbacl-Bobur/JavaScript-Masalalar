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

// const raqam = new Set();

// raqam.add(1);
// raqam.add(2);
// raqam.add(3);
// raqam.add(4);
// raqam.add(5);
// raqam.add("hello");
// raqam.add(1n);
// raqam.add(function(){});
// console.log(raqam);

// (
//     function(min,max){
//         return console.log(Math.trunc(Math.random()*max+min)-min);
        
//     }
// )(1,50)

// document.getElementById('myForm').addEventListener('submit', function (event) {
//           event.preventDefault();

//           let name = document.getElementById('name').value.trim();
//           let age = document.getElementById('age').value.trim();
//           let phone = document.getElementById('phone').value.trim();
//           let email = document.getElementById('email').value.trim();

//           let errors = {
//             nameError: '',
//             ageError: '', 
//             phoneError: '',
//             emailError: '',
//           };

//           let isValidName = true;
//           for (let i = 0; i < name.length; i++) {
//             let char = name[i];
//             if (
//               !((char >= 'A' && char <= 'Z')  (char >= 'a' && char <= 'z'))
//             ) {
//               isValidName = false;
//               break;
//             }
//           }
//           if (!isValidName  `${name}` === '') {
//             errors.nameError = 'Ism faqat harflardan iborat bo‘lishi kerak!';
//           }

//           if (age === '' , isNaN(age),  parseInt(age) != age) {
//             errors.ageError = 'Yosh butun son bo‘lishi kerak!';
//           }

//           if (!(
//               phone.startsWith('+998') &&
//               phone.length === 13 &&
//               !isNaN(phone.slice(1)) )  ) {
//                 errors.phoneError =
//                 'Telefon raqam +998 bilan boshlanishi va 13 ta belgi bo‘lishi kerak!';
//           }
//           if (
//             !(
//               email.includes('@') &&
//               email.includes('.') &&
//               email.indexOf('@') < email.lastEndexOf('.')
//             )
//           ) {
//             errors.emailError = 'Email to‘g‘ri formatda bo‘lishi kerak!';
//           }

//           document.getElementById('nameError').textContent = errors.nameError;
//           document.getElementById('ageError').textContent = errors.ageError;
//           document.getElementById('phoneError').textContent = errors.phoneError;
//           document.getElementById('emailError').textContent = errors.emailError; 

//             if ( !errors.nameError && !errors.ageError && !errors.phoneError && !errors.emailError) {
//             alert('Forma muvaffaqiyatli jo‘natildi!');
//             document.getElementById('myForm').reset();   
//           };
//         });


// class order {
//   constructor(clientName,startLocation,endLocation,PriceKm,distance){
//   this.clientName=clientName
//   this.startLocation=startLocation
//   this.endLocation=endLocation
//   this.PriceKm=PriceKm
//   this.distance=distance   
//   }
//   calculatePrice(){
//     return this.PriceKm * this.distance;
//   }
// }
// const clint = new order(100,7)
// order.calculatePrice

class order{
  constructor(clientName, startLocation, endLocation, pricePerKm, distance) {
      this.clientName = clientName; 
      this.startLocation = startLocation; 
      this.endLocation = endLocation; 
      this.pricePerKm = pricePerKm; 
      this.distance = distance; 
      this.isCancelled = false; 
  }

  calculatePrice() {
      if (this.isCancelled) {
          return "Buyurtma bekor qilingan.";
      }
      return this.pricePerKm * this.distance + " sum";
  }

  getOrderDetails() {
      if (this.isCancelled) {
          return "buyurtma bekor qilinadi";
      }
      return "odam:" + this.clientName + ", Marshrut: " + this.startLocation + " --> " + this.endLocation + ", Narx: " + this.calculatePrice();
  }

  cancelOrder() {
      this.isCancelled = true;
  }
}

let order1 = new order("mijoz", "Qarshidan", "Toshkentga", 65, 400);

console.log(order1.getOrderDetails()); 
order1.cancelOrder();
console.log(order1.getOrderDetails()); 
