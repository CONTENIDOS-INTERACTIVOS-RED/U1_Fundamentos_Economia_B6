<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Modelo circular de la economía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El modelo circular de la economía, es una herramienta fundamental para comprender cómo los diferentes actores económicos interactúan entre sí y cómo los recursos, bienes, servicios y el dinero, fluyen dentro del sistema económico. Su estructura permite visualizar de manera clara, la relación entre los hogares, las empresas y el gobierno, destacando los intercambios que se producen a través de dos grandes flujos: el flujo real y el flujo monetario (Jaén García, 2016).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Este modelo es clave para analizar el funcionamiento de la economía en su conjunto, porque ayuda a identificar el impacto de variables como el consumo, la inversión, la producción y la intervención del gobierno en la estabilidad y el crecimiento económico. Su importancia radica en que permite entender cómo los ingresos generados en una parte del sistema se transforman en gastos en otra, estableciendo un ciclo continuo que mantiene en funcionamiento la economía.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Representación del flujo de bienes, servicios y dinero
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left") 
        p El modelo circular de la economía representa la interdependencia entre los diferentes actores económicos y la manera en que los bienes, los servicios y el dinero circulan dentro del sistema económico. 
        p Su estructura permite analizar cómo los hogares, las empresas y el gobierno interactúan  a través de dos flujos principales: el flujo real, que muestra el movimiento de bienes y servicios, y el flujo monetario, que refleja las transacciones económicas que acompañan estos intercambios. Ambos flujos están interconectados y forman un ciclo continuo que sostiene el funcionamiento de la economía (Cue Mancera, 2015).
    
    .bg-full-width.bg-color-3
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Representación del flujo de bienes, servicios y dinero 
            p.mb-4(data-aos="fade-right") El flujo de bienes, servicios y dinero es un concepto esencial para comprender el funcionamiento de la economía y la interacción entre los distintos agentes económicos. En el PDF <b>Representación</b>, se analiza cómo los hogares, las empresas y el gobierno participan en este proceso a través del intercambio de factores productivos, la generación de ingresos y el consumo de bienes y servicios. Además, se explora la relación entre el flujo real y el flujo monetario, así como el impacto de la inversión, el comercio exterior y las políticas económicas en la estabilidad y crecimiento de un país.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Representación del flujo de bienes, servicios y dinero .
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.mt-5.order-lg-2
                p En conclusión, la representación del flujo de bienes, servicios y dinero, en el modelo circular de la economía, permite comprender la interdependencia entre hogares, empresas y el gobierno, y cómo sus decisiones afectan el desarrollo económico. A través del flujo real, se analiza el intercambio de factores productivos y la producción de bienes y servicios, mientras que el flujo monetario refleja las transacciones financieras que sostienen la actividad económica. Este modelo ayuda a identificar cómo las políticas económicas, la inversión y el comercio exterior, impactan el crecimiento, el empleo y la estabilidad financiera. Comprender estos flujos es esencial para evaluar la efectividad de las políticas económicas y garantizar un desarrollo sostenible que beneficie a toda la sociedad.

              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/60086" target="_blank" rel="noopener noreferrer") Galletto, V. (2012). Economía urbana: ( ed.). Antoni Bosch editor.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50180" target="_blank" rel="noopener noreferrer") Mochón Morcillo, F. (2009). Economía, teoría y política: (6 ed.). McGraw-Hill España.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.inesem.es/revistadigital/gestion-empresarial/flujo-circular-de-la-renta/" target="_blank" rel="noopener noreferrer") Cortés, P. C. (2022). Flujo circular de la renta: qué es, tipos y funcionamiento. Revista Digital de Gestión Empresarial. Recuperado de   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=aqSa1G_nOXU " target="_blank" rel="noopener noreferrer") La biblioteca de Gero. (2025, 18 de febrero). El flujo circular de la economía [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Rx3BNWEVBbw " target="_blank" rel="noopener noreferrer") Sustraendo h. (2016, 9 de enero). Flujo circular de la renta [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: 'La economía se divide en dos grandes ramas:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Microeconomía y macroeconomía.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Comercio exterior y política económica.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Economía financiera y contabilidad.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Inversión pública y privada.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La microeconomía estudia agentes individuales, mientras que la macroeconomía analiza el comportamiento de la economía en su conjunto.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'El principal problema que aborda la economía es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La existencia de demasiados bienes en el mercado.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La asignación de recursos en un entorno de escasez.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La regulación de los precios internacionales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El control del comercio exterior.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La economía estudia cómo asignar recursos limitados para satisfacer necesidades ilimitadas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cómo influye el comercio en el bienestar de los países?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permite que los países se especialicen en lo que hacen mejor.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Reduce la competencia entre productores.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Hace que los países dependan menos del exterior.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evita que los precios de los productos cambien.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La especialización según ventaja comparativa permite a los países beneficiarse del comercio.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'El flujo monetario en la economía representa:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El intercambio de bienes y servicios sin dinero.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La circulación del dinero entre empresas, hogares y el gobierno.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La acumulación de capital en los bancos centrales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo las transacciones realizadas por empresas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El flujo monetario describe cómo el dinero se mueve entre agentes económicos a través del consumo, el pago de salarios y la inversión.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Si el gobierno aumenta el gasto público, es probable que:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La inversión privada disminuya.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se genere mayor empleo y crecimiento económico.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se reduzca el déficit fiscal automáticamente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se detenga el comercio internacional.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un aumento en el gasto público impulsa la demanda agregada y puede reducir el desempleo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
