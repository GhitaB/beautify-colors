$(document).ready(function() {
  function set_background_color() {
    var $this_box = $(this).parent();
    var new_color = "#" + this.value;

    $this_box.css('background-color', new_color);
  };

  function beautify() {
    var color_1 = "#" + $("#color-original-1").val();
    var color_2 = "#" + $("#color-original-2").val();
    var color_3 = "#" + $("#color-original-3").val();
    var color_4 = "#" + $("#color-original-4").val();
    var color_5 = "#" + $("#color-original-5").val();

    $("#color-final-1").css('background-color', color_1);
    $("#color-final-2").css('background-color', color_2);
    $("#color-final-3").css('background-color', color_3);
    $("#color-final-4").css('background-color', color_4);
    $("#color-final-5").css('background-color', color_5);
  };

  $("input.jscolor").on("change", set_background_color);

  $("button#beautify").on("click", beautify);
});
