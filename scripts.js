
  // Obtém referências para os elementos HTML relevantes
  const btnAdicionar = document.querySelector('#add-contato');
  const tabelaContatos = document.querySelector('#tabela-contatos tbody');
  const inputNome = document.querySelector('#nome');
  const inputTelefone = document.querySelector('#telefone');

  // Define a função para adicionar um novo contato à tabela
  function adicionarContato(event) {
    // Previne o comportamento padrão do formulário de enviar os dados
    event.preventDefault();

    // Obtém o nome e o telefone do contato a partir dos elementos HTML correspondentes
    const nome = inputNome.value;
    const telefone = inputTelefone.value;

    const campoNome = document.querySelector('#nome');
    const campoTelefone = document.querySelector('#telefone');

    if (!campoNome.value) {
        alert('Por favor, preencha o campo Nome.');
        return;
      }
  
      if (!campoTelefone.value) {
        alert('Por favor, preencha o campo telefone.');
        return;
      }

    // Cria uma nova linha na tabela com os dados do contato
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${nome}</td>
      <td>${telefone}</td>
    `;

    // Adiciona a nova linha à tabela
    tabelaContatos.appendChild(novaLinha);

    // Armazena os dados do contato no Local Storage
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push({ nome, telefone });
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Limpa os campos do formulário
    inputNome.value = '';
    inputTelefone.value = '';
  }

  // Adiciona um listener ao botão para acionar a função de adicionar contato
  btnAdicionar.addEventListener('click', adicionarContato);

  // Carrega os contatos salvos no Local Storage e adiciona-os à tabela
  const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
  contatos.forEach((contato) => {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${contato.nome}</td>
      <td>${contato.telefone}</td>
    `;
  });
   
