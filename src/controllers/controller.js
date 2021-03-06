let storage = {
  origin: null,
  destination: null
}
const originInput = $("#origin-input")[0]
const destinationInput =$("#destination-input")[0]
const tripInfoContainer= $(".trip-information-container")[0]
const loginButton = $("#login-button")[0]
const clearSelectionButton = $("#clear-selection")[0]
const tripInfoButton = $("#trip-info-button")[0]

class Controller {

  static init() {
    console.log("Controller initialized")
    Controller.addStationListeners()
    loginButton.addEventListener("click",SessionController.displayModal)
    clearSelectionButton.addEventListener("click", Controller.clearSelection)
    tripInfoButton.addEventListener("click", TripController.displayTrips)
    $(window).resize(repositionElements)
  }

    static addStationListeners() {

      $(".stop").toArray().forEach(function(stopDiv){
        stopDiv.addEventListener("click", Controller.handleRouting)

    })
  }

  static handleRouting(e) {
    if(storage.origin === null && (e.currentTarget.dataset.id.split(" ")[0] != storage.destination)) {
      // If no origin point has been selected
      storage.origin = e.currentTarget.dataset.id.split(" ")[0]
      Controller.fillFormOrigin(e.currentTarget.id)
      e.currentTarget.style.backgroundColor = 'red'
      e.currentTarget.style.height = "1.5vw"
      e.currentTarget.style.width = "1.5vw"
      if(storage.destination) {
        Adapter.getRoute({destination: storage.destination, origin: storage.origin})
        .then(function(data) {
          Controller.displayTripInformation(data)
        })
      }
    } else if (storage.origin === e.currentTarget.dataset.id.split(" ")[0]){
      // If the origin point is reselected
      originInput.value = ""
      storage.origin = null
      e.currentTarget.style.backgroundColor = 'white'
      e.currentTarget.style.height = "1.2vw"
      e.currentTarget.style.width = "1.2vw"
      tripInfoContainer.style.display = 'none';
    } else if (storage.destination === e.currentTarget.dataset.id.split(" ")[0]){
      // If the destination is reselected
      destinationInput.value = ""
      storage.destination = null
      e.currentTarget.style.backgroundColor = 'white'
      e.currentTarget.style.height = "1.2vw"
      e.currentTarget.style.width = "1.2vw"
      tripInfoContainer.style.display = 'none';
    } else if(storage.origin && storage.destination) {
      // If both points have already been selected, do nothing for a third point
    } else if(storage.origin){
      // If a point has been selected and a second point is selected
      Controller.fillFormDestination(e.currentTarget.id)
      storage.destination = e.currentTarget.dataset.id.split(" ")[0]
      e.currentTarget.style.backgroundColor = 'red'
      e.currentTarget.style.height = "1.5vw"
      e.currentTarget.style.width = "1.5vw"
      Adapter.getRoute({destination: storage.destination, origin: storage.origin})
      .then(function(data) {
        Controller.displayTripInformation(data)
      })
    }
  }

 static displayTripInformation(tripData){
   clearElementChildren(tripInfoContainer)
   tripInfoContainer.style.display = 'block';
   let railTime = tripData.StationToStationInfos[0].RailTime;
   let peakFare = tripData.StationToStationInfos[0].RailFare.PeakTime;
   let offPeak =tripData.StationToStationInfos[0].RailFare.OffPeakTime;
   let seniorDisabled = tripData.StationToStationInfos[0].RailFare.SeniorDisabled;
   let div = document.createElement("div")
   div.innerHTML = `<ul class = "trip-information-list">
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Rail Time:</div>
             <div id = 'railTime' class = "trip-info-datapoint">${railTime} Mins</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Peak Fare:</div>
             <div id = 'PeakTime' class = "trip-info-datapoint">$${formatPrice(peakFare)}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Off Peak Fare:</div>
             <div id = 'OffPeak' class = "trip-info-datapoint">$${formatPrice(offPeak)}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Senior/Disabled</div>
             <div id = 'Senior'class = "trip-info-datapoint">$${formatPrice(seniorDisabled)}</div>
           </li>
         </ul>`
   tripInfoContainer.appendChild(div)
   // if there is a user currently logged in give option to save route
   if (currentUser){
     let btn = document.createElement("btn")
     btn.classList = "btn btn-primary offset-4"
     btn.innerText = 'Save Route'
     btn.id = "save-route"
     tripInfoContainer.appendChild(btn)
     btn.addEventListener("click", TripController.displayCreateTripForm)
   }

 }

  static fillFormOrigin(stopId){
    let stopName = stopId.split("-").map(word=>capitalize(word)).join(" ")
    originInput.value = stopName;
  }

  static fillFormDestination(stopId){
    let stopName = stopId.split("-").map(word=>capitalize(word)).join(" ")
    destinationInput.value = stopName;
  }

  static clearSelection(e){
    let originId = originInput.value.split(" ").map(word=>word.toLowerCase()).join("-")
    let destinationId = destinationInput.value.split(" ").map(word=>word.toLowerCase()).join("-")
    originInput.value = ""
    destinationInput.value = ""
    storage.origin = null
    storage.destination = null
    $(`#${originId}`)[0].style.backgroundColor = 'white'
    $(`#${originId}`)[0].style.height = "1.2vw"
    $(`#${originId}`)[0].style.width = "1.2vw"
    $(`#${destinationId}`)[0].style.backgroundColor = 'white'
    $(`#${destinationId}`)[0].style.height = "1.2vw"
    $(`#${destinationId}`)[0].style.width = "1.2vw"
    clearElementChildren(tripInfoContainer)

  }

}
