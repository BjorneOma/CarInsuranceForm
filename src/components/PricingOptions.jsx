//lag insuranceoption klasse

const PricingOptions = () => {
  return (
    <div className="wrapper">
      <h1>Kjøp Bilforsikring</h1>
      <div className="insuranceOption">
        <div>
          <h2>Bil Pluss</h2>
          <p className="insuranceOptionDescription">
            Full forsikring som gir deg ny bil ved totalskade og dekker leiebil
            uansett type skade.
          </p>
        </div>
        <div>
          <h1>
            1945 <span>kr/mnd</span>
          </h1>
          <button className="blackButton">Velg og fortsett</button>
        </div>
      </div>
      <div className="insuranceOption">
        <div>
          <h2>Bil Kasko</h2>
          <p className="insuranceOptionDescription">
            En forsikring som passer for de fleste. Forsikringen dekker de
            fleste skader på din egen bil og har 8 års garanti på reperasjoner.
          </p>
        </div>
        <div>
          <h1>
            1630 <span>kr/mnd</span>
          </h1>
          <button className="blackButton">Velg og fortsett</button>
        </div>
      </div>
      <div className="insuranceOption">
        <div>
          <h2>Bil Delkasko</h2>
          <p className="insuranceOptionDescription">
            Et rimelig alternativ for eldre biler med litt lavere verdi. Denne
            forsikringen gir deg alt fra Bil Ansvar og gir deg veihjelp. Den
            dekker også enkelte skader på din egen bil ved brann, tyveri og
            glasskader.
          </p>
        </div>
        <div>
          <h1>
            457 <span>kr/mnd</span>
          </h1>
          <button className="blackButton">Velg og fortsett</button>
        </div>
      </div>
      <div className="insuranceOption">
        <div>
          <h2>Bil Ansvar</h2>
          <p className="insuranceOptionDescription">
            Vår enkleste bilforsikring. Denne forsikringen inneholder den
            lovpålagte ansvars­dekningen, men dekker ingen skader på din egen
            bil.
          </p>
        </div>
        <div>
          <h1>
            230 <span>kr/mnd</span>
          </h1>
          <button className="blackButton">Velg og fortsett</button>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
