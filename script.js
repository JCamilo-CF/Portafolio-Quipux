/* 1) Traducciones: el HTML está en español; aquí solo va el inglés. */
const EN = {
 "nav-about":"About","nav-projects":"Projects","nav-contact":"Contact",
 "role":"Software Development student",
 "about-h":"About me",
 "about-1":"I love learning and getting hooked on things, doing them with drive and passion, and I don't give up even when things get hard. I want to improve every day and grow into a great person.",
 "about-2":"I know my potential and I want to contribute to the world every day: eager to live life fully, meet people and work to add value. I'm very human and cheerful, like the sun every morning :)",
 "path-h":"Education & experience",
 "tl1":"Second-best graduate of my class","tl2":"Leader of the FAN DESK research project","tl2s":"STEM prototype",
 "tl3":"Software Development technical program (in progress)",
 "proj-h":"Projects",
 "fan":"A silent biomimetic fan. Winner of EPM's STEM research seedbed and first place in Well-being, Environment & Community. I led the project.",
 "quipux":"Software Development research seedbed - Salazar y Herrera Scholarship competition.",
 "pascual":"Software & AI research seedbed at IU Pascual Bravo.",
 "biblio":"Virtual library from my technical high-school project.",
 "forge":"Indie team from my technical high-school program.",
 "tech-h":"Technical skills",
 "s-html":"Experienced","s-css":"Basic","s-js":"Basic","s-java":"Intermediate",
 "s-git":"Advanced: repositories & projects",
 "s-lead":"Project leadership","s-lead-d":"Team coordination and group work",
 "soft-h":"Soft skills",
 "b1":"Assertive communication","b2":"Patience and calm in complex situations",
 "b3":"Dialogue and diplomacy within teams","b4":"Empathy, reading of social dynamics and friendship",
 "b5":"Emotional support for people","b6":"Respect, responsibility and passion to contribute",
 "hob-h":"Beyond the code",
 "hob-1":"I dig deep into topics that catch my attention. It gave me critical thinking to spot errors and details in how things work, and to understand the how and the why.",
 "hob-2":"I walk and read in natural spaces, explore the city and enjoy the small details. I'm very detail-oriented.",
 "con-h":"Contact me and get to know much more about my"
};
const nodes = [...document.querySelectorAll("[data-i18n]")];
const ES = {};
nodes.forEach(n => ES[n.dataset.i18n] = n.textContent);   // guarda el español original
const btn = document.getElementById("lang");

function setLang(l){
  const dict = l === "en" ? EN : ES;
  nodes.forEach(n => n.textContent = dict[n.dataset.i18n]);
  document.documentElement.lang = l;
  btn.textContent = l === "en" ? "ES" : "EN";
  btn.setAttribute("aria-label", l === "en" ? "Cambiar a español" : "Switch to English");
  try { localStorage.setItem("lang", l); } catch {}
}
let lang = "es";
try { lang = localStorage.getItem("lang") || "es"; } catch {}
btn.onclick = () => { lang = lang === "es" ? "en" : "es"; setLang(lang); };
setLang(lang);

/* 2) Sendero: la línea verde se dibuja y el punto dorado "camina" con el scroll. */
const walk = document.querySelector(".walk"), dot = document.querySelector(".walker");
const len = walk.getTotalLength();
function draw(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(scrollY / max, 1) : 0;
  walk.style.strokeDashoffset = 1 - p;
  const pt = walk.getPointAtLength(p * len);
  dot.style.transform = `translate(${pt.x}px, ${pt.y * innerHeight / 600}px)`;
}
addEventListener("scroll", draw, { passive: true });
addEventListener("resize", draw);
draw();
