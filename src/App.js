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


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Navigation></Navigation>
              <Header></Header>
              <Services></Services>
              <PhotoGallary></PhotoGallary>
              <TopTravel></TopTravel>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Navigation></Navigation>
              <Login></Login>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/placeorder/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <Navigation></Navigation>
              <Myorders></Myorders>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <Navigation></Navigation>
              <AddService></AddService>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/photogallary">
              <PhotoGallary></PhotoGallary>
            </Route>
            <Route path="/manageorder">
              <Navigation></Navigation>
              <ManageOrder></ManageOrder>
              <Footer></Footer>
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
