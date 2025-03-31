<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Qué es la economía? Definición, objeto de estudio e importancia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La economía es una ciencia social que estudia cómo los individuos, las empresas y los gobiernos, administran los recursos disponibles para satisfacer sus necesidades y deseos en un entorno donde dichos recursos son limitados. Debido a esta escasez, la economía busca comprender las decisiones que se toman sobre la producción, distribución y consumo de bienes y servicios, con el objetivo de lograr la mayor eficiencia posible en su uso y mejorar el bienestar de la sociedad. Este estudio abarca tanto la forma en que los agentes económicos eligen entre diferentes alternativas como los factores que influyen en estas decisiones, incluyendo el acceso a la tecnología, las condiciones del mercado y las políticas gubernamentales (Begg, 2006).
    
    p.mb-4 Dado que los recursos no son infinitos y las necesidades humanas pueden ser ilimitadas, la economía debe analizar cómo se asignan de manera óptima. Para ello, responde tres preguntas fundamentales: 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 01
              p.mb-0 ¿Qué bienes y servicios deben producirse?

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 02
              p.mb-0 ¿Cómo deben producirse?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 03
              p.mb-0 ¿Para quién deben producirse?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p Estas cuestiones reflejan las decisiones que enfrentan, tanto los productores como los consumidores, en su interacción con el mercado y permiten entender cómo se determinan los precios, la distribución de la riqueza y el impacto de las políticas económicas en la sociedad. La respuesta a estas preguntas varía, según el sistema económico de cada país, dado que, en algunas economías, las decisiones están influenciadas principalmente por el mercado, mientras que, en otras, el Estado desempeña un papel central en la planificación económica. 
        p El estudio de la economía se divide en dos grandes ramas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5 Microeconomía
              p Se enfoca en el comportamiento de los agentes económicos individuales, como consumidores, empresas y trabajadores. Examina cómo toman decisiones, cómo interactúan en los mercados y cómo se determinan los precios y las cantidades de bienes y servicios en función de la oferta y la demanda. También analiza aspectos como la elasticidad de la demanda, que mide cómo varía la cantidad demandada ante cambios en el precio, la estructura del mercado, que determina el grado de competencia entre empresas, y los costos de producción, los cuales influyen en la rentabilidad de las organizaciones. La microeconomía permite comprender fenómenos como la fijación de precios, la toma de decisiones en los hogares y las estrategias de las empresas para maximizar sus beneficios.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5 Macroeconomía
              p Estudia el funcionamiento general de la economía a nivel nacional e internacional, centrándose en variables agregadas como el crecimiento económico, la inflación, el desempleo y las políticas monetarias y fiscales. Su análisis permite evaluar la estabilidad económica de un país y diseñar estrategias para mejorar su desarrollo. A través de indicadores como el producto interno bruto (PIB), que mide el valor total de los bienes y servicios producidos en un país, el índice de precios al consumidor (IPC), que refleja el comportamiento de la inflación, y la tasa de desempleo, que muestra el porcentaje de la población económicamente activa sin trabajo, la macroeconomía ayuda a comprender la evolución de una economía y a anticipar posibles crisis o períodos de expansión. Además, examina el papel del comercio internacional, los ciclos económicos y las intervenciones del Estado en el sistema financiero.
    
    p.mb-4 A lo largo del tiempo, la economía ha evolucionado y se ha expandido hacia áreas especializadas que abordan temas específicos de gran relevancia. 

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="72%" y="18.5%" numero="+")
                h5 Economía del desarrollo
                p La <b>economía del desarrollo</b> estudia los factores que influyen en el crecimiento económico de los países y analiza estrategias para reducir la pobreza y mejorar la calidad de vida de las poblaciones. 
    
              .bg-color-white.box-shadow.p-3(x="66%" y="50%" numero="+")
                h5 Economía ambiental
                p La <b>economía ambiental</b> se centra en la relación entre la actividad económica y el medio ambiente, evaluando el impacto del crecimiento económico en los recursos naturales y proponiendo soluciones para el desarrollo sostenible. 
    
              .bg-color-white.box-shadow.p-3(x="68%" y="85%" numero="+")
                h5 Economía del comportamiento
                p La <b>economía del comportamiento</b> combina principios económicos y psicológicos para analizar cómo los individuos toman decisiones en situaciones de incertidumbre y cómo factores como la percepción del riesgo, la aversión a la pérdida y los sesgos cognitivos influyen en sus elecciones.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Gracias a su capacidad para analizar datos, prever tendencias y modelar escenarios futuros, la economía se convierte en una herramienta fundamental para la toma de decisiones en distintos niveles. Tanto los gobiernos como las empresas y los ciudadanos, recurren a los principios económicos para gestionar recursos, evaluar oportunidades de inversión y diseñar estrategias que permitan alcanzar objetivos financieros y sociales. 
        p(data-aos="fade-left") Su estudio permite comprender fenómenos tan diversos como la crisis financiera de un país, la fluctuación de los precios en los mercados internacionales o la manera en que los incentivos pueden modificar el comportamiento de las personas. La economía, por lo tanto, no solo es una disciplina académica, sino una ciencia aplicada que influye en múltiples aspectos de la vida cotidiana y en la organización de las sociedades.
    
              
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Objeto de estudio de la economía
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Se centra en analizar cómo las sociedades organizan la producción, distribución y consumo de bienes y servicios, con el propósito de optimizar el uso de los recursos disponibles y mejorar el bienestar general. 
        .bg-color-7.px-4.py-5.mb-3(data-aos="fade-left")
          p.mb-0 La economía examina las decisiones que toman los individuos, las empresas y los gobiernos, para asignar eficientemente los recursos escasos y satisfacer las necesidades humanas, las cuales, por su naturaleza, son prácticamente ilimitadas. Dado que los recursos existentes no son suficientes para cubrir todas las demandas, la economía se convierte en una disciplina fundamental para comprender la manera en que se administran y aprovechan estos recursos en distintos niveles, desde la gestión personal hasta la planificación económica a nivel nacional e internacional (Pérez Pino, 2010).
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="¿Qué estudia la economía?") La economía estudia los distintos sistemas que las sociedades han desarrollado a lo largo de la historia para gestionar la producción y distribución de bienes. Algunos sistemas, como el capitalismo, dependen de la libre interacción entre la oferta y la demanda, mientras que otros, como el socialismo, se basan en la planificación centralizada del Estado. En cada modelo, la economía busca identificar los mecanismos más eficientes para mejorar el nivel de vida de la población, reducir la desigualdad y fomentar un crecimiento económico sostenible.
          p(numero="2" titulo="Asignación de recursos") Uno de los aspectos fundamentales del estudio económico es la asignación de recursos, que implica decidir cómo distribuir los factores productivos entre distintos usos, para maximizar su eficiencia. La economía analiza cómo se gestionan los recursos naturales, el capital financiero, la mano de obra y la tecnología, para garantizar su aprovechamiento óptimo y evitar su agotamiento prematuro. Por ejemplo, en el caso de los recursos naturales, la economía permite evaluar la manera en que su explotación debe equilibrarse con políticas de conservación, para evitar la sobreexplotación. En el ámbito del capital financiero, la asignación eficiente de recursos implica decidir cómo invertir en sectores productivos que maximicen el crecimiento económico y la generación de empleo.
          p(numero="3" titulo="Escasez") La escasez es una condición inherente a la economía, puesto que los recursos siempre son limitados en relación con las necesidades humanas. Por esta razón, los agentes económicos deben tomar decisiones estratégicas para asignar de manera óptima sus  recursos. Este análisis se aplica en diferentes contextos: un gobierno debe decidir si invierte en educación o en infraestructura, una empresa debe determinar qué cantidad de un producto fabricar, y una familia debe elegir entre gastar sus ingresos en bienes de consumo inmediato o en ahorros para el futuro.
          div(numero="4" titulo="Toma de decisiones") 
            p Otro elemento clave en el estudio de la economía es la toma de decisiones, porque tanto los individuos como las empresas y los gobiernos enfrentan constantemente elecciones sobre cómo emplear sus recursos. La economía analiza cómo estos agentes comparan costos y beneficios antes de tomar una decisión, buscando siempre la alternativa que les proporcione mayor utilidad o rentabilidad. 
            p Las decisiones económicas pueden observarse en situaciones cotidianas, como la elección de un consumidor, sobre qué productos adquirir en función de su presupuesto, la determinación de una empresa sobre cuánto producir y a qué precio vender, o la formulación de políticas gubernamentales destinadas a estimular ciertos sectores económicos. Además, la toma de decisiones en economía, se ve influenciada por factores externos como el nivel de ingresos, la disponibilidad de crédito, la estabilidad política y el acceso a la información. Comprender estos factores permite predecir el comportamiento de los agentes económicos y evaluar las consecuencias de sus elecciones en los mercados y en la economía en su conjunto.
    
    .row.mb-5
      .col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left").order-lg-1
        h5 Por ejemplo 
        p En el ámbito personal, una persona que decide entre ahorrar para la compra de una vivienda o gastar en bienes de consumo inmediato, está evaluando su capacidad financiera y su planificación a largo plazo. En el sector empresarial, una compañía que elige entre expandirse a nuevos mercados o invertir en innovación tecnológica, está tomando una decisión estratégica basada en la maximización de beneficios y la competitividad. A nivel gubernamental, la asignación de presupuesto entre educación, salud y defensa, refleja las prioridades económicas de un país y su modelo de desarrollo.
 
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además de la asignación de recursos y la toma de decisiones, la economía estudia la interacción entre los agentes económicos, es decir, cómo los consumidores, productores y el Estado, influyen en el funcionamiento del mercado. Los consumidores determinan la demanda de bienes y servicios en función de sus preferencias, necesidades y capacidad de compra, mientras que las empresas configuran la oferta, ajustando su producción en función de sus costos operativos y las expectativas de rentabilidad. 
        p(data-aos="fade-left") A su vez, el Estado desempeña un papel fundamental en la regulación de la economía, interviniendo a través de impuestos, subsidios, regulaciones y políticas monetarias y fiscales, que buscan corregir fallos del mercado y garantizar la estabilidad económica. Estas interacciones permiten entender fenómenos como la inflación, que se produce cuando los precios suben debido a un exceso de demanda o a un aumento en los costos de producción, o el crecimiento económico, que depende de la capacidad de un país para incrementar su producción de bienes y servicios a lo largo del tiempo.

    .bg-full-width.bg-h85
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.text-white.mt-5
                p El papel del Estado en la economía varía, según el modelo económico adoptado por cada país. En economías de libre mercado, la intervención estatal suele ser mínima y se confía en la autorregulación de la oferta y la demanda, para asignar los recursos de manera eficiente.
                p.mb-0 En contraste, en economías planificadas, el Estado tiene un rol más activo en la asignación de recursos y la regulación de la producción y el consumo. En la mayoría de los países, se adopta un enfoque intermedio en el que los mercados funcionan libremente, pero con cierta supervisión estatal, para evitar prácticas monopólicas, proteger a los consumidores y garantizar la estabilidad macroeconómica.

              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-5 Además de estas áreas fundamentales, el estudio de la economía se ha expandido para abordar temas específicos que influyen en la toma de decisiones económicas en distintos sectores. Por ejemplo:


    .bg-full-width-2.bg-fondo-3
      .px-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/15.svg" alt="" style="width: 90px")
              h5.text-center Economía internacional
              p.mb-0.text-center Examina el comercio entre países y la influencia de factores como los aranceles, las tasas de cambio y los acuerdos comerciales, en el desarrollo económico.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/16.svg" alt="" style="width: 90px")
              h5.text-center Economía del comportamiento
              p.mb-0.text-center Combina principios económicos y psicológicos para analizar cómo las emociones, los sesgos cognitivos y la falta de información, pueden afectar las decisiones económicas de los individuos y las empresas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center Economía ambiental
              p.mb-0.text-center Estudia el impacto de la actividad económica en los ecosistemas y propone estrategias para fomentar un desarrollo sostenible que equilibre el crecimiento con la conservación del medio ambiente.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Por otra parte, la economía también estudia fenómenos como la globalización, la automatización del trabajo y la digitalización, los cuales han transformado la manera en que se organizan los mercados y la producción. La creciente interconexión de las economías ha generado nuevas oportunidades, pero también desafíos, como la desigualdad en la distribución de la riqueza y la necesidad de regulaciones internacionales para garantizar un desarrollo equitativo.
    
        .bg-color-2.py-4.px-5(data-aos="fade-left")
          p.mb-0 El estudio de la economía es esencial porque proporciona herramientas para interpretar y mejorar la toma de decisiones en diversos niveles, desde la administración de un presupuesto personal hasta la formulación de políticas públicas que impactan el desarrollo de un país. Al analizar la asignación de recursos, los procesos de decisión y la interacción de los agentes económicos, la economía permite diseñar estrategias que optimicen el uso de los recursos disponibles y promuevan un crecimiento económico sostenible.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Comprender estos aspectos, es clave para mejorar la calidad de vida de la sociedad y garantizar un equilibrio entre la producción, el consumo y la equidad en la distribución de la riqueza. En un mundo donde los desafíos económicos son cada vez más complejos, el conocimiento de los principios económicos se vuelve indispensable para la toma de decisiones informadas y la búsqueda de soluciones que permitan un desarrollo equitativo y sostenible a largo plazo.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia de la economía en la vida cotidiana y empresarial 

    p La economía influye en múltiples aspectos de la vida cotidiana y en el ámbito empresarial, afectando la manera en que los individuos, las familias, las empresas y los gobiernos, toman decisiones. Su impacto se extiende, desde la administración del presupuesto personal hasta la planificación estratégica de grandes corporaciones y el diseño de políticas públicas. Comprender los principios económicos es esencial para optimizar recursos, evaluar alternativas y anticipar los efectos de factores externos como la inflación, las tasas de interés y el crecimiento económico (Ortega Cárdenas, 2011).
    p.mb-4 Ampliemos la información:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5 Transacciones
              p En la vida diaria, la economía está presente en cada transacción que realizamos y en cada decisión financiera que tomamos. Cuando una persona elige qué productos comprar en un supermercado, está aplicando conceptos económicos como la comparación de precios, la relación entre calidad y costo, y el costo de oportunidad, que se refiere a lo que se deja de obtener, al elegir una opción sobre otra. De manera similar, cuando se decide entre gastar o ahorrar, se está considerando el impacto futuro de esa decisión y la posibilidad de invertir el dinero, para obtener un rendimiento.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5 Ahorro e inversión
              p El ahorro y la inversión son dos prácticas económicas fundamentales que requieren un conocimiento básico de tasas de interés, inflación y mercado financiero. Una persona que ahorra para comprar una vivienda o financiar su educación, debe entender cómo el valor del dinero cambia con el tiempo y cómo las decisiones financieras pueden verse afectadas por factores externos. Por ejemplo, si la inflación aumenta, el dinero ahorrado perderá valor con el tiempo si no se invierte en opciones que generen rendimientos superiores a la tasa inflacionaria.
    
    .row.mb-5
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left") 
        p La educación financiera es clave para la estabilidad económica personal y familiar. Un individuo que comprende los principios básicos de la economía puede tomar mejores decisiones sobre el uso del crédito, la planificación de gastos y la generación de ingresos. Además, puede evitar el sobreendeudamiento y aprovechar oportunidades de inversión que le permitan mejorar su calidad de vida y asegurar su futuro financiero.
        p Conozcamos su importancia en el ámbito empresarial.
    
    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") La economía en el ámbito empresarial
            p.mb-4(data-aos="fade-right") La economía es un pilar fundamental en la gestión empresarial, ya que permite a las organizaciones tomar decisiones estratégicas en un entorno competitivo y dinámico. En el PDF <b>La economía en el ámbito empresarial</b>, se abordan los principales conceptos económicos aplicados a la administración de recursos, la evaluación de costos, el análisis de la oferta y la demanda, así como el impacto de factores macroeconómicos en la estabilidad y crecimiento de las empresas. A través de este material, se podrá comprender cómo las herramientas económicas contribuyen a la optimización de la producción, la definición de estrategias de precios y la identificación de oportunidades de negocio en un mercado en constante cambio.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> La economía en el ámbito empresarial.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/23.png', alt='')


    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-7(data-aos="fade-left") 
        p Además de su impacto en la vida personal y empresarial, la economía también desempeña un papel crucial en la formulación de políticas públicas. Los gobiernos utilizan herramientas económicas para diseñar estrategias que permitan mejorar la distribución de los recursos, promover el crecimiento económico y reducir la desigualdad social. A través de la política fiscal, los gobiernos pueden ajustar el gasto público y la recaudación de impuestos, para estimular la economía en momentos de crisis o frenar el sobrecalentamiento en períodos de expansión.
        p Estudiemos otros aspectos importantes de la economía en la vida cotidiana y empresarial:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="La política monetaria") Permite regular la cantidad de dinero en circulación y las tasas de interés para controlar la inflación y garantizar la estabilidad financiera. Si la inflación es alta, el banco central puede aumentar las tasas de interés para reducir el consumo y el crédito, pero si la economía está en recesión, puede bajar las tasas para incentivar la inversión y el gasto.
          p(numero="2" titulo="Las políticas económicas") Tienen un impacto directo en la generación de empleo. Si un gobierno decide invertir en infraestructura, esto puede generar puestos de trabajo en la construcción, el transporte y sectores relacionados, estimulando la economía y mejorando la calidad de vida de la población. De manera similar, los subsidios a ciertos sectores estratégicos, pueden incentivar el crecimiento de nuevas industrias y fomentar la innovación.
          div(numero="3" titulo="El comercio internacional") 
            p La importación y exportación de bienes y servicios, permiten a los países aprovechar sus ventajas comparativas y especializarse en aquellos sectores donde son más eficientes. Sin embargo, la fluctuación de los tipos de cambio, los aranceles y las políticas comerciales, pueden afectar la competitividad de los productos en los mercados internacionales.
            p En este sentido, las empresas que operan a nivel global, deben estar atentas a las condiciones económicas de los países en los que hacen negocios, puesto que factores como la estabilidad política, la inflación y el crecimiento económico, pueden influir en la demanda de sus productos y en la rentabilidad de sus operaciones.

          p(numero="4" titulo="La sostenibilidad y el desarrollo a largo plazo") Las decisiones económicas deben considerar no solo la rentabilidad inmediata, sino también el impacto en el medio ambiente y en las generaciones futuras. La transición hacia una economía más sostenible, requiere la implementación de modelos de producción y consumo responsables, así como la inversión en energías renovables y tecnologías limpias.
    
    .bg-full-width.bg-h85-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.mt-5.order-lg-2
                p En conclusión, la economía está presente en cada aspecto de la vida cotidiana y en cada decisión empresarial. Comprender sus principios permite a los individuos administrar mejor sus recursos, a las empresas tomar decisiones estratégicas acertadas y a los gobiernos diseñar políticas que promuevan el crecimiento económico y el bienestar social. La economía no solo es una herramienta de análisis, sino un factor determinante en la estabilidad y prosperidad de las personas, las organizaciones y los países en su conjunto. En un mundo interconectado y dinámico, el conocimiento económico se convierte en una ventaja clave para enfrentar los desafíos del presente y construir un futuro sostenible y equitativo.

              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/26.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105518" target="_blank" rel="noopener noreferrer") Pérez Rodríguez, M. D. (Coord.). (2015). Economía empresarial: (2 ed.). Editorial ICB.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/56646" target="_blank" rel="noopener noreferrer") Lladós i Masllorens, J. (2013). Economía, mercados y conducta: ( ed.). Editorial UOC. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://economiaparaprincipiantes.com" target="_blank" rel="noopener noreferrer") Economía para Principiantes. (s.f.). ¿Qué es la economía y cuál es su importancia? Economía para Principiantes. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mMjsXvpyMTQ " target="_blank" rel="noopener noreferrer") Mariacanovirtual. (2019, 6 de febrero). Video introductorio - Fundamentos de Economía [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
