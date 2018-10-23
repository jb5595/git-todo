allUsers = []
class User {
  constructor({email, id}) {
    this.email = email;
    this.id = id;
    allUsers.push(this)
  }
}
