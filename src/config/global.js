export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la economía y principios fundamentales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Qué es la economía? Definición, objeto de estudio e importancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objeto de estudio de la economía',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia de la economía en la vida cotidiana y empresarial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios fundamentales de la economía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelo circular de la economía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Representación del flujo de bienes, servicios y dinero',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Begg, D. (2006). Economía: (8 ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50090',
    },
    {
      referencia:
        'Peréz Pino, A. (2010). Economía general: ( ed.). Firmas Press. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36409',
    },
    {
      referencia:
        'Ortega Cárdenas, A. (2011). Economía colombiana: (4 ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69196',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía: ( ed.). Editorial Digital UNID. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41178',
    },
    {
      referencia:
        'Jaén García, M. (2016). Economía industrial: ( ed.). Editorial Universidad de Almería. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/43319',
    },
    {
      referencia:
        'María O´Kean, J. (2015). Economía: ( ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50271',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39385',
    },
    {
      referencia:
        'Rodríguez Sánchez, A. M. (2015). Economía 2: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40420',
    },
  ],
  glosario: [
    {
      termino: 'Agentes económicos',
      significado:
        'Individuos, empresas y gobiernos que toman decisiones sobre la producción, distribución y consumo de bienes y servicios.',
    },
    {
      termino: 'Asignación de recursos',
      significado:
        'Distribución eficiente de los factores productivos para satisfacer necesidades y maximizar la producción económica.',
    },
    {
      termino: 'Ciclo económico',
      significado:
        'Fluctuaciones en la actividad económica de un país, caracterizadas por fases de expansión y recesión.',
    },
    {
      termino: 'Costo de oportunidad',
      significado:
        'Valor de la mejor alternativa sacrificada al tomar una decisión económica.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes o servicios que los consumidores están dispuestos a adquirir a diferentes precios.',
    },
    {
      termino: 'Elasticidad de la demanda',
      significado:
        'Sensibilidad de la cantidad demandada de un bien ante cambios en su precio o en los ingresos del consumidor.',
    },
    {
      termino: 'Escasez',
      significado:
        'Situación en la que los recursos disponibles son insuficientes para satisfacer todas las necesidades humanas.',
    },
    {
      termino: 'Flujo circular de la economía',
      significado:
        'Modelo que representa la interacción entre hogares, empresas y gobierno mediante el intercambio de bienes, servicios y dinero.',
    },
    {
      termino: 'Inflación',
      significado:
        'Aumento generalizado y sostenido de los precios en una economía durante un período determinado.',
    },
    {
      termino: 'Macroeconomía',
      significado:
        'Rama de la economía que estudia variables agregadas como inflación, desempleo y crecimiento económico a nivel nacional o internacional.',
    },
    {
      termino: 'Mercado',
      significado:
        'Espacio donde se realizan transacciones de bienes y servicios entre compradores y vendedores.',
    },
    {
      termino: 'Microeconomía',
      significado:
        'Estudio del comportamiento de agentes económicos individuales como consumidores, empresas y trabajadores en mercados específicos.',
    },
    {
      termino: 'Oferta',
      significado:
        'Cantidad de bienes y servicios que los productores están dispuestos a vender a diferentes precios.',
    },
    {
      termino: 'Política fiscal',
      significado:
        'Estrategias del gobierno sobre impuestos y gasto público para influir en la economía.',
    },
    {
      termino: 'Política monetaria',
      significado:
        'Regulación de la cantidad de dinero y tasas de interés para mantener la estabilidad económica.',
    },
    {
      termino: 'Producto Interno Bruto (PIB)',
      significado:
        'Valor total de los bienes y servicios producidos en un país durante un período determinado.',
    },
    {
      termino: 'Sistema económico',
      significado:
        'Modelo que define cómo una sociedad organiza la producción y distribución de bienes y servicios.',
    },
  ],
}
