
$('select.dropdown')
  .dropdown()
;


(function() {
    var defaultMapping = $('#tab1').clone();

    $('[data-toggle="add"]').click(function() {
        var tabIndex = $(this).index();
        var tabOthers = $(this).siblings();
        var tabNew = $(this).prev().clone();
        var tabMenu = $(this).closest('.ui.menu');

        tabNew.addClass('active');
        tabNew.attr('href', '#tab' + (tabIndex+1));
        defaultMapping.attr('id', 'tab' + (tabIndex+1));

        tabOthers.removeClass('active');
        tabNew.insertBefore($(this));
        $("[id^='tab']").removeClass('active');
        $('.ui.text.container').append(defaultMapping.clone());
    });
}());