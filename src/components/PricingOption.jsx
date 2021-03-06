const PricingOption = (props) => {
  return (
    <div className="pricingOption">
      <div>
        <h2 className="pricingOptionName">{props.name}</h2>
        <p className="pricingOptionDescription">{props.description}</p>
      </div>
      <div className="pricingOptionRight">
        <h1 className="pricingOptionPrice">
          {props.price}{" "}
          <span className="pricingOptionPriceSmall">
            {props.price === "Laster pris" ? "" : "kr/mnd"}
          </span>
        </h1>
        <button className="blackButton choosePricingOptionButton">Velg</button>
      </div>
    </div>
  );
};

export default PricingOption;
