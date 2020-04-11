const initialState = {
  daftarProvinsi: [],
  error: false,
  loading: false
}

export default function reducer(state = initialState, action) {
  console.log("tesMasuk")
  switch (action.type) {
      case "GET_PROVINSI_FAILED":
          return {
              ...state,
              error: true
          } 
          break;
      default:
          return state
          break;
  }
}