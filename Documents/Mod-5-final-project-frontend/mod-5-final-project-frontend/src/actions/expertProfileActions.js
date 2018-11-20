const mockUser = {
  full_name: "John Smith" ,
  address: "1234 Street",
  city: "Washington",
  state: "DC",
  zip_code: "22203" ,
  website_url: "www.website.com",
  about: "I Am a Business Expert"
}

//   return (dispatch) => {
  //   dispatch( {type:"LOADING_CATS"});
  //   return fetch('http://localhost:4000/db').then(response => {
  //     return response.json()
  //   }).then(cats => {
  //     const payload = cats.images
  //     dispatch({type: "FETCH_CATS", payload})
  // })
  // }
export function loadProfile(payload){
  return {type: "FETCH_PROFILE", payload: mockUser}
}
