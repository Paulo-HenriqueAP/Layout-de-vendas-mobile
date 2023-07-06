let nomeItem = document.getElementById("nomeItem");
let quant_naTela = document.getElementById("quantidade");
let botaoPagar = document.getElementById("pagar_total");
let item_na_TELA = document.getElementById("itemNaTela");
let mostrarPreco = document.getElementById("preco");
let quantCarrinhoTela = document.getElementById("todos");
let contarCarrinho = 0;
let valorTotal = 0;
let editarCarriinho = document.getElementById("editar")
let cancelarTudo = document.getElementById("cancelar")
let off = false

let unidades = [
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
    { it: 0, icone: "src/icones_ITENS/i (1).png", valorItem: 400, nomeItem: "CONTROLE MODERNO", unidades: 0 },
    { it: 1, icone: "src/icones_ITENS/i (2).png", valorItem: 30, nomeItem: "LIVRO", unidades: 0 },
    { it: 2, icone: "src/icones_ITENS/i (3).png", valorItem: 50, nomeItem: "PEN DRIVE", unidades: 0 },
    { it: 3, icone: "src/icones_ITENS/i (4).png", valorItem: 0, nomeItem: "TEMPO", unidades: 0, msg: "y", msG1: "NÃO SE COMPRA", msG2: "TOME DECISOES RUINS" },
    { it: 4, icone: "src/icones_ITENS/i (5).png", valorItem: 25, nomeItem: "CINEMA", unidades: 0 },
    { it: 5, icone: "src/icones_ITENS/i (6).png", valorItem: 0, nomeItem: "MALWARE", unidades: 0, msg: "y", msG1: "Adicone mais.  É gratis!!", msG2: "NÃO." },
    { it: 6, icone: "src/icones_ITENS/i (7).png", valorItem: 20, nomeItem: "DVD", unidades: 0 },
    { it: 7, icone: "src/icones_ITENS/i (8).png", valorItem: 51, nomeItem: "?", unidades: 0 },
    { it: 8, icone: "src/icones_ITENS/i (9).png", valorItem: 1, nomeItem: "DOAÇÃO", unidades: 0 },
    { it: 9, icone: "src/icones_ITENS/i (10).png", valorItem: 60, nomeItem: "DESENHO", unidades: 0 },
    { it: 10, icone: "src/icones_ITENS/i (11).png", valorItem: 5, nomeItem: "IMPRIMIR FOTO", unidades: 0 },
    { it: 11, icone: "src/icones_ITENS/i (12).png", valorItem: 3, nomeItem: "JORNAL", unidades: 0 },
    { it: 12, icone: "src/icones_ITENS/i (13).png", valorItem: 8, nomeItem: "FOTO NA HORA", unidades: 0 },
    { it: 13, icone: "src/icones_ITENS/i (14).png", valorItem: 2.5, nomeItem: "MÚSICA", unidades: 0 },
    { it: 14, icone: "src/icones_ITENS/i (15).png", valorItem: 1000, nomeItem: "ARTE", unidades: 0 },
    { it: 15, icone: "src/icones_ITENS/i (16).png", valorItem: 0.5, nomeItem: "OVO", unidades: 0 },
    { it: 16, icone: "src/icones_ITENS/i (17).png", valorItem: 200, nomeItem: "MINI GAME", unidades: 0 },
    { it: 17, icone: "src/icones_ITENS/i (18).png", valorItem: 120, nomeItem: "CONTROLE SIMPLIFICADO", unidades: 0 },
    { it: 18, icone: "src/icones_ITENS/i (19).png", valorItem: 20, nomeItem: "POÇÃO", unidades: 0 },
    { it: 19, icone: "src/icones_ITENS/i (20).png", valorItem: 600, nomeItem: "SALTO DE PARAQUEDAS", unidades: 0 },
    { it: 20, icone: "src/icones_ITENS/i (21).png", valorItem: 15, nomeItem: "PLUG ANALista DE SISTEMAS", unidades: 0, msg: "y", msG1: "INDISPONÍVEL. ( ͡° ͜ʖ ͡°)", msG2: "CUSTA 15" },
    { it: 21, icone: "src/icones_ITENS/i (22).png", valorItem: 9, nomeItem: "UVA", unidades: 0 },
    { it: 22, icone: "src/icones_ITENS/i (23).png", valorItem: 40, nomeItem: "ALICATE", unidades: 0 },
    { it: 23, icone: "src/icones_ITENS/i (24).png", valorItem: 2, nomeItem: "SOCO NA CARA", unidades: 0 },
    { it: 24, icone: "src/icones_ITENS/i (25).png", valorItem: 55, nomeItem: "BOLA DE FUTEBOL", unidades: 0 },
    { it: 25, icone: "src/icones_ITENS/i (26).png", valorItem: 250, nomeItem: "ROBÔ 1.0", unidades: 0 },
    { it: 26, icone: "src/icones_ITENS/i (27).png", valorItem: 7, nomeItem: "UMA FATIA DE PIZZA", unidades: 0 },
    { it: 27, icone: "src/icones_ITENS/i (28).png", valorItem: 0, nomeItem: "ESSE CARA", unidades: 0, msg: "y", msG1: "É ILEGAL FAZER ISSO", msG2: "CUSTA R$ 0" },
    { it: 28, icone: "src/icones_ITENS/i (29).png", valorItem: 170, nomeItem: "MACHADO", unidades: 0 },
    { it: 29, icone: "src/icones_ITENS/i (30).png", valorItem: 2.50, nomeItem: "CAFÉ", unidades: 0 },
    { it: 30, icone: "src/icones_ITENS/i (31).png", valorItem: 10, nomeItem: "TRENA", unidades: 0 },
    { it: 31, icone: "src/icones_ITENS/i (32).png", valorItem: 8, nomeItem: "PIPOCA", unidades: 0 },
    { it: 32, icone: "src/icones_ITENS/i (33).png", valorItem: 90, nomeItem: "BOLA DE BASQUETE", unidades: 0 },
    { it: 33, icone: "src/icones_ITENS/i (34).png", valorItem: 550, nomeItem: "ROBÔ 2.0", unidades: 0 },
    { it: 34, icone: "src/icones_ITENS/i (35).png", valorItem: 16, nomeItem: "HAMBÚRGUER", unidades: 0 },

];

function virus() {
    random = (Math.floor(Math.random() * 34));
    item_na_TELA.setAttribute("src", itens[random] = "")
    mostrarPreco.textContent = "Isso mesmo, adicone mais.  É gratis!!"
    off = true
    atualizar()
}

it = (Math.floor(Math.random() * 34));

function atualizar() {
    nomeItem.textContent = itens[it].nomeItem
    mostrarPreco.textContent = "CUSTA R$ " + itens[it].valorItem
    item_na_TELA.setAttribute("src", itens[it].icone)
    botaoPagar.textContent = "PAGAR R$ " + valorTotal
    quantCarrinhoTela.textContent = "🛒" + contarCarrinho
    if (unidades[it] != 0) {
        quant_naTela.textContent = unidades[it]
    } else
        quant_naTela.textContent = ""

    switch (it) {
        case 7:
            nomeItem.classList.add("animacaoAlien")
            removerAnimacao()
            break;
        case 19:
            nomeItem.classList.add("animacaoParaquedas")
            removerAnimacao()
            break;
    }
}

function removerAnimacao() {
    setTimeout(function () {
        nomeItem.classList.remove("animacaoParaquedas")
        nomeItem.classList.remove("animacaoAlien")
    }, 2100)
}


function it_anterior() {
    switch (it) {
        case 0:
            it = 34
            break;
        default:
            it--
            break;
    }
    atualizar()
}

function proximo_it() {
    switch (it) {
        case 34:
            it = 0
            break
        default:
            it++
            break
    }

    atualizar()
}

function adicionar() {
    switch (it) {
        case 5:
            unidades[it] += 1
            contarCarrinho++
            virus()
            break;

        case 23:
            item_na_TELA.setAttribute("src", "src/icones_ITENS/socoA.gif")

            setTimeout(function () {
                item_na_TELA.setAttribute("src", "src/icones_ITENS/soco1.png")
            }, 1400)
            return;
    }

    if (itens[it].msg === "y") {
        mostrarPreco.textContent = itens[it].msG1;
        return;
    }

    unidades[it] += 1
    valorTotal += itens[it].valorItem
    contarCarrinho++
    atualizar()
}

function remover() {
    if (itens[it].msg === "y") {
        mostrarPreco.textContent = itens[it].msG2
        return;
    }

    switch (unidades[it]) {
        case 0:
            return
        default:
            contarCarrinho--
            valorTotal -= itens[it].valorItem
            unidades[it] -= 1
            atualizar()
    }
}

function BotaoPagar() {

    switch (contarCarrinho) {
        case 0:
            return;
    }

    tela1.classList.toggle("opacity")
    quantCarrinhoTela.textContent = "🐢- CARREGANDO | 🛒=" + contarCarrinho
    quantCarrinhoTela.classList.add("avancarPagamento")
    nomeItem.classList.add("opacity")

    setTimeout(function () {
        tela1.classList.add("hidden")
        tela2.classList.remove("hidden")
        nomeItem.classList.remove("opacity")
        quantCarrinhoTela.classList.remove("avancarPagamento")
        quantCarrinhoTela.textContent = "🛒" + contarCarrinho
        quantCarrinhoTela.classList.add("topoTela")
        nomeItem.textContent = "VOU PAGAR R$ " + valorTotal + " USANDO:"
        if (off === true) {
            document.getElementById("credito").classList.add("opacity")
            document.getElementById("debito").classList.add("opacity")
            editarCarriinho.classList.add("opacity")
            nomeItem.textContent = "MALWARE DETECTADO ❌ NECESSÁRIO CANCELAR"
        }
    }, 4000)

}

editarCarriinho.addEventListener("mousedown", () => {
    tela1.classList.remove("hidden")
    tela2.classList.add("hidden")
    tela1.classList.remove("opacity")
    quantCarrinhoTela.classList.remove("topoTela")
    cancelarTudo.textContent = "CANCELAR TUDO"
    atualizar()
})

function confirmarCancelamento() {
    cancelarTudo.textContent = "CONFIRMAR CANCELAMENTO"
}

cancelarTudo.addEventListener("mousedown", function () {
    if (cancelarTudo.textContent === "CONFIRMAR CANCELAMENTO") {
        location.reload()
    }
})

function fc() {
    formaPagamento = "CRÉDITO"
    fim()
}

function fd() {
    formaPagamento = "DEBITO"
    fim()
}

function fim() {
    nomeItem.textContent = ". . . "
    tela2.classList.add("hidden")
    tela3.classList.remove("hidden")
    yn = (Math.floor(Math.random() * 2))
    quantCarrinhoTela.classList.add("hidden")
    document.getElementById("is").textContent = "Itens: " + contarCarrinho + " | " + " R$ " + valorTotal
    setTimeout(function () {
        if (yn === 1) {
            document.getElementById("final").textContent = "PAGAMENTO REPROVADO"
            document.getElementById("final").style = "color: #8a0303"
        } else {
            document.getElementById("final").style = "color: #007300;"
            document.getElementById("final").textContent = " PAGAMENTO APROVADO"
        }

        document.getElementById("fp").textContent = "Forma de pagamento > " + formaPagamento
        document.getElementById("hr").textContent = new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
        document.getElementById("di").textContent = "ID " + (Math.random() + contarCarrinho)
        //https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

    }, 3000)
    document.getElementById("final").addEventListener("dblclick", function () {
        location.reload()
    })
}

atualizar()