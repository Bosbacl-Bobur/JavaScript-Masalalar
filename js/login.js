const accounts = [
    {
        owner: 'Bobur',
        ownerImage: '../img/sardorbek.jpg',
        userName: "bobur-admin",
        password: "bobur123",
        balance: 400,
        transactions: []
    },
    {
        owner: 'Asilbek',
        ownerImage: '../img/banker.jpg',
        userName: "Asil-user",
        password: "Asil456",
        balance: 200,
        transactions: []
    }
]

const loginBtn = document.querySelector('.login-btn')
const inputUser = document.querySelector('#username')
const inputPin = document.querySelector('#password')

loginBtn.addEventListener('click', (j) => {
    j.preventDefault()
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
            window.location.href = '../dashboard.html'
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