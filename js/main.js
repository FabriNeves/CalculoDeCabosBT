const correnteProjeto = document.querySelector("#correnteDeProjeto");
const metodoInstalacao = document.querySelector("#selecaoMetodo");
const materialCondutorSelecionado = document.querySelector("#selecaoMaterial");
const isolacao = document.querySelector("#selecaoIsolacao");
const tipoDeinstalcao = document.querySelector(".tipoDeInstalacao");
let numeroCondutores = document.querySelector("#nCondutores");
const correcaoTempAmbiente = document.querySelector("#localInsta");
const correcaoTemp = document.querySelector("#correcaoTemp");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("button");

function testCalcular() {
    const a = correnteProjeto.value;
    const b = metodoInstalacao.value;
    const c = materialCondutorSelecionado.value;
    const d = isolacao.value;
    const e = numeroCondutores.value;

    const result = procuraCondutorCorrespondente(a,b,c,d,e);
    resultado.textContent = `${correnteProjeto.value}|${metodoInstalacao.value}|${materialCondutorSelecionado.value}|${isolacao.value}|${numeroCondutores.value}|${correcaoTempAmbiente.value}:${correcaoTemp.value}|${result}`;
}

botao.onclick = function () {
    testCalcular();
}

metodoInstalacao.onchange = function () {
    if (0 <= indiceMetodosA_D.indexOf(metodoInstalacao.value)) {
        tipoDeinstalcao.innerHTML = opcaoParaABCD;
        numeroCondutores = document.querySelector("#nCondutores");
    }
    if (metodoInstalacao.value === "E") {
        tipoDeinstalcao.innerHTML = opcaoParaE;
        numeroCondutores = document.querySelector("#nCondutores");
    }
    if (metodoInstalacao.value === "F") {
        tipoDeinstalcao.innerHTML = opcaoParaF;
        numeroCondutores = document.querySelector("#nCondutores");
    }
    if (metodoInstalacao.value === "G") {
        tipoDeinstalcao.innerHTML = opcaoParaG;
        numeroCondutores = document.querySelector("#nCondutores");
    }

}




