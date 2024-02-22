$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('.phone-view').click(function() {
        $(this).siblings('.phone-broker').toggleClass('hidden');
    });

    $('#phone').mask('(00) 00000-0000', {
    })

    $('#cpf').mask('000.000.000-00', {
    })

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            cpf: 'Este campo é obrigatório',
            phone: 'Este campo é obrigatório',
            message: 'Este campo é obrigatório'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    function calculateResult() {
        const value1 = parseFloat($("#value1").val());
        const value2 = parseFloat($("#value2").val());
        const value3 = parseFloat($("#value3").val());

        const result = (value1 * value3) / value2;
        $("#result").val(result.toFixed(2));
    }

    $("#value1, #value2, #value3").on("input", calculateResult);

    $("#valueCalculate").click(function() {
        $("#result").addClass("textResult");
    });
})

document.addEventListener("DOMContentLoaded", function(){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
});

let btnGenerate = document.querySelector('.download');
let btnDownload = document.querySelector('#download');

btnGenerate.addEventListener('click', () =>  {
    html2canvas(document.querySelector(".preview")).then(canvas => {
        btnDownload.href = canvas.toDataURL('image/png');
        btnDownload.download =  'minha-imagem';
        btnDownload.click();
    })
});