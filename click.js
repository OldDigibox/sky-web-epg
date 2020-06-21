function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");

    $('main').removeClass();

    switch (topage) {
        case 'main':
            $('main').addClass('bground1');
            break;
        case 'more':
            $('main').addClass('bground1');
            break;
        case 'guide':
            $('main').addClass('bground2');
            break;
        case 'custom':
            $('main').addClass('bground1');
            break;
        case 'adult':
            $('main').addClass('bground2');
            break;
        case 'entertainment':
            $('main').addClass('bground2');
            break;
        case 'boxoffice':
            $('main').addClass('boxoffice');
            break;
        case 'services':
            $('main').addClass('services');
            break;
        case 'interactive':
            $('main').addClass('interactive');
            break;
        case 'systemsetup':
            $('main').addClass('bground2');
            break;
        case 'ent2':
            $('main').addClass('bground2');
            break;
        case 'ent3':
            $('main').addClass('bground2');
            break;
        case 'kids':
            $('main').addClass('bground2');
            break;
        case 'systemdetails':
            $('main').addClass('bground2');
            break;
        case 'radio':
            $('main').addClass('bground2');
            break;
        case 'otherchannels':
            $('main').addClass('bground2');
            break;
        case 'radio2':
            $('main').addClass('bground2');
            break;
        case 'radio3':
            $('main').addClass('bground2');
            break;
        case 'radio4':
            $('main').addClass('bground2');
            break;
        case 'radio5':
            $('main').addClass('bground2');
            break;
        case 'radio6':
            $('main').addClass('bground2');
            break;
        case 'movies':
            $('main').addClass('bground2');
            break;
        case 'movies2':
            $('main').addClass('bground2');
            break;
        case 'fyi':
            $('main').addClass('bground2');
            break;
        case 'skybox':
            $('main').addClass('bground2');
            break;
        case 'interactive2':
            $('main').addClass('interactive');
            break;
        case 'sastest':
            $('main').addClass('interactive');
            break;
        case 'telephonenumbers':
            $('main').addClass('bground2');
            break;
        case 'interactive3':
            $('main').addClass('interactive');
            break;
        case 'az':
            $('main').addClass('bground2');
            break;
        case 'healthcheck':
            $('main').addClass('bground2');
            break;
    }

}