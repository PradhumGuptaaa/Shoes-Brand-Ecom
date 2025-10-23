import React from "react";
import "./CommonForm.css";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <input
            className="form-input"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <select
            className="form-select"
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            value={value}
          >
            <option value="">{getControlItem.label}</option>
            {getControlItem.options &&
              getControlItem.options.map((optionItem) => (
                <option key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </option>
              ))}
          </select>
        );
        break;
      case "textarea":
        element = (
          <textarea
            className="form-textarea"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <input
            className="form-input"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit} className="common-form">
      <div className="form-container">
        {formControls.map((controlItem) => (
          <div className="form-group" key={controlItem.name}>
            <label htmlFor={controlItem.name} className="form-label">
              {controlItem.label}
            </label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="submit-button"
        disabled={isBtnDisabled}
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
}

export default CommonForm;
