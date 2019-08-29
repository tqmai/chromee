console.log('chrome extension go');

// let body = document.getElementByTagName("body")

// body.style["background-color"] = "#000000";

// let cartButton = document.getElementById("add-to-cart-button")

// for(el of cartButton){
//     cartButton.value = "Do Not Buy";
// }



// display alert when page loads
const alerts = ['Why are you on Amazon??', 'This is a bad idea...', `Shouldn't you be saving money?`, `Your wallet is already crying.`];
alert(alerts[Math.floor(Math.random() * alerts.length)]);


// find elements to change on page

const cartAdd = document.getElementById('submit.add-to-cart-announce');
cartAdd.innerHTML = 'do not buy this';

price = document.getElementById('priceblock_ourprice');
price.innerHTML = 'this is too much!';

const priceInsideBuybox = document.getElementById('price_inside_buybox');
priceInsideBuybox.innerHTML = '$17,700';

const buyNow = document.getElementById('submit.buy-now-announce');
buyNow.innerHTML = 'don\'t do it';

// editing the product title
const productTitle = document.getElementById('productTitle');
const altTitles = [`another thing you don't need`, 'think of the starving children in America'];
productTitle.innerHTML = altTitles[Math.floor(Math.random() * altTitles.length)];

const otherButton = document.getElementById('add-to-cart-button');

otherButton.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = "blue";
  });

const imagine = document.getElementsByTagName('img');

for (let i = 0; i < imagine.length; i++) {
  imagine[i].src = 'https://us.123rf.com/450wm/anatolymas/anatolymas1607/anatolymas160700007/62128577-3d-small-person-standing-in-sad-pose-next-to-the-word-no-3d-image-white-background-.jpg?ver=6';
}


const cartAddButton = document.getElementById('add-to-cart-button');
cartAddButton.onclick = () => { alert('I am disappointed in you :(') ;};

// stretch goals:
// move button
// alert/pop-up
// link to a new page