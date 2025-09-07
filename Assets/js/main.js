import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".crefisa",
  `
  Trabalho no desenvolvimento de soluções de automação para otimizar processos internos da empresa,
  utilizando Python e outras ferramentas. Minhas responsabilidades incluem a criação de integrações entre sistemas, 
  automação de tarefas repetitivas, e a melhoria na eficiência dos fluxos de trabalho,
  com o objetivo de reduzir erros humanos e aumentar a produtividade da equipe.
  `,
  "Desenvolvedor de Automação",
  "crefisa",
  "Out 2023 - Atualmente"
);

hoverChangeDescription(
  ".html",
  "HTML é a base sólida que dá estrutura às páginas web de forma eficiente."
);
hoverChangeDescription(
  ".css",
  "CSS é o segredo por trás de designs únicos e estilos cativantes na web."
);
hoverChangeDescription(
  ".javascript",
  "JavaScript é uma linguagem de programação essencial para o desenvolvimento web, permitindo criar interfaces dinâmicas, interativas e responsivas que melhoram a experiência do usuário."
);

hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação versátil e poderosa, amplamente utilizada para automação, análise de dados, inteligência artificial e desenvolvimento web, reconhecida por sua simplicidade e eficiência."
);
