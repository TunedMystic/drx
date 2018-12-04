import axios from 'axios';

const allProducts = [{
    "id": "7d7fa1660fe07404a5b9981adb75fbb2",
    "name": "French Fries",
    "price": "$33.61"
}, {
    "id": "94d5f6ccca5ca88eb02bfade95f1c507",
    "name": "Bread",
    "price": "$27.64"
}, {
    "id": "8bfb527a790283683a742bd4dac4bae4",
    "name": "Fried Rice",
    "price": "$12.92"
}, {
    "id": "8b5aa8b622ae63a261c114601495432c",
    "name": "Burger",
    "price": "$25.38"
}, {
    "id": "3ce144fe00b7871a84f4f2e785e050e3",
    "name": "Pizza",
    "price": "$13.03"
}, {
    "id": "9ce8fd455f741f7e4248844830c58f90",
    "name": "Burrito",
    "price": "$30.31"
}, {
    "id": "d42e99febf65a7c4745ef90461765b73",
    "name": "Chicken Salad",
    "price": "$8.64"
}, {
    "id": "60353e2bb13413849c94dcf3e0bf998c",
    "name": "Grilled Chicken",
    "price": "$20.30"
}, {
    "id": "1e8ac61b82cf11cbf69a14204c013bb6",
    "name": "Pumpkin Pie",
    "price": "$15.66"
}, {
    "id": "1dae6742fd2e23b5190917d44b5f9c12",
    "name": "Apple Pie",
    "price": "$10.42"
}, {
    "id": "d4a1ba8ab192b4f5881a46786f3ffd22",
    "name": "Ice Cream Cake",
    "price": "$37.52"
}, {
    "id": "d2a6d1a0acdd34a49f0aab89753ab614",
    "name": "Cheesecake",
    "price": "$11.12"
}, {
    "id": "2ada0dde99c9f449c76a778ebbfeb9b3",
    "name": "Banana Bread",
    "price": "$10.39"
}, {
    "id": "69a68a95dbe16278dd38a45ab938e083",
    "name": "Blueberry Muffin",
    "price": "$15.54"
}];



export default {
    products: {
        fetchAll: () => axios.post('http://httpbin.org/anything', allProducts).then(res => res.data.json)
    }
};
