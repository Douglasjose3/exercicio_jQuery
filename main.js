$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const listaTarefas = $('#lista-nova').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${listaTarefas}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $("li").click(function() {
            $(this).addClass("riscado");
        });

        $('form input').val("");
    
    })
})