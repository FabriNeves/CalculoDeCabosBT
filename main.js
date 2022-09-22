const correnteProjeto = document.querySelector("#correnteDeProjeto");
const metodoInstalacao = document.querySelector("#selecaoMetodo");
const materialCondutor = document.querySelector("#selecaoMaterial");
const isolacao = document.querySelector("#selecaoIsolacao");
const tipoDeinstalcao = document.querySelector(".tipoDeInstalacao");
const numeroCondutores = document.querySelector("#nCondutores");
const correcaoTempAmbiente = document.querySelector("#localInsta");
const correcaoTemp = document.querySelector("#correcaoTemp");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("button");
const indiceMetodosA_D = ['A1', "A2", "B1", "B2", "C", "D"];
const indiceMetodosE_G = ["E","F","G"];


// html 
const opcaoParaABCD =
    `<fieldset>
    <p> 
        O número de condutores carregados a ser considerado é o dos
        condutores efetivamente percorridos por corrente. Nos circuitos trifásicos com neutro, quando puder
        ser
        admitido o equilíbrio das correntes nos condutores fase e quando não for prevista a circulação de
        correntes
        harmônicas no condutor neutro, este não deve ser computado, considerando-se, portanto, para o
        circuito, 3
        condutores carregados.
    </p>
    <select name="nCondutores" id="nCondutores">
        <option value="3">a - circuito trifásico sem neutro = 3 condutores carregados</option>
        <option value="4">b - circuito trifásico com neutro = 4 condutores carregados</option>
        <option value="2">c - circuito monofásico a 2 condutores = 2 condutores carregados </option>
        <option value="3">d - circuito monofásico a 3 condutores = 3 condutores carregados</option>
        <option value="2">e - circuito bifásico a 2 condutores = 2 condutores carregados</option>
        <option value="3">f - circuito bifásico a 3 condutores = 3 condutores carregados</option>
    </select>
</fieldset>`;

function testCalcular() {
    resultado.textContent = `Corrente de Projeto de :${correnteProjeto.value}A,  Metodo de instalação :${metodoInstalacao.value},  Material Usado :${materialCondutor.value},  Tipo de Isolação :${isolacao.value},  Numero de condutores :${numeroCondutores.value},  Temperatura ${correcaoTempAmbiente.value}:${correcaoTemp.value}°C.`;
}

botao.onclick = function () {
    testCalcular();
}

metodoInstalacao.onchange = function () { 
    if(0<=indiceMetodosA_D.indexOf(metodoInstalacao.value)){
        tipoDeinstalcao.innerHTML = opcaoParaABCD;
    }
    if(0<=indiceMetodosE_G.indexOf(metodoInstalacao.value)){
       tipoDeinstalcao.innerHTML = `<p>${metodoInstalacao.value}</p>`; 
    }
    
}




