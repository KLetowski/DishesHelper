import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import store from './store';
import { Routing } from './utils/routing';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './matrialUITheme';
import EditDish from './components/EditDish';
import NewDish from './components/NewDish';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Switch>
              <Route exact path={Routing.home} component={HomePage} />
              <Route exact path={Routing.addNewDish} component={NewDish} />
              <Route exact path={Routing.editDish} component={EditDish} />
            </Switch>
          </Provider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
