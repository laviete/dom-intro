"use strict";

const users = [
  {
    firstName: "Test1",
    lastName: "Testovich1",
    age: 28,
    photoSrc: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
  },
  {
    firstName: "Test2",
    lastName: "Testovich2",
    age: 31,
    photoSrc:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg",
  },
  {
    firstName: "Test3",
    lastName: "Testovich3",
    age: 70,
    photoSrc:
      "https://images.pexels.com/photos/8894457/pexels-photo-8894457.jpeg",
  },
  {
    firstName: "Test4",
    lastName: "Testovich4",
    age: 20,
    photoSrc:
      "https://images.pexels.com/photos/7405149/pexels-photo-7405149.jpeg?cs=srgb&dl=pexels-tran-nhu-tuan-7405149.jpg&fm=jpg",
  },
  {
    firstName: "Test5",
    lastName: "Testovich5",
    age: 28,
    photoSrc:
      "https://images.pexels.com/photos/10423643/pexels-photo-10423643.jpeg",
  },
];
const userCards = users.map(u=>createUserCard(u));

document.body.append(...userCards);

function createUserCard(user) {
  const userCardEl = document.createElement("article");
  userCardEl.classList.add("userCard");

  const userImg = createImg(user);
  const userInfoEl = createUserInfo(user);
  const trashIcon = createTrashIcon();

  userCardEl.append(userImg, userInfoEl, trashIcon);
  return userCardEl;
}

function createImg({ photoSrc, firstName, lastName }) {
  const userImg = document.createElement("img");
  userImg.src = photoSrc;
  userImg.alt = `${firstName} ${lastName}`;
  userImg.classList.add("userImg");
  return userImg;
}

function createUserInfo({ firstName, lastName, age }) {
  const userInfoEl = document.createElement("div");
  userInfoEl.classList.add("userInfo");

  const userNameEl = document.createElement("p");
  userNameEl.classList.add("userName");
  userNameEl.textContent = `${firstName} ${lastName}`;
  userInfoEl.append(userNameEl);

  const userAgeEl = document.createElement("span");
  userAgeEl.classList.add("userAge");
  userAgeEl.textContent = age;
  userInfoEl.append(userAgeEl);

  return userInfoEl;
}

function createTrashIcon() {
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("trashIcon");
  trashIcon.classList.add("fa-solid");
  trashIcon.classList.add("fa-trash");
  function deleteUser(e) {
    e.target.closest(".userCard").remove();
  }

  trashIcon.onclick = deleteUser;
  return trashIcon;
}
