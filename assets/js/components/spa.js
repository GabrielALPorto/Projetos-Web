// O GetElementsByClassName retorna uma lista com todos os filhos dessa classe!
let conteudoMain = document.querySelector(".main_container");
conteudoMain.innerHTML = `
        <div class="main" id="mainTitle"><h2>O Desmatamento no Brasil</h2></div>
        <div class="main" id="mainContainer">
            <div class="mainContainer__para" id="coluna-main1"><p>
    Nosso país abriga algumas das florestas mais biodiversas do planeta, mas assistimos diariamente à sua destruição silenciosa.
    O desmatamento avança a taxas alarmantes, consumindo o equivalente a mil campos de futebol por dia. Esta não é apenas uma perda de árvores, mas a erosão de um patrimônio natural insubstituível.<br>
    As consequências são profundas e interligadas: comunidades tradicionais perdem seus meios de subsistência, espécies únicas desaparecem antes mesmo de serem conhecidas pela ciência, e o equilíbrio climático é severamente afetado.
            </p></div>
            <div class="mainContainer__img"><img src="../assets/imagens/plantar_arvore_612x408.jpg" alt="Descrição da imagem" style="width:100%;max-width:500px;display:block;margin:20px auto" loading="lazy">
            </div>
        </div>

    <!-- Seção para explicar os benefícios do reflorestamente no Brasil--> 
        <!-- Título da seção de reflorestamento-->
        <section class="B1Container">
            <div class="B1Title">
                <h2>Benefícios do Reflorestamento no Brasil</h2>
            </div>
        </section>
        
        <!-- Texto informativo da seção de reflorestamento -->
        <div class="refloContainer"><p>
            <div class="refloContainer__para" id="idColunasB2">
                Restaurar nossas florestas é investir em um futuro mais equilibrado e sustentável.
                O reflorestamento constrói um futuro sustentável através de benefícios ambientais e sociais.
                As árvores regulam o clima, protegem o solo e recuperam a biodiversidade, enquanto geram novas 
                fontes de renda para comunidades locais. Cada área reflorestada avança o equilíbrio entre desenvolvimento 
                e conservação.
            </p>
            </div>
            <!-- Imagem dinâmica da seção de reflorestamento -->
            <div  class="refloContainer__img">
                <picture>
                    <source media="(min-width: 1024px)" srcset="../assets/imagens/a-tree-in-a-field-of-yellow-flowers_450_300.jpg">

                    <source media="(min-width: 900px)" srcset="../assets/imagens/plantar_arvore_612x408.jpg">

                    <source media="(min-width: 800px)" srcset="../assets/imagens/tree-trunk-texture.jpg">

                    <source media="(min-width: 758px)" srcset="../assets/imagens/autumn-in-new-york-city-background.jpg">

                    <source media="(min-width: 700px)" srcset="../assets/imagens/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg">

                    <source media="(min-width: 650px)" srcset="../assets/imagens/bela-paisagem-de-um-rio-cercado-por-muito-verde-em-uma-floresta.jpg">

                    <source media="(min-width: 600px)" srcset="../assets/imagens/conceito-de-viagens-sustentaveis.jpg">

                    <source media="(min-width: 550px)" srcset="../assets/imagens/cow-in-the-forest.jpg">

                    <source media="(min-width: 500px)" srcset="../assets/imagens/feche-foto-da-mao-segurando-o-plantio-da-muda-da-planta.jpg">

                    <source media="(min-width: 256px)" srcset="../assets/imagens/hiking-though-giants.jpg">

                    <img src="../assets/imagens/plantar_arvore_612x408.jpg" alt="Duas mãos no ato de plantar uma muda." loading="lazy">
                </picture>
            </div>
        </div>

        <!-- Seção para apresentar os projetos de reflorestamento -->
        <!-- Título dos projetos de reflorestamento -->
        <section class="projetosContainer">
            <h2>Nossos Projetos de Reflorestamento</h2>

        <!-- Container que possui os três projetos da ONG -->
            <div class="projetos__flex-box">
                <!-- Div do projeto "Raízes da Comunidade" -->
                <div class="projetos__elementoUm">
                    <a class="ref_content-box1" href="./projetos.html" target="_blank" rel="noopener noreferrer">
                    <h3> Raízes da Comunidade</h3>
                    <img src="../assets/imagens/raizes_da_comunidade_canvas.png" alt="Uma árvore metade seca e metade florida." loading="lazy"/></a>
                </div>

                <!-- Div do projeto "Corredores da Vida" -->
                <div class="projetos__elementoDois">
                    <a class="ref_content-box2" href="./projetos.html" target="_blank" rel="noopener noreferrer"> 
                    <h3> Corredores da Vida</h3>
                    <img src="../assets/imagens/corredores_da_vida1_canvas.png" alt="Uma floresta cortada por um corredor de vegatação rasteira." loading="lazy"/></a>
                </div>

                <!-- Div do projeto "Sementes do Saber" -->
                <div class="projetos__elementoTres">
                    <a class="ref_content-box3" href="./projetos.html" target="_blank" rel="noopener noreferrer">
                    <h3> Sementes do Saber</h3>
                    <img src="../assets/imagens/sementes_do_saber_canvas.png" alt="Uma criança segurando uma planta em uma floresta. Também há crianças no fundo interagindo com a floresta." loading="lazy"/></a>
                <div>
            </div>
        </section>
`;