import PricingOption from "./PricingOption";
import { withRouter } from "react-router-dom";

const PricingOptions = () => {
  //console.log(props.location.state.values);

  return (
    <div className="wrapper">
      <h1>Velg Bilforsikring</h1>
      <PricingOption
        name="Bil Pluss"
        description="Full forsikring som gir deg ny bil ved totalskade og dekker leiebil
            uansett type skade."
        price="1945"
      />
      <PricingOption
        name="Bil Kasko"
        description="En forsikring som passer for de fleste. Forsikringen dekker de
        fleste skader på din egen bil og har 8 års garanti på reperasjoner."
        price="1630"
      />
      <PricingOption
        name="Bil Delkasko"
        description="Et rimelig alternativ for eldre biler med litt lavere verdi. Denne
        forsikringen gir deg alt fra Bil Ansvar og gir deg veihjelp. Den
        dekker også enkelte skader på din egen bil ved brann, tyveri og
        glasskader."
        price="457"
      />
      <PricingOption
        name="Bil Ansvar"
        description="Vår enkleste bilforsikring. Denne forsikringen inneholder den
        lovpålagte ansvars­dekningen, men dekker ingen skader på din egen
        bil."
        price="230"
      />
    </div>
  );
};

export default withRouter(PricingOptions);
