# 🔵🔴 San Lorenzo Primero

Sitio web dedicado al **Club Atlético San Lorenzo de Almagro**, desarrollado como proyecto final para la materia **Desarrollo Web**.

El objetivo del proyecto es crear un sitio web informativo, moderno y responsive para los hinchas del Ciclón, utilizando HTML5, Bootstrap y una arquitectura de estilos desarrollada con SCSS.

---

## 📌 Descripción del proyecto

**San Lorenzo Primero** es una página web que reúne información y recursos relacionados con el Club Atlético San Lorenzo.

El sitio permite acceder de manera sencilla a diferentes secciones:

* 🏠 Inicio
* 👤 Asociate
* 📩 Contacto
* 🎟️ Entradas
* 📅 Fixture
* 💼 Trabajá con nosotros
* 🏟️ Abonos 2026

La página principal cuenta con tarjetas de acceso rápido a las diferentes secciones, imágenes relacionadas con cada contenido y animaciones para mejorar la experiencia de navegación.

---

## 🎯 Objetivos

Los principales objetivos del proyecto son:

* Crear una página web responsive y adaptable a diferentes dispositivos.
* Aplicar correctamente **HTML5 semántico**.
* Utilizar **Bootstrap 5.3.3** para facilitar el diseño responsive.
* Implementar una arquitectura organizada mediante **SCSS**.
* Utilizar variables, mixins y partials para evitar la repetición de código.
* Incorporar animaciones mediante **AOS (Animate On Scroll)**.
* Aplicar buenas prácticas de accesibilidad y SEO.
* Organizar correctamente los archivos y recursos del proyecto.
* Implementar navegación entre las diferentes páginas del sitio.

---

## 🛠️ Tecnologías utilizadas

### HTML5

Utilizado para desarrollar la estructura y el contenido de las diferentes páginas del sitio.

Se utilizaron elementos semánticos como:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<footer>`

### SCSS / SASS

Utilizado para organizar y administrar los estilos del proyecto.

La arquitectura SCSS está dividida en diferentes categorías para facilitar el mantenimiento y reutilización del código.

### Bootstrap 5.3.3

Utilizado principalmente para:

* Sistema de grillas.
* Diseño responsive.
* Componentes.
* Botones.
* Navbar.
* Utilidades de alineación y espaciado.

### AOS

Se utilizó **Animate On Scroll** para agregar animaciones al contenido a medida que el usuario recorre la página.

### Git y GitHub

Utilizados para:

* Control de versiones.
* Seguimiento de cambios.
* Organización del desarrollo.
* Publicación del proyecto.

---

## 📁 Estructura del proyecto

```text
SAN-LORENZO-PRIMERO/
│
├── assets/
│   └── img/
│       ├── san-lorenzo-primero-logo.png
│       ├── san-lorenzo-primero-asociate.jpg
│       ├── san-lorenzo-primero-contacto.jpg
│       ├── san-lorenzo-primero-entradas.jpg
│       ├── san-lorenzo-primero-fixture.jpg
│       ├── san-lorenzo-primero-abonos-2026.jpg
│       └── san-lorenzo-primero-hinchada.jpg
│
├── css/
│   └── styles.css
│
├── scss/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── utilities/
│   └── main.scss
│
├── pages/
│   ├── asociate.html
│   ├── contacto.html
│   ├── entradas.html
│   ├── fixture.html
│   ├── trabajaCN.html
│   └── abonos.html
│
├── index.html
├── README.md
└── .gitignore
```

---

## 🎨 Diseño

El diseño está inspirado en la identidad visual del Club Atlético San Lorenzo de Almagro.

Se utilizaron principalmente tonos:

* 🔴 Rojo
* 🔵 Azul
* ⚪ Blanco

La interfaz busca mantener una estética deportiva, clara y sencilla, permitiendo encontrar rápidamente la información buscada.

---

## 📱 Diseño responsive

El sitio fue desarrollado teniendo en cuenta diferentes tamaños de pantalla:

* 💻 Computadoras
* 💻 Notebooks
* 📱 Tablets
* 📱 Celulares

Se utilizaron las herramientas responsive de Bootstrap junto con media queries en SCSS.

---

## 🔍 SEO y accesibilidad

El proyecto incorpora diferentes buenas prácticas de SEO y accesibilidad.

Entre ellas:

* `meta description`
* `meta keywords`
* `meta author`
* `meta robots`
* Títulos `<title>` descriptivos.
* Atributos `alt` en las imágenes.
* Estructura semántica HTML5.
* Jerarquía correcta de títulos.
* Etiquetas `aria-label` y `aria-labelledby`.
* Diseño adaptable a dispositivos móviles.

---

## ✨ Funcionalidades

### Navegación

La barra de navegación permite acceder a todas las secciones principales del sitio.

### Cards

La página de inicio presenta tarjetas informativas con:

* Imagen.
* Título.
* Descripción.
* Botón de acceso.

### Animaciones

Se incorporaron animaciones mediante AOS para generar una experiencia de navegación más dinámica.

### Formularios y contacto

El sitio cuenta con secciones destinadas a la comunicación y consulta de los usuarios.

### Abonos

Se incorporó una sección específica para presentar información relacionada con los **Abonos 2026**.

---

## ⚙️ Compilación de SCSS

Los estilos se desarrollan mediante SCSS y posteriormente se compilan a CSS.

Para compilar el archivo principal:

```bash
sass scss/main.scss css/styles.css
```

De esta manera, el navegador utiliza el archivo:

```text
css/styles.css
```

mientras que el desarrollo de los estilos se mantiene organizado dentro de la carpeta `scss`.

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Verificar que las carpetas `assets`, `css`, `scss` y `pages` estén correctamente ubicadas.
4. Abrir `index.html` en el navegador.

También se puede utilizar una extensión como **Live Server** para visualizar el proyecto durante el desarrollo.

---

## 📚 Proyecto académico

**Materia:** Desarrollo Web

**Proyecto:** San Lorenzo Primero

**Año:** 2026

**Tipo:** Proyecto final / Entrega final

---

## 👨‍💻 Autor

**San Lorenzo Primero**

Proyecto desarrollado con fines académicos para la materia **Desarrollo Web**.

---

## 🔗 Repositorio

El proyecto se encuentra alojado en GitHub y cuenta con control de versiones mediante Git.

---

## ⚽ ¡Vamos Ciclón!

**San Lorenzo Primero — Todo por el Ciclón.**


## ¡link del sitio! 

https://juliangomez22.github.io/SanLorenzoPrimero/