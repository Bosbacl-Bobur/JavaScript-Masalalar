const accounts = [
    {
        owner: 'Sardorbek',
        ownerImage: '../img/sardorbek.jpg',
        userName: "SS2003",
        password: "root123",
        balance: 5000,
        transactions: []
    },
    {
        owner: 'Sarvarbek',
        ownerImage: '../img/banker.jpg',
        userName: "ST212",
        password: "st123",
        balance: 8000,
        transactions: []
    }
]

const loginBtn = document.querySelector('.login-btn')
const inputUser = document.querySelector('#username')
const inputPin = document.querySelector('#password')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const username = inputUser.value.trim().toLowerCase()
    const pin = inputPin.value.trim()

    const accountFind = accounts.find(
        account => account.userName.toLowerCase() === username && account.password === pin
    )

    if (accountFind) {
        Toastify({
            text: "Login successful!",
            duration: 2000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "green",
            borderRadius: "25px",
        }).showToast()
        setTimeout(() => {
            localStorage.setItem('currentUser', JSON.stringify(accountFind))
            window.location.href = '../html/dashboard.html'
        }, 1000)
    } else {
        Toastify({
            text: "Username or password is incorrect!",
            duration: 2000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
            borderRadius: "25px",
        }).showToast()
    }
})