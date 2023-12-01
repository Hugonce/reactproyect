const snacks = [
    {
        id: "1",
        name: "Papas Lays",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567578.jpg?3.0.165",
        stock: 58,
        description: "El mejor del mundo"

    },
    {
        id: "2",
        name: "Doritos",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567577.jpg?3.0.165",
        stock: 12,
        description: "fasdadad"

    },
    {
        id: "3",
        name: "Saladix",
        price: 385,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00015800/00015882.jpg?3.0.165",
        stock: 4123,
        description: "gasd"

    },
    {
        id: "4",
        name: "Chetos",
        price: 827,
        category: "Snack",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00567500/00567597.jpg?3.0.165",
        stock: 357,
        description: "fasdadad"

    },
    {
        id: "5",
        name: "Oreo",
        price: 750,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00532200/00532297.jpg?3.0.165",
        stock: 0,
        description: "fasdadad"

    },
    {
        id: "6",
        name: "Chocolinas",
        price: 460,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00541500/00541596.jpg?3.0.165",
        stock: 74,
        description: "fasdadad"

    },
    {
        id: "7",
        name: "Donuts",
        price: 442,
        category: "Dulce",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00535300/00535395.jpg?3.0.165",
        stock: 214,
        description: "fasdadad"

    },
    {
        id: "8",
        name: "Toddy",
        price: 927,
        category: "Galletitas",
        img: "https://static.cotodigital3.com.ar/sitios/fotos/medium/00475100/00475157.jpg?3.0.165",
        stock: 24,
        description: "fasdadad"

    },
    

]

function getSnacks(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(snacks);
        }, 500);

    })
}

export default getSnacks;