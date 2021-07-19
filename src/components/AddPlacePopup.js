import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const placeInput = React.useRef(null);
  const srcPlaceInput = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace(placeInput.current.value, srcPlaceInput.current.value);
  }
  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_type_place"
        id="current-place"
        placeholder="Название"
        name="popup__place"
        ref={placeInput}
        required
        minLength="2"
        maxLength="30"
      />
      <span id="current-place-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_link"
        id="sign-in-link"
        placeholder="Ссылка на картинку"
        name="popap__link"
        ref={srcPlaceInput}
        required
        // src={selectedCard}
      />
      <span id="sign-in-link-error"></span>
      <button
        type="submit"
        value="Создать"
        className="popup__button popup__button-save"
      >
        Создать
      </button>
    </PopupWithForm>
  );
}
