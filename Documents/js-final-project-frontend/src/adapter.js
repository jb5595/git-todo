const USERSURL = 'http://localhost:3000/api/v1/users';
const APIKEY = '066f898b49e149789dfae7ae404ed976';
const ROUTEURL = 'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?';
const TRIPSURL = 'http://localhost:3000/api/v1/trips';

class Adapter {

  // INTERACTING WITH WMATA API

  static getRoute({origin, destination}) {
    const url = ROUTEURL + `FromStationCode=${origin}&ToStationCode=${destination}`
    return fetch(url, {headers: {api_key: APIKEY}})
    .then(res => res.json())
  }

  // USERS

  static getUsers() {
    return fetch(USERSURL).then(res => res.json());
  }

  static getUser(email) {
    return Adapter.getUsers().then(function(data) {
      const id = data.find(user => user.email === email).id
      const url = USERSURL + '/' + id;
      return fetch(url).then(res => res.json());
      }
    )
  }

  static postUser(emailInput){
    debugger
    const data = {
      email:emailInput
    }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(data)
    }
    return fetch(USERSURL, options).then(res => res.json())

  }

  // TRIPS

  static postTrip({name, origin, origin_code, destination, destination_code, user_id}) {

    const data = {
      origin: origin,
      origin_code: origin_code,
      destination: destination,
      destination_code: destination_code,
      user_id: user_id,
      name: name
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(data)
    }

    return fetch(TRIPSURL, options).then(res => res.json())
  }

  static getTrips() {
    return fetch(TRIPSURL).then(res => res.json())
  }

  static patchTrip({id, origin, origin_code, destination_code, destination, name}) {

    const url = TRIPSURL + '/' + id;

    const data = {}
    if(origin) {data.origin = origin};
    if(origin_code) {data.origin_code = origin_code}
    if(destination) {data.destination = destination}
    if(destination_code) {data.destination_code = destination_code}
    if(name) {data.name = name}

    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(data)
    }

    return fetch(url, options).then(res => res.json());

  }

  static deleteTrip(id) {

    const url = TRIPSURL + '/' + id;

    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
    }

    return fetch(url, options).then(res => res.json());

  }

}
