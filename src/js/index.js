let nomeItem = document.getElementById("nomeItem");
let quant_naTela = document.getElementById("quantidade");
let botaoPagar = document.getElementById("pagar_total");
let item_na_TELA = document.getElementById("itemNaTela");
let mostrarPreco = document.getElementById("preco");
let quantCarrinhoTela = document.getElementById("todos");
let contarCarrinho = 0;
let valorTotal = 0;
let valorTotal_original = 0;
let valorItem = 0;
let valorTotalArredondado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
let editarCarrinho = document.getElementById("editar");
let cancelarTudo = document.getElementById("cancelar");
let off = false;
var luz = "OFF"
let desconto = 0
let add = 1
let unidades = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
];

//www.gnu.org/licenses/gpl-3.0.html
//www.iconarchive.com/
//icon-icons.com/pt/users/KiwiiDesign/icon-sets/
//https://www.reshot.com/free-svg-icons/business/
//https://www.iconarchive.com/artist/martin-berube.html

const itens = [
    { it: 0, icone: "src/icones_ITENS/i (1).png", valorItem: 399.90, nomeItem: "CONTROLE MODERNO", unidades: 0 },
    { it: 1, icone: "src/icones_ITENS/i (2).png", valorItem: 29.90, nomeItem: "LIVRO", unidades: 0 },
    { it: 2, icone: "src/icones_ITENS/i (3).png", valorItem: 50, nomeItem: "PEN DRIVE", unidades: 0 },
    { it: 3, icone: "src/icones_ITENS/i (4).png", valorItem: 0, nomeItem: "TEMPO", unidades: 0, msg: "y", msG1: "NÃO SE COMPRA", msG2: "TOME DECISOES RUINS" },
    { it: 4, icone: "src/icones_ITENS/i (5).png", valorItem: 26.99, nomeItem: "CINEMA", unidades: 0 },
    { it: 5, icone: "src/icones_ITENS/i (6).png", valorItem: 0, nomeItem: "MALWARE", unidades: 0, msg: "y", msG1: "Adicone mais.  É gratis!!", msG2: "NÃO." },
    { it: 6, icone: "src/icones_ITENS/i (7).png", valorItem: 22.80, nomeItem: "DVD", unidades: 0 },
    { it: 7, icone: "src/icones_ITENS/i (8).png", valorItem: 51, nomeItem: "?", unidades: 0 },
    { it: 8, icone: "src/icones_ITENS/i (9).png", valorItem: 0.2, nomeItem: "DOAÇÃO", unidades: 0 },
    { it: 9, icone: "src/icones_ITENS/i (10).png", valorItem: 62.45, nomeItem: "DESENHO", unidades: 0 },
    { it: 10, icone: "src/icones_ITENS/i (11).png", valorItem: 4.99, nomeItem: "IMPRIMIR FOTO", unidades: 0 },
    { it: 11, icone: "src/icones_ITENS/i (12).png", valorItem: 3.50, nomeItem: "JORNAL", unidades: 0 },
    { it: 12, icone: "src/icones_ITENS/i (13).png", valorItem: 7.99, nomeItem: "FOTO NA HORA", unidades: 0 },
    { it: 13, icone: "src/icones_ITENS/i (14).png", valorItem: 3.95, nomeItem: "MÚSICA", unidades: 0 },
    { it: 14, icone: "src/icones_ITENS/i (15).png", valorItem: 1000, nomeItem: "ARTE", unidades: 0 },
    { it: 15, icone: "src/icones_ITENS/i (16).png", valorItem: 0.35, nomeItem: "OVO BRANCO", unidades: 0 },
    { it: 16, icone: "src/icones_ITENS/i (17).png", valorItem: 149.90, nomeItem: "MINI GAME", unidades: 0 },
    { it: 17, icone: "src/icones_ITENS/i (18).png", valorItem: 118.99, nomeItem: "CONTROLE SIMPLIFICADO", unidades: 0 },
    { it: 18, icone: "src/icones_ITENS/i (19).png", valorItem: 19.95, nomeItem: "POÇÃO", unidades: 0 },
    { it: 19, icone: "src/icones_ITENS/i (20).png", valorItem: 634.99, nomeItem: "SALTO DE PARAQUEDAS", unidades: 0 },
    { it: 20, icone: "src/icones_ITENS/i (21).png", valorItem: 39.90, nomeItem: "PLUG ANALista DE SISTEMAS", unidades: 0, msg: "y", msG1: "INDISPONÍVEL. ( ͡° ͜ʖ ͡°)", msG2: "TÁ PRESO AÍ?" },
    { it: 21, icone: "src/icones_ITENS/i (22).png", valorItem: 9.90, nomeItem: "CACHO DE UVAS", unidades: 0 },
    { it: 22, icone: "src/icones_ITENS/i (23).png", valorItem: 39.90, nomeItem: "ALICATE", unidades: 0 },
    { it: 23, icone: "src/icones_ITENS/i (24).png", valorItem: 0, nomeItem: "SOCO NA CARA", unidades: 0 },
    { it: 24, icone: "src/icones_ITENS/i (25).png", valorItem: 57.98, nomeItem: "BOLA DE FUTEBOL", unidades: 0 },
    { it: 25, icone: "src/icones_ITENS/i (26).png", valorItem: 249.80, nomeItem: "ROBÔ 1.0", unidades: 0 },
    { it: 26, icone: "src/icones_ITENS/i (27).png", valorItem: 6.99, nomeItem: "UMA FATIA DE PIZZA", unidades: 0 },
    { it: 27, icone: "src/icones_ITENS/i (28).png", valorItem: 0, nomeItem: "ESSE CARA", unidades: 0, msg: "y", msG1: "É ILEGAL FAZER ISSO", msG2: "GRATUITO" },
    { it: 28, icone: "src/icones_ITENS/i (29).png", valorItem: 168.50, nomeItem: "MACHADO", unidades: 0 },
    { it: 29, icone: "src/icones_ITENS/i (30).png", valorItem: 2.50, nomeItem: "CAFÉ", unidades: 0 },
    { it: 30, icone: "src/icones_ITENS/i (31).png", valorItem: 9.99, nomeItem: "TRENA", unidades: 0 },
    { it: 31, icone: "src/icones_ITENS/i (32).png", valorItem: 7.98, nomeItem: "PIPOCA", unidades: 0 },
    { it: 32, icone: "src/icones_ITENS/i (33).png", valorItem: 89.90, nomeItem: "BOLA DE BASQUETE", unidades: 0 },
    { it: 33, icone: "src/icones_ITENS/i (34).png", valorItem: 590.98, nomeItem: "ROBÔ 2.0", unidades: 0 },
    { it: 34, icone: "src/icones_ITENS/i (35).png", valorItem: 16.70, nomeItem: "HAMBÚRGUER", unidades: 0 },
    { it: 35, icone: "src/icones_ITENS/i (36).png", valorItem: 9, nomeItem: "PINGUIM KENNY", unidades: 0 },
    { it: 36, icone: "src/icones_ITENS/i (37).png", valorItem: 354.90, nomeItem: "HEADPHONE", unidades: 0 },
    { it: 37, icone: "src/icones_ITENS/i (38).png", valorItem: 0, nomeItem: "LUZ OFF/ ON", unidades: 0},
    { it: 38, icone: "src/icones_ITENS/i (39).png", valorItem: 10, nomeItem: "CAVEIRA", unidades: 0 },
    { it: 39, icone: "src/icones_ITENS/i (40).png", valorItem: 45.90, nomeItem: "QUEIJO", unidades: 0 },
    { it: 40, icone: "src/icones_ITENS/i (41).png", valorItem: 13.99, nomeItem: "TOMATE", unidades: 0 },
    { it: 41, icone: "src/icones_ITENS/i (42).png", valorItem: 100, nomeItem: "PINGUIM DO MAL", unidades: 0 },
    { it: 42, icone: "src/icones_ITENS/i (43).png", valorItem: 74.95, nomeItem: "MINECRAFT", unidades: 0 },
    { it: 43, icone: "src/icones_ITENS/i (44).png", valorItem: 0.35, nomeItem: "OVO MARROM", unidades: 0 },
    { it: 44, icone: "src/icones_ITENS/i (45).png", valorItem: 44.63, nomeItem: "PISTOLA DE COLA", unidades: 0 },
    { it: 45, icone: "src/icones_ITENS/i (46).png", valorItem: 25, nomeItem: "CORTAR CABELO", unidades: 0 },
    { it: 46, icone: "src/icones_ITENS/i (47).png", valorItem: 45.85, nomeItem: "CONTROLE RETRÔ", unidades: 0 },
    { it: 47, icone: "src/icones_ITENS/i (48).png", valorItem: 14.40, nomeItem: "RATO", unidades: 0 },
    { it: 48, icone: "src/icones_ITENS/i (49).png", valorItem: 0, nomeItem: "AMOR", unidades: 0, msg: "y", msG1: "VOCÊ NÃO ESTÁ MERECENDO!", msG2: "COM PRAZER <3" },
    { it: 49, icone: "src/icones_ITENS/i (50).png", valorItem: 899.90, nomeItem: "CONSOLE PORTÁTIL", unidades: 0 },
];

function virus() {
    random = (Math.floor(Math.random() * 49));
    item_na_TELA.setAttribute("src", itens[random] = "")
    mostrarPreco.textContent = "Isso mesmo, adicone mais.  É gratis!!"
    off = true
    atualizar()
};

it = (Math.floor(Math.random() * 49));

function atualizar() {
    impar_par = (Math.floor(Math.random() * 999))
    nomeItem.classList.remove("animacaoParaquedas")
    nomeItem.classList.remove("animacaoAlien")

    item_na_TELA.setAttribute("src", itens[it].icone)

    if (it === 37 && luz === "OFF") {
        document.body.classList.remove("temaDark")
        item_na_TELA.setAttribute("src", "src/icones_ITENS/i (38).png")
    } else if (it === 37 && luz === "ON") {
        document.body.classList.add("temaDark")
        item_na_TELA.setAttribute("src", "src/icones_ITENS/i (38-2).png")
    }

    quantCarrinhoTela.textContent = "🛒" + contarCarrinho
    valorTotalArredondado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    botaoPagar.textContent = "PAGAR " + valorTotalArredondado

    if (unidades[it] != 0) {
        quant_naTela.textContent = unidades[it]
    } else {
        quant_naTela.textContent = ""
    }

    setTimeout(function () {
        nomeItem.textContent = itens[it].nomeItem
        let valorItem_arredondado = itens[it].valorItem.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
        mostrarPreco.textContent = "CUSTA " + valorItem_arredondado

        switch (it) {
            case 7:
                nomeItem.classList.add("animacaoAlien")
                break;
            case 19:
                nomeItem.classList.add("animacaoParaquedas")
                break;
        }

        if (itens[it].valorItem === 0) {
            mostrarPreco.textContent = "GRATUITO"
        }

    }, 500)
};


function it_anterior() {
    document.getElementById("unidadesPers").value = ""
    add = 1
    document.getElementById("remover").textContent = "Remover 1"
    document.getElementById("adicionar").textContent = "Adicionar 1"
    nomeItem.textContent = "..."
    mostrarPreco.textContent = "..."
    switch (it) {
        case 0:
            it = 49
            break;
        default:
            it--
            break;
    }
    atualizar()
};

function proximo_it() {
    document.getElementById("unidadesPers").value = ""
    add = 1
    document.getElementById("remover").textContent = "Remover 1"
    document.getElementById("adicionar").textContent = "Adicionar 1"
    nomeItem.textContent = "..."
    mostrarPreco.textContent = "..."
    switch (it) {
        case 49:
            it = 0
            break
        default:
            it++
            break
    }

    atualizar()
};

function quantP() {
    quantidadeP = document.getElementById("unidadesPers").value

    if (quantidadeP <= 0 || quantidadeP > 999) {
        quantidadeP = 1
        document.getElementById("unidadesPers").value = ""
    }
    
    document.getElementById("remover").textContent = "Remover " + quantidadeP
    document.getElementById("adicionar").textContent = "Adicionar " + quantidadeP
    add = parseInt(quantidadeP)
}

function adicionar() {
    switch (it) {
        case 5:
            unidades[it] += 1
            contarCarrinho++
            virus()
            break;

        case 37:
            luz = "ON"
            atualizar()
            break;

        case 23:
            item_na_TELA.setAttribute("src", "src/icones_ITENS/socoA.gif")
            setTimeout(function () {
                if (it === 23) {
                    item_na_TELA.setAttribute("src", "src/icones_ITENS/i (24).png")
                }
            }, 1400)
            return

            default:
                unidades[it] += add
                valorTotal += itens[it].valorItem * add
                contarCarrinho += add
                atualizar()
    }

    if (itens[it].msg === "y") {
        mostrarPreco.textContent = itens[it].msG1;
        return;
    }
};

function remover() {
    switch (it) {
        case 37:
            luz = "OFF"
            atualizar()
            break;
    }

    if (itens[it].msg === "y") {
        mostrarPreco.textContent = itens[it].msG2;
        return;
    }

    if (unidades[it] <= 0) {
        return;
    }
    
    switch (true) {
        case unidades[it] < add:
            const tirar = unidades[it];
            unidades[it] = 0;
            valorTotal -= itens[it].valorItem * tirar;
            contarCarrinho -= tirar;
            atualizar();
            break;
        case unidades[it] >= add:
            unidades[it] -= add;
            valorTotal -= itens[it].valorItem * add;
            contarCarrinho -= add;
            atualizar();
            break;
    }
};

function BotaoPagar() {
    switch (contarCarrinho) {
        case 0:
            return;
    };

    tela1.classList.toggle("opacity")
    quantCarrinhoTela.textContent = "🐢- CARREGANDO | 🛒= " + contarCarrinho
    quantCarrinhoTela.classList.add("avancarPagamento")
    nomeItem.classList.add("opacity")

    setTimeout(function () {
        tela1.classList.add("hidden")
        tela2.classList.remove("hidden")
        nomeItem.classList.remove("opacity")
        quantCarrinhoTela.classList.remove("avancarPagamento")
        quantCarrinhoTela.textContent = "🛒" + contarCarrinho
        quantCarrinhoTela.classList.add("topoTela")
        nomeItem.textContent = "VOU PAGAR " + valorTotalArredondado + " USANDO:"
        if (off === true) {
            document.getElementById("credito").classList.add("opacity")
            document.getElementById("debito").classList.add("opacity")
            document.getElementById("desconto").classList.add("opacity")
            editarCarrinho.classList.add("opacity")
            nomeItem.textContent = "MALWARE DETECTADO ❌ NECESSÁRIO CANCELAR"
        }
    }, 4000)

};

editarCarrinho.addEventListener("mousedown", () => {
    tela1.classList.remove("hidden")
    tela2.classList.add("hidden")
    tela1.classList.remove("opacity")
    quantCarrinhoTela.classList.remove("topoTela")
    cancelarTudo.textContent = "CANCELAR TUDO"

    if (desconto > 0) {
        alert("Desconto já aplicado e não sofrerá alterações.")
    }

    atualizar()
});

function confirmarCancelamento() {
    cancelarTudo.textContent = "CONFIRMAR CANCELAMENTO"
};

cancelarTudo.addEventListener("mousedown", function () {
    if (cancelarTudo.textContent === "CONFIRMAR CANCELAMENTO") {
        location.reload()
    }
});

document.getElementById("desconto").addEventListener("click", function () {
    cancelarTudo.classList.add("hidden")
    editarCarrinho.classList.add("hidden")
    document.getElementById("impar").classList.remove("hidden")
    document.getElementById("par").classList.remove("hidden")
    document.getElementById("desconto").textContent = "↶ Escolha corretamente ↷"
});

document.getElementById("par").addEventListener("click", function () {
    escolha = "par"
    imparOUpar()
});

document.getElementById("impar").addEventListener("click", function () {
    escolha = "impar"
    imparOUpar()
});

function imparOUpar() {
    cancelarTudo.classList.remove("hidden")
    editarCarrinho.classList.remove("hidden")
    document.getElementById("impar").classList.add("hidden")
    document.getElementById("par").classList.add("hidden")

    if (impar_par % 2 === 0) {
        foi = "PAR"
    } else {
        foi = "IMPAR"
    }

    if (impar_par % 2 === 0 && escolha === "par") {
        document.getElementById("desconto").textContent = "Você GANHOU desconto! - " + foi;

    } else if (impar_par % 2 !== 0 && escolha === "impar") {
        document.getElementById("desconto").textContent = "Você GANHOU desconto! - " + foi;

    } else {
        document.getElementById("desconto").textContent = "Você NAÕ ganhou desconto - " + foi;
        document.getElementById("desconto").style = "color: #8a0303;"
        document.getElementById("desconto").classList.add("opacity");
        return;
    }

    document.getElementById("desconto").style = "color: #007300;"
    desconto = 0.1 * contarCarrinho
    document.getElementById("desconto").classList.add("opacity");
    valorTotal -= desconto;
    valorTotalArredondado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    nomeItem.textContent = "VOU PAGAR " + valorTotalArredondado + " USANDO:";
};

function fc() {
    formaPagamento = "CRÉDITO"
    stt = "A fatura de " + valorTotalArredondado + " vai chegar"
    fim()
};

function fd() {
    formaPagamento = "DEBITO"
    stt = "Pagamento de " + valorTotalArredondado + " concluído"
    fim()
};

function fim() {
    valorTotal_original = valorTotal + desconto
    nomeItem.textContent = ". . . "
    tela2.classList.add("hidden")
    tela3.classList.remove("hidden")
    yn = (Math.floor(Math.random() * 2))
    quantCarrinhoTela.classList.add("hidden")
    document.getElementById("is").textContent = "Itens: " + contarCarrinho + " | " + valorTotal_original.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    setTimeout(function () {
        if (yn === 1) {
            document.getElementById("final").textContent = "PAGAMENTO REPROVADO"
            document.getElementById("final").style = "color: #8a0303;"
            stt = "CANCELADO!"
        } else {
            document.getElementById("final").style = "color: #007300;"
            document.getElementById("final").textContent = "PAGAMENTO APROVADO"
        }

        document.getElementById("st").textContent = "Status: " + stt
        document.getElementById("fp").textContent = "Forma de pagamento > " + formaPagamento
        document.getElementById("hr").textContent = new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
        document.getElementById("di").textContent = "ID: " + (Math.random() + contarCarrinho)
        document.getElementById("ds").textContent = "Desconto > " + desconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        //https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

    }, 3000)

    document.getElementById("final").addEventListener("dblclick", function () {
        location.reload()
    })
};

atualizar();