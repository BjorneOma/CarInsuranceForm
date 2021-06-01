const TextInput = (props) => {
  return (
    <div className="formItem">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type="text"
        placeholder={props.placeholder ? props.placeholder : ""}
        value={props.values[props.name]}
        onChange={props.handleChange}
        className={
          props.errors[props.name] === "" ? "formInput" : "formInputRed"
        }
      />
      <span
        className={
          props.errors[props.name] === ""
            ? "errorMessageHidden"
            : "errorMessageShown"
        }
      >
        {props.errors[props.name]}
      </span>
    </div>
  );
};

export default TextInput;
