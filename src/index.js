import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavoriteRecipeList from "./components/FavoriteRecipeList";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* //either place the common one at last or use exact else all path will navigate to App */}
        <Route exact path="/" component={App} />
        <Route path="/favorites" component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
