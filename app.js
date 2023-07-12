var AT = document.querySelector('input#alta');
var BT = document.querySelector('input#baixa');

//TTR
var medida1 = document.querySelector('input#coluna1')
var medida2 = document.querySelector('input#coluna2')
var medida3 = document.querySelector('input#coluna3')

var varcoluna1 = document.querySelector('p#variacaot1')
var varcoluna2 = document.querySelector('p#variacaot2')
var varcoluna3 = document.querySelector('p#variacaot3')



// PONTE

var alta1 = document.querySelector('input#a1-2')
var alta2 = document.querySelector('input#a1-3')
var alta3 = document.querySelector('input#a2-3')

var variacaoat = document.querySelector('p#variacaopat')

var baixa1 = document.querySelector('input#b1-2')
var baixa2 = document.querySelector('input#b1-3')
var baixa3 = document.querySelector('input#b2-3')

var variacaobt = document.querySelector('p#variacaopbt')

var neutro1 = document.querySelector('input#c1-2')
var neutro2 = document.querySelector('input#c1-3')
var neutro3 = document.querySelector('input#c2-3')

var variacaobtx = document.querySelector('p#variacaopbtx')

btnrn.onclick = function clickrn() {
    var alta = Number(AT.value)
    var baixa = Number(BT.value)
    var relNom = (alta / baixa) * 1.73205081.toFixed(4)
    document.querySelector('p#RN').innerHTML = ` ${relNom.toFixed(4)}`
}

btnt.onclick = function clickt() {
    var alta = Number(AT.value)
    var baixa = Number(BT.value)
    var relNom = (alta / baixa) * 1.73205081.toFixed(4)
    var m1 = Number(medida1.value)
    var m2 = Number(medida2.value)
    var m3 = Number(medida3.value)
   
    

    if (m1 == '') {
        alert('Preencha os campos')

    } else if (m1 > relNom*1.005){ 
        var porcent1 = ((m1/relNom)-1)*100
        varcoluna1.innerHTML = `Valor acima do estabelecido ${porcent1.toFixed(4)} %`
    } else if (m1 < relNom*0.995 ) {
         var porcent1 = ((relNom/m1)-1)*100
         varcoluna1.innerHTML = `Valor abaixo do estabelecido ${porcent1.toFixed(4)} %`
    } 
    else {
        medrel1 = [`${m1}`,`${relNom}`]
        let maiorrel1 = Math.max(...medrel1)
        let menorrel1 = Math.min(...medrel1)
        let divisaorel1 = ((maiorrel1 / menorrel1)-1)*100
        varcoluna1.innerHTML = `Valor dentro do Estabelecido ${divisaorel1.toFixed(4)} %`
    }

    // Coluna 2

    if (m2 == '') {
        alert('Preencha os campos')
    }  
    else if (m2 >= relNom*1.005){ 
        var porcent2 = ((m2/relNom)-1) * 100
        varcoluna2.innerHTML = `Valor acima do estabelecido ${porcent2.toFixed(4)}%`

    } else if (m2 <= relNom*0.995 ) {
         var porcent2 = ((relNom/m2)-1)*100
         varcoluna2.innerHTML = `Valor abaixo do estabelecido ${porcent2.toFixed(4)}%`
    } 
    else{
        medrel2 = [`${m2}`,`${relNom}`]
        let maiorrel2 = Math.max(...medrel2)
        let menorrel2 = Math.min(...medrel2)
        let divisaorel2 = ((maiorrel2 / menorrel2)-1)*100
        varcoluna2.innerHTML = `Valor dentro do Estabelecido ${divisaorel2.toFixed(4)} %`
    }

    //Coluna 3

    if (m3 == '') {
        alert('Preencha os campos')
    
    }
    else if (m3 >= relNom*1.005){ 
        var porcent3 = ((m3/relNom)-1) * 100
        varcoluna3.innerHTML = `Valor acima do estabelecido ${porcent3.toFixed(4)}%`

    } else if (m3 <= relNom*0.995 ) {
         var porcent3 = ((relNom/m3)-1)*100
         varcoluna3.innerHTML = `Valor abaixo do estabelecido ${porcent3.toFixed(4)}%`

    } 
    else {
        medrel3 = [`${m3}`,`${relNom}`]
        let maiorrel3 = Math.max(...medrel3)
        let menorrel3 = Math.min(...medrel3)
        let divisaorel3 = ((maiorrel3 / menorrel3)-1)*100
        varcoluna3.innerHTML = `Valor dentro do Estabelecido ${divisaorel3.toFixed(4)} %`
    
    }
}
btnp.onclick = function clickp(){
    fase1 = Number(alta1.value)
    fase2 = Number(alta2.value)
    fase3 = Number(alta3.value)

    fase4 = Number(baixa1.value)
    fase5 = Number(baixa2.value)
    fase6 = Number(baixa3.value)

    fase7 = Number(neutro1.value)
    fase8 = Number(neutro2.value)
    fase9 = Number(neutro3.value)
    
    //AT

    medicoesat = [`${fase1}`,`${fase2}`,`${fase3}`]
    let maiorat = Math.max(...medicoesat)
    let menorat = Math.min(...medicoesat)
    let divisaoat = ((maiorat / menorat)-1)*100
    variacaoat.innerHTML = `O resultado é ${divisaoat.toFixed(4)} %`

    //BT 

    medicoesbt = [`${fase4}`,`${fase5}`,`${fase6}`]
    let maiorbt = Math.max(...medicoesbt)
    let menorbt = Math.min(...medicoesbt)
    let divisaobt = ((maiorbt / menorbt)-1)*100
    variacaobt.innerHTML = `O resultado é ${divisaobt.toFixed(4)} %`


    //BT pro X0

    medicoesbtx = [`${fase7}`,`${fase8}`,`${fase8}`]
    let maiorbtx = Math.max(...medicoesbtx)
    let menorbtx = Math.min(...medicoesbtx)
    let divisaobtx = ((maiorbtx / menorbtx)-1)*100
    variacaobtx.innerHTML = `O resultado é ${divisaobtx.toFixed(4)} %`
}