# Moonshiner

Los recomendados esenciales de la historia del rock, por Exequiel Fernández Montini.

## Estructura

```
index.html              página principal
assets/css/styles.css   estilos (incluye los de Swiper)
assets/js/data.js       artistas, descripciones y canciones
assets/js/banderas.js   banderas de cada país (SVG)
assets/js/app.js        buscador, páginas de artista, favoritos y reproductor
img/                    fotos de portada, una por artista
```

## Sumar un artista

1. Guardá la foto en `img/` con el nombre del artista en minúsculas y con guiones (por ejemplo `img/pink-floyd.jpg`).
2. En `assets/js/data.js`, agregá un objeto nuevo al arreglo `ARTISTAS` copiando la forma de uno existente, con `hero: 'img/pink-floyd.jpg'`.

## Ver el sitio

Abrí `index.html` en el navegador, o activá GitHub Pages en *Settings → Pages* eligiendo la rama `main` y la carpeta raíz.

Para imprimir el libro en A5, abrí la página en el navegador y usá Ctrl+P.
