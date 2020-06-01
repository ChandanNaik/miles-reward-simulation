$(document).ready(function() {
  $('.drag').draggable({
    appendTo: 'body',
    helper: 'clone',
    cursor: "move"
  });

  $('#category1').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("#" + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        var $el = $('<div id= "' + ui.draggable.text() + '" class="drop-item">' + ui.draggable.text() + '</div>');
        $el.append($('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-remove"></span></button>').click(function() {
          $(this).parent().detach();
        }));
        $(this).append($el);
      }

    }
  });

  $('#category2').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("#" + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        var $el = $('<div id= "' + ui.draggable.text() + '" class="drop-item">' + ui.draggable.text() + '</div>');
        $el.append($('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-remove"></span></button>').click(function() {
          $(this).parent().detach();
        }));
        $(this).append($el);
      }
    }
  });

  $('#category3').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("#" + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        var $el = $('<div id= "' + ui.draggable.text() + '" class="drop-item">' + ui.draggable.text() + '</div>');
        $el.append($('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-remove"></span></button>').click(function() {
          $(this).parent().detach();
        }));
        $(this).append($el);
      }
    }
  });

  $('#category4').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("#" + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        var $el = $('<div id= "' + ui.draggable.text() + '" class="drop-item">' + ui.draggable.text() + '</div>');
        $el.append($('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-remove"></span></button>').click(function() {
          $(this).parent().detach();
        }));
        $(this).append($el);
      }
    }
  });

  $(".categories").sortable({
    connectWith: ' .categories'
  });

});
