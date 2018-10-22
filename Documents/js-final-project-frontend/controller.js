let storage = {
  origin: null,
  destination: null
}

class Controller {

  static init() {
    console.log("Controller initialized")
    Controller.addStationListeners()
  }

  static addStationListeners() {

    $(".stop").toArray().forEach(function(stopDiv){
      stopDiv.addEventListener("click", Controller.handleRouting)

  })
}

  static handleRouting(e) {
    
    if(storage.origin === null) {
      // If no point has been selected
      storage.origin = e.currentTarget.dataset.id.split(" ")[0]
    } else if (storage.origin === e.currentTarget.dataset.id.split(" ")[0]){
      // If the same point is reselected
      storage.origin = null
    } else if(storage.origin) {
      // If a point has been selected and a second point is selected
      storage.destination = e.currentTarget.dataset.id.split(" ")[0]
      Adapter.getRoute({destination: storage.destination, origin: storage.origin})
      .then(function(data) {
        console.log(data)
      })

    }
  }

}
