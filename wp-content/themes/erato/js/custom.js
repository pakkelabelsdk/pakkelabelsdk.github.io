jQuery(document).ready(function () {

    //var logoImg = jQuery('.logo_standard');
    //logoImg.addClass('dark');
    //logoImg.after('<img class="logo_standard white" src="https://www.pakkelabels.dk/wp-content/uploads/2017/01/PKL_WHITE_400x69.png" alt="Pakkelabels.dk">');

   // var imgDark = new Image();
    //imgDark.src = "https://www.pakkelabels.dk//wp-content/uploads/2017/01/PKL_200x35.png";
    //console.log(imgDark);

    //var imgWhite = new Image();
    //imgWhite.src = "https://www.pakkelabels.dk//wp-content/uploads/2017/01/PKL_WHITE_200x35.png";
    //console.log(imgWhite);
    jQuery('#right-menu').before('<div class="phone-information visible-lg"><i class="fa fa-phone"></i><span> &nbsp;70 400 407 (9-16)</span></div>');
    jQuery('.sf-menu .menu-item-has-children .sf-with-ul').append('<i class="fa fa-angle-down" style="display:inline;padding-left: 3px;font-size: 15px;"></i>');

    jQuery('.pricing-item').each(function (index) {
        var item = jQuery(this);
        var a = item.find('a');
        if (a.length > 0) {
            var href = a.attr("href");
            if (href && href !== '') {
                item.css("cursor", "pointer");
                item.on("click", function () {
                    location.href = href;
                });
            }
        }
    });

    jQuery('.small-icon').each(function () {
        var el = jQuery(this);
        var title = el.find('.heading-title');
        var p = el.find('p');
        if (title.length > 0 && p.length === 1 && p.text() !== '') {
            var text = title.text();
            var action = p.text();
            if (text === 'Send os en email' || text === 'Send os en e-mail') {
                el.css("cursor", "pointer");
                el.on("click", function () {
                    window.open('mailto:' + action);
                });
            } else if (text === 'Ring til os') {
                el.css("cursor", "pointer");
                el.on("click", function () {
                    window.open('tel:' + action.replace(/\s+/g, ''));
                });
            } else if (text === 'Åbningstider') {
                el.css("cursor", "pointer");
                el.on("click", function () {
                    location.href = '/kontakt-os/';
                });
            }
        }
    });
});

