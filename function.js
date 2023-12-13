$(function(){
     
    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela() {
       $('.list').click(function(e){
        e.stopPropagation();
            $('.bg').fadeIn();
       });
    }

    function verificarCliqueFechar() {
        var el = $('body,.closeBtn');
        el.click(function(){
           $('.bg').fadeOut();
        });

        $('.bg').click(function(e){
            e.stopPropagation();
        });

       
      
    }
});

$(function(){
 
    abrirJanela2();
    verificarCliqueFechar1();

    function abrirJanela2() {
       $('.btn1').click(function(e){
          e.stopPropagation();
          $('.menu-cardapio').fadeIn();
       });
    }

    function verificarCliqueFechar1() {
        var el = $('body,.closeBtn1');
        el.click(function(){
           $('.menu-cardapio').fadeOut();
        });

        $('.menu-cardapio').click(function(e){
            e.stopPropagation();
        });

       
      
    }
});