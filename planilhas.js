
const indiceCondutores = [0.5, 0.75, 1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630, 800, 1000]
const indiceMetodos = ['A1', "A2", "B1", "B2", "C", "D"];
const metodoA1_COBRE_PVC = {
    2: [7, 9, 11, 14.5, 19.5, 26, 34, 46, 61, 80, 99, 119, 151, 182, 210, 240, 273, 321, 367, 438, 502, 578, 669, 767],
    3: [7, 9, 10, 13.5, 18, 24, 31, 42, 56, 73, 89, 108, 136, 164, 188, 216, 245, 286, 328, 390, 447, 514, 593, 679]
}

const metodoA2_COBRE_PVC = {
    2: [7, 9, 11, 14, 18.5, 25, 32, 43, 57, 75, 92, 110, 139, 167, 192, 219, 248, 291, 334, 398, 456, 526, 609, 698],
    3: [7, 9, 10, 13, 17.5, 23, 29, 39, 52, 68, 83, 99, 125, 150, 172, 196, 223, 261, 298, 355, 406, 467, 540, 618]
}

const metodoB1_COBRE_PVC = {
    2: [9, 11, 14, 17.5, 24, 32, 41, 57, 76, 101, 125, 151, 192, 232, 269, 309, 353, 415, 477, 571, 656, 758, 881, 1012],
    3: [8, 10, 12, 15.5, 21, 28, 36, 50, 68, 89, 110, 134, 171, 207, 239, 275, 314, 370, 426, 510, 587, 678, 788, 906]
}

const metodoB2_COBRE_PVC = {
    2: [9, 11, 13, 16.5, 23, 30, 38, 52, 69, 90, 111, 133, 168, 201, 232, 265, 300, 351, 401, 477, 545, 626, 723, 827],
    3: [8, 10, 12, 15, 20, 27, 34, 46, 62, 80, 99, 118, 149, 179, 206, 236, 268, 313, 358, 425, 486, 559, 645, 738]
}

const metodoC_COBRE_PVC = {
    2: [10, 13, 15, 19.5, 27, 36, 46, 63, 85, 112, 138, 168, 213, 258, 299, 344, 392, 461, 530, 634, 729, 843, 978, 1125],
    3: [9, 11, 14, 17.5, 24, 32, 41, 57, 76, 96, 119, 144, 184, 223, 259, 299, 341, 403, 464, 557, 642, 743, 865, 996]
}

const metodoD_COBRE_PVC = {
    2: [12, 15, 18, 22, 29, 38, 47, 63, 81, 104, 125, 148, 183, 216, 246, 278, 312, 361, 408, 478, 540, 614, 700, 792],
    3: [10, 12, 15, 18, 24, 31, 39, 52, 67, 86, 103, 122, 151, 179, 203, 230, 258, 297, 336, 394, 445, 506, 577, 652]
}

const selecaoMaterialContudor_PVC = {
    cobre: [metodoA1_COBRE_PVC, metodoA2_COBRE_PVC, metodoB1_COBRE_PVC, metodoB2_COBRE_PVC, metodoC_COBRE_PVC, metodoD_COBRE_PVC],
    aluminio: "AL"
}

const selecaoMaterialIsolacao = {
    PVC:selecaoMaterialContudor_PVC,
    EPR:"selecaoMaterialContudot_EPR"
}



let a = indiceCondutores.indexOf(50);
console.log(indiceCondutores.indexOf(50));



function retornaCorrente(metodoInst, condutor, nCondCarregados) {
    const a = indiceMetodos.indexOf(metodoInst);
    const c = indiceCondutores.indexOf(condutor);
    return metodo.cobrePVC[a][nCondCarregados][c];

}

console.log(retornaCorrente("B2", 1000, 2));