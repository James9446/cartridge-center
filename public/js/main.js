if (!window.analytics) {
  console.log('analytics.js is currently commented out!');
}

let getData = (game) => {
  let gameObject = {
    name: game,
    product_id: Math.random().toString().split('.')[1],
    sku: Math.random().toString().split('.')[1],
    category: 'Classic Video Games',
    price: Math.round(Math.random() * 50) + .99 + '',
    quantity: 1
  }
  return gameObject;
};

document.addEventListener('click', (event) => {
  console.log(event.target.id);
  let game = event.target.id;
  if (game) {
    if (window.analytics) {
      analytics.track('Product Clicked', getData(game));
    }
  }
});