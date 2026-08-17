# San Lorenzo Primero

Proyecto desarrollado para la materia **Desarrollo Web**.

Sitio web dedicado a **San Lorenzo Primero**, con diferentes secciones informativas y un diseño responsive adaptado a dispositivos móviles, tablets y computadoras.

## Tecnologías utilizadas

* HTML5
* SCSS / Sass
* CSS3
* Bootstrap 5.3
* AOS (Animate On Scroll)
* Git
* GitHub

## Funcionalidades

* Página principal.
* Sección Asociate.
* Contacto.
* Entradas.
* Fixture.
* Trabajá con Nosotros.
* Abonos 2026.
* Diseño responsive para dispositivos móviles, tablets y computadoras.
* Animaciones mediante AOS.
* Navegación responsive mediante Bootstrap.

## Mejoras implementadas

* Diseño responsive utilizando Bootstrap.
* Sistema de Grid de Bootstrap.
* Navbar responsive.
* Cards de Bootstrap.
* Botones personalizados.
* Animaciones y efectos visuales mediante AOS.
* Organización del proyecto mediante carpetas.
* Migración de CSS a SCSS.
* Uso de variables reutilizables en SCSS.
* Uso de mixins para reutilizar estilos.
* Organización de estilos mediante partials.
* Archivo `main.scss` como punto de entrada principal.
* Compilación de SCSS a CSS.
* Separación de estilos por componentes, páginas, layout y utilidades.

## Arquitectura SCSS

El proyecto utiliza una arquitectura modular de SCSS para mantener los estilos organizados y reutilizables.

```text
scss/
├── utilities/
│   ├── _variables.scss
│   └── _mixins.scss
│
├── base/
│   ├── _base.scss
│   └── _tipografia.scss
│
├── layout/
│   ├── _header.scss
│   ├── _nav.scss
│   └── _footer.scss
│
├── components/
│   ├── _buttons.scss
│   └── _cards.scss
│
├── pages/
│   ├── _asociate.scss
│   ├── _contacto.scss
│   ├── _entradas.scss
│   ├── _fixture.scss
│   ├── _trabaja.scss
│   └── _abonos.scss
│
└── main.scss
```

El archivo `main.scss` funciona como **punto de entrada** y utiliza `@use` para importar los diferentes módulos SCSS.

## Compilación de SCSS

El proyecto utiliza Sass para convertir los archivos SCSS en CSS.

Para compilar manualmente:

```bash
sass scss/main.scss css/styles.css
```

Para trabajar con compilación automática:

```bash
sass --watch scss/main.scss css/styles.css
```

De esta manera, cada modificación realizada en los archivos `.scss` actualiza automáticamente:

```text
css/styles.css
```

El archivo CSS generado es utilizado posteriormente por los archivos HTML.

## Estructura del proyecto

```text
/
├── assets/
│   └── img/
│
├── css/
│   └── styles.css
│
├── scss/
│   ├── utilities/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   │
│   ├── base/
│   │   ├── _base.scss
│   │   └── _tipografia.scss
│   │
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _nav.scss
│   │   └── _footer.scss
│   │
│   ├── components/
│   │   ├── _buttons.scss
│   │   └── _cards.scss
│   │
│   ├── pages/
│   │   ├── _asociate.scss
│   │   ├── _contacto.scss
│   │   ├── _entradas.scss
│   │   ├── _fixture.scss
│   │   ├── _trabaja.scss
│   │   └── _abonos.scss
│   │
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
├── .gitignore
└── README.md
```

## Git y control de versiones

El proyecto utiliza **Git** para el control de versiones y **GitHub** para almacenar el repositorio.

Los cambios se organizan mediante commits descriptivos para mantener un historial claro del desarrollo del proyecto.

## Autor

**Julian Agustín Gomez**
