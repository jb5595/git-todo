let storage = {
  origin: null;
  destination: null;
}

class Controller {

  static init() {
    console.log("Controller initialized")
    addStationListeners()
  }

  static addStationListeners() {

  }

  static handleRouting(e) {
    if(origin === null) {
      // If no point has been selected
      storage.origin = e.currentTarget.dataset.id;
    } else if (storage.origin === e.currentTarget.dataset.id){
      // If the same point is reselected
      storange.origin = null
    } else if(storage.origin) {
      // If a point has been selected and a second point is selected
      storage.destination = e.currentTarget.dataset.id;
      Adapter.getRoute({destination: storage.destination, origin: storage.origin})
      .then(function(data) {
        
      })

    }
  }

}
