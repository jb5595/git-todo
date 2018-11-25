export function AddBrowserPropsToStore(props){

  return (dispatch) => {
    return dispatch( {type:"SET_BROWSER_PROPS", props});
  }
}
