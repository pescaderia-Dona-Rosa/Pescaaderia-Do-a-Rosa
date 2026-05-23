/**
 * Datos de Pescadería Doña Rosa
 */

// --- RECETAS ---
const recetas = [
    {
        id: 1,
        titulo: "Albóndigas de pescado en salsa cremosa",
        imagen: "img/receta-albondigas-pescado.jpg",
        descripcionBreve: "Una receta suave, sabrosa y perfecta para servir con arroz blanco, víveres o ensalada fresca.",
        tiempo: "35 minutos",
        dificultad: "Media",
        productoPrincipal: "Pescado fresco",
        categoria: "albondigas",
        ingredientes: [
            "Pescado molido o desmenuzado",
            "Ajo majado",
            "Cebolla picada",
            "Cilantro fresco",
            "Huevo",
            "Pan rallado",
            "Sal y pimienta",
            "Leche de coco o crema ligera",
            "Ají cubanela",
            "Aceite"
        ],
        preparacion: "Mezclar el pescado con ajo, cebolla, cilantro, huevo y pan rallado. Formar las albóndigas y dorarlas ligeramente. Preparar una salsa cremosa con leche de coco o crema, ají y sazón. Cocinar las albóndigas dentro de la salsa hasta que queden jugosas."
    },
    {
        id: 2,
        titulo: "Pescado frito con limón",
        imagen: "img/receta-pescado-frito.jpg",
        descripcionBreve: "Un clásico sencillo, crujiente y lleno de sabor.",
        tiempo: "25 minutos",
        dificultad: "Fácil",
        productoPrincipal: "Pescado fresco",
        categoria: "pescado",
        ingredientes: [
            "Pescado fresco entero o en ruedas",
            "Limón",
            "Ajo",
            "Orégano",
            "Sal",
            "Pimienta",
            "Harina",
            "Aceite para freír"
        ],
        preparacion: "Limpiar y sazonar el pescado con limón, ajo, orégano, sal y pimienta. Pasar ligeramente por harina y freír en aceite caliente hasta que quede dorado y crujiente."
    },
    {
        id: 3,
        titulo: "Camarones al ajillo",
        imagen: "img/receta-camarones-ajillo.jpg",
        descripcionBreve: "Camarones jugosos salteados con ajo, mantequilla y limón.",
        tiempo: "15 minutos",
        dificultad: "Fácil",
        productoPrincipal: "Camarones",
        categoria: "camarones",
        ingredientes: [
            "Camarones limpios",
            "Ajo picado",
            "Mantequilla",
            "Aceite de oliva",
            "Limón",
            "Perejil o cilantro",
            "Sal y pimienta"
        ],
        preparacion: "Calentar mantequilla con un poco de aceite, añadir ajo y luego los camarones. Cocinar pocos minutos hasta que cambien de color. Terminar con limón y hierbas frescas."
    },
    {
        id: 4,
        titulo: "Filete de pescado al horno",
        imagen: "img/receta-filete-horno.jpg",
        descripcionBreve: "Una opción ligera, elegante y fácil de preparar.",
        tiempo: "30 minutos",
        dificultad: "Fácil",
        productoPrincipal: "Filete de pescado",
        categoria: "filetes",
        ingredientes: [
            "Filetes de pescado",
            "Ajo",
            "Limón",
            "Aceite de oliva",
            "Sal",
            "Pimienta",
            "Paprika",
            "Cebolla",
            "Pimientos"
        ],
        preparacion: "Colocar los filetes en una bandeja, sazonar con ajo, limón, aceite de oliva y especias. Añadir cebolla y pimientos. Hornear hasta que el pescado esté suave y jugoso."
    },
    {
        id: 5,
        titulo: "Sopa de mariscos",
        imagen: "img/receta-sopa-mariscos.jpg",
        descripcionBreve: "Una sopa completa, cálida y llena de sabor marino.",
        tiempo: "45 minutos",
        dificultad: "Media",
        productoPrincipal: "Mariscos mixtos",
        categoria: "mariscos",
        ingredientes: [
            "Mariscos mixtos",
            "Pescado en trozos",
            "Camarones",
            "Ajo",
            "Cebolla",
            "Ají",
            "Cilantro",
            "Leche de coco opcional",
            "Caldo de pescado",
            "Sal y pimienta"
        ],
        preparacion: "Sofreír ajo, cebolla y ají. Agregar caldo de pescado y cocinar los mariscos con los trozos de pescado. Añadir cilantro al final y ajustar la sazón."
    },
    {
        id: 6,
        titulo: "Pescado guisado estilo criollo",
        imagen: "img/receta-pescado-criollo.jpg",
        descripcionBreve: "Pescado cocinado en salsa criolla con vegetales y sazón dominicana.",
        tiempo: "35 minutos",
        dificultad: "Media",
        productoPrincipal: "Pescado fresco",
        categoria: "pescado",
        ingredientes: [
            "Pescado fresco",
            "Ajo",
            "Cebolla",
            "Ají cubanela",
            "Tomate o pasta de tomate",
            "Cilantro",
            "Orégano",
            "Limón",
            "Sal y pimienta"
        ],
        preparacion: "Sazonar el pescado con limón, ajo y especias. Preparar una salsa con cebolla, ají, tomate y cilantro. Cocinar el pescado suavemente dentro de la salsa hasta que tome sabor."
    },
    {
        id: 7,
        titulo: "Filete de pescado al limón",
        imagen: "img/receta-filete-limon.jpg",
        descripcionBreve: "Filete suave, fresco y rápido para una comida ligera.",
        tiempo: "20 minutos",
        dificultad: "Fácil",
        productoPrincipal: "Filete de pescado",
        categoria: "filetes",
        ingredientes: [
            "Filete de pescado",
            "Limón",
            "Ajo",
            "Mantequilla",
            "Perejil",
            "Sal",
            "Pimienta"
        ],
        preparacion: "Cocinar el filete en sartén con mantequilla, ajo y limón. Terminar con perejil fresco y servir caliente."
    },
    {
        id: 8,
        titulo: "Mariscos salteados",
        imagen: "img/receta-mariscos-salteados.jpg",
        descripcionBreve: "Mezcla rápida de mariscos con vegetales y sazón ligera.",
        tiempo: "20 minutos",
        dificultad: "Fácil",
        productoPrincipal: "Mariscos mixtos",
        categoria: "mariscos",
        ingredientes: [
            "Mariscos mixtos",
            "Camarones",
            "Ajo",
            "Cebolla",
            "Pimientos",
            "Aceite de oliva",
            "Limón",
            "Sal y pimienta"
        ],
        preparacion: "Saltear ajo, cebolla y pimientos. Añadir los mariscos y cocinar por pocos minutos para conservar su textura. Finalizar con limón."
    }
];

// Categorías de recetas
const categoriasRecetas = [
    { id: "all", nombre: "Todas" },
    { id: "pescado", nombre: "Pescado" },
    { id: "camarones", nombre: "Camarones" },
    { id: "mariscos", nombre: "Mariscos" },
    { id: "filetes", nombre: "Filetes" },
    { id: "albondigas", nombre: "Albóndigas" }
];

// --- CATÁLOGO ---
const productos = [
    {
        id: 1,
        nombre: "Pescado fresco",
        imagen: "img/pescado-fresco.jpg",
        descripcion: "Pescado fresco seleccionado para preparar frito, guisado, al horno o en sopa.",
        categoria: "pescados",
        categoriaNombre: "Pescados frescos",
        estado: "Disponible",
        precio: "Consultar precio"
    },
    {
        id: 2,
        nombre: "Pescado entero",
        imagen: "img/pescado-entero.jpg",
        descripcion: "Piezas enteras frescas, ideales para preparar al estilo criollo o frito.",
        categoria: "pescados",
        categoriaNombre: "Pescados frescos",
        estado: "Producto fresco",
        precio: "Consultar precio"
    },
    {
        id: 3,
        nombre: "Filete de pescado",
        imagen: "img/filete-pescado.jpg",
        descripcion: "Filetes limpios y prácticos para recetas rápidas, al horno o a la plancha.",
        categoria: "filetes",
        categoriaNombre: "Filetes",
        estado: "Disponible",
        precio: "Consultar precio"
    },
    {
        id: 4,
        nombre: "Camarones",
        imagen: "img/camarones.jpg",
        descripcion: "Camarones seleccionados para preparar al ajillo, salteados, en pasta o en arroz.",
        categoria: "mariscos",
        categoriaNombre: "Mariscos",
        estado: "Disponible",
        precio: "Consultar precio"
    },
    {
        id: 5,
        nombre: "Albóndigas de pescado",
        imagen: "img/albondigas-pescado.jpg",
        descripcion: "Producto práctico y sabroso para preparar en salsa, guisado o como aperitivo.",
        categoria: "preparados",
        categoriaNombre: "Preparados",
        estado: "Disponible",
        precio: "Consultar precio"
    },
    {
        id: 6,
        nombre: "Mariscos mixtos",
        imagen: "img/mariscos-mixtos.jpg",
        descripcion: "Mezcla de mariscos ideal para sopas, arroces, salteados y platos especiales.",
        categoria: "mariscos",
        categoriaNombre: "Mariscos",
        estado: "Consultar disponibilidad",
        precio: "Consultar precio"
    },
    {
        id: 7,
        nombre: "Pescado congelado",
        imagen: "img/pescado-congelado.jpg",
        descripcion: "Producto conservado con cuidado para mantener sabor y calidad.",
        categoria: "congelados",
        categoriaNombre: "Congelados",
        estado: "Disponible",
        precio: "Consultar precio"
    },
    {
        id: 8,
        nombre: "Especial del día",
        imagen: "img/producto-especial.jpg",
        descripcion: "Selección especial según disponibilidad del día.",
        categoria: "especiales",
        categoriaNombre: "Especiales",
        estado: "Por encargo",
        precio: "Consultar precio"
    }
];

// Categorías del catálogo
const categoriasCatalogo = [
    { id: "all", nombre: "Todos" },
    { id: "pescados", nombre: "Pescados" },
    { id: "mariscos", nombre: "Mariscos" },
    { id: "filetes", nombre: "Filetes" },
    { id: "preparados", nombre: "Preparados" },
    { id: "congelados", nombre: "Congelados" },
    { id: "especiales", nombre: "Especiales" }
];


/**
 * Lógica Principal
 */
class AppPescaderia {
    constructor() {
        this.initNamespaces();
        this.initEvents();
        this.renderRecetas('all');
        this.renderCatalogo('all');
        this.setupFilters();
        this.initScrollAnimations();
        
        // Seteo del año en el footer
        document.getElementById('year').textContent = new Date().getFullYear();
    }

    initNamespaces() {
        // Exponer función de switchTab al objeto global
        window.app = this;
    }

    initEvents() {
        // Navegación
        const navLinks = document.querySelectorAll('.nav-link, .nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = e.target.getAttribute('data-nav') || e.target.getAttribute('href').substring(1);
                this.switchTab(targetId);
                
                // Cerrar menú móvil al clickear
                document.getElementById('nav-links').classList.remove('active');
            });
        });

        // Menú Hamburguesa
        const hamburger = document.getElementById('mobile-menu-btn');
        hamburger.addEventListener('click', () => {
            document.getElementById('nav-links').classList.toggle('active');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Formulario contacto
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias por tu mensaje! En breve nos pondremos en contacto.');
                contactForm.reset();
            });
        }

        // Modal de Receta
        const modal = document.getElementById('recipe-modal');
        const closeModalBtn = document.querySelector('.close-modal');
        
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    switchTab(tabId) {
        // Ocultar todas las secciones
        document.querySelectorAll('.tab-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Quitar estado activo a todos los links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Mostrar sección objetivo
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Marcar link como activo
        const activeLink = document.querySelector(`.nav-link[data-nav="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');
        
        // Re-disparar animaciones de scroll para la nueva pestaña
        setTimeout(() => this.checkScrollAnimations(), 100);
    }

    setupFilters() {
        // Contenedores de botones
        const recetasFilterContainer = document.getElementById('recetas-filters');
        const catalogoFilterContainer = document.getElementById('catalogo-filters');

        // Generar botones de filtro de recetas
        categoriasRecetas.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.id === 'all' ? 'active' : ''}`;
            btn.textContent = cat.nombre;
            btn.dataset.filter = cat.id;
            
            btn.addEventListener('click', (e) => {
                // Quitar clase active
                recetasFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Renderizar
                this.renderRecetas(cat.id);
            });
            
            recetasFilterContainer.appendChild(btn);
        });

        // Generar botones de filtro de catálogo
        categoriasCatalogo.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.id === 'all' ? 'active' : ''}`;
            btn.textContent = cat.nombre;
            btn.dataset.filter = cat.id;
            
            btn.addEventListener('click', (e) => {
                // Quitar clase active
                catalogoFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Renderizar
                this.renderCatalogo(cat.id);
            });
            
            catalogoFilterContainer.appendChild(btn);
        });
    }

    renderRecetas(filtro) {
        const grid = document.getElementById('recetas-grid');
        grid.innerHTML = ''; // Limpiar

        const filtradas = filtro === 'all' 
            ? recetas 
            : recetas.filter(r => r.categoria === filtro);

        filtradas.forEach((receta, index) => {
            const card = document.createElement('div');
            card.className = 'card animate-up';
            // Pequeño delay escalonado
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="card-img-container">
                    <span class="card-tag"><i class="far fa-clock"></i> ${receta.tiempo}</span>
                    <img src="${receta.imagen}" alt="${receta.titulo}" onerror="this.src='https://images.unsplash.com/photo-1544526914-7476839aaeb1?auto=format&fit=crop&q=80&w=600'">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${receta.titulo}</h3>
                    <p class="card-desc">${receta.descripcionBreve}</p>
                    <div class="card-meta mb-3">
                        <span><i class="fas fa-signal"></i> ${receta.dificultad}</span>
                        <span><i class="fas fa-fish"></i> ${receta.productoPrincipal}</span>
                    </div>
                    <button class="btn btn-primary w-100 mt-auto" onclick="window.app.openRecipeModal(${receta.id})">
                        Ver Receta
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderCatalogo(filtro) {
        const grid = document.getElementById('catalogo-grid');
        grid.innerHTML = ''; // Limpiar

        const filtrados = filtro === 'all' 
            ? productos 
            : productos.filter(p => p.categoria === filtro);

        filtrados.forEach((producto, index) => {
            const card = document.createElement('div');
            card.className = 'card animate-up';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="card-img-container">
                    <span class="card-tag">${producto.categoriaNombre}</span>
                    <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=600'">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-desc">${producto.descripcion}</p>
                    <div class="card-meta">
                        <span class="card-status"><i class="fas fa-circle" style="font-size: 8px;"></i> ${producto.estado}</span>
                        <span class="card-price">${producto.precio}</span>
                    </div>
                    <a href="https://wa.me/XXXXXXXXXX?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}" target="_blank" class="btn btn-outline w-100 mt-3 align-self-end">
                        <i class="fab fa-whatsapp"></i> Consultar
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    openRecipeModal(id) {
        const receta = recetas.find(r => r.id === id);
        if (!receta) return;

        const modal = document.getElementById('recipe-modal');
        const modalBody = document.getElementById('recipe-modal-body');

        // Generar lista de ingredientes
        const htmlIngredientes = receta.ingredientes.map(ing => `<li>${ing}</li>`).join('');

        modalBody.innerHTML = `
            <div class="recipe-detail-header" style="margin: -40px -40px 0; border-radius: var(--radius-lg) var(--radius-lg) 0 0; overflow:hidden;">
                <img src="${receta.imagen}" alt="${receta.titulo}" onerror="this.src='https://images.unsplash.com/photo-1544526914-7476839aaeb1?auto=format&fit=crop&q=80&w=800'">
            </div>
            <div class="recipe-detail-body">
                <h2>${receta.titulo}</h2>
                <div class="meta-tags">
                    <span><i class="far fa-clock"></i> ${receta.tiempo}</span>
                    <span><i class="fas fa-signal"></i> Nivel: ${receta.dificultad}</span>
                    <span class="color"><i class="fas fa-fish"></i> ${receta.productoPrincipal}</span>
                </div>
                <p><em>${receta.descripcionBreve}</em></p>
                
                <hr style="margin: 20px 0; border:0; border-top: 1px solid var(--border-color);">
                
                <h3>Ingredientes</h3>
                <ul class="ingredients-list">
                    ${htmlIngredientes}
                </ul>

                <h3 style="margin-top:20px;">Preparación</h3>
                <p class="prep-text">${receta.preparacion}</p>
            </div>
        `;

        modal.classList.add('active');
    }

    initScrollAnimations() {
        // Usar IntersectionObserver para animaciones en scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcionalmente dejar de observar una vez que ha animado
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        this.checkScrollAnimations();
    }

    checkScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            this.scrollObserver.observe(el);
        });
    }
}

// Inicializar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new AppPescaderia();
});
