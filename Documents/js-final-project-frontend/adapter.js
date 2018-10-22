const USERSURL = 'localhost:3000/users'

class Adapter {

  getUsers() {
    fetch(USERSURL).then(res => res.json());
  }

  getUser(id) {
    const url = USERSURL + '/' + id;
    fetch(url).then(res => res.json());
  }

}
