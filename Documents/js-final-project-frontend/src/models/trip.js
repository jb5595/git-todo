class Trip{
  constructor({origin, id, origin_code, destination, destination_code, name, user_id}){
    this.id = id;
    this.origin = origin
    this.origin_code = origin_code
    this.destination = destination
    this.destination_code = destination_code
    this.name = name
    this.user_id = user_id
  }

  static form({origin, destination}) {
    return `<div class="form-group">
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
  }

  info() {
    return `<div class="route-info-header row">
              <div class="col-4">
                <h5>${this.name}</h5>
              </div>
              <div class="col-4">
                Origin: ${this.origin}
              </div>
              <div class="col-4">
                Destination: ${this.destination}
              </div>
            </div>
            <div class="row display-info-container" id = "base-info-${this.id}">
              <div class="incoming-train-info col-8" id = "incoming-trains-${this.id}">
                <h4>Incoming trains</h4>
                <div class="incoming-train-table">
                  <table class = "table">
                    <thead>
                      <tr>
                        <th scope="col">Line</th><th scope="col">Minutes</th><th scope="col">Destination</th>
                      </tr>
                    </thead>
                    <tbody class = "train-table-body" id = "${this.id}-table">
                    </tbody>
                  </table>
                </div>
                <br>
              </div>
          </div>`
  }

  buttons() {

    const buttonsDiv = document.createElement('div')

    // const editButton = document.createElement('button');
    // editButton.classList.add('btn');
    // editButton.classList.add('btn-warning');
    // editButton.id = `${this.id}-edit`
    // editButton.dataset.id = this.id;
    // editButton.name = "button";
    // editButton.innerText = "Edit";
    // editButton.addEventListener('click', TripController.handleEdit);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.id = `${this.id}-delete`
    deleteButton.dataset.id = this.id;
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', TripController.handleDelete);

    buttonsDiv.append(deleteButton)
    // buttonsDiv.append(editButton)

    return buttonsDiv
  }

}
