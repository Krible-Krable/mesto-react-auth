import React from "react";

export default function PopupWithForm(props) {
  const { onSubmit } = props;

  return (
    <>
      <section
        className={`popup popup_type_${props.name} ${
          props.isOpen && "popup_is-opened"
        }`}
      >
        <div className="popup__container">
          <button
            className="popup__button-close"
            type="button"
            onClick={props.onClose}
          ></button>
          <form
            className="popup__form"
            name={props.name}
            onSubmit={onSubmit}
            noValidate
          >
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
          </form>
        </div>
      </section>
    </>
  );
}
