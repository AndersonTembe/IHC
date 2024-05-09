
    // Ativa a primeira guia ao carregar a página
    $('.account-settings-links a:first').tab('show');

    // Event listener para alternar as guias
    $('.account-settings-links a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Função para salvar as alterações do perfil
    function saveChanges() {
        alert('Alterações salvas com sucesso!');
    }

    // Event listener para o botão "Salvar alterações"
    $('.btn-primary').on('click', function() {
        saveChanges();
    });

    // Event listener para o botão "Cancelar"
    $('.btn-default').on('click', function() {

        alert('Alterações canceladas!');
    });
