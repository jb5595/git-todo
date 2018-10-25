const tripInfoModal =  $("#tripInfoModal")[0]
const closeModalButton = $("#close-route-modal")[0]

class TripController{

  static displayMyRoutesButton(){
    $(".map-container")[0].style.marginBottom =  "18.5%";
    $("#trip-info-button")[0].style.display = "block"

  }

  static closeModal(e){
      if (e.target == tripInfoModal || e.target == closeModalButton ) {
          tripInfoModal.style.display = "none";
      }
  }

  static displayCreateTripForm(e){
     let origin = $("#origin-input")[0].value
     let destination =$("#destination-input")[0].value
     clearElementChildren(loginModalContentDiv)
      loginModal.style.display = "block"
      let form = document.createElement("form")
      form.innerHTML = `<div class="form-group">
                          <label for="emails">Route Name</label>
                          <input type="text" class="form-control" id = "new-route-name">
                        </div>
                           <div class="form-group">
                          <label for="emails">Origin</label>
                          <input type="text" class="form-control" value = "${origin}" id = "new-route-origin" readonly>
                        </div>
                        <div class="form-group">
                            <label for="emails">Destination</label>
                            <input type="text" class="form-control" value = "${destination}"  id = "new-route-destination" readonly>
                        </div>
                        <input type="submit" class="form-control btn btn-primary" value = "Create Route">`
      loginModalContentDiv.appendChild(form)
      form.addEventListener("submit", TripController.handleTripCreation)
      document.addEventListener("click", closeModal)
  }


  static handleTripCreation(e) {
    e.preventDefault()
    const name = $("#new-route-name")[0].value
    const origin =$("#new-route-origin")[0].value
    const originCode = storage.origin
    const destination =$("#new-route-destination")[0].value
    const destinationCode = storage.destination
    const user_id = currentUser.id

    Adapter.postTrip({name: name, origin: origin, origin_code: originCode, destination: destination, destination_code: destinationCode, user_id: user_id})
      .then(function(res){
        let trip = new Trip(res)
        currentUser.addTrip(trip)
        TripController.creationSuccess()
      })
  }

  static creationSuccess(){
    loginModalContentDiv.innerHTML = "";
    const textDiv = document.createElement('div')
    textDiv.innerText = "Route Successfully Created!";
    loginModalContentDiv.append(textDiv)

  }

  static displayTrips(e){
    tripInfoModal.style.display = "block"
    clearElementChildren($(".route-info-modal-body")[0])
    document.addEventListener("click",TripController.closeModal)
    // For Each User Trip Display Trip Information
    currentUser.trips.forEach(trip => TripController.displayTrip(trip))
    closeModalButton.addEventListener("click", TripController.closeModal)
  }

  static displayTrip(trip){
    let parentNode = $(".route-info-modal-body")[0]
    let tripDiv = document.createElement("div")
    tripDiv.classList = "route-info"
    tripDiv.innerHTML =`<div class="route-info-header row">
                        <div class="col-4">
                          <h5>${trip.name}</h5>
                        </div>
                        <div class="col-4">
                          Origin: ${trip.origin}
                        </div>
                        <div class="col-4">
                          Destination: ${trip.destination}
                        </div>
                      </div>
                      <div class="row display-info-container" id = "${trip.id}-base-info">
                        <div class="incoming-train-info col-8">
                          <h4>Incoming trains</h4>
                          <div class="incoming-train-table">
                            <table class = "table">
                              <thead>
                                <tr>
                                  <th scope="col">Line</th><th scope="col">Minutes</th><th scope="col">Destination</th>
                                </tr>
                              </thead>
                              <tbody class = "train-table-body" id = "${trip.id}-table">
                              </tbody>
                            </table>
                          </div>
                          <br>
                          <button type="button" class = "btn btn-warning" id = "${trip.id}-edit" name="button">Edit</button>
                          <button type="button" class = "btn btn-danger" id = "${trip.id}-delete" name="button">Delete</button>
                        </div>
                      </div>`
      parentNode.appendChild(tripDiv)
      TripController.displayBaseTripInformation(trip)
      TripController.displayIncomingTrainInformation(trip)
  }

  static displayBaseTripInformation(trip){
    let parentNode = $(`#${trip.id}-base-info`)[0]
    debugger
    Adapter.getRoute({destination: trip.destination_code, origin: trip.origin_code })
    .then(function(data) {
      let infoDiv = document.createElement("div")
      infoDiv.classList = "base-info col-4"
      infoDiv.innerHTML = `<p>Rail Time: ${data.StationToStationInfos[0].RailTime}Mins.</p>
                           <p>Peak Time: ${data.StationToStationInfos[0].RailFare.PeakTime}</p>
                           <p>Off Peak: ${data.StationToStationInfos[0].RailFare.OffPeakTime}</p>
                           <p>Senior/Disabled: ${data.StationToStationInfos[0].RailFare.SeniorDisabled}</p>`
     parentNode.insertBefore(infoDiv,parentNode.firstChild)
    })


  }

  static displayIncomingTrainInformation(trip){
    let parentNode = $(`#${trip.id}-table`)[0]
    Adapter.getIncomingTrainTimes(trip.origin_code)
    .then(dataArray => dataArray.Trains.forEach(function(train){
      let tr = document.createElement("tr")
      tr.innerHTML = `<th scope="row" class = "train-line ${train.Line}">&bull;</th><td>${train.Min}</td><td>${train.Destination}</td>`
      parentNode.appendChild(tr)
    }))
  }

}
