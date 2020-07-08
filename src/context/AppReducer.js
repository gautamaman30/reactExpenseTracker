export default (state, action) => {
  switch(action.type){
    case 'ADD_T':
      return{
        transactions: [action.payload, ...state.transactions]
      }
    case 'DELETE_T':
      return{
        transactions: state.transactions.filter(t => t.id !== action.payload)
      }
    default:
      return state;
  }
}
