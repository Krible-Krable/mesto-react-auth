import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={name || ""}
        onChange={onChangeName}
        className="popup__input popup__input_type_name"
        id="current-name"
        placeholder="Ваше имя и фамилия"
        name="profile__name"
        required
        minLength="2"
        maxLength="40"
      />
      <span id="current-name-error"></span>
      <input
        type="text"
        value={description || ""}
        onChange={onChangeDescription}
        className="popup__input popup__input_type_bio"
        id="current-bio"
        placeholder="О себе"
        name="profile__bio"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="current-bio-error"></span>
      <button
        type="submit"
        value="Сохранить"
        className="popup__button popup__button-save"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}
