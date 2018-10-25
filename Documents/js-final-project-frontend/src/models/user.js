allUsers = []
class User {
  constructor({email, id, trips}) {
    this.trips = [];
    this.email = email;
    this.id = id;
    trips.forEach(function(trip) {
      let newTrip = new Trip(trip);
      this.trips.push(newTrip);
    }.bind(this))
  }
}
