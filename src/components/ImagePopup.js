import React from 'react';

export default function ImagePopup(props) {
    return (
        <>
            {/* появляется класс null*/}
            <section className={`popup popup_img-open ${props.card && 'popup_is-opened'}`}>
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button" onClick={props.onClose}></button>
                    <img className="popup__img" src={props.card && props.card.link} alt={props.card && props.card.name} />
                    <h2 className="popup__img-label">{props.card && props.card.name}</h2>
                </div>
            </section>
        </>
    );
}
