
$('select.dropdown')
  .dropdown()
;


(function() {
    var defaultMapping = $('#tab1').clone();
    var tabNumber = $('[data-toggle="tab"]').length;

    $('[data-toggle="add"]').click(function() {
        tabNumber += 1;
        var tabOthers = $(this).siblings();
        var tabNew = $(this).prev().clone();
        var tabMenu = $(this).closest('.ui.menu');

        tabNew.addClass('active');
        tabNew.attr('href', '#tab' + tabNumber);
        defaultMapping.attr('id', 'tab' + tabNumber);

        tabOthers.removeClass('active');
        tabNew.insertBefore($(this));
        $("[id^='tab']").removeClass('active');
        $('.ui.text.container').append(defaultMapping.clone());
    });
}());