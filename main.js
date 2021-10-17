const url = "http://localhost:5500/api"

function getUsers(){
  axios.get(url)
  .then(response => {
    const data = response.data

    renderApiResult.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

function getUser(){
  axios.get(`${url}/1`)
  .then(response => {
    const data = response.data

      userAvatar.src = data.avatar
      userNome.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
  })
  .catch(error => console.log(error))
}

function addNewUser(newUser){

  axios.post(url, newUser)
  .then(response => {
    alert( JSON.stringify(response.data))
    getUsers()
  })
  .catch(function (error) {
    console.log(error);
  });
}

function updateUser(user, id){
  axios.put(`${url}/${id}`, user)
  .then(response => {
    alert( JSON.stringify(response.data))
    getUsers()
  })
  .catch(function (error) {
    console.log(error);
  });
}

function deleteUser(id){
  axios.delete(`${url}/${id}`)
  .then(response => {
    alert( JSON.stringify(response.data))
    getUsers()
  })
  .catch(function (error) {
    console.log(error);
  });
}
 
//calls
getUsers()
getUser()
// addNewUser({name: "Olivia Zars", avatar: "http://lorempixel.com/400/200", city: "Rio do Sul" })
// updateUser({name: "Marcelo Calvis", avatar: "http://lorempixel.com/400/200", city: "Recife" }, 3)
// deleteUser(4)