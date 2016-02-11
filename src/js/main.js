



(function() {
    var defaultMapping = $('#tab1').clone();
    $('select.dropdown').dropdown();

    var tabInitNumber = $('[data-toggle="tab"]').length;
    var tabRemove = function(e) {
        var tabItem = $(this).parent();
        e.stopPropagation();
        if(tabItem.hasClass('active')) {
            if((tabItem.index() + 1) === $('[data-toggle="tab"]').length) {
                tabItem.prev().addClass('active');
                $(tabItem.attr('href')).prev().addClass('active');
            } else {

                tabItem.next().addClass('active');
                $(tabItem.attr('href')).next().addClass('active');
            }
        }
        tabItem.remove();
        $(tabItem.attr('href')).remove();
        tabOneLeft();
    };
    var tabOneLeft = function() {
        if($('[data-toggle="tab"]').length === 1) {
            $('i.remove').hide();
        } else {
            $('i.remove').show();
        }
    };

    tabOneLeft();

    $('[data-toggle="add"]').click(function() {
        tabInitNumber += 1;
        var tabOthers = $(this).siblings();
        var tabNew = $(this).prev().clone();
        var tabMenu = $(this).closest('.ui.menu');
        var tabContent = defaultMapping.clone();

        tabNew.addClass('active');
        tabNew.attr('href', '#tab' + tabInitNumber);
        tabNew.find('i.remove').click(tabRemove);

        tabOthers.removeClass('active');
        tabNew.insertBefore($(this));
        $("[id^='tab']").removeClass('active');

        tabContent.attr('id', 'tab' + tabInitNumber);
        tabContent.find('select.dropdown').dropdown();
        $('.ui.text.container').append(tabContent);

        tabOneLeft();
    });

    $('[data-toggle="tab"] > i.remove').click(tabRemove);
}());