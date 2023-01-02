const Input = ({
  labelText = "",
  inputType,
  inputId,
  inputValue,
  inputHandler,
  placeholder = "",
}) => {
  if (!inputId | !inputType) {
    console.warn("Please add input type and id!");
    return;
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        value={inputValue}
        onChange={inputHandler}
        className="rounded-md border py-1 px-2 outline-offset-2 placeholder:font-light placeholder:italic"
      />
    </div>
  );
};

export default Input;
