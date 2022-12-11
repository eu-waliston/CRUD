//Your API link
const url = " "

const newUser = {
    name: "Sergio Ramos",
    avatar: "http://lorempixel.com.br/500/400/?",
    city: "Em algum lugar de sp",
}

const UserUpdate = {
    name: "Fernando Lima",
    avatar: "http://lorempixel.com.br/500/400/?",
    city: "Recife",
}

function getUser() {
    axios.get(url).then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    }).catch(err => console.log(err))
}

getUser();

function addNewUseR() {
    axios.post(url, newUser ).then(response => {
        alert(response.data);
    }).catch(error => {
        console.log(error)
    })
}

//addNewUseR()

function upateUser(){
    axios.put(`${url}/2`, UserUpdate).then(response => {
        alert(JSON.stringify(response.data))
    }).catch(err => {
        console.log(err)
    })
}

//upateUser()


function deleteUSer(){
    axios.delete(`${url}/3`).then(response => {
        alert(JSON.stringify(response.data))
    }).catch( err => {
        console.log(err)
    })
}
//deleteUSer();











