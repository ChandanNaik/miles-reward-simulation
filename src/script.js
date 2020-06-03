$(document).ready(function() {

  // .drag specifies all the Rewards in REWARDS BLOCK.
  $('.drag').draggable({
    // Making the rewards elements draggable and making a clone as they are dragged
    appendTo: 'body',
    helper: 'clone',
    cursor: "move"
  });

  // All 4 category buckets are droppable(The draggable elements can be dragged and dropped in the droppable space)
  $('#category1').droppable({
    hoverClass: 'hover',
    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("." + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        // Attach reward only if the the reward is coming from Reward bucket
        attachReward(buttonText, $(this))
      }

    }
  });

  $('#category2').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("." + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {

        // Attach reward only if the the reward is coming from Reward bucket
        attachReward(buttonText, $(this))
      }
    }
  });

  $('#category3').droppable({
    hoverClass: 'hover',

    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("." + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        // Attach reward only if the the reward is coming from Reward bucket
        attachReward(buttonText, $(this))
      }
    }
  });

  $('#category4').droppable({
    hoverClass: 'hover',
    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("." + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        // Attach reward only if the the reward is coming from Reward bucket
        attachReward(buttonText, $(this))
      }
    }
  });

  $('#category5').droppable({
    hoverClass: 'hover',
    drop: function(e, ui) {
      buttonText = ui.draggable.text()
      if ($(this).find("." + buttonText).length == 0 && ui.draggable.context.className.includes("ui-draggable")) {
        // Attach reward only if the the reward is coming from Reward bucket
        attachReward(buttonText, $(this))
      }
    }
  });

  function attachReward(buttonText, $this) {
    // Attaches the dragged reward to the dropped category with a X button.
    var $rewardButton = $('<div class="' + buttonText + ' drop-item">' + buttonText + '</div>');
    $rewardButton.append($('<button type="button" class="btn btn-default btn-xs remove"><span class="glyphicon glyphicon-remove"></span></button>').click(function() {
      $(this).parent().detach();
    }));
    $this.append($rewardButton);
  }


  // The reward elements within the category buckets are sortable meaning can be moved from one category bucket to another without cloning
  $(".categories").sortable({
    connectWith: ' .categories',
    beforeStop: function(e, ui) {
      // Condition to check if the destination category already has the dragged reward.
      // This condition is to check when dragging rewards between category
      var innerHTMLString = $(ui.placeholder).parent()[0].innerText
      var draggedRewardClassName = ui.item.context.classList[0];
      if ((innerHTMLString.split(draggedRewardClassName).length - 1) > 1) {
        $(this).sortable('cancel');
      }
    }
  });
});


$(document).on('click', '#reset', function() {
  location.reload();
  return false;
});
