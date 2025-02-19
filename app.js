let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')


let token = localStorage.getItem("authToken");
        if (token) {
            window.location.href = "main.html";
        }
        
btn.addEventListener('click',()=>{
    window.location.href = `SignUp.html`
})
// let btn1 = document.getElementById('btn')
btn1.addEventListener('click',()=>{
    window.location.href = `login.html`
})

