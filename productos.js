document.addEventListener('DOMContentLoaded', function() {
    
    // --- LISTA DE PRODUCTOS ---
    // Aquí puedes añadir todos los productos que quieras.
    // Solo necesitas la ruta de la imagen, el nombre y la descripción.
    const productos = [
        //Especial rosa
        {
            imagen: 'catalogo/universalcp.jpg',
            nombre: 'Universal Con Puntilla Rosa"',
            descripcion: 'Art: 803R TU'
        },
        {
            imagen: 'catalogo/vedettinacprosa.jpg',
            nombre: 'Vedettina Con Puntilla Rosa"',
            descripcion: 'Art: 503R T3'
        },
        {
            imagen: 'catalogo/colalessespecialcprosa.jpg',
            nombre: 'Colaless Especial Con Puntilla Rosa"',
            descripcion: 'Art: 403.6R TE'
        },
        {
            imagen: 'catalogo/colalesscprosa.jpg',
            nombre: 'Colaless Con Puntilla Rosa"',
            descripcion: 'Art: 403.2R T2, 403.3R T3'
        },
        // resto
        {
            imagen: 'catalogo/tiraReg.png',
            nombre: 'Colaless Tira Regulable "Bretel Ancho"',
            descripcion: 'Art: 305 TV'
        },
        {
            imagen: 'catalogo/colalessClasica.png',
            nombre: 'Colaless Clasica',
            descripcion: 'Art: 400 T2, 400.3 T3, 400.4 T4'
        },
        {
            imagen: 'catalogo/colalessCP.png',
            nombre: 'Colaless Con Puntilla',
            descripcion: 'Art: 403 T2'
        },
        {
            imagen: 'catalogo/colalessE.png',
            nombre: 'Colaless Especial',
            descripcion: 'Art: 406 TE'
        },
        {
            imagen: 'catalogo/vedettinaClasica.png',
            nombre: 'Vedettina Clasica',
            descripcion: 'Art: 500 T2, 500.3 T3, 500.4 T4'
        },
        {
            imagen: 'catalogo/vedettinaCP.png',
            nombre: 'Vedettina Con Puntilla',
            descripcion: 'Art: 503 T3'
        },
        {
            imagen: 'catalogo/especialCavada.png',
            nombre: 'Especial Cavada',
            descripcion: 'Art: 506 TE'
        },
        {
            imagen: 'catalogo/vedettinaDeportiva.png',
            nombre: 'Vedettina Deportiva',
            descripcion: 'Art: 504 T2'
        },
        {
            imagen: 'catalogo/tiroCortoClasico.png',
            nombre: 'Tiro Corto Clasico',
            descripcion: 'Art: 800 TU'
        },
        {
            imagen: 'catalogo/culottLess.png',
            nombre: 'Culott Less Deportivo',
            descripcion: 'Art: 604 T3'
        },
        {
            imagen: 'catalogo/universalCP.png',
            nombre: 'Universal Con Puntilla',
            descripcion: 'Art: 803 TU'
        },
        {
            imagen: 'catalogo/shortDeportivo.png',
            nombre: 'Short Deportivo',
            descripcion: 'Art: 700.2 T2, 700.3 T3'
        },
        {
            imagen: 'catalogo/corpDeportivo.png',
            nombre: 'Corpiño Deportivo',
            descripcion: 'Art: 103 T3, 104 T4, 105 T5'
        },
        {
            imagen: 'catalogo/bombachonCFEspecial.png',
            nombre: 'Bombachon Con Faja Especial',
            descripcion: 'Art: 606 TE'
        },
        {
            imagen: 'catalogo/especialClasica.png',
            nombre: 'Especial Clasica',
            descripcion: 'Art: 900 TE'
        },
        {
            imagen: 'catalogo/shortDepEspecial.png',
            nombre: 'Short Deportivo Especial',
            descripcion: 'Art: 706 TE'
        },
        {
            imagen: 'catalogo/boxerHDep.png',
            nombre: 'Boxer Hombre C/Elastico Deportivo',
            descripcion: 'Art: 2001 TS-M-L-XL'
        },
        {
            imagen: 'catalogo/bombachaNenaCapybara.png',
            nombre: 'Bombacha Nena Capybara',
            descripcion: 'Art: 201.3 T1-2-3'
        }
    ];

    const productGrid = document.getElementById('product-grid');

    // Función para crear y añadir cada tarjeta de producto al HTML
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <p class="product-name">${producto.nombre}</p>
                <p class="product-description">${producto.descripcion}</p>
            </div>
        `;

        productGrid.appendChild(card);
    });

});





