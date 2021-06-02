import { useState } from "react";
import PricingOption from "./PricingOption";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PricingOptions = (props) => {
  const history = useHistory();
  const [prices, setPrices] = useState({
    price1: "Laster pris",
    price2: "Laster pris",
    price3: "Laster pris",
    price4: "Laster pris",
  });
  let newPrices = [];

  function fetchPrices() {
    return new Promise(function (resolve, reject) {
      newPrices = mockAPI(props.history.location.state.values);
      setTimeout(resolve, 2000);
    }).then(function () {
      setPrices({
        price1: newPrices[0],
        price2: newPrices[1],
        price3: newPrices[2],
        price4: newPrices[3],
      });
    });
  }

  function mockAPI(props) {
    return ["1945", "1430", "647", "250"];
  }

  fetchPrices();

  return (
    <div className="wrapper">
      <h1>Velg Bilforsikring</h1>
      <PricingOption
        name="Bil Pluss"
        description="Full forsikring som gir deg ny bil ved totalskade og dekker leiebil
            uansett type skade."
        price={prices.price1}
      />
      <PricingOption
        name="Bil Kasko"
        description="En forsikring som passer for de fleste. Forsikringen dekker de
        fleste skader på din egen bil og har 8 års garanti på reperasjoner."
        price={prices.price2}
      />
      <PricingOption
        name="Bil Delkasko"
        description="Et rimelig alternativ for eldre biler med litt lavere verdi. Denne
        forsikringen gir deg alt fra Bil Ansvar og gir deg veihjelp. Den
        dekker også enkelte skader på din egen bil ved brann, tyveri og
        glasskader."
        price={prices.price3}
      />
      <PricingOption
        name="Bil Ansvar"
        description="Vår enkleste bilforsikring. Denne forsikringen inneholder den
        lovpålagte ansvars­dekningen, men dekker ingen skader på din egen
        bil."
        price={prices.price4}
      />
    </div>
  );
};

export default withRouter(PricingOptions);
