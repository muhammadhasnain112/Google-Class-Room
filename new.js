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
            <input type="file" id="file"><br>
            <p><a href="" id="cancel">Cancel</a>&nbsp; &nbsp; &nbsp;<a href="" id="cr">Create</a></p></div>`
    
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let input3 = document.getElementById('input3')
   
    
    // let input4 = document.getElementById('input4')
    let crt = document.getElementById('cr')
    let arr = JSON.parse(localStorage.getItem('class')) || [];
    crt.addEventListener('click', function () {
        event.preventDefault()
        let password = ""
        let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&"
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * charset.length);
            password += charset[index]
        }
        let img = document.getElementById('file')
        let fill = img.files[0];
        let url = URL.createObjectURL(fill);
        let obj = {
            classname: input1.value,
            section: input2.value,
            subject: input3.value,
            img:url,
            Classcode: password,
        }
        // console.log(fill);
        arr.push(obj)
        console.log(arr);
        localStorage.setItem('class', JSON.stringify(arr))
        section.innerHTML = ``
        let aside = document.getElementById('aside')
        let ClearAll = document.getElementById('ClearAll')
        ClearAll.style.display = 'block'
        ClearAll.addEventListener('click', () => {
            localStorage.clear()
            arr = []
            aside.innerHTML = ``
            ClearAll.style.display = 'none'
            localStorage.setItem('class', JSON.stringify(arr))
        })
        for (let i = 0; i < arr.length; i++) {
            aside.innerHTML += ` <aside>
                <div class="div1" id="aaa">
                    <h4 id="h4">${arr[i].classname}</h4>
                    <p id="para">${arr[i].section}</p>
                </div>
                <h5 id="h5">Class Code : ${arr[i].Classcode} </h5>
            </aside>`
            let image = document.getElementById('aaa')
            image.style.backgroundImage = `url(${url})`
        }

    })





    document.getElementById('cancel').addEventListener('click', () => {
        section.innerHTML = ``
    })




})
// localStorage.clear()