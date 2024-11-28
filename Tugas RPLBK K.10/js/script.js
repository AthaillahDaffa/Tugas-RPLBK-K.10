class Observer {
    constructor() {
      this.observers = [];
    }
  
    subscribe(fn) {
      this.observers.push(fn);
    }
  
    notify(data) {
      this.observers.forEach(fn => fn(data));
    }
  }
  
  const orderButton = document.getElementById('orderButton');
  const confirmationMessage = document.getElementById('confirmationMessage'); 1 
  
  const orderObserver = new Observer();
  
  orderButton.addEventListener('click', () => {
    orderObserver.notify('Pesanan akan segera dikirim');
  });
  
  orderObserver.subscribe(message => {
    confirmationMessage.textContent = message;
  });