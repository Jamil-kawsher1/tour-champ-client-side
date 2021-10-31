import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import AddService from './Component/AddService/AddService';
import Services from './Component/Services/Services';
import Order from './Component/Order/Order';
import Myorders from './Component/MyOders/Myorders';
import SingleOrder from './Component/MyOders/SingleOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import PhotoGallary from './Component/PhotoGallery/PhotoGallary';
import TopTravel from './Component/TopTravel/TopTravel';
import ManageOrder from './Component/MangeOrder/ManageOrder';
import NotFound from './Component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>

              <Header></Header>
              <Services></Services>
              <PhotoGallary></PhotoGallary>
              <TopTravel></TopTravel>

            </Route>
            <Route path="/login">

              <Login></Login>

            </Route>

            <PrivateRoute path="/placeorder/:id">

              <Order></Order>

            </PrivateRoute>
            <PrivateRoute path="/myorder">

              <Myorders></Myorders>

            </PrivateRoute>
            <PrivateRoute path="/addService">

              <AddService></AddService>

            </PrivateRoute>

            <PrivateRoute path="/manageorder">

              <ManageOrder></ManageOrder>

            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
