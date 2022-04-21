<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Desafio Accordion</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script>
        $(function() {
            $("#accordion").accordion();
        });
    </script>

    <style type="text/css">
            h3{
                background-color: black !important;
                color: white !important;
            }
    </style>
</head>

<body>

    <div id="accordion">
        <h3>Imagens da Torre Eiffel</h3>
        <div>
           <img style="width:100%; height:800px;" src="https://www.conexaoparis.com.br/wp-content/uploads/2020/04/torre_eiffel_paris.jpg" alt="Imagens da torre eiffel">
        </div>
        <h3>Informações da torre Eiffel</h3>
        <div style="height: 200px !important;">
            <p>
                 A Torre Eiffel (em francês: Tour Eiffel, /tuʀ ɛfɛl/) é uma torre treliça de ferro do século XIX localizada no Champ de Mars, em Paris, a qual se tornou um ícone mundial da França. A torre, que é o edifício mais alto da cidade,[1] é o monumento pago mais visitado do mundo, com milhões de pessoas frequentando-o anualmente. Nomeada em homenagem ao seu projetista, o engenheiro Gustave Eiffel, foi construída como o arco de entrada da Exposição Universal de 1889.
            </p>
            <p>
                Possui 324 metros de altura e fica cerca de 15 centímetros mais alta no verão, devido à dilatação térmica do ferro.[2] Foi a estrutura mais alta do mundo desde a sua conclusão até 1930, quando perdeu o posto para o Chrysler Building, em Nova Iorque, Estados Unidos. Não incluindo as antenas de transmissão, é a segunda estrutura mais alta do país, atrás apenas do Viaduto de Millau, concluído em 2004. A torre tem três níveis para os visitantes. Os ingressos podem ser adquiridos nas escadas ou elevadores do primeiro e do segundo nível. A caminhada para o primeiro nível é superior a 300 degraus. O terceiro e mais alto nível só é acessível por elevador. Do primeiro andar vê-se a cidade inteira, tendo o andar sanitários e várias lojas, e o segundo nível tem um restaurante.
            </p>
            <p>
                A torre tornou-se o símbolo mais proeminente de Paris e da França, sendo parte de cenários de filmes que se passam na cidade. Seu estatuto de ícone é tão determinado que ainda serve como um símbolo para todo o país, como quando a torre foi usada como o logotipo da candidatura francesa para sediar os Jogos Olímpicos de Verão de 1992.
            </p>
        </div>
        <h3>Mapas da torre Eiffel</h3>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53866114.11342156!2d-47.89527971777376!3d34.509812542359974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-BR!2sbr!4v1650580127702!5m2!1spt-BR!2sbr" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>


</body>

</html>