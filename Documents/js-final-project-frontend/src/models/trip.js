class Trip{
  constructor({origin, origin_code, destination, destination_code, name, user_id}){
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
            <div class="row display-info-container" id = "${this.id}-base-info">
              <div class="incoming-train-info col-8">
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
                <button type="button" class = "btn btn-warning" id = "${this.id}-edit" name="button">Edit</button>
                <button type="button" class = "btn btn-danger" id = "${this.id}-delete" name="button">Delete</button>
              </div>
          </div>`
  }

}
