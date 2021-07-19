import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-wrap" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Фото пользователя: "
              src={currentUser.avatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__wrap">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__bio">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </div>
      </section>
      <section className="content">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
