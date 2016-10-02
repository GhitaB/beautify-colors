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


  function hex_to_rgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthand_regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthand_regex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  };


  function rgb_to_hsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h, s, l];
  };


  function get_best_saturation() {
    // return saturation of primary color
  };


  function beautify() {
    data.original.color_1.value = "#" + $("#color-original-1").val();
    data.original.color_2.value = "#" + $("#color-original-2").val();
    data.original.color_3.value = "#" + $("#color-original-3").val();
    data.original.color_4.value = "#" + $("#color-original-4").val();
    data.original.color_5.value = "#" + $("#color-original-5").val();

    var rgb_color_1 = hex_to_rgb(data.original.color_1.value);
    var rgb_color_2 = hex_to_rgb(data.original.color_2.value);
    var rgb_color_3 = hex_to_rgb(data.original.color_3.value);
    var rgb_color_4 = hex_to_rgb(data.original.color_4.value);
    var rgb_color_5 = hex_to_rgb(data.original.color_5.value);

    var hsl_color_1 = rgb_to_hsl(rgb_color_1[0], rgb_color_1[1], rgb_color_1[2]);
    var hsl_color_2 = rgb_to_hsl(rgb_color_2[0], rgb_color_2[1], rgb_color_2[2]);
    var hsl_color_3 = rgb_to_hsl(rgb_color_3[0], rgb_color_3[1], rgb_color_3[2]);
    var hsl_color_4 = rgb_to_hsl(rgb_color_4[0], rgb_color_4[1], rgb_color_4[2]);
    var hsl_color_5 = rgb_to_hsl(rgb_color_5[0], rgb_color_5[1], rgb_color_5[2]);

    data.original.color_1.saturation = hsl_color_1[1];
    data.original.color_2.saturation = hsl_color_2[1];
    data.original.color_3.saturation = hsl_color_3[1];
    data.original.color_4.saturation = hsl_color_4[1];
    data.original.color_5.saturation = hsl_color_5[1];

    var best_saturation = get_best_saturation();

    $("#color-final-1").css('background-color', data.original.color_1.value);
    $("#color-final-2").css('background-color', data.original.color_2.value);
    $("#color-final-3").css('background-color', data.original.color_3.value);
    $("#color-final-4").css('background-color', data.original.color_4.value);
    $("#color-final-5").css('background-color', data.original.color_5.value);
  };

  $("input.jscolor").on("change", set_background_color);

  $("button#beautify").on("click", beautify);
});
