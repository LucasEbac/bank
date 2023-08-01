const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComoArray= nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}

form.addEventListener('submit' , function(e){
    let formValido = false;
    e.preventDefault ();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `montante de: ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} -conta ${numeroContaBeneficiario.value}`;

    formValido= validaNome(nomeBeneficiario.value);
    if  (formValido) {
        alert(mensagemSucesso);
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert("o nome não esta completo");
    }
})

console.log(form);