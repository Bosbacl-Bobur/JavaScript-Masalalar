'use strict'
const count = document.getElementById("count")

const products = {
	productArr: [
		{
			id: 1,
			productName: "Iphone 13",
			price: 4000,
		},
		{
			id: 2,
			productName: "Iphone 14",
			price: 5000,
		},
		{
			id: 3,
			productName: "Iphone 15",
			price: 6000,
		},
		{
			id: 4,
			productName: "Iphone 16",
			price: 7000,
		},
		{
			id: 5,
			productName: "Iphone 13 pro",
			price: 4500,
		},
		{
			id: 6,
			productName: "Hatake Kakashi",
			price: 200,
		},
		{
			id: 7,
			productName: "Ichigo Kurosaki",
			price: 230,
		},
		{
			id: 8,
			productName: "Kamado Tanjiro",
			price: 205,
		},
		{
			id: 9,
			productName: "Goku",
			price: 250,
		},
		{
			id: 10,
			productName: "Minato Namikaze",
			price: 270,
		},
	], 
	productType:[
        {
            id:1,
            type:"All"
        },
        {
            id:2,
            type:"Toys"
        },
    ],
	totalPrice: 0,
	basketProduct: [],
	discount: 10000,
	bought(id) {
		const selectedProduct = this.productArr.find((productID) => {
			return productID.id === id
		})
		if (selectedProduct) {
			this.basketProduct.push(selectedProduct)
			this.totalPrice += selectedProduct.price
			count.textContent++
			
			setTimeout(() => {
				alert(`${selectedProduct.productName} mahsuloti savatga qo'shildi Narxi: ${selectedProduct.price}$`)
			}, 200)
		} else {
			alert('Mahsulot mavjud emas!')
		}
	},
	showSelectedProduct() {
		const iteration_product = this.basketProduct.map((product, index) => {
			return `${index + 1})${product.productName} Narxi: ${product.price}$\n`
		})

		if (this.basketProduct.length > 0) {
			alert(iteration_product.join(''))
			alert(`Jami narx: ${this.totalPrice}$`)
		} else {
			alert(`Savatga maxsulot yo'q!`);
		}
	},
	showDiscount() {
		if (this.totalPrice > this.discount) {
			const confirmed = confirm("Siz 10% lik chegirmaga ega bo'ldingiz foydalasizmi.")
			if (confirmed) {
				alert(`Sizning mahsulotlaringiz chegirm narxi:${this.totalPrice - (this.totalPrice * 0.1)}$`)
			}
		} else {
			alert("Siz chegirmaga ega bo'lishingiz uchun 10000$ dan ko'proq mahsulot xarid qilishingiz kerak")
		}
	},
	remove() {
		count.textContent = 0;
		this.basketProduct = [];
		this.totalPrice = 0;
	},
    deleteProduct(id) {
        const productIndex = this.basketProduct.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            const removedProduct = this.basketProduct.splice(productIndex, 1)[0];
            this.totalPrice -= removedProduct.price;
            count.textContent = this.basketProduct.length;
            
            setTimeout(() => {
            alert(`${removedProduct.productName} mahsuloti savatdan o'chirildi!`);
        }, 200)
        } else {
            alert('Ushbu mahsulot savatda mavjud emas!');
        }
    }
}