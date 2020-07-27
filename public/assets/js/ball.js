// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".throw-pitch").on("click", function (event) {
    var id = $(this).data("id");
    var newPitch = $(this).data("newpitch");

    var newPitchState = {
      thrown: true
    };

    // Send the PUT request
    $.ajax("/api/ball/" + id, {
      type: "PUT",
      data: newPitchState
    }).then(
      function () {
        console.log("changed Pitch to", newPitch);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPitch = {
      pitch_type: $("#ca").val().trim(),
      thrown: $("[name=throw]:checked").val().trim()
    };
    console.log(newPitch);
    // Send the POST request.
    $.ajax("/api/pitches", {
      type: "POST",
      data: newPitch
    }).then(
      function () {
        console.log("created new pitch");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});