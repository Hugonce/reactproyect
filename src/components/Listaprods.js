const products = [
    {
        id: "1",
        name: "Coca Cola",
        price: 1000,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00014400/00014450.jpg?3.0.165",
        stock: 361,
        description: "El mejor del mundo"

    },
    {
        id: "2",
        name: "Coca-Cola-Zero",
        price: 1050,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00180400/00180416.jpg?3.0.165",
        stock: 258,
        description: "fasdadad"

    },
    {
        id: "3",
        name: "Coca Cola Y3000",
        price: 570,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00575000/00575009.jpg?3.0.165",
        stock: 1123,
        description: "gasd"

    },
    {
        id: "4",
        name: "Fanta",
        price: 991,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00016300/00016339.jpg?3.0.165",
        stock: 232,
        description: "fasdadad"

    },
    {
        id: "5",
        name: "Sprite",
        price: 991,
        category: "Gaseosa",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00014400/00014451.jpg?3.0.165",
        stock: 176,
        description: "fasdadad"

    },
    {
        id: "6",
        name: "Agua con gas",
        price: 269,
        category: "Agua con gas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00488800/00488888.jpg?3.0.165",
        stock: 214,
        description: "fasdadad"

    },
    {
        id: "7",
        name: "Agua mineral",
        price: 382,
        category: "Agua",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00503800/00503824.jpg?3.0.165",
        stock: 200,
        description: "fasdadad"

    },
    {
        id: "8",
        name: "Agua de mesa",
        price: 930,
        category: "Agua",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00267300/00267340.jpg?3.0.165",
        stock: 54,
        description: "fasdadad"

    },
    

]

function getProducts(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products);
        }, 500);

    })
}

export default getProducts;