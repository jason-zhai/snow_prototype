



(function() {
    var defaultMapping = $('#tab1').clone();
    $('select.dropdown')
  .dropdown()
;
    var tabNumber = $('[data-toggle="tab"]').length;
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

    };

    $('[data-toggle="add"]').click(function() {
        tabNumber += 1;
        var tabOthers = $(this).siblings();
        var tabNew = $(this).prev().clone();
        var tabMenu = $(this).closest('.ui.menu');
        var tabContent = defaultMapping.clone();

        tabNew.addClass('active');
        tabNew.attr('href', '#tab' + tabNumber);
        tabNew.find('i.remove').click(tabRemove);

        tabOthers.removeClass('active');
        tabNew.insertBefore($(this));
        $("[id^='tab']").removeClass('active');

        tabContent.attr('id', 'tab' + tabNumber);
        tabContent.find('select.dropdown').dropdown();
        $('.ui.text.container').append(tabContent);
    });

    $('[data-toggle="tab"] > i.remove').click(tabRemove);
}());