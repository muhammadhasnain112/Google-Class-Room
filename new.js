let token = localStorage.getItem("authToken");
if (!token) {
    window.location.href = "index.html";
}

let aside = document.getElementById('aside')
let arr = JSON.parse(localStorage.getItem('class')) || [];
aaside()



let create = document.getElementById('create')
let join = document.getElementById('join')
let section = document.getElementById('sec')
let h1 = document.getElementById('h1')
let newarray = JSON.parse(localStorage.getItem('login'))
for (var i = 0; i < newarray.length; i++) {
}
h1.innerHTML = `Welcome ${newarray[i - 1].name}`
create.addEventListener('click', function () {
    section.innerHTML = ` <div id="section">
            <p>Create class</p>
            <input type="text" placeholder="Class Name" required id="input1"> <br>
            <input type="text" placeholder="Section" id="input2"><br>
            <input type="text" placeholder="Subject" id="input3"><br>
            <p><a href="" id="cancel">Cancel</a>&nbsp; &nbsp; &nbsp;<a href="" id="cr">Create</a></p></div>`

    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let input3 = document.getElementById('input3')


    // let input4 = document.getElementById('input4')
    let crt = document.getElementById('cr')
    crt.addEventListener('click', function () {
        aside.innerHTML = ``
        event.preventDefault()
        let password = ""
        let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&"
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * charset.length);
            password += charset[index]
        }
        let newName = input1.value.slice(0, 1).toUpperCase() + input1.value.slice(1)
        let obj = {
            classname: newName,
            section: input2.value,
            subject: input3.value,
            Classcode: password,
        }
        // console.log(fill);
        arr.push(obj)
        // console.log(arr);
        localStorage.setItem('class', JSON.stringify(arr))
        section.innerHTML = ``
        let ClearAll = document.getElementById('ClearAll')
        ClearAll.style.display = 'block'
        ClearAll.addEventListener('click', () => {
            localStorage.removeItem('class')
            arr = []
            aside.innerHTML = ``
            ClearAll.style.display = 'none'
            localStorage.setItem('class', JSON.stringify(arr))
        })
        aaside()
    })
    document.getElementById('cancel').addEventListener('click', () => {
        section.innerHTML = ``
    })

})


let logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    localStorage.removeItem("authToken");

    Swal.fire("Account!", "Logout Successfuly!", "success").then(() => {
        window.location.href = "index.html";
    });
})
let classJoin = document.getElementById('join')
classJoin.addEventListener('click', () => {
    section.innerHTML = ` <div id="section1">
    <p>Join class</p>
    <input type="text" placeholder="Enter Your Name" id="newname"><br>
    <input type="text" placeholder="Enter ID" id="ID"><br>
    <p><a href="" id="cancel">Cancel</a>&nbsp; &nbsp; &nbsp;<a href="" id="classjoin">join</a></p></div>`
    let ID = document.getElementById('ID')
    let newName = document.getElementById('newname')

    document.getElementById('classjoin').addEventListener('click', () => {
        event.preventDefault()
        let upper = newName.value.slice(0, 1).toUpperCase() + newName.value.slice(1)


        for (let i = 0; i < arr.length; i++) {
            if (ID.value == arr[i].Classcode) {
                Swal.fire("Welcome!", "ID Is Correct!", "success").then(() => {
                    arr[i]['userName'] = upper,
                        localStorage.setItem("class", JSON.stringify(arr));
                    let para1 = document.querySelectorAll('.para1')
                    para1[i].innerText = arr[i].userName
                });
            } else {
                Swal.fire({
                    title: "Sorry!",
                    text: "ID Is Incorrect!",
                    icon: "error"
                });
            }
        }
    })
})


function aaside() {
    for (let i = 0; i < arr.length; i++) {
        aside.innerHTML += ` <aside>
        <div class="div1" id="aaa">
            <h4 id="h4">${arr[i].classname}</h4>
            <p id="para">${arr[i].section}</p>
            <p class="para1"></p>
            </div>
            <h5 id="h5">Class Code : ${arr[i].Classcode} </h5>
            </aside>`
        let para1 = document.querySelectorAll('.para1')
        para1[i].innerText = arr[i].userName
        if (para1[i].innerText == "undefined") {
            para1[i].innerText = ""
        }
    }
}