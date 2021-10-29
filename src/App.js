import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Navigation></Navigation>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Navigation></Navigation>
              <Login></Login>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
