import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__button-delete ${
    isOwn ? "card__button-delete_visible" : "card__button-delete_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_active" : "card__button-like"
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="card">
      <button
        // className="card__button-delete"
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="card__foto"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__footer">
        <h2 className="card__heading">{card.name}</h2>
        <div className="card__button-like_wrap">
          <button
            //className="card__button-like"
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <div className="card__button-like_count">{card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}
