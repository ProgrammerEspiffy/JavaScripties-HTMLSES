function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  }
// Créditos á esse site: https://www.javascriptprogressivo.net/2018/12/Como-Criar-Tabuada-JavaScript.html#:~:text=Tabuada%20de%20Qualquer%20N%C3%BAmero&text=Usamos%20um%20campo%20de%20input,esse%20elemento%20%C3%A9%20o%20JavaScript