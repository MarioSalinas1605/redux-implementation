import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import { BURN } from './actions/index.js'


const store = createStore(reducer, 0);
// store.getState();
store.subscribe(() => {
    console.log('Something have change on the store', store.getState());
    window.result.textContent = `Haz quemado ${store.getState()} calorias.`
    window.pizzaCocaBurning.textContent = `Te faltan quemar ${1360563 - store.getState()} para quemar las calorias de una pizza y una coca.`
});

const burn = () => {
    console.log('Burning calories');
    store.dispatch({
        type: BURN,
        payload: 1.42
    });
}

window.burn.addEventListener('click', burn)