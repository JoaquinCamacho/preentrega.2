const productosRopa = [
    { id: 1, nombre: 'Remera Azul', precio: 4000, img:"/img/remera.jpg", categoria: "Remeras"},
    { id: 2, nombre: 'Remera Negra', precio: 4000, img : "/img/remera1.jfif", categoria: "Remeras"},
    { id: 3, nombre: 'Remera Blanca', precio: 4000, img: "/img/remera2.jfif", categoria: "Remeras"},
    { id: 4, nombre: 'Jean Negro', precio: 6000, img: "/img/pantalones.jfif", categoria: "Pantalon" },
    { id: 5, nombre: 'Jean Gris', precio: 6000 , img : "img/pantalon2.jfif", categoria: "Pantalon"},
    { id: 6, nombre: 'Jean azulado', precio: 6000 , img : "img/pantalon1.jfif", categoria: "Pantalon"},
    { id: 7, nombre: 'Campera Negra', precio: 10000 , img : "img/campera.jfif", categoria: "Campera"},
    { id: 8, nombre: 'Campera Nike', precio: 16000 , img : "img/campera1.jfif", categoria: "Campera"},
    { id: 9, nombre: 'Campera Jordan', precio: 20000, img : "img/campera2.jfif", categoria: "Campera" }
];


const getProducts = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(productosRopa)
        }, 3000)
    })
}



export {getProducts}
