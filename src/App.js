import "./App.css";
import PricingOptions from "./components/PricingOptions";
import CarInsuranceForm from "./components/CarInsuranceForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CarInsuranceForm />
          </Route>
          <Route path="/pricingOptions">
            <PricingOptions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
