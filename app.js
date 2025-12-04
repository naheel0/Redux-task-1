
const {createStore} = Redux
const initialState={
    value:0
}
function appReducer(prevState =initialState,action){
    switch(action.type){
        case 'increment':
      return { value: prevState.value + 1 };
    case 'decrement':
      return { value: prevState.value - 1 };
    default:
      return prevState;
    }
}
const store =createStore( appReducer)

const valueLabel = document.getElementById('value');
const btnInc = document.getElementById('increment');
const btnDec = document.getElementById('decrement');

store.subscribe(()=>{
valueLabel.innerText=store.getState().value
})

btnInc.onclick=()=>store.dispatch({type:'increment'})
btnDec.onclick=()=>store.dispatch({type:'decrement'})