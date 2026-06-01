# EVA 3 Desarrollo Frontend - Centro de Negocios SERCOTEC Santiago

## Descripción

Landing Page desarrollada para el Centro de Negocios Santiago de SERCOTEC utilizando React como framework frontend y WordPress como CMS para la administración de contenido.

La aplicación consume datos desde la API REST de WordPress y muestra dinámicamente información relacionada con servicios, testimonios y preguntas frecuentes.

## Tecnologías Utilizadas

* React
* Vite
* JavaScript
* WordPress
* API REST de WordPress
* Bootstrap
* Git
* GitHub

## Funcionalidades Implementadas

### Landing Page

* Navbar
* Hero principal
* Sección Nosotros
* Sección Servicios
* Sección Testimonios
* Sección Preguntas Frecuentes
* Formulario de Contacto
* Footer

### Componentes React

* Navbar.jsx
* Hero.jsx
* About.jsx
* ServiceCard.jsx
* ContactForm.jsx
* Footer.jsx

### Consumo de API

La aplicación consume información desde la API REST de WordPress:

http://localhost/wordpress/wp-json/wp/v2/posts

### Funcionalidad de Contacto

Cada servicio posee un botón "Contáctanos" que:

* Desplaza automáticamente al formulario.
* Completa automáticamente el servicio seleccionado.

### Accesibilidad y Usabilidad

* Navegación simple e intuitiva.
* Formularios con validaciones HTML.
* Diseño organizado por secciones.

## Instalación

1. Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

2. Instalar dependencias:

npm install

3. Ejecutar el proyecto:

npm run dev

4. Abrir:

http://localhost:5173

## Estructura del Proyecto

src/

components/

* Navbar.jsx
* Hero.jsx
* About.jsx
* ServiceCard.jsx
* ContactForm.jsx
* Footer.jsx

App.jsx

## CMS

WordPress fue utilizado como sistema de gestión de contenidos (CMS), permitiendo administrar la información mostrada en la Landing Page mediante la API REST.

## Control de Versiones

El desarrollo fue gestionado utilizando Git y GitHub.

## Autor

Mayco Guzmán
