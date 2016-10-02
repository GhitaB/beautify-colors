$(document).ready(function() {
  var data = {
    original: {
      color_1: {
        value: 0,
        saturation: 0
      },
      color_2: {
        value: 0,
        saturation: 0
      },
      color_3: {
        value: 0,
        saturation: 0
      },
      color_4: {
        value: 0,
        saturation: 0
      },
      color_5: {
        value: 0,
        saturation: 0
      }
    },
    beautified: {
      color_1: {
        value: 0,
        saturation: 0
      },
      color_2: {
        value: 0,
        saturation: 0
      },
      color_3: {
        value: 0,
        saturation: 0
      },
      color_4: {
        value: 0,
        saturation: 0
      },
      color_5: {
        value: 0,
        saturation: 0
      }
    }
  };

  function set_background_color() {
    var $this_box = $(this).parent();
    var new_color = "#" + this.value;

    $this_box.css('background-color', new_color);
  };

  function beautify() {
    data.original.color_1.value = "#" + $("#color-original-1").val();
    data.original.color_2.value = "#" + $("#color-original-2").val();
    data.original.color_3.value = "#" + $("#color-original-3").val();
    data.original.color_4.value = "#" + $("#color-original-4").val();
    data.original.color_5.value = "#" + $("#color-original-5").val();


    $("#color-final-1").css('background-color', data.original.color_1.value);
    $("#color-final-2").css('background-color', data.original.color_2.value);
    $("#color-final-3").css('background-color', data.original.color_3.value);
    $("#color-final-4").css('background-color', data.original.color_4.value);
    $("#color-final-5").css('background-color', data.original.color_5.value);
  };

  $("input.jscolor").on("change", set_background_color);

  $("button#beautify").on("click", beautify);
});
