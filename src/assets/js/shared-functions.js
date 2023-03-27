$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("#back-to-top").addClass('to-top');
        } else {
            $("#back-to-top").removeClass('to-top');
        }
    });

    $('#back-to-top, .back-to-top').click(function () {

        $('html, body').animate({ scrollTop: 0 }, '800');
        return false;
    });

    $('.share-twitter').click(function (e) {
        var url = encodeURIComponent(location.origin + location.pathname),
            emp = "ELEFAC",
            texto = encodeURIComponent($(this).parent().parent().parent().parent().find('p').text());

        window.open('https://twitter.com/intent/tweet?text=' + emp + ': ' + texto + '. ' + url, '_blank');
        //console.log('twitter ' + url);
    });

    $('.share-facebook').click(function (e) {

        //var url = encodeURIComponent(location.origin + location.pathname),
        //    foto = location.origin + '/' + $(this).parent().parent().parent().find('img').attr('src'),
        //    descrip = encodeURIComponent($(this).parent().parent().parent().parent().find('p').text());

        //FB.ui({
        //    method: 'share',
        //    href: url,
        //    picture: foto,
        //    description: descrip
        //});

        window.open('http://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '&title=' + document.title);
    });

    $('.share-whatsapp').click(function (e) {

        var url = encodeURIComponent(location.origin + location.pathname),
            emp = "ELEFAC",
            texto = encodeURIComponent($(this).parent().parent().parent().parent().find('p').text());

        window.location = "whatsapp://send?text=" + emp + ': ' + texto + ' ' + url;

        console.log('whatsapp ' + url);
    });

    $('#btnEnviar').click(function (e) {
        var txtNombre = $('#txtNombre'),
            txtCorreo = $('#txtCorreo'),
            txtAsunto = $('#txtAsunto'),
            txtMensaje = $('#txtMensaje'),
            btnEnviar = $('#btnEnviar');

        var flag = 0;

        if (txtNombre.val() == '') {
            txtNombre.css('border-color', "#FE847B");
            flag = 1;
        }

        if (txtCorreo.val() == '') {
            txtCorreo.css('border-color', "#FE847B");
            flag = 1;
        }
        else if (checkcontact(txtCorreo.val()) == false) {
            txtCorreo.css('border-color', "#FE847B");
            flag = 1;
        }

        if (txtAsunto.val() == '') {
            txtAsunto.css('border-color', "#FE847B");
            flag = 1;
        }

        if (txtMensaje.val() == '') {
            txtMensaje.css('border-color', "#FE847B");
            flag = 1;
        }

        if (flag == 0) {
            btnEnviar.text('Espere...');
            btnEnviar.prop('disabled', true);
            var params = {
                RazonSocial: txtNombre.val(),
                Email: txtCorreo.val(),
                Asunto: txtAsunto.val(),
                Mensaje: txtMensaje.val()
            };

            $.ajax({
                url: '/Contact/Send',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: "POST",
                headers: {
                    '__RequestVerificationToken': $("input[name='__RequestVerificationToken']").val()
                },
                data: JSON.stringify(params),
                success: function (data) {
                    //console.log(data);
                    if (data.IsSuccess) {
                        openMessageOK('¡Gracias!', 'Tu mensaje ha sido enviado correctamente. En breve nos pondremos en contacto con Ud.');
                        btnEnviar.text('Enviar');
                        btnEnviar.prop('disabled', false);
                        txtNombre.val('');
                        txtCorreo.val('');
                        txtAsunto.val('');
                        txtMensaje.val('');
                    }
                    else {
                        openMessageError('¡Oops!', 'Tu mensaje no ha sido enviado. Vuelva a intentar en un minutos. Gracias');
                        btnEnviar.text('Enviar');
                        btnEnviar.prop('disabled', false);
                    }
                },
                error: function (err) {
                    console.log(err);
                    btnEnviar.text('Enviar');
                    btnEnviar.prop('disabled', false);
                }
            });
        }
    });

    //Fin Contact forms

});

function openPopup(src) {
    $.magnificPopup.open({
        items: {
            src: src
        },
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
}

function openMessageOK(title, text) {
    $('.title-message').text(title);
    $('.text-message').text(text);
    $('.icon-message').empty().append('<span class="fa fa-thumbs-up text-success" style="font-size:80px"></span>');
    openPopup('.message-popup');
}

function openMessageError(title, text) {
    $('.title-message').text(title);
    $('.text-message').text(text);
    $('.icon-message').empty().append('<span class="fa fa-exclamation-triangle text-danger" style="font-size:80px"></span>');
    openPopup('.message-popup');
}

function removeChecks() {
    var txtNombre = $('#txtNombre'),
        txtCorreo = $('#txtCorreo'),
        txtAsunto = $('#txtAsunto'),
        txtMensaje = $('#txtMensaje');

    if (txtNombre.val() != "") {
        txtNombre.css('border-color', "#C9C9C9");
    }

    if (txtCorreo.val() != "") {
        txtCorreo.css('border-color', "#C9C9C9");
    }

    if (txtAsunto.val() != "") {
        txtAsunto.css('border-color', "#C9C9C9");
    }

    if (txtMensaje.val() != "") {
        txtMensaje.css('border-color', "#C9C9C9");
    }
}

function checkcontact(input) {
    var pattern1 = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (pattern1.test(input)) {
        return true;
    }
    else {
        return false;
    }
}