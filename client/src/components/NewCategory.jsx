import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { customAlert } from "../helpers/utils";

const initialState = {
  name: "",
};

const NewCategory = ({ addCetegory, deleteErrors, errors }) => {
  const [formState, setFormState] = useState(initialState);
  const [errorsState, setErrorsState] = useState(initialState);

  useEffect(() => {
    customAlert();
  }, []);

  useEffect(() => {
    if (errors?.message && errors?.message.length > 0) {
      alert(errors?.message);
      deleteErrors(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);


  const handleOnSubmit = (event) => {
    event.preventDefault();
    setErrorsState(validate(formState));

    if (Object.entries(errorsState).length > 0) {
      alert("Fill all fields");
      return;
    }

    // addCategory(name);
  };

  const handleOnChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });

    setErrorsState(
      validate({
        ...formState,
        [event.target.name]: event.target.value,
      })
    );
  };

  const validate = (formState) => {
    const errors = {};

    if (!formState.name) {
      errors.name = "Category Name is required";
    } else if (formState.name.length < 3) {
      errors.name = "Category Name is invalid, must be at least 3 characters";
    }

    return errors;
  };

  return (
    <section>
      <p> New product </p>

      <form onSubmit={handleOnSubmit} method="post" id="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="false"
          placeholder="Write product name here..."
          value={formState.name}
          onChange={handleOnChange}
          autoFocus
          className={`${errorsState.name && "danger"} `}
        />
        {errorsState.name && (
          <p id="danger" className="danger">
            {errorsState.name}
          </p>
        )}
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    errors: state.categoryReducer.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addCategory: (name) => dispatch(addCategory(name)),
    // deleteErrors: () => dispatch(deleteErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
