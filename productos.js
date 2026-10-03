document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var WHATSAPP = '5491133143989';
    var MIN_DOC = 5;                 // mínimo de docenas por talle
    var CART_KEY = 'coqueta_pedido'; // sessionStorage: se borra al cerrar la pestaña

    // --- CATÁLOGO ---
    // producto: { imagen, nombre, marca, variantes: [{ talle, articulo, precio }] }
    //   precio = número en pesos (por docena) o null = "a confirmar"
    var secciones = [
        {
            titulo: 'Tira Regulable',
            productos: [
                { imagen: 'catalogo/colaless-tira-reg-bretel-ancho-305.jpg', nombre: 'Colaless Tira Regulable "Bretel Ancho"', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Variable', articulo: '305', precio: 10500 }] },
                { imagen: 'catalogo/colaless-tira-reg-morley-estamp-bretel-ancho-306.jpg', nombre: 'Colaless Tira Regulable Morley Estampado "Bretel Ancho"', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Variable', articulo: '306', precio: 9995 }] }
            ]
        },
        {
            titulo: 'Colaless',
            productos: [
                { imagen: 'catalogo/colaless-clasica-mono-400.jpg', nombre: 'Colaless Clasica C/Moño', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 2', articulo: '400', precio: 10995 },
                    { talle: 'Talle 3', articulo: '400', precio: 12995 },
                    { talle: 'Talle 4', articulo: '400', precio: 14995 }
                  ] },
                { imagen: 'catalogo/colaless-con-puntilla-403.jpg', nombre: 'Colaless Con Puntilla', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle 2', articulo: '403', precio: 13500 }] },
                { imagen: 'catalogo/colaless-especial-406.jpg', nombre: 'Colaless Especial', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Especial', articulo: '406', precio: 15995 }] }
            ]
        },
        {
            titulo: 'Vedettina',
            productos: [
                { imagen: 'catalogo/vedettina-clasica-mono-500.jpg', nombre: 'Vedettina Clasica C/Moño', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 2', articulo: '500', precio: 12500 },
                    { talle: 'Talle 3', articulo: '500', precio: 14995 },
                    { talle: 'Talle 4', articulo: '500', precio: 16500 }
                  ] },
                { imagen: 'catalogo/vedettina-con-puntilla-503.jpg', nombre: 'Vedettina Con Puntilla', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle 3', articulo: '503', precio: 17500 }] },
                { imagen: 'catalogo/especial-cavada-506.jpg', nombre: 'Especial Cavada', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Especial', articulo: '506', precio: 22500 }] }
            ]
        },
        {
            titulo: 'Clásicas y Especiales',
            productos: [
                { imagen: 'catalogo/tiro-corto-clasico-800.jpg', nombre: 'Tiro Corto Clasico', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Único', articulo: '800', precio: 17500 }] },
                { imagen: 'catalogo/universal-con-puntilla-803.jpg', nombre: 'Universal Con Puntilla', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Único', articulo: '803', precio: 22500 }] },
                { imagen: 'catalogo/bombachon-con-faja-especial-606.jpg', nombre: 'Bombachon Con Faja Especial', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Especial', articulo: '606', precio: 29995 }] },
                { imagen: 'catalogo/especial-clasica-900.jpg', nombre: 'Especial Clasica', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Especial', articulo: '900', precio: 23995 }] },
                { imagen: 'catalogo/short-deportivo-especial-706.jpg', nombre: 'Short Deportivo Especial', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle Especial', articulo: '706', precio: 29995 }] }
            ]
        },
        {
            titulo: 'Nena / Juvenil',
            productos: [
                { imagen: 'catalogo/bombacha-nena-mono-lisa-200.jpg', nombre: 'Bombacha Nena c/Moño Lisa', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 2', articulo: '200', precio: 11995 },
                    { talle: 'Talle 3', articulo: '200', precio: 12995 },
                    { talle: 'Talle 4', articulo: '200', precio: 13995 }
                  ] },
                { imagen: 'catalogo/bombacha-nena-gatitos-201.jpg', nombre: 'Bombacha Nena Gatitos', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 1', articulo: '201', precio: null },
                    { talle: 'Talle 2', articulo: '201', precio: null },
                    { talle: 'Talle 3', articulo: '201', precio: null }
                  ] },
                { imagen: 'catalogo/bombacha-juvenil-mono-lisa-206.jpg', nombre: 'Bombacha Juvenil c/Moño Lisa', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle 5', articulo: '206', precio: 15500 }] },
                { imagen: 'catalogo/conjunto-nena-1203.jpg', nombre: 'Conjunto Nena', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 3', articulo: '1203', precio: 23500 },
                    { talle: 'Talle 4', articulo: '1204', precio: 25500 }
                  ] }
            ]
        },
        {
            titulo: 'Deportivo',
            productos: [
                { imagen: 'catalogo/corpino-deportivo-103.jpg', nombre: 'Corpiño Deportivo', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 3', articulo: '103', precio: 23995 },
                    { talle: 'Talle 4', articulo: '104', precio: 26500 },
                    { talle: 'Talle 5', articulo: '105', precio: 28995 }
                  ] },
                { imagen: 'catalogo/vedettina-deportiva-504.jpg', nombre: 'Vedettina Deportiva', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle 2', articulo: '504', precio: 17995 }] },
                { imagen: 'catalogo/culott-less-deportivo-604.jpg', nombre: 'Culott Less Deportivo', marca: 'Coqueta',
                  variantes: [{ talle: 'Talle 3', articulo: '604', precio: 17995 }] },
                { imagen: 'catalogo/short-deportivo-700.jpg', nombre: 'Short Deportivo', marca: 'Coqueta',
                  variantes: [
                    { talle: 'Talle 2', articulo: '700', precio: 22995 },
                    { talle: 'Talle 3', articulo: '700', precio: 22995 }
                  ] }
            ]
        }
    ];

    // --- HELPERS ---
    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function fmt(n) {
        return '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    function keyOf(articulo, talle) { return articulo + '|' + talle; }

    // índice: key -> { marca, nombre, articulo, talle, precio, imagen }
    var indice = {};
    secciones.forEach(function (sec) {
        sec.productos.forEach(function (p) {
            p.variantes.forEach(function (v) {
                indice[keyOf(v.articulo, v.talle)] = {
                    marca: p.marca, nombre: p.nombre, imagen: p.imagen,
                    articulo: v.articulo, talle: v.talle, precio: v.precio
                };
            });
        });
    });

    // --- ESTADO DEL PEDIDO (sessionStorage) ---
    function leerPedido() {
        try {
            var raw = sessionStorage.getItem(CART_KEY);
            var obj = raw ? JSON.parse(raw) : {};
            return (obj && typeof obj === 'object') ? obj : {};
        } catch (e) { return {}; }
    }
    function guardarPedido(p) {
        try { sessionStorage.setItem(CART_KEY, JSON.stringify(p)); } catch (e) {}
    }
    var pedido = leerPedido();   // { key: docenas }

    function qtyDe(key) { return pedido[key] || 0; }
    function paso(actual, delta) {
        if (actual === 0 && delta > 0) return MIN_DOC;
        var v = actual + delta;
        if (v < MIN_DOC) return 0;
        return v;
    }
    function setQty(key, docenas) {
        if (docenas > 0) pedido[key] = docenas;
        else delete pedido[key];
        guardarPedido(pedido);
        sincronizar();
    }

    // --- RENDER CATÁLOGO ---
    function stepperHTML(key) {
        var q = qtyDe(key);
        return '<div class="qty" data-key="' + esc(key) + '">'
            + '<button type="button" class="qty-btn qty-minus" aria-label="Menos">–</button>'
            + '<span class="qty-val">' + q + '</span>'
            + '<button type="button" class="qty-btn qty-plus" aria-label="Más">+</button>'
            + '<span class="qty-unit">doc.</span>'
            + '</div>';
    }

    function cardHTML(p) {
        var multi = p.variantes.length > 1;
        var arts = [];
        p.variantes.forEach(function (v) { if (arts.indexOf(v.articulo) === -1) arts.push(v.articulo); });

        var info = '<span class="product-brand">' + esc(p.marca) + '</span>'
            + '<p class="product-name">' + esc(p.nombre) + '</p>';

        if (multi) {
            info += '<p class="product-meta"><span class="product-article">Art. ' + esc(arts.join(' · ')) + '</span></p>';
            var primera = p.variantes[0];
            var k0 = keyOf(primera.articulo, primera.talle);
            info += '<div class="variantes">';
            info += '<select class="v-select" aria-label="Elegí el talle">';
            p.variantes.forEach(function (v) {
                var k = keyOf(v.articulo, v.talle);
                info += '<option value="' + esc(k) + '" data-precio="' + (v.precio || '') + '">'
                    + esc(v.talle) + '</option>';
            });
            info += '</select>';
            info += '<p class="v-precio-line">' + (primera.precio
                ? fmt(primera.precio) + ' <span class="product-price-unit">/ docena</span>'
                : 'A confirmar') + '</p>';
            info += stepperHTML(k0);
            info += '</div>';
        } else {
            var v = p.variantes[0];
            var k = keyOf(v.articulo, v.talle);
            info += '<p class="product-meta"><span class="product-article">Art. ' + esc(v.articulo) + '</span>'
                + '<span class="product-meta-sep"> · </span><span class="product-size">' + esc(v.talle) + '</span></p>';
            info += '<p class="product-price">' + (v.precio ? fmt(v.precio) : 'A confirmar')
                + (v.precio ? ' <span class="product-price-unit">/ docena</span>' : '') + '</p>';
            info += stepperHTML(k);
        }

        return '<div class="product-media"><img src="' + esc(p.imagen) + '" alt="' + esc(p.nombre) + '" loading="lazy"></div>'
            + '<div class="product-info">' + info + '</div>';
    }

    function renderCatalogo(containerId) {
        var cont = document.getElementById(containerId);
        secciones.forEach(function (sec) {
            var bloque = document.createElement('section');
            bloque.className = 'catalog-section';

            var h = document.createElement('h3');
            h.className = 'catalog-section-title';
            h.textContent = sec.titulo;
            bloque.appendChild(h);

            var grid = document.createElement('div');
            grid.className = 'product-grid';
            sec.productos.forEach(function (p, i) {
                var card = document.createElement('div');
                card.className = 'product-card reveal marca-' + p.marca.toLowerCase();
                card.style.transitionDelay = (i % 4) * 60 + 'ms';
                card.innerHTML = cardHTML(p);
                grid.appendChild(card);
            });
            bloque.appendChild(grid);
            cont.appendChild(bloque);
        });
    }

    // --- SELECTOR DE TALLE (productos multi-talle) ---
    function refrescarVariantes(box) {
        var select = box.querySelector('.v-select');
        var qty = box.querySelector('.qty');
        var linea = box.querySelector('.v-precio-line');
        if (!select || !qty || !linea) return;

        var algo = false;
        for (var i = 0; i < select.options.length; i++) {
            var opt = select.options[i];
            var q = qtyDe(opt.value);
            if (q > 0) algo = true;
            opt.textContent = opt.value.split('|')[1] + (q > 0 ? '  ·  ' + q + ' doc' : '');
        }
        box.classList.toggle('con-carga', algo);

        var sel = select.options[select.selectedIndex];
        var precio = sel.getAttribute('data-precio');
        linea.innerHTML = precio
            ? fmt(precio) + ' <span class="product-price-unit">/ docena</span>'
            : 'A confirmar';
        qty.dataset.key = sel.value;
        qty.querySelector('.qty-val').textContent = qtyDe(sel.value);
    }

    function onSelectChange(e) {
        var select = e.target.closest('.v-select');
        if (select) refrescarVariantes(select.closest('.variantes'));
    }

    // --- SINCRONIZAR steppers + badge + panel ---
    function sincronizar() {
        document.querySelectorAll('.variantes').forEach(refrescarVariantes);
        document.querySelectorAll('.qty').forEach(function (q) {
            var val = q.querySelector('.qty-val');
            if (val) val.textContent = qtyDe(q.dataset.key);
        });
        var lineas = Object.keys(pedido).length;
        var badge = document.getElementById('cart-badge');
        if (badge) {
            badge.textContent = lineas;
            badge.hidden = lineas === 0;
        }
        if (!document.getElementById('cart-panel').hidden) renderPanel();
    }

    // --- PANEL DEL PEDIDO ---
    function totales() {
        var total = 0, hayPendiente = false;
        Object.keys(pedido).forEach(function (k) {
            var it = indice[k];
            if (!it) return;
            if (it.precio) total += it.precio * pedido[k];
            else hayPendiente = true;
        });
        return { total: total, hayPendiente: hayPendiente };
    }

    function renderPanel() {
        var body = document.getElementById('cart-body');
        var foot = document.getElementById('cart-foot');
        var keys = Object.keys(pedido);

        if (keys.length === 0) {
            body.innerHTML = '<p class="cart-empty">Todavía no agregaste nada. Usá el contador de docenas en cada producto.</p>';
            foot.innerHTML = '';
            return;
        }

        var html = '';
        keys.forEach(function (k) {
            var it = indice[k];
            if (!it) return;
            var doc = pedido[k];
            var sub = it.precio ? fmt(it.precio * doc) : 'a confirmar';
            html += '<div class="cart-line">'
                + '<div class="cl-info">'
                +   '<span class="cl-brand">' + esc(it.marca) + '</span>'
                +   '<p class="cl-name">' + esc(it.nombre) + '</p>'
                +   '<p class="cl-meta">Art. ' + esc(it.articulo) + ' · ' + esc(it.talle)
                +     ' · ' + (it.precio ? fmt(it.precio) + '/doc.' : 'precio a confirmar') + '</p>'
                + '</div>'
                + '<div class="cl-bottom">'
                +   stepperHTML(k)
                +   '<span class="cl-sub">' + sub + '</span>'
                +   '<button type="button" class="cl-remove" data-remove="' + esc(k) + '">Quitar</button>'
                + '</div>'
                + '</div>';
        });
        body.innerHTML = html;

        var t = totales();
        foot.innerHTML =
            '<div class="cart-total"><span>Total estimado</span>'
            + '<strong>' + (t.hayPendiente ? 'desde ' : '') + fmt(t.total) + '</strong></div>'
            + '<p class="cart-note">Es un resumen para agilizar el pedido. El vendedor confirma precio final y disponibilidad.'
            + (t.hayPendiente ? ' Los talles "a confirmar" no están sumados.' : '') + '</p>'
            + '<form id="cart-form" novalidate>'
            +   '<input name="nombre" type="text" placeholder="Tu nombre" autocomplete="name" required>'
            +   '<input name="negocio" type="text" placeholder="Nombre del negocio / marca" required>'
            +   '<input name="direccion" type="text" placeholder="Dirección de entrega" required>'
            +   '<input name="telefono" type="tel" placeholder="Teléfono" inputmode="tel" autocomplete="tel" required>'
            +   '<button type="submit" class="btn btn-whatsapp cart-send">Enviar pedido por WhatsApp</button>'
            + '</form>';
    }

    function armarMensaje(datos) {
        var lineas = ['*PEDIDO COQUETA*', ''];
        lineas.push('Cliente: ' + datos.nombre);
        lineas.push('Negocio / marca: ' + datos.negocio);
        lineas.push('Dirección: ' + datos.direccion);
        lineas.push('Teléfono: ' + datos.telefono);
        lineas.push('————————————');
        Object.keys(pedido).forEach(function (k) {
            var it = indice[k];
            if (!it) return;
            var doc = pedido[k];
            var det = it.precio
                ? doc + ' doc. x ' + fmt(it.precio) + ' = ' + fmt(it.precio * doc)
                : doc + ' doc. (precio a confirmar)';
            lineas.push('• ' + it.marca + ' — ' + it.nombre);
            lineas.push('   Art. ' + it.articulo + ' · ' + it.talle + ' · ' + det);
        });
        lineas.push('————————————');
        var t = totales();
        lineas.push('Total estimado: ' + (t.hayPendiente ? 'desde ' : '') + fmt(t.total));
        lineas.push('(sujeto a confirmación del vendedor)');
        return lineas.join('\n');
    }

    // --- EVENTOS ---
    function onQtyClick(e) {
        var btn = e.target.closest('.qty-btn');
        if (btn) {
            var box = btn.closest('.qty');
            var key = box.dataset.key;
            var delta = btn.classList.contains('qty-plus') ? 1 : -1;
            setQty(key, paso(qtyDe(key), delta));
            return;
        }
        var rem = e.target.closest('.cl-remove');
        if (rem) { setQty(rem.dataset.remove, 0); }
    }

    function abrirPanel() {
        document.getElementById('cart-panel').hidden = false;
        document.getElementById('cart-overlay').hidden = false;
        document.body.classList.add('no-scroll');
        renderPanel();
    }
    function cerrarPanel() {
        document.getElementById('cart-panel').hidden = true;
        document.getElementById('cart-overlay').hidden = true;
        document.body.classList.remove('no-scroll');
    }

    function onSubmit(e) {
        if (!e.target || e.target.id !== 'cart-form') return;
        e.preventDefault();
        var f = e.target;
        var datos = {
            nombre: f.nombre.value.trim(),
            negocio: f.negocio.value.trim(),
            direccion: f.direccion.value.trim(),
            telefono: f.telefono.value.trim()
        };
        if (!datos.nombre || !datos.negocio || !datos.direccion || !datos.telefono) {
            f.querySelectorAll('input').forEach(function (i) {
                i.classList.toggle('campo-falta', !i.value.trim());
            });
            return;
        }
        var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(armarMensaje(datos));
        window.open(url, '_blank', 'noopener');
    }

    // --- LIGHTBOX ---
    function activarLightbox() {
        var lb = document.getElementById('lightbox');
        if (!lb) return;
        var img = document.getElementById('lightbox-img');
        function abrir(src, alt) { img.src = src; img.alt = alt || ''; lb.hidden = false; document.body.classList.add('no-scroll'); }
        function cerrar() { lb.hidden = true; img.removeAttribute('src'); document.body.classList.remove('no-scroll'); }
        document.getElementById('catalogo').addEventListener('click', function (e) {
            var im = e.target.closest('.product-media img');
            if (im) abrir(im.src, im.alt);
        });
        lb.addEventListener('click', cerrar);
        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape') return;
            if (!lb.hidden) cerrar();
            else if (!document.getElementById('cart-panel').hidden) cerrarPanel();
        });
    }

    // --- ANIMACIONES ---
    function activarAnimaciones() {
        var els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        els.forEach(function (el) { io.observe(el); });
    }

    // --- MENSAJE PREDEFINIDO DE CONSULTA (botones de WhatsApp de contacto) ---
    var CONSULTA = '¡Hola Coqueta! Me gustaría hacer una consulta sobre el catálogo y la lista de precios.';
    (function () {
        var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(CONSULTA);
        document.querySelectorAll('a[data-wa-consulta]').forEach(function (a) { a.href = url; });
    })();

    // --- INIT ---
    renderCatalogo('catalogo');
    activarLightbox();
    activarAnimaciones();

    document.addEventListener('click', onQtyClick);
    document.addEventListener('change', onSelectChange);
    document.addEventListener('submit', onSubmit);
    document.getElementById('cart-toggle').addEventListener('click', abrirPanel);
    document.getElementById('cart-close').addEventListener('click', cerrarPanel);
    document.getElementById('cart-overlay').addEventListener('click', cerrarPanel);

    sincronizar();
});
