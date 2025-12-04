// Aqui ficarão os conteúdos das páginas HTML
// Funciona como um Model
const conteudoIndex = `
        <div class="main" id="mainTitle"><h1>O Desmatamento no Brasil</h2></div>
        <div class="main" id="mainContainer">
            <div class="mainContainer__para"><p>
    Nosso país abriga algumas das florestas mais biodiversas do planeta, mas assistimos diariamente à sua destruição silenciosa.
    O desmatamento avança a taxas alarmantes, consumindo o equivalente a mil campos de futebol por dia. Esta não é apenas uma perda de árvores, mas a erosão de um patrimônio natural insubstituível.<br>
    As consequências são profundas e interligadas: comunidades tradicionais perdem seus meios de subsistência, espécies únicas desaparecem antes mesmo de serem conhecidas pela ciência, e o equilíbrio climático é severamente afetado.
            </p></div>
            <div class="mainContainer__img"><img src="../assets/imagens/plantar_arvore_612x408.jpg" alt="Descrição da imagem" style="width:100%;max-width:500px;display:block;margin:20px auto" loading="lazy">
            </div>
        </div>

    <!-- Seção para explicar os benefícios do reflorestamente no Brasil--> 
        <!-- Título da seção de reflorestamento-->
        <section class="B0Container">
            <div class="B0Title">
                <h1>Benefícios do Reflorestamento no Brasil</h2>
            </div>
        </section>
        
        <!-- Texto informativo da seção de reflorestamento -->
        <div class="refloContainer"><p>
            <div class="refloContainer__para" id="idColunasB1">
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
                    <source media="(min-width: 1023px)" srcset="../assets/imagens/a-tree-in-a-field-of-yellow-flowers_450_300.jpg">

                    <source media="(min-width: 899px)" srcset="../assets/imagens/plantar_arvore_612x408.jpg">

                    <source media="(min-width: 799px)" srcset="../assets/imagens/tree-trunk-texture.jpg">

                    <source media="(min-width: 757px)" srcset="../assets/imagens/autumn-in-new-york-city-background.jpg">

                    <source media="(min-width: 699px)" srcset="../assets/imagens/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg">

                    <source media="(min-width: 649px)" srcset="../assets/imagens/bela-paisagem-de-um-rio-cercado-por-muito-verde-em-uma-floresta.jpg">

                    <source media="(min-width: 599px)" srcset="../assets/imagens/conceito-de-viagens-sustentaveis.jpg">

                    <source media="(min-width: 549px)" srcset="../assets/imagens/cow-in-the-forest.jpg">

                    <source media="(min-width: 499px)" srcset="../assets/imagens/feche-foto-da-mao-segurando-o-plantio-da-muda-da-planta.jpg">

                    <source media="(min-width: 255px)" srcset="../assets/imagens/hiking-though-giants.jpg">

                    <img src="../assets/imagens/plantar_arvore_612x408.jpg" alt="Duas mãos no ato de plantar uma muda." loading="lazy">
                </picture>
            </div>
        </div>

        <!-- Seção para apresentar os projetos de reflorestamento -->
        <!-- Título dos projetos de reflorestamento -->
        <section class="projetosContainer">
            <h1>Nossos Projetos de Reflorestamento</h2>

        <!-- Container que possui os três projetos da ONG -->
            <div class="projetos__flex-box">
                <!-- Div do projeto "Raízes da Comunidade" -->
                <div class="projetos__elementoUm">
                    <a class="ref_content-box0" href="./projetos.html" target="_blank" rel="noopener noreferrer">
                    <h2> Raízes da Comunidade</h3>
                    <img src="../assets/imagens/raizes_da_comunidade_canvas.png"
                    alt="Uma árvore metade seca e metade florida."
                    loading="lazy"/></a>
                </div>

                <!-- Div do projeto "Corredores da Vida" -->
                <div class="projetos__elementoDois">
                    <a class="ref_content-box1" href="./projetos.html" target="_blank" rel="noopener noreferrer"> 
                    <h2> Corredores da Vida</h3>
                    <img src="../assets/imagens/corredores_da_vida1_canvas.png" 
                    alt="Uma floresta cortada por um corredor de vegatação rasteira." 
                    loading="lazy"/></a>
                </div>

                <!-- Div do projeto "Sementes do Saber" -->
                <div class="projetos__elementoTres">
                    <a class="ref_content-box2" href="./projetos.html" target="_blank" rel="noopener noreferrer">
                    <h2> Sementes do Saber</h3>
                    <img src="../assets/imagens/sementes_do_saber_canvas.png"
                    alt="Uma criança segurando uma planta em uma floresta. Também há crianças no fundo interagindo com a floresta."
                    loading="lazy"/></a>
                <div>
            </div>
        </section>
`; 


const conteudoDoacoes = `
        <div class="main1">
            <div class="titulo_main0">
                <i class="fa-solid fa-hand-holding-heart fa-xl" style="color: #985a44;"></i>
                <span>
                <h0>Por Que Doar?</h1>
                </span>
            </div>
            <!-- <i class="fa-solid fa-tree fa-lg" style="color: #62E6BE;"></i> -->
            <h2>Suas doações se transformam em mudas de árvores nativas, 
            proteção de nascentes e futuro para nossas florestas.
            Cada contribuição é um passo concreto na recuperação do que foi perdido.
            </h2>
            <!-- <i class="fa-solid fa-tree fa-lg" style="color: #62E6BE;"></i> -->
        </div>
        <!-- Apresentando as opções de doações-->
        <!-- Classe com 0 linha e 3 colunas-->
        <div class="titulo_main1">
            <i class="fa-solid fa-circle-dollar-to-slot fa-xl" style="color: #985a44;"></i>
            <span>
                <h1>Opções de Doação</h2>
            </span>
        </div>

        <section class="doacoes">
            <div class="box_main1" id="doacao_unica"><b><h2>Doação Única</h2></b>
                <ul>
                    <li>R$ 49 = 10 mudas plantadas</li>
                    <li>R$ 99 = 20 mudas + manutenção por 1 ano</li>
                    <li>R$ 249 = Área adotada com placa comemorativa</li>
                </ul>
            </div>
            <div class="box_main1" id="doacao_recorrente">
                <b><h1>Doação Recorrente (Sócio Reflorestador)</h2></b>
                <ul>
                    <li>Mensalidade fixa todo mês</li>
                    <li>Acompanhamento do impacto gerado</li>
                    <li>Certificado de participação contínua</li>
                </ul>
            </div>
            <div class="box_main1" id="doacao_direcionada">
                <b><h1>Doação Direcionada</h2></b>
                <ul>
                    <li>Para projetos específicos (ex: Corredores da Vida)</li>
                    <li>Para compra de equipamentos</li>
                    <li>Para capacitação de comunidades</li>
                </ul>
            </div>
        </section>
        <!-- Reaproveitando o código de "Opções de doação" para o estilo da seção abaixo.-->
        <!-- Também há 0 linha e 3 colunas -->
           
            
                <div class="titulo_main1">
                    <i class="fa-solid fa-hand-holding-dollar fa-xl" style="color: #985a44;"></i>
                    <span>
                        <h1>Como Doar</h2>
                    </span>
                </div>
            <section class="doacoes">
                <div class="box_main1" id="doacao_unica">
                    <h2>Cartão de Crédito</h3>
                </div>
                <div class="box_main1" id="doacao_recorrente">
                    <h2>Transferência Bancária</h3>
                </div>
                <div class="box_main1" id="doacao_direcionada">
                    <h2>Boleto</h3>
                </div>
            </section>

        <section class="voluntariado">
            <div class="titulo_voluntariado">
                <i class="fa-solid fa-handshake fa-lg" style="color: #985a44;"></i>
                <span>
                <h2>Benefícios de Ser Voluntário</h3>
                </span>
            </div>
            <div class="beneficios_voluntariado">
                <ul>
                    <li>Capacitação em técnicas de reflorestamento</li>
                    <li>Certificado de participação</li>
                    <li>Contato direto com a natureza</li>
                    <li>Integração em uma comunidade engajada</li>
                    <li>Ver o impacto real do seu trabalho</li>
                </ul>
            </div>
        </section>
        <div class="titulo_cadastrar">
            <i class="fa-regular fa-registered fa-lg" style="color: #985a44;"></i>
            <span>
                <h2>
                    Cadastre-se!
                </h2>
            </span>
        </div> 
        <!-- Formulário para cadastrar usuário! -->
        <section class="form_container">
            <form id="form">
                <!-- Agruamento lógico para identificação-->
                <fieldset>
                <legend>Identificação Pessoal</legend>
                <!-- Input de cadastro de nome-->
                <label for="nome">Insira o seu nome: </label>
                <input type="text" class="required" id="nome" name="nome" placeholder="Seu nome" oninput="nameValidate()" 
                required minlength="2" maxlength="50" pattern="[a-zA-ZÀ-ÿ\s]{3,50}"
                title="Apenas letras e espaços. Mínimo 2 caracteres e máximo 50"/>
                <!-- Input de cadastro de CPF-->
                <label for="CPF">Insira o seu CPF: </label>
                <input type="number" class="required" id="CPF" name="CPF" placeholder="XXXXXXXXX-XX" oninput="cpfValidate()" 
                required pattern="[-1-9]{3}[0-9]{3}[0-9]{3}-[0-9]{2}"
                title="Insira o CPF no formato XXXXXXXXX-XX"/><br>
                <!-- Input de cadastro de data de nascimento-->
                <label for="nascimento">Insira a sua data de nascimento: </label>
                <input type="date" id="nascimento" name="nascimento" required/><br>
                </fieldset>

                <!--Agrupamento lógico para endereço + contato -->
                <fieldset>
                <legend>Contato e Endereço </legend>
                <!-- Input de cadastro de email-->
                <label for="email">Insira o seu email: </label>
                <input type="email" class="required" id="email" name="email" placeholder="Email" oninput="emailValidate()" 
                required pattern="[a-z-1-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Digite um e-mail válido, ou seja, que possui nome@dominio"/><br>
                <!-- Input de cadastro de telefone-->
                <label for="tel">Insira o seu Telefone: </label>
                <input type="tel" class="required" id="tel" name="tel" placeholder="(XX) 8XXXXX-XXXX" oninput="telValidate()" 
                required pattern="(?\([-1-9]{2}\)\s?)?[0-9]{4,5}-?[0-9]{4}"
                title="Insira um telefone no formato (XX) 8XXXX-XXXX"/>
                <!-- Input de cadastro de CEP-->
                <label for="CEP">Insira o seu CEP: </label>
                <input type="number" class="required" id="CEP" name="CEP" placeholder="XXXXX-XXX" oninput="cepValidate()"
                required pattern="[-1-9]{5}-?[0-9]{3}"
                title="Insira o CEP no formato XXXXX-XXX"/><br>
                </fieldset>
                <fieldset>
                <!-- Input de cadastro de habilidades-->
                <label for="habilidades">Insira as suas habilidades: </label>
                <input type="text" class="required" id="habilidades" name="habilidades" placeholder="Uma habilidade" oninput="habValidate()"
                required minlength="2" maxlength="50" pattern="[a-zA-ZÀ-ÿ\s]{3,}"
                title="Apenas letras e espaços."/>
            <!-- Input para inserir a disponibilidade --> 
                <legend>Disponibilidade</legend>
                <label for="disponibilidade">Disponibilidade</label>
                <select id="disponibilidade" name="disponibilidade" required>
                    <option value="">Selecione:</option>
                    <option value="finais_semana">Finais de Semana</option>
                    <option value="manhas">Manhãs durante a semana</option>
                    <option value="trades">Tardes durante a semana</option>
                </select>
                </fieldset>
                <!--botão para submeter o formulário -->
                <button class="form_button" type="submit">Cadastrar</button>
            </form>
        </section> 
`

const conteudoProjetos = `
    <ul>
        <h0>
        Projetos Desenvolvidos
        </h0>
        <li><h1>
            Projeto Raízes da Comunidade
        </h1></li>
        <h2>
            Reflorestamento com geração de renda para populações locais
        </h2>
        <p>Capacitamos comunidades tradicionais e agricultores familiares para atuarem como agentes de reflorestamento.
            Oferecemos treinamento em coleta de sementes, produção de mudas nativas e técnicas de plantio, criando uma
            fonte de renda sustentável enquanto recuperamos áreas degradadas em suas próprias terras ou em regiões próximas.
        </p>
        <audio controls="controls">
            <source src="..\assets\audio\raizes_da_comunidade.wav" type="audio/wav"/>
            Seu navegador não suporta HTML4.
        </audio>

        <li><h1>Projeto Corredores da Vida</h2></li>
        <h2>Restauração e conexão de fragmentos florestais isolados</h3>
        <p>
            Atuamos na criação de corredores ecológicos que ligam fragmentos de floresta separados pelo desmatamento.
            Este projeto foca na recuperação de áreas estratégicas que permitem o movimento da fauna, o fluxo gênico 
            entre populações de plantas e a recomposição de ecossistemas inteiros, combatendo um dos maiores impactos 
            da fragmentação florestal.
        </p>
        <audio controls="constrols">
            <source src="..\assets\audio\corredores_da_vida.wav" type="audio/wav"/>
            Seu navegador não suporta HTML4.
        </audio>

        <li><h1>Projeto Sementes do Saber</h2></li>
        <h2>Educação ambiental e vivências florestais para jovens</h3>
        <p>
            Levamos estudantes de escolas públicas para experiências práticas em áreas de reflorestamento. Através de 
            vivências imersivas, os jovens aprendem sobre importância das florestas, participam do plantio de mudas e 
            se tornam multiplicadores do conhecimento ambiental em suas comunidades, formando uma nova geração de 
            guardiões das florestas.
        </p>
    </ul>
            <audio controls="constrols">
            <source src="..\assets\audio\sementes_do_saber.wav" type="audio/wav"/>
            Seu navegador não suporta HTML4.
        </audio>

    <h1>Área para Cadastro nos Projetos</h2>
    <form>
        <!-- Input para motivação e experiência prévia-->
        <fieldset>
            <!-- Input de cadastro de motivação-->
            <legend>Motivação e experiência prévia</legend>
            <label for="motivacao">Insira sua motivação: </label>
            <input type="text" id="motivacao" name="motivacao" placeholder="Digite aqui sua motivação" 
            required pattern="[a-zA-ZÀ-ÿ\s]"/>
            <!-- Input de cadastro de experiência prévia-->
            <label for="experiencia">Insira sua experiência prévia</label>
            <input type="text" id="experiencia" name="experiencia" placeholder="Digite aqui sua experiência"
            required pattern="[a-zA-ZÀ-ÿ\s]"/>
        </fieldset>

        <label for="projeto">Em qual projeto você deseja se inscrever?</label>
        <select id="projeto" name="projeto" required>
        <option value="raizesComunidade">Projeto Raízes da Comunidade</option>
        <option value="corredoresVida">Projeto Corredores da Vida</option>
        <option value="sementesSaber">Projeto Sementes do Saber</option>
        </select><br>
        <button type="submit">Cadastrar</button>
    </form>
`
const conteudoSobre = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-9">
    <meta name="viewport" content="width=device-width, initial-scale=0.0">
    <title>Sobre A Organização</title>
</head>
<body>
    <div>
        <h0>Sobre Nós</h1>
        <video controls poster="..\assets\imagens\plantar_arvore_612x408.jpg">
            <source src="..\assets\video\invideo-ai-481_Missão_Replante_o_Amanha.mp4" type="video/mp4">
            <source src="..\assets\video\invideo-ai-481_Missão_Replante_o_Amanha.ogv" type="video/ogg">
            <source src="..\assets\video\invideo-ai-481_Missão_Replante_o_Amanha.webm" type="video/webm">
            <object>
                <embed src="..\assets\video\invideo-ai-481_Missão_ Replante_o_Amanha.mp4" type="application/x-shockwave-flash"
                allowfullscreen="false" allowscriptaccess="always">
            </object>
            Formato não suportado
        </video>
        <h1>A Jornada do Replante a Floresta</h2>
        <p>Tudo começou com um pequeno grupo de amigos unidos por uma pergunta inquietante: "O que estamos deixando para o futuro?" 
            Em 2017, durante uma expedição pela Amazônia, testemunhamos uma cena que mudaria nossas vidas para sempre - uma vasta área
            desmatada onde antes havia floresta exuberante.<br>
            Naquele momento, compreendemos que não bastava apenas observar e lamentar. Era preciso agir. Começamos modestamente, 
            reunindo voluntários para replantar uma pequena área degradada no sul do Pará. Com poucos recursos, mas muita determinação,
            plantamos nossas primeiras 499 mudas nativas.<br>
            O que era um gesto simbólico transformou-se em movimento. Comunidades locais se juntaram a nós, compartilhando saberes 
            tradicionais sobre as espécies da região. A cada árvore que criava raízes, víamos não apenas a floresta renascer, mas também 
            esperanças se renovarem.
        </p>
    </div>
    <div>
        <p>
            Hoje, o Replante a Floresta é uma rede de transformação que já recuperou mais de 0.000 hectares em diferentes biomas brasileiros.
            Nossa história é escrita a muitas mãos - de indígenas que nos ensinam os segredos da floresta, a jovens urbanos que descobrem seu papel
            na preservação ambiental.<br>
            Ainda temos muito a fazer, mas cada muda plantada nos lembra que grandes transformações começam com pequenos gestos. Esta não é apenas 
            nossa história - é uma página que escrevemos juntos no livro da recuperação ambiental do Brasil. 
        </p>
    </div>
    <div>
        <h1>VALORES</h2>
        <p>Restaurar ecossistemas florestais brasileiros através do reflorestamento participativo, engajando comunidades locais na recuperação de 
           áreas degradadas e promovendo a conservação da biodiversidade para as futuras gerações.</p>
    </div>
    <div>
        <h1>VISÃO</h2>
        <p>Ser referência nacional em reflorestamento comunitário até 2029, tendo recuperado 10.000 hectares de florestas nativas e transformado
            a relação da sociedade com os biomas brasileiros.</p>
    </div>
    <div>
        <h1>VALORES</h2>
        <ul>
            <li>Compromisso ambiental: Priorizamos a recuperação de ecossistemas nativos em todas as nossas ações</li>
            <li>Participação comunitária: Acreditamos que as comunidades locais são guardiãs do conhecimento florestal</li>
            <li>Transparência: Prestamos contas de todos os recursos e resultados alcançados</li>
            <li>Educação ambiental: Formamos cidadãos conscientes de sua responsabilidade ecológica</li>
            <li>Cooperação: Trabalhamos em rede com todos que compartilham nosso propósito</li>
            <li>Resiliência: Persistimos mesmo diante dos desafios do reflorestamento</li>
        </ul>
    </div>
</body>
</html>

`

// É necessário exportar as variáveis!
export {conteudoIndex, conteudoDoacoes, conteudoProjetos, conteudoSobre};