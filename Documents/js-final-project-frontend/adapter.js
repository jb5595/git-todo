const USERSURL = 'localhost:3000/users'
const APIKEY = '066f898b49e149789dfae7ae404ed976'
const ROUTEURL = 'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?'

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

}
