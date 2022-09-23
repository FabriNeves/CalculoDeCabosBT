

function tempPVCAmb (x) {
 const a0 = -0.935270810152106;
 const a1 = 0.183091149349642;
 return a0+a1*x;
}

function tempEPRAmb (x) {
 const a0 = -0.935270810002336;
 const a1 = 0.183091149349543;
 return a0+a1*x;
}

function tempPVCsolo (x) {
 const a0 = -1.35035261181026;
 const a1 = 0.189167842074651;
 return a0+a1*x;
}

function tempEPRsolo (x) {
 const a0 = -1.35035261181026;
 const a1 = 0.189167842074651;
 return a0+a1*x;
}

console.log(tempPVCAmb(10));