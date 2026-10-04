# Portafolio de Juan Camilo P. (JCamilo__)

Sitio web de una sola página hecho con **HTML5, CSS y JavaScript nativo**. Sin instalaciones ni "build": es la forma más simple de publicar.

## Probarlo en tu computador
Abre `index.html` con doble clic. Listo.

## Publicarlo (elige una)

### Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a vercel.com → **Add New → Project** → importa el repositorio.
3. Framework: **Other**. Deja todo vacío y pulsa **Deploy**.

### Netlify
- **Fácil:** entra a app.netlify.com/drop y arrastra la carpeta.
- **Con GitHub:** **Add new site → Import from Git**, elige el repositorio, "Publish directory" = `.` y **Deploy**.

Cada vez que hagas `git push`, ambos sitios se actualizan solos.

## Arquitectura (cómo está organizado)
| Archivo | Para qué sirve |
|---|---|
| `index.html` | El **contenido**: las secciones, escritas en español. |
| `styles.css` | La **apariencia**: colores, letras, distribución y animaciones. |
| `script.js` | El **comportamiento**: cambio de idioma y el sendero. |
| `vercel.json` / `netlify.toml` | Configuración mínima para cada plataforma. |

**Por qué HTML nativo:** es una página de una sola vista, carga muy rápido, no necesita herramientas extra y demuestra dominio de los fundamentos (HTML, CSS, JavaScript y Git).

## Componentes
- **Barra superior:** logo, enlaces y botón ES/EN.
- **Sendero (`.trail` + `.walker`):** una línea verde se dibuja y un punto dorado la recorre mientras haces scroll. Representa tus caminatas y tu avance.
- **Hero:** nombre con entrada animada, sol y colinas en SVG.
- **Sobre mí, Hobbies:** texto simple.
- **Línea de tiempo (`.tl`):** educación y experiencia en orden.
- **Tarjetas (`.card`):** proyectos; FAN DESK destaca con `.feat`.
- **Habilidades (`.skills`, `.soft`):** técnicas y blandas.
- **Contacto:** teléfono, correo y ciudad.

## Cómo editar
- **Textos:** cambia el español en `index.html` y el inglés en el objeto `EN` de `script.js` (misma clave `data-i18n`).
- **Colores:** variables al inicio de `styles.css`.
