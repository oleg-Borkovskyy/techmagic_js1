const list = document.querySelector(".list");
const addQueueItemBtn = document.querySelector(".form-queue__btn-add");
const removeQueueItemBtn = document.querySelector(".form-queue__btn-remove");
const store = window.localStorage;
let counter = {
  count: 0
}
if (store.getItem("counter")) {
  counter.count = Number.parseInt(store.getItem("counter"));
}
if (store.getItem("queue")) {
  list.innerHTML = store.getItem("queue");
}

addQueueItemBtn.addEventListener("click", (event) => {
  event.preventDefault();
  newElement();
});

removeQueueItemBtn.addEventListener("click", (event) => {
  event.preventDefault();
  removeQueueElement();
});

list.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    if (event.target.tagName === "LI") event.target.classList.toggle("checked");
  },
  false
);

const newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.querySelector(".form-queue__input").value;
  let inputText = document.createTextNode(inputValue);
  li.appendChild(inputText);
  if (inputValue == "") {
    alert("Input field is empty, please write something");
  } else if (counter.count<=24){
    document.querySelector(".list").appendChild(li);
    counter.count=counter.count+1
    setStore();
  }
  document.querySelector(".form-queue__input").value = "";
};

const removeQueueElement = () => {
  if (counter.count >= 1) {
    list.removeChild(list.getElementsByTagName("li")[0]);
    counter.count=counter.count-1
    setStore();
    }
};

const setStore = () => {
  store.setItem("queue", list.innerHTML);
  store.setItem("counter",`${counter.count}`);
};
