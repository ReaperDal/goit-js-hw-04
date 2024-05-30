class Container {
    constructor(containerSize) {
      this.containerSize = containerSize;
      this.products = {};
    }
  
    addProduct(productName, quantity) {
      if (this.products[productName]) {
        this.products[productName] += quantity;
      } else {
        this.products[productName] = quantity;
      }
    }
  
    isEnoughCapacity() {
      const totalProducts = Object.values(this.products).reduce((total, count) => total + count, 0);
      return totalProducts <= this.containerSize;
    }
  }
  
  function isEnoughCapacity(products, containerSize) {
    const container = new Container(containerSize);
    for (let [productName, quantity] of Object.entries(products)) {
      container.addProduct(productName, quantity);
    }
    return container.isEnoughCapacity();
  }
  

  console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false
  