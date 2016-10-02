$(document).ready(function() {
  function set_background_color() {
    var $this_box = $(this).parent();
    var new_color = "#" + this.value;

    $this_box.css('background-color', new_color);
  };

  function beautify() {
    alert("Starting...");
  };

  $("input.jscolor").on("change", set_background_color);

  $("button#beautify").on("click", beautify);
});
