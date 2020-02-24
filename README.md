# react-tiny-little-store

React connector for tiny-little-store

See [example](https://codesandbox.io/embed/old-leftpad-4i96p?fontsize=14&hidenavigation=1&theme=dark)

## Getting Started

`npm install tiny-little-store react-tiny-little-store`
After you init your store by doing this:
```javascript
import createStore from "tiny-little-store";
const store = createStore(initialState);
```
you can then do the following:
```javascript
import makeConnector from "react-tiny-little-store"
export const connect = makeConector(store)
```

then you can use this connect in the similar manner as the heavenly borned Redux does.

`connect` is a HOC, you need to pass `mapStateToProps` to it(or don't pass, then you will get the whole store into your props, you nauhgty hacker), but you cannot `mapDispatchToProps` here, why? because you don't dispatch events in tiny-little-store, you just use store.updateStore, or call mutations.

the best way is to have module that exports connect and some functions that rely on updateStore or created with `mutation()` wrapper, so you don't use that directly inside your components.

```javascript
import makeConnector from "react-tiny-little-store"
import createStore from "tiny-little-store"

const initState = {
  counter: 0
}

const store = createStore(initState);
const { updateStore } = store;
export const increment = () => {
  updateStore(({counter}) => ({counter: counter+1}))
}

export const decrement = () => {
  updateStore(({counter}) => ({counter: counter-1}))
}

export const connect = makeConnector(store);
```

Then in your component: 
```jsx
import React from "react";
import {increment, decrement, connect} from "./store";

const App = ({counter}) => {
  return <>
    <button onClick={decrement}>-</button>
    {counter}
    <button onClick={increment}>+</button>
  </>
}

const mapStateToProps = ({counter}) => ({counter});

export default connect(mapStateToProps)(App)
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details