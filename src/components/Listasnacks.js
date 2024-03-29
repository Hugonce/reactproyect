const snacks = [
    {
        id: "9",
        name: "Papas Lays",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567578.jpg?3.0.165",
        stock: 58

    },
    {
        id: "10",
        name: "Doritos",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567577.jpg?3.0.165",
        stock: 12

    },
    {
        id: "11",
        name: "Saladix",
        price: 385,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00015800/00015882.jpg?3.0.165",
        stock: 4123

    },
    {
        id: "12",
        name: "Chetos",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567597.jpg?3.0.165",
        stock: 357

    },
    {
        id: "13",
        name: "Oreo",
        price: 750,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00532200/00532297.jpg?3.0.165",
        stock: 0

    },
    {
        id: "14",
        name: "Chocolinas",
        price: 460,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00541500/00541596.jpg?3.0.165",
        stock: 74

    },
    {
        id: "15",
        name: "Donuts",
        price: 442,
        category: "Dulce",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00535300/00535395.jpg?3.0.165",
        stock: 214

    },
    {
        id: "16",
        name: "Toddy",
        price: 927,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00475100/00475157.jpg?3.0.165",
        stock: 24

    },
    

]

function getSnacks(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(snacks);
        }, 300);

    })
}

export default getSnacks;