function buscarCep() {
    const cep = document.getElementById('cep').value;

    if (cep.length !== 8) {
        document.getElementById('resultado').innerText = 'CEP inválido!';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerText = 'CEP não encontrado!';
            } else {
                document.getElementById('resultado').innerText = `
                    CEP: ${data.cep} \n
                    Logradouro: ${data.logradouro} \n
                    Bairro: ${data.bairro} \n
                    Cidade: ${data.localidade} \n
                    Estado: ${data.uf}
                `;
            }
        })
        .catch(error => {
            document.getElementById('resultado').innerText = 'Erro ao buscar o CEP.';
        });
}
