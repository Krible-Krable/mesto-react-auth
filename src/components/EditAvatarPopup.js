import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  //   const currentUser = React.useContext(CurrentUserContext);
  const avatarInput = React.useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarInput.current.value);
  }
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_type_src"
        id="current-avatar"
        placeholder="ссылка/источник"
        name="popup__avatar"
        ref={avatarInput}
        required
      />
      <span id="current-avatar-error"></span>
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
