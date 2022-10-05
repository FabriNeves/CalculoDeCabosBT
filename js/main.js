
// Extrair variaveis do |HTML 
const correnteProjeto = document.querySelector("#correnteDeProjeto");
const metodoInstalacao = document.querySelector("#selecaoMetodo");
const materialCondutorSelecionado = document.querySelector("#selecaoMaterial");
const materialIsolacao = document.querySelector("#selecaoIsolacao");
const tipoDeinstalcao = document.querySelector(".tipoDeInstalacao");
let numeroCondutores = document.querySelector("#nCondutores");
const localInstalacaoAmb = document.querySelector("#localInsta");
const correcaoTemp = document.querySelector("#correcaoTemp");
const referenciaDeAgrupamentos = document.querySelector("#ReferenciasAgrupamentoCircuitos");
const NCicuitos = document.querySelector("#numeroDeCircuitos");
const botao = document.querySelector("#calcularGeral");
const resultado = document.querySelector(".resultado");

const tensaoNominal = document.querySelector("#tensaoNominal");
const comprimentoDoCircuito_ = document.querySelector("#comprimento_Circuito");
const diametro_Condutor_ = document.querySelector("#diametro_Condutor");
const distancia_Entre_Eixos_ = document.querySelector("#distancia_Entre_Eixos");
const cossenoPhi = document.querySelector("#cosPhi");
const _gmd = document.querySelector("#_gmd");
const botao3 = document.querySelector("#botao3");
const resultado3 = document.querySelector(".resultado3");


import { opcaoParaABCD, opcaoParaE, opcaoParaF, opcaoParaG } from "./html.js";
import { indiceMetodosA_D, indiceMetodosE_G, procuraCondutorCorrespondente } from "./tabelasMetodosABCEFG.js";
import { tabela_AgrupamentoDeCircuitos } from "./agrupamentoDeCircuitos.js"
import { correcaoDeTemperatura } from "./FatorTempTabelas.js";
import { MainFuncaoCalculoDeQueda, quedaDeTensaoPorcento } from "./funcoesDeQuedaDeTensao.js";
import { retornaDiametroDoCondutor } from "./diametroCondutor.js";

function calcularSecaoCabo(correnteProjeto) {
    // Variaveis para calcular seção do cabo 
    let a = correnteProjeto
    const b = metodoInstalacao.value;
    const c = materialCondutorSelecionado.value;
    const d = materialIsolacao.value;
    const e = numeroCondutores.value;

    // Aplicação da correção de temperatura
    const valorCorrecao = correcaoDeTemperatura(correcaoTemp.value * 1, localInstalacaoAmb.value, materialIsolacao.value);
    a = a / valorCorrecao;
    correnteCorrigida = a;

    //Aplicação da correção por agrupamento de condutores 
    const ref = referenciaDeAgrupamentos.value;
    const nCirc = NCicuitos.value;
    const fatorDeCorrecao = tabela_AgrupamentoDeCircuitos[ref][nCirc - 1];
    a = a / fatorDeCorrecao;

    const result = procuraCondutorCorrespondente(a, b, c, d, e);
    const resultadoTexto = `<p>Corrente de Projeto :${correnteProjeto}A <br> Metodo de Instalação :${metodoInstalacao.value} <br>Material Condutor :${materialCondutorSelecionado.value} <br>Material de Isolação :${materialIsolacao.value} <br>Numero de Condutores Carregados :${numeroCondutores.value.substring(0, 1)}<br>Para temperatura do ${localInstalacaoAmb.value} de ${correcaoTemp.value}ºC valor de : ${valorCorrecao} <br>Fator de agrupamento de circuitos : ${fatorDeCorrecao} <br>Seção reta do Cabo : ${result}mm²</p>`;

    diametro_Condutor_.value = retornaDiametroDoCondutor(result).toFixed(2); //Valor Aproximado 
    return [result, resultadoTexto];
}

botao.onclick = function () {
    secaoReta_resultado = calcularSecaoCabo(correnteProjeto.value);
    console.log(secaoReta_resultado);
    resultado.innerHTML = secaoReta_resultado[1];
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

/*
botao2.onclick = function () {
    
    resultado2.textContent = calcularSecaoCabo(correcaoNumeroCirc)[1];
}
*/
botao3.onclick = function () {
    const a = String(materialCondutorSelecionado.value);
    const b = Number(cossenoPhi.value);
    const c = Number(correnteProjeto.value);
    const d = Number(comprimentoDoCircuito_.value)/1000;
    const e = Number(numeroCondutores.value.substring(0, 1));
    //const e = 3;
    const f = String(materialIsolacao.value);
    const g = Number(secaoReta_resultado[0]);
    if (g === 0) {
        return console.log("Selecione uma Seção de Cabo");
    }
    const h = Number(diametro_Condutor_.value);
    const i = Number(distancia_Entre_Eixos_.value);
    const j = Number(_gmd.value);

    const resultado = MainFuncaoCalculoDeQueda(a, b, c, d, e, f, g, h, i, j);
    resultado3.textContent = "Queda de tensão de :" + quedaDeTensaoPorcento(resultado,tensaoNominal.value).toFixed(2)+"%";
}
