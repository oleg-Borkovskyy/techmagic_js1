


const list = document.querySelector('.list');
const addQueueItemBtn = document.querySelector('.form-queue__btn-add');
const removeQueueItemBtn = document.querySelector('.form-queue__btn-remove');
const store = window.localStorage;




// const arr = [];
// console.log(store.getItem('queue'))
// class Queue extends Array {

//     constructor(arr) {
//         arr.forEach(el=>this.push(el))
//     }
//     enqueue(val) {
//         this.push(val);
//     }
//     dequeue() {
//         return this.shift();
//     }
//     peek() {
//         return this[0];
//     }
//     isEmpty() {
//         return this.length === 0;
//     }
//     printAll() {
//         this.forEach(el=>console.log(el))
//     }
// }



// const myQueue = new Queue();

addQueueItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newElement();
    myQueue.printAll()
});
removeQueueItemBtn.addEventListener('click', (event) => {
    event.preventDefault();
    removeQueueElement();
});



list.addEventListener('click', function (event) {
    event.preventDefault();
    if(event.target.tagName === "LI")  event.target.classList.toggle('checked');
}, false);

const newElement=() => {
    let li = document.createElement('li');
    let inputValue = document.querySelector('.form-queue__input').value;
    let inputText = document.createTextNode(inputValue);
    li.appendChild(inputText);
    if(inputValue == "") {
       alert("Input field is empty, please write something");
    } else {
        document.querySelector('.list').appendChild(li);
        setStore();
        // arr.push(li);
    }
    document.querySelector('.form-queue__input').value = "";
    // myQueue.enqueue(li);
}

const removeQueueElement = () => {

    list.removeChild(list.getElementsByTagName('li')[0]);
    setStore();
}
const setStore = () => {
    store.setItem('queue',list.innerHTML)
}
if (store.getItem('queue')) {
    list.innerHTML = store.getItem('queue');

}