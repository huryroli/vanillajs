const app = () => {
  const addWashBtn = document.querySelector("#wash-btn");
  const addMowBtn = document.querySelector("#mow-btn");
  const addPullBtn = document.querySelector("#pull-btn");
  const listElement = document.querySelector("#added-items");
  const sendInvoiceBtn = document.querySelector("#send-btn");
  const totalPriceElement = document.querySelector("#checkout span");

  const items = {
    item1: {
      name: "Car Wash",
      price: 10,
    },
    item2: {
      name: "Mow Lawn",
      price: 20,
    },
    item3: {
      name: "Pull Weeds",
      price: 30,
    },
  };

  let requestedItems = [];
  let totalPrice = [];

  function render(items) {
    let listItems = "";
    for (let i = 0; i < items.length; i++) {
      listItems += `
        <div class="added-element">
            <li>${items[i].name}<button class="remove-btn" data-item="${items[i].name}">x</button></li>
            <p>$ ${items[i].price}</p>
        </div>`;
    }
    listElement.innerHTML = listItems;
  }

  function calculatePrice(prices) {
    let totalPrice = null;
    for (let i = 0; i < prices.length; i++) {
      totalPrice += prices[i];
    }
    totalPriceElement.textContent = totalPrice;
  }

  window.onclick = (e) => {
    if (e.target.classList.contains("remove-btn")) {
      let itemToRemove = e.target.getAttribute("data-item");
      const index = requestedItems.findIndex((x) => x.name === itemToRemove);
      requestedItems.splice(index, 1);
      render(requestedItems);
      if (itemToRemove === "Car Wash") {
        totalPrice.splice(totalPrice.indexOf(10), 1);
      } else if (itemToRemove === "Mow Lawn") {
        totalPrice.splice(totalPrice.indexOf(20), 1);
      } else if (itemToRemove === "Pull Weeds") {
        totalPrice.splice(totalPrice.indexOf(30), 1);
      }
      calculatePrice(totalPrice);
    }
  };

  addWashBtn.addEventListener("click", () => {
    if (requestedItems.includes(items.item1)) return;
    requestedItems.push(items.item1);
    totalPrice.push(items.item1.price);
    render(requestedItems);
    calculatePrice(totalPrice);
  });

  addMowBtn.addEventListener("click", () => {
    if (requestedItems.includes(items.item2)) return;
    requestedItems.push(items.item2);
    totalPrice.push(items.item2.price);
    render(requestedItems);
    calculatePrice(totalPrice);
  });

  addPullBtn.addEventListener("click", () => {
    if (requestedItems.includes(items.item3)) return;
    requestedItems.push(items.item3);
    totalPrice.push(items.item3.price);
    render(requestedItems);
    calculatePrice(totalPrice);
  });

  sendInvoiceBtn.addEventListener("click", () => {
    requestedItems = [];
    totalPrice = [];
    render(requestedItems);
    calculatePrice(totalPrice);
  });
};

app();
