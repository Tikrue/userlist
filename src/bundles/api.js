import axios from 'axios'

const baseURL = 'https://randomuser.me/api'

const users = []

const getUsers = () => {
  return axios.get(`${baseURL}/?results=20&`)
  .then(res => {
    
    for(let i of res.data.results) {
      
      let user = {
        id: i.id.value != null ? i.id.value 
        : (Math.floor(Math.random() * 999999)).toString(36),
        name: `${i.name.first} ${i.name.last}`,
        email: i.email,
        phone: i.phone 
      }

      users.push(user)
    }

    return users
    
  });
}

const Api = { getUsers }

export {Api}

