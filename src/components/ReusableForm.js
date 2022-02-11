import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const formStyling = {
    width: '40%'
  }
  return (
    <React.Fragment>
      <form style={formStyling} onSubmit={props.formSubmissionHandler}>
        <input className="form-control"
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input className="form-control"
          type='text'
          name='brand'
          placeholder='Brand' />
        <input className="form-control"
          type='number'
          name='price'
          placeholder='Price' />
        <input className="form-control"
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;