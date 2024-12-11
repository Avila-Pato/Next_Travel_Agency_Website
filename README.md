# Proyecto de Viajes Globales

## Descripción General
Este proyecto es una plataforma de viajes que permite a los usuarios explorar destinos recomendados, obtener información detallada sobre categorías de viajes, y comunicarse a través de un sitio web intuitivo y visualmente atractivo. La aplicación está desarrollada en **Next.js**, aprovechando sus capacidades de renderizado en el lado del servidor y su eficiente manejo de rutas.

## Funcionalidad
- **Exploración de destinos**: Los usuarios pueden explorar una variedad de destinos recomendados con imágenes destacadas, descripciones y enlaces para más detalles.
- **Categorías de viaje**: Se presentan diferentes categorías de viajes (como playas, montañas, ciudades, etc.) para que los usuarios puedan filtrar su búsqueda y encontrar información específica sobre cada tipo de destino.
- **Interacción visual**: Se utiliza un Slider para mostrar los destinos destacados, que se adapta a diferentes tamaños de pantalla para una navegación mejorada.
- **Comunicaciones**: Incluye un pie de página con información de contacto, enlaces útiles y enlaces a las redes sociales para permitir una fácil comunicación y navegación.

## Componentes Clave
- **About**:
  - Proporciona información sobre el proyecto y sus objetivos, mostrando imágenes y detalles clave sobre las características del sitio.
  - Usa un map para iterar y mostrar elementos `AboutItem`, cada uno mostrando un icono y un título asociado.
- **Button**:
  - Representa los botones utilizados en toda la aplicación.
  - Los botones tienen diferentes variants que definen su apariencia, como `btn_white_rounded` para los botones principales con borde redondeado.
  - Cada botón puede incluir un icono que mejora la usabilidad y la estética del sitio.
- **Feature**:
  - Presenta una colección de destinos recomendados usando un Slider de `react-slick`.
  - Los destinos se muestran en formato de tarjeta, que se puede expandir para obtener más detalles.
  - Los botones de navegación en el slider están personalizados usando iconos de React (como flechas para avanzar y retroceder).
- **Footer**:
  - Contiene información importante sobre el proyecto, como enlaces rápidos, información de contacto y enlaces a redes sociales.
  - Usa un diseño en columnas para organizar los enlaces y la información de manera clara y accesible.
- **Hero**:
  - Muestra un banner de presentación que atrae a los usuarios a explorar el sitio.
  - Incluye un botón para comenzar a planificar un viaje y una lista de puntos de interés que los usuarios pueden explorar.
- **Navbar**:
  - Muestra los enlaces principales del sitio y un menú móvil que se puede abrir o cerrar según la necesidad del usuario.
  - Los enlaces cambian según el estado del menú para mejorar la navegación en dispositivos móviles.

## Tecnologías Utilizadas
- **Next.js**: Para el renderizado del lado del servidor y la gestión de rutas.
- **React**: Para la construcción de componentes reutilizables y la lógica de la aplicación.
- **react-slick**: Para la implementación de sliders que mejoran la presentación visual de los destinos destacados.
- **Tailwind CSS**: Para la estilización y el diseño responsive, mejorando la apariencia del sitio en diferentes dispositivos.
- **Image**: Para manejar las imágenes de destino y los íconos en diferentes componentes.

## Propósito
Este proyecto tiene como objetivo proporcionar una plataforma atractiva y fácil de usar para la exploración de destinos de viaje. Está diseñado para ayudar a los usuarios a encontrar y organizar sus próximos viajes, ofreciendo información visual y detallada sobre destinos recomendados, categorías de viaje y opciones de comunicación.
