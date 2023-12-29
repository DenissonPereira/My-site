const corPreta = document.getElementById('quem_sou_eu');
const textoPreto = document.getElementById('h2_quem');

const navCor = document.getElementById('nav');

const corProjetos = document.getElementById('projetos');
const textoProjetos = document.getElementById('h2_projetos');

const lua = document.getElementById('lua');
const sol = document.getElementById('sol');



function acender() {

    corPreta.style.backgroundColor = 'white';
    textoPreto.style.color = 'black';

    navCor.classList.remove("bg-dark");
    navCor.classList.add("bg-secondary");

    corProjetos.style.backgroundColor = 'white';
    textoProjetos.style.color = 'black';

    sol.style.textShadow = '2px 2px 8px red';
    lua.style.textShadow = 'none';

};

function escurecer() {

    corPreta.style.backgroundColor = 'black';
    textoPreto.style.color = 'white';

    navCor.classList.remove("bg-secondary");
    navCor.classList.add("bg-dark");

    corProjetos.style.backgroundColor = 'rgb(27, 25, 25)';
    textoProjetos.style.color = 'white';

    sol.style.textShadow = 'none';
    lua.style.textShadow = '2px 2px 8px white';

};

const textoHome = document.getElementById('texto_home');
const textoSobre = document.getElementById('texto_sobre');
const textoProjeto = document.getElementById('texto_projetos');
const textoContato = document.getElementById('texto_contato');
const meuNome = document.getElementById('h3_meu_nome');
const textoQuemSouEu = document.getElementById('texto_quem_sou_eu');
const textoRedes = document.getElementById('texto_redes_sociais');

const bandeiraBrasil = document.getElementById('pt');
const bandeiraEstados = document.getElementById('ig');

function pt() {

    textoHome.textContent = 'INÍCIO';
    textoSobre.textContent = 'SOBRE';
    textoProjeto.textContent = 'PROJETOS';
    textoContato.textContent = 'CONTATO';
    meuNome.textContent = 'Desenvolvedor Full Stack';

    textoPreto.textContent = 'Quem sou eu';

    textoQuemSouEu.textContent = 'Sou um estudante dedicado do curso de Bacharel em Engenharia de Software com uma paixão por tecnologia e programação. Além disso, estou atualmente cursando meu doutorado (PhD) em Física, buscando expandir meu conhecimento e contribuir para avanços na área. Ao longo dos últimos dois anos, tenho atuado como freelancer, o que me deu a oportunidade de aplicar o que aprendi em uma variedade de projetos desafiadores. Minhas especialidades abrangem tecnologias como React, HTML, CSS, JavaScript, Python e Java. Estou motivado pela curiosidade de explorar a interseção entre ciência e tecnologia, e estou comprometido em fornecer soluções de alta qualidade em cada desafio que enfrento.';

    textoProjetos.textContent = 'Principais Projetos';

    textoRedes.textContent = 'Acompanhe meu trabalho nas redes sociais';

    bandeiraBrasil.style.textShadow = '2px 2px 8px orange';
    bandeiraEstados.style.textShadow = 'none';

};

function ig() {

    textoHome.textContent = 'HOME';
    textoSobre.textContent = 'ABOUT';
    textoProjeto.textContent = 'PROJECTS';
    textoContato.textContent = 'CONTACT';    
    meuNome.textContent = 'Full Stack Developer';

    textoPreto.textContent = 'About me';

    textoQuemSouEu.textContent = 'I am a dedicated student pursuing a Bachelors degree in Software Engineering with a passion for technology and programming. Additionally, I am currently pursuing my Ph.D. in Physics, aiming to expand my knowledge and contribute to advancements in the field. Over the past two years, I have been working as a freelancer, which has provided me with the opportunity to apply what I have learned in a variety of challenging projects. My expertise spans technologies such as React, HTML, CSS, JavaScript, Python, and Java. I am driven by the curiosity to explore the intersection between science and technology, and I am committed to delivering high-quality solutions in every challenge I undertake.';

    textoProjetos.textContent = 'Main Projects';

    textoRedes.textContent = 'Follow my work on social networks';

    bandeiraEstados.style.textShadow = '2px 2px 8px orange';
    bandeiraBrasil.style.textShadow = 'none';

};