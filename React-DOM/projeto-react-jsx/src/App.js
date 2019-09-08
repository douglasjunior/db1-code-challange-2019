import React from 'react';

import { Container } from 'reactstrap';
import {
  BrowserRouter, Route,
  Switch,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';
import reduxStore from './redux'

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Menu />

        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/tarefas" component={Tasks} />
            <Route path="/sobre" component={About} />
            <Route path="/postagens" component={Posts} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
