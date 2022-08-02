var t0 = {
    nome: "Pain Gaming",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

var t1 = {
    nome: "Flamengo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

var t2 = {
    nome: "Vorax",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

var t3 = {
    nome: "Loud",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

var t4 = {
    nome: "Rensga",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

var t5 = {
    nome: "Cruzeiro",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}
var t6 = {
    nome: "Red Canids",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}
var t7 = {
    nome: "Kabum",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}
var t8 = {
    nome: "Intz",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}
var t9 = {
    nome: "Furia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
}

function calculaPontos(time) {
    var pontos = (time.vitorias * 3) + (time.empates * 1)
    return pontos
}

t0.pontos = calculaPontos(t0)
t1.pontos = calculaPontos(t1)
t2.pontos = calculaPontos(t2)
t3.pontos = calculaPontos(t3)
t4.pontos = calculaPontos(t4)
t5.pontos = calculaPontos(t5)
t6.pontos = calculaPontos(t6)
t7.pontos = calculaPontos(t7)
t8.pontos = calculaPontos(t8)
t9.pontos = calculaPontos(t9)

function exibirTimesNaTela(Times) {
    var html = ""
    for (var i = 0; i < times.length; i++) {
        html += "<tr><td>" + times[i].nome + "</td>"
        html += "<td>" + times[i].vitorias + "</td>"
        html += "<td>" + times[i].empates + "</td>"
        html += "<td>" + times[i].derrotas + "</td>"
        html += "<td>" + times[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    }

    var tabelaTimes = document.getElementById("tabelaTimes")
    tabelaTimes.innerHTML = html
}

function adicionarVitoria(i) {
    var time = times[i]
    time.vitorias++
        time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
}

function adicionarEmpate(i) {
    var time = times[i]
    time.empates++
        time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
}

function adicionarDerrota(i) {
    var time = times[i]
    time.derrotas++
        time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
}


var times = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9]

exibirTimesNaTela(times)