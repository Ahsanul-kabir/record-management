import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header/Header';

function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddEdit />
          </Route>
          <Route exact path="/update/:id">
            <AddEdit />
          </Route>
          {/* <Route exact path="/view/:id">
            <View />
          </Route> */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
