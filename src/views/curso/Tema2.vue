<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Principios fundamentales de la economía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").text-white.mt-5.order-2
                p Los principios de la economía formulados por Gregory Mankiw, proporcionan un marco teórico que permite entender el comportamiento de los individuos, las empresas y los gobiernos, en la toma de decisiones económicas. Estos principios explican cómo se asignan los recursos dentro de una sociedad, cómo interactúan los agentes en los mercados y cómo opera la economía en su conjunto (Hernández Pérez & Hernández Pérez, 2014).

              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El estudio de estos principios es fundamental porque permite comprender fenómenos como:
    
        .bg-color-7.px-4.pt-3.mb-3(data-aos="fade-left")
          .row
            .col-lg-8.align-content-center.mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La producción.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La distribución.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 El consumo de bienes y servicios.
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
        p Además, facilita el análisis de las políticas económicas, el impacto de los precios, la generación de riqueza y el crecimiento económico. En términos generales, estos principios ayudan a responder preguntas claves como: ¿Qué bienes y servicios se deben producir? ¿Cómo deben producirse? ¿Para quién se producen?

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4(data-aos="fade-left") Mankiw divide sus principios en tres grandes categorías: la forma en que los individuos toman decisiones, cómo interactúan en los mercados y cómo funciona la economía en su conjunto. A través de estos conceptos, es posible analizar tanto decisiones individuales como grandes fenómenos económicos que afectan a países enteros.

        h2.mb-4(data-aos="fade-left") Cómo toman decisiones los individuos
    
        .bg-color-1.py-4.px-5(data-aos="fade-left")
          p.mb-0 La toma de decisiones es uno de los ejes centrales de la economía. Tanto los consumidores como los productores y los gobiernos deben evaluar diversas opciones y elegir la mejor alternativa según los recursos disponibles y las necesidades que buscan satisfacer. En un mundo donde los recursos son limitados y los deseos son infinitos, cada elección implica una renuncia, y los principios económicos ayudan a entender cómo se realizan estas elecciones.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h5 Elegir opciones
              p Uno de los principios esenciales establece que los individuos enfrentan disyuntivas, lo que significa que constantemente deben elegir entre diferentes opciones. Dado que no es posible satisfacer todas las necesidades y deseos al mismo tiempo, cada decisión implica priorizar ciertos aspectos sobre otros.
              p Por ejemplo, una persona con ingresos limitados, debe decidir entre gastar en bienes de consumo inmediato, ahorrar o invertir. Si opta por gastar más en entretenimiento, tendrá menos recursos para educación o salud. En el caso de los gobiernos, las disyuntivas se reflejan en la asignación del presupuesto: si se destinan más recursos a infraestructura, se reducen los fondos disponibles para otros sectores como salud o educación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-lg-1
              h5 Costo de oportunidad
              p El segundo principio, el costo de oportunidad, complementa el concepto de disyuntiva. Cada vez que se toma una decisión, se renuncia a la siguiente mejor alternativa disponible.
              p Por ejemplo, si una persona decide usar sus ahorros para hacer un viaje en lugar de invertir en un negocio, el costo de oportunidad es la ganancia que podría haber obtenido con la inversión. En el mundo empresarial, si una empresa decide expandirse a nuevos mercados internacionales, su costo de oportunidad puede ser no haber invertido esos recursos en mejorar la tecnología de producción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-lg-1
              h5 Tomar decisiones
              p Otro principio clave es que las personas racionales piensan en términos marginales. Esto significa que no toman decisiones en términos absolutos, sino que evalúan los costos y beneficios adicionales, por realizar un cambio incremental en sus acciones.
              p Por ejemplo, un estudiante que se ha preparado cuatro horas para un examen, debe decidir si, estudiar una hora más, le aportará un beneficio adicional que justifique su esfuerzo. Si esa hora extra mejora significativamente su rendimiento, entonces la decisión será positiva. Este mismo principio se aplica en la producción y distribución de bienes y servicios. Una empresa que fabrica teléfonos móviles, debe analizar si, producir una unidad adicional, generará suficientes ingresos adicionales para justificar los costos de fabricación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h5 Incentivos
              p El último principio dentro de la toma de decisiones económicas, establece que los individuos responden a incentivos. Esto significa que los cambios en costos y beneficios influyen en el comportamiento de las personas.
              p Los incentivos pueden ser positivos o negativos. Un descuento en un producto puede motivar a los consumidores a comprarlo, mientras que un impuesto adicional sobre un bien, puede reducir su demanda. Los gobiernos utilizan incentivos para modificar comportamientos y alcanzar objetivos económicos y sociales. Por ejemplo, los subsidios a la energía solar fomentan el uso de energías limpias, mientras que los impuestos al tabaco, buscan reducir su consumo.

    h2(data-aos="fade-left") Cómo interactúan los individuos en los mercados
    p.mb-5 Los mercados son el mecanismo principal a través del cual se asignan los recursos dentro de una economía. En ellos, compradores y vendedores interactúan para intercambiar bienes y servicios. Los precios juegan un papel fundamental, porque permiten equilibrar la oferta y la demanda y coordinar las decisiones económicas de los diferentes agentes.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Mejora del bienestar") 
            p Uno de los principios fundamentales de la economía, establece que el comercio puede mejorar el bienestar de todos. A través del intercambio, los individuos, las empresas y los países, pueden especializarse en la producción de aquellos bienes y servicios en los que tienen una ventaja comparativa y comerciar con otros para obtener productos a menor costo.
            p Por ejemplo, un país con un clima ideal para la agricultura, puede especializarse en la producción de alimentos y exportarlos a cambio de productos tecnológicos fabricados en otra región, con mayor capacidad industrial. Esta especialización permite que los recursos se utilicen de manera más eficiente y que la riqueza aumente para ambas partes.
          p(numero="2" titulo="Eficiencia en la actividad económica") Otro principio económico clave, establece que los mercados organizan la actividad económica de manera eficiente. En un sistema de mercado, los precios actúan como señales que guían a los productores y consumidores. Si un bien tiene alta demanda y su precio sube, los productores tienen incentivos para aumentar su producción. Por el contrario, si la demanda cae, los precios bajan y los productores pueden optar por reducir la oferta o redirigir sus recursos a o tros bienes más rentables.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.mt-5
                p Sin embargo, aunque los mercados suelen asignar recursos de manera eficiente, en algunos casos el Estado puede mejorar los resultados del mercado. Existen fallos de mercado como las externalidades negativas, los monopolios y la provisión de bienes públicos, que pueden requerir la intervención del gobierno.
                h5 Por ejemplo
                p.mb-0 La contaminación generada por una fábrica afecta a quienes viven cerca, sin que estos reciban compensación. En estos casos, el gobierno puede establecer regulaciones ambientales o impuestos para corregir la externalidad negativa. Asimismo, los monopolios pueden generar precios excesivamente altos y reducir la competencia, lo que justifica la intervención gubernamental mediante regulaciones antimonopolio.

              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Cómo funciona la economía en su conjunto
    p.mb-5 El estudio de la economía no solo se centra en la toma de decisiones individuales o en la interacción en los mercados, sino también en el análisis del funcionamiento global de la economía. La macroeconomía examina aspectos como el crecimiento económico, la inflación, el desempleo y las políticas monetarias y fiscales, que determinan la estabilidad y el desarrollo de los países.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Capacidad de producción" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Capacidad de producción
            p Uno de los principios clave establece que el nivel de vida de un país depende de su capacidad de producción. La productividad es un factor fundamental para determinar el crecimiento económico y mejorar la calidad de vida de la población.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Inflación" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Inflación
            p Por otro lado, la inflación es un fenómeno que afecta la estabilidad de los precios. Ocurre cuando la cantidad de dinero en circulación crece más rápido que la producción de bienes y servicios. Si la inflación es elevada, el poder adquisitivo de los consumidores se reduce, afectando el consumo y la inversión.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desempleo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desempleo
            p Otro aspecto fundamental en la economía, es el desempleo. Un alto nivel de desempleo indica que la economía no está generando suficientes oportunidades laborales para su población. Existen diferentes tipos de desempleo, como el friccional, que ocurre cuando las personas están en proceso de cambiar de empleo; el estructural, que se da cuando ciertos sectores desaparecen debido a cambios tecnológicos; y el cíclico, que se produce en períodos de recesión económica.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gobierno" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Gobierno
            p El gobierno juega un papel clave en la estabilidad económica mediante políticas fiscales y monetarias. La política fiscal regula el gasto público y los impuestos, mientras que la política monetaria, manejada por los bancos centrales, controla la oferta de dinero y las tasas de interés para mantener la estabilidad financiera.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/15.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En otras palabras, los diez principios de la economía constituyen una guía esencial para entender el funcionamiento de los sistemas económicos y la forma en que los individuos, las empresas y los gobiernos, toman decisiones en un contexto de recursos limitados. A través del estudio de estos principios, se puede analizar con mayor claridad cómo se asignan los recursos, cómo interactúan los mercados y qué factores determinan el crecimiento económico y la estabilidad financiera de un país.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El análisis de la toma de decisiones individuales muestra cómo cada persona, empresa o entidad gubernamental, enfrenta constantemente disyuntivas y costos de oportunidad en sus elecciones. Estos principios explican la importancia de evaluar las alternativas disponibles, considerando los beneficios y las pérdidas, asociados a cada opción. Asimismo, el concepto de incentivos es clave para comprender cómo las variaciones en precios, salarios, subsidios o regulaciones, pueden influir en la conducta de los agentes económicos, impactando desde el consumo y la producción, hasta la inversión y el ahorro.
    
        .bg-color-1.py-4.px-5.mb-3(data-aos="fade-left")
          p.mb-0 En el ámbito de los mercados, los principios económicos permiten entender cómo se determinan los precios y cómo la oferta y la demanda, se ajustan dinámicamente a las condiciones del entorno. La especialización y el comercio generan eficiencia, permitiendo que las economías crezcan y se desarrollen a través del intercambio de bienes y servicios. Sin embargo, los mercados no siempre son perfectos, y en situaciones de fallos de mercado, la intervención gubernamental puede ser necesaria para corregir desequilibrios, como ocurre con la contaminación, los monopolios o la provisión de bienes públicos.
        p A nivel macroeconómico, el estudio de estos principios facilita la comprensión de fenómenos como:
  
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 01
              p.mb-0 La inflación.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 02
              p.mb-0 El desempleo.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 03
              p.mb-0 El crecimiento económico.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La productividad y la capacidad de innovación de un país, son determinantes en la mejora de la calidad de vida de sus ciudadanos, y la estabilidad de los precios y del empleo es crucial para garantizar una economía sostenible. Para ello, los gobiernos deben emplear herramientas de política fiscal y monetaria que permitan corregir desequilibrios y mantener el crecimiento económico sin generar efectos adversos a largo plazo.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El análisis de la economía en su conjunto, también resalta la importancia de diseñar estrategias adecuadas para enfrentar crisis económicas, mejorar la distribución del ingreso y fomentar el desarrollo sustentable. La correcta aplicación de los principios económicos, permite identificar oportunidades para mejorar la eficiencia en la asignación de recursos y promover el bienestar de la sociedad.

    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.mt-5
                p En conclusión, los diez principios de la economía no solo son fundamentales para el análisis teórico, sino que también tienen una aplicación directa en la vida cotidiana y en la toma de decisiones estratégicas, dentro de las empresas y los gobiernos. Comprender estos principios ayuda a desarrollar políticas económicas más efectivas, a tomar decisiones de inversión más informadas y a generar un impacto positivo en la sociedad a través de una mejor administración de los recursos disponibles. 
                p La economía, lejos de ser un concepto abstracto, es una disciplina que influye en cada aspecto de nuestra vida, desde el costo de los bienes que consumimos hasta la estabilidad del empleo y el crecimiento de los países.

              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/22.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/44220" target="_blank" rel="noopener noreferrer") Domínguez Gonzalo, E. (2016). Iniciación a la economía: ( ed.). Editorial Tutor Formación. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/111146" target="_blank" rel="noopener noreferrer") Weber, M. (2014). Economía y sociedad: ( ed.). FCE - Fondo de Cultura Económica. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://sites.google.com/view/economentes/inicio/haziel/los-diez-principios-fundamentales-de-la-econom%C3%ADa" target="_blank" rel="noopener noreferrer") Economentes. (s.f.). Los diez principios fundamentales de la economía. Recuperado el [fecha de consulta], de 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6f_lp1zjQl0 " target="_blank" rel="noopener noreferrer") NEWMEDIA UFM. (2023, 6 de diciembre). Principios fundamentales de economía |  Fernando Monterroso [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cf5eNTMF1jI" target="_blank" rel="noopener noreferrer") Díaz, E. (2021, 1 de marzo). Principios fundamentales del análisis económico 2021- La Plata [Vídeo]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
