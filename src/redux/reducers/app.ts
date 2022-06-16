export interface AppState {
  appLoading: boolean;
}

const initalState: AppState = {
  appLoading: false
}


const appReducer = (
  state: AppState = initalState,
  action: any
): AppState => {
  return state
}


export default appReducer;