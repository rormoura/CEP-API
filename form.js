var cep = document.getElementById("cep")

cep.addEventListener('keypress', () => { //function that implements the cep mask (88888-888)
    let tamanho_cep = cep.value.length
    if(tamanho_cep == 5 ){
        cep.value += '-'
    }
})

//----------------------------------------------------------------------------------------------

const cepValidation = async () => { //check if cep is filled correctly
    cleanFormInputs()
    var cep = document.getElementById('cep')
    if(cep != ""){ //if cep isn't empty
        if((/[0-9]{5}[\-][0-9]{3}/.test(cep.value)) || (/[0-9]{8}/.test(cep.value))){ //if filled correctly
            var cepOnlyNumbers = cep.value.replace(/[\-]/g, "") //removing '-'
            const adressInfo = await fetch('http://localhost:5000/adress?cep='+cepOnlyNumbers+'/')
            .then(res => res.json())
            .then(data => showAdressInfo(data))
        }
        else{ //if cep is filled incorrectly
            cleanFormInputs()
            alert("Formato de CEP inv\u00e1lido. Formato v\u00e1lido: XXXXX-XXX ou XXXXXXXX");
        }
    }
    else{ //if cep is empty
        cleanFormInputs()
    }
}

//----------------------------------------------------------------------------------------------

document.getElementById('cep').addEventListener('blur', cepValidation);

//----------------------------------------------------------------------------------------------

const showAdressInfo = (adressInfo) => { //function that displays the adress info received through GET request
    document.getElementById('logradouro').value=adressInfo['logradouro'];
    document.getElementById('complemento').value=adressInfo['complemento'];
    document.getElementById('bairro').value=adressInfo['bairro'];
    document.getElementById('localidade').value=adressInfo['localidade'];
    document.getElementById('uf').value=adressInfo['uf'];
}

//----------------------------------------------------------------------------------------------

const cleanFormInputs = () => { //function that cleans all the form inputs, except from CEP
    document.getElementById('logradouro').value=("");
    document.getElementById('complemento').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('localidade').value=("");
    document.getElementById('uf').value=("");
}