allUsers = []
class User {
  constructor({email, id, trips}) {
    this.email = email;
    this.id = id;
    this.trips = trips
    allUsers.push(this)
  }
}
