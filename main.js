const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComArray= nomeCompleto.split('');
    return nomeComArray.length >=2;
}

form.addEventListener('submit' , function(e){
    let formValido = false;
    e.preventDefault ();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'motante de:' ${valorDepoaito.value} 'deposito realizado para o cliente' ${nomeBeneficiario.value} - 'conta' ${numeroContaBeneficiario.value};
   
    formValido= validaNome(nomeBeneficiario.value)
    if  (formValido) {
        alert(mensagemSucesso);
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepoaito.value = '';

    } else {
        alert("o nome não esta completo");
    }
})

console.log(form);