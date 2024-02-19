let bagItems;
onLoad();
function onLoad() {
  let bagItemstr = localStorage.getItem('bagItems');
  bagItems = bagItemstr ? JSON.parse(bagItemstr) : [];
  displayItems();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCount = document.querySelector('.bag_count');
  if(bagItems.length > 0) {
    bagItemCount.style.visibility = 'visible';
    bagItemCount.innerText = bagItems.length;
  }
  else {
    bagItemCount.style.visibility = 'hidden';
  }
  
}


function displayItems() {
let itemContainer = document.querySelector(".items_container");
if(!itemContainer) {
  return;
}

let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="items_images">
    <img class="image" src="${item.image}" alt="" />
    <div class="ratings">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company_name">${item.company}</div>
    <div class="item_name">${item.item_name}</div>
    <div class="price">
      <span class="current_price">Rs ${item.current_price}</span>
      <span class="original_price">Rs ${item.original_price}</span>
      <span class="discount">${item.discount_percentage} %OFF</span>
    </div>
    <button class="add-to-bag" onclick="addToBag(${item.id})">Add to bag</button>
  </div>
` 
})
itemContainer.innerHTML = innerHtml;
}









































// let arr = [
//   {
//     item: 'Buy Milk',
//     dueDate: '10/12/2023'
//   },
//   {
//   item: 'Go to college',
//   dueDate: '10/12/2023'
//   }
// ];
// displayItems();

// function addTodo() {
//   let inputElement = document.querySelector('#input-element');
//   let inputDate = document.querySelector('#input-date');
//   let todoItem = inputElement.value;
//   let todoDate = inputDate.value;
//   arr.push({item:todoItem, dueDate:todoDate})
//   inputElement.value = '';
//   inputDate.value = '';
//   displayItems();
// }

// function displayItems() {
//   let showItems = document.querySelector('.todo-container');
//   let newHtml = '';
//   for(let i = 0; i < arr.length; i++){
//     let {item, dueDate} = arr[i];
//     newHtml += `
//       <span>${item}</span>
//       <span>${dueDate}</span>
//       <button class="dlt-btn" onclick="arr.splice(${i}, 1); displayItems();">Delet</button>
//     `;
//   }
//   showItems.innerHTML = newHtml;
// }
