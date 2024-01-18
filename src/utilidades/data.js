const productos = [
    {
      id: "hgt344",
      nombre: "Viokal",
      descripcion: "El Calcio VIOKAL de TIENS es un biocalcio en forma ionizada y puede asimilarse por el organismo entre el 95 y el 98%, hechos sin antisépticos ni conservantes. ",
      stock: 10,
      precio: 80,
      categoria: "suplementos",
      imagen: "/img/Viokal.jpeg"
    },
    {
      id: "ljm322",
      nombre: "Calcio Dietético de Tianshi",
      descripcion: "Tiene las mismas propiedades del POLVO NUTRITIVO DE TIANSHI, pero es recomendado especialemente para los DIABETICOS por su bajo contenido en azúcares y otros elementos adicionales que contribuyen a reducir la hiperglicemia.",
      stock: 2,
      precio: 106,
      categoria: "suplementos",
      imagen: "/img/calcio_dietetico.jpg"
    },
    {
      id: "shx688",
      nombre: "Calcio en Polvo para Niños",
      descripcion: "Este suplemento es recomendado para niños, también para adultos.Enriquecido con TAURINA, un importante aminoácido que contribuye al desarrollo mental, nervioso y visual, además contiene LECITINA y ZINC que ayuda a mantener una equilibrada nutrición. Proporciona un crecimiento saludable, manteniendo dientes y huesos fuertes.",
      stock: 6,
      precio: 80,
      categoria: "suplementos",
      imagen: "/img/calcio_infantil.jpg"
    },
    {
      id: "jht332",
      nombre: "M&Y Crema Reparadora de Noche",
      descripcion: "MARINE & YEAST EXTRACT HYDRA ALL-IN-CREAM. Esta lujosa crema utiliza una solución de extracto de levadura, vitamina E, escualano y ácido hialurónico que estimula el metabolismo de la piel durante la noche, mejora la elasticidad e impulsa la renovación del cutis.",
      stock: 9,
      precio: 165,
      categoria: "cuidadoPersonal",
      imagen: "/img/all_in_cream.jpeg"
    },
    {
      id: "wes236",
      nombre: "M&Y Emulsión Hidratante",
      descripcion: "MARINE & YEAST EXTRACT HYDRA FACIAL ESSENCE. Especialmente enriquecida con proteína de arroz hidrolizada, extracto de geranio y 8 tipos de aminoácidos marinos ayuda a nutrir y conservar la hidratación de la piel por mucho más tiempo, así como también promuevela elasticidad y firmeza.",
      stock: 9,
      precio: 125,
      categoria: "cuidadoPersonal",
      imagen: "/img/facial_essence.jpeg"
    },
    {
      id: "kmt866",
      nombre: "M&Y Limpiador Facial",
      descripcion: "MARINE & YEAST EXTRACT HYDRA CLEANSER. Espuma cremosa y delicada cuyo ingrediente principal es la esencia de levadura natural de arroz. Remueve las impurezas de los poros a profundidad, dejando la piel reluciente e hidratada.",
      stock: 15,
      precio: 65,
      categoria: "cuidadoPersonal",
      imagen: "/img/limpiador-facial.jpeg"
    },
    {
      id: "khg522",
      nombre: "Pasta Blanqueadora Herbal 5 Orecare",
      descripcion: "PASTA DENTAL CON INNOVADORA TECNOLOGÍA DE BLANQUEAMIENTO ORALBasado en 5 hierbas chinas para la protección de la salud de los dientes y no daña el esmalte dental.",
      stock: 3,
      precio: 30,
      categoria: "belleza",
      imagen: "/img/orecare_blanqueadora.jpg"
    },
    {
      id: "prw092",
      nombre: "Pasta Dental Orecare",
      descripcion: "PASTA DENTAL ORECARE DE TIANSHI Es un producto rico en extractos naturales seleccionados de las hierbas medicinales chinas denominados: Sarcandra glabra(Algea), Lonicera Caprifolium y Fluor Chrysanthemum Parthenium, que AYUDAN a PREVENIR LAS INFLAMACIONES y DOLORES BUCALES, SANGRADO EN LAS ENCIAS, la halitosis (CONTRA EL MAL ALIENTO BUCAL) y la HIPERSENCIBILIDAD BUCAL; además es eficaz para reforzar la dureza de la superficie dental y su resistencia contra los ácidos, de manera que es un preventivo completo para los dientes desde su superficie hasta su raíz. Tiene una consistencia suave y cremosa.",
      stock: 10,
      precio: 33,
      categoria: "belleza",
      imagen: "/img/orecare.jpg"
    },
    {
      id: "ujm422",
      nombre: "Toallas Sanitarias Airiz",
      descripcion: "OXIGENO ACTVO & ION NEGATIVO Doble Cuidado Doble Comodidad NUEVA TOALLA DE DISEÑO ULTRA DELGADO Y COMODO Gracias a la tecnologia internacional de avanzada de doble nucleo, en la que el oxigeno activo y el ion negativo estan organicamente combinados, esta puede ser rapidamente absorbida por la piel para mejorar efectivamente la funcion de circulacion del aire, activar las celulas de la piel, apoyar la circulacion sanguinea y acelerar el metabolismo.",
      stock: 5,
      precio: 79,
      categoria: "belleza",
      imagen: "/img/toallas.jpg"
    },
  ];
  
  const obtenerProductos = new Promise((resolve) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos