//Função dos botões de missão, visão e valores.
function toggleContent(id) {
  var content = document.getElementById(id);

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}




$(document).ready(function () {
    $('#contatoForm').submit(function (e) {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário
        
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // Serializa os dados do formulário
            success: function (response) {
                // Exibe mensagem de sucesso
                $('#message').text("Formulário enviado com sucesso!").fadeIn();
                
                // Opcional: Limpar o formulário após envio bem-sucedido
                form.trigger('reset');
                
                // Ocultar a mensagem após alguns segundos (opcional)
                setTimeout(function() {
                    $('#message').fadeOut();
                }, 5000); // A mensagem desaparecerá após 5 segundos
            },
            error: function (xhr) {
                // Exibe mensagem de erro
                $('#message').text("Erro ao enviar o formulário: " + xhr.responseText).fadeIn();
                $('#message').removeClass('alert-success').addClass('alert-danger');
            }
        });
    });
});


