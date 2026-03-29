document.addEventListener('DOMContentLoaded', function() {

    // --- COLECCIÓN COLEGIAL 2026 ---
 /*   const colegial = [
        {
            imagen: 'catalogo/conjColegial.png',
            nombre: 'Conjunto Nena Colegial',
            descripcion: 'Art: 1203 T3, 1204 T4'
        },
        {
            imagen: 'catalogo/colegial1.png',
            nombre: 'Bombacha Nena c/Moño Lisa',
            descripcion: 'Art: 200 - T2-3-4'
        },
        {
            imagen: 'catalogo/colegial2.png',
            nombre: 'Bombacha Juvenil c/Moño Lisa',
            descripcion: 'Art: 206 - T5'
        },
        {
            imagen: 'catalogo/corpDeportivo.png',
            nombre: 'Corpiño Colegial Deportivo',
            descripcion: 'Art: 103 T3, 104 T4'
        },
        {
            imagen: 'catalogo/shortDeportivo.png',
            nombre: 'Short Colegial Deportivo',
            descripcion: 'Art: 700.2 T2, 700.3 T3'
        }
        
    ]; */
    

    // --- LISTA GENERAL DE PRODUCTOS ---
    const productos = [
        {
            imagen: 'catalogo/colalesstiraregAlgLy.PNG',
            nombre: 'Colaless Tira Regulable',
            descripcion: 'Art: 300 TV'
        },
        {
            imagen: 'catalogo/ColalesstTiraRegFP.png',
            nombre: 'Colaless Tira Regulable Frente Puntilla',
            descripcion: 'Art: 301 TV'
        },
        {
            imagen: 'catalogo/tiraregpuntillasuperior.png',
            nombre: 'Colaless Tira Regulable Puntilla Superior',
            descripcion: 'Art: 302 TV'
        },
        {
            imagen: 'catalogo/colalessTiraRegPD.PNG',
            nombre: 'Colaless Tira Regulable Frente Puntilla Diagonal',
            descripcion: 'Art: 303 TV'
        },
        {
            imagen: 'catalogo/tiraReg.png',
            nombre: 'Colaless Tira Regulable "Bretel Ancho"',
            descripcion: 'Art: 305 TV'
        },
        {
            imagen: 'catalogo/colalessClasicaCM.PNG',
            nombre: 'Colaless Clasica C/Moño',
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
            imagen: 'catalogo/vedettinaClasicaCM.PNG',
            nombre: 'Vedettina Clasica C/Moño',
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
        /*{
            imagen: 'catalogo/vedettinaEspecialConFaja.png',
            nombre: 'Vedettina Especial Con Faja',
            descripcion: 'Art: 806 TE'
        },*/
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
            imagen: 'catalogo/bombachaNena.PNG',
            nombre: 'Bombacha Nena Gatitos/Capybara',
            descripcion: 'Art: 201.3 T1-2-3'
        },
        {
            imagen: 'catalogo/conjColegial.png',
            nombre: 'Conjunto Nena Colegial',
            descripcion: 'Art: 1203 T3, 1204 T4'
        },
        {
            imagen: 'catalogo/colegial1.PNG',
            nombre: 'Bombacha Nena c/Moño Lisa',
            descripcion: 'Art: 200 - T2-3-4'
        },
        {
            imagen: 'catalogo/colegial2.png',
            nombre: 'Bombacha Juvenil c/Moño Lisa',
            descripcion: 'Art: 206 - T5'
        }
    ];

    // --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
    function renderProductos(lista, containerId) {
        const container = document.getElementById(containerId);

        lista.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="product-info">
                    <p class="product-name">${producto.nombre}</p>
                    <p class="product-description">${producto.descripcion}</p>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // --- RENDER ---
   // renderProductos(colegial, 'colegial-grid');
    renderProductos(productos, 'product-grid');

});







