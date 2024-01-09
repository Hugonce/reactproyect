const products = [
    {
        id: "1",
        name: "Coca Cola",
        price: 1000,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00014400/00014450.jpg?3.0.165",
        stock: 361

    },
    {
        id: "2",
        name: "Coca-Cola-Zero",
        price: 1050,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00180400/00180416.jpg?3.0.165",
        stock: 258

    },
    {
        id: "3",
        name: "Coca Cola Y3000",
        price: 570,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00575000/00575009.jpg?3.0.165",
        stock: 1123

    },
    {
        id: "4",
        name: "Fanta",
        price: 991,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00016400/00016477.jpg?3.0.165",
        stock: 232

    },
    {
        id: "5",
        name: "Sprite",
        price: 991,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00014400/00014451.jpg?3.0.165",
        stock: 176

    },
    {
        id: "6",
        name: "Agua con gas",
        price: 269,
        category: "Agua con gas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00488800/00488888.jpg?3.0.165",
        stock: 214

    },
    {
        id: "7",
        name: "Agua mineral",
        price: 382,
        category: "Agua",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00503800/00503824.jpg?3.0.165",
        stock: 200

    },
    {
        id: "8",
        name: "Agua de mesa",
        price: 930,
        category: "Agua",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00267300/00267340.jpg?3.0.165",
        stock: 54
    },
    

]

function getProducts(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products);
        }, 300);

    })
}

export default getProducts;