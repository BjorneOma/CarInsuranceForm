const TextInput = (props) => {
  return (
    <div className="formItem">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        name={props.name}
        type="text"
        value={props.values[props.name]}
        onChange={props.handleChange}
        className={"formDropDown"}
      >
        {props.options.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default TextInput;
