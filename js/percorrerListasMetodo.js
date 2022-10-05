

// Função de percorrer listas e encontrar o primeiro valor maior que o informado ;
export function retornaOPrimeiroValorMaior(valorProcurado, listaDeprocura) {
    for (let i = 0; i < listaDeprocura.length; i++) {
        const element = listaDeprocura[i];
        if (element >= valorProcurado) {
            return listaDeprocura.indexOf(element);
        }
    }
  }

