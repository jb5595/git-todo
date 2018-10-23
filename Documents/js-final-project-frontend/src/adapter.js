const USERSURL = 'http://localhost:3000/users';
const APIKEY = '066f898b49e149789dfae7ae404ed976';
const ROUTEURL = 'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?';
const TRIPSURL = 'http://localhost:3000/api/v1/trips';

class Adapter {

  static getUsers() {
    fetch(USERSURL).then(res => res.json());
  }

  static getUser(id) {
    const url = USERSURL + '/' + id;
    return fetch(url).then(res => res.json());
  }

  static getRoute({origin, destination}) {
    const url = ROUTEURL + `FromStationCode=${origin}&ToStationCode=${destination}`
    return fetch(url, {headers: {api_key: APIKEY}})
    .then(res => res.json())
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
    return fetch("http://localhost:3000/users", options).then(res => res.json())

  }

  static postTrip({name: name, origin: origin, originCode: originCode, destination: destination, destinationCode: destinationCode, user_id: user_id}) {

    const data = {
      origin: origin,
      originCode: originCode,
      destination: destination,
      destinationCode: destinationCode,
      user_id: user_id,
      name: name
    }

    const options = {
      method: 'POST',
      headers: {'Content-Type:': 'application/json',Accept: 'application/json'},
      body: JSON.stringify(data)
    }

    return fetch(TRIPSURL, options).then(res => res.json())
  }

}
