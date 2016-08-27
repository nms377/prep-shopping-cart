window.onload = function(){

var sum = 0;
	
var items = 
[
  { "name": "Luscious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, "image": 'images/jello.jpg'}, 
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99, "image": 'images/standdesk.jpg'},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44, "image": 'images/grenade.jpg'},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99, "image": 'images/cookie.jpg'},
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32, "image": 'images/hanger.jpg'},
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "image": 'images/mustache.png'}
];



for (var i=0; i<items.length; i++){

sum += items[i].price; // sum - sum + price[i]

var wrap = document.createElement('div');
wrap.className = 'wrap';
wrap.innerHTML = "  ";
main.appendChild(wrap);

 //to pass a collection of images
var imgBox = document.createElement('div');
imgBox.className = 'photos';
/*imgBox.innerHTML = 'where pics will display';*/
wrap.appendChild(imgBox);

var foto = document.createElement('img');
foto.className = 'fotographia';
foto.src = items[i].image;
imgBox.appendChild(foto);


/*var images = document.createElement("img");
images.className = "img";
images.setAttribute('src', 'images/cart.svg');
wrap.appendChild(images);*/

var name = document.createElement('div');
name.className = 'item';
name.innerHTML = items[i].name;
wrap.appendChild(name);

var desc = document.createElement('div');
desc.className = 'description';
desc.innerHTML = items[i].description;
wrap.appendChild(desc);

var price = document.createElement('div');
price.className = 'price';
price.innerHTML = items[i].price;
wrap.appendChild(price);


/*var image = document.createElement('IMG');
image.id = 'shopping';
image.innerHTML = items[i].image;
main.appendChild(image);*/ //<--Duplicate IMG w/ no src. Also, Phil's awesome ;)


} //end of first for loop

document.getElementById('subtotal');
subtotal.innerHTML = 'SUBTOTAL: ' + sum;



};
