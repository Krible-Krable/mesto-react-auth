// export
export class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token; //'ae0317fc-6951-4637-95ad-130db5499c77';
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    return res.json();
  }

  getUser() {
    return fetch(`${this._url}/cohort-19/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._getResponseData);
  }

  getInitialCards() {
    return fetch(`${this._url}/cohort-19/cards`, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }

  // modify
  editDataProfile(name, about) {
    return fetch(`${this._url}/cohort-19/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(name, link) {
    return fetch(`${this._url}/cohort-19/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cohort-19/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._getResponseData);
  }

  like(cardId) {
    return fetch(`${this._url}/cohort-19/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(this._getResponseData);
  }

  dislike(cardId) {
    return fetch(`${this._url}/cohort-19/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._getResponseData);
  }

  editAvatar(avatar) {
    return fetch(`${this._url}/cohort-19/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar }),
    }).then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, IsLiked) {
    return IsLiked ? this.dislike(cardId) : this.like(cardId);
  }

  changeCardDelete(cardId, isOwn) {
    if (isOwn) {
      return this.deleteCard(cardId);
    }
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  token: "ae0317fc-6951-4637-95ad-130db5499c77",
});

export default api;
