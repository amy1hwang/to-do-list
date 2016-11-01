function ToDo(todo, detail, deadline) {
  this.todo = todo;
  this.detail = detail;
  this.deadline = deadline;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedtodo = $("#new-todo").val();
    var inputteddetail = $("#new-detail").val();
    var inputteddeadline = $("#new-deadline").val();

    var newToDo = new ToDo(inputtedtodo, inputteddetail, inputteddeadline);

    var openToDoDetail = function() {
      // show the todo details
      $("#show-to-do h2").text(newToDo.todo);
      $(".todo").text(newToDo.todo);
      $(".detail").text(newToDo.detail);
      $(".deadline").text(newToDo.deadline);
      $("#show-to-do").show();
    }
    var hideToDoDetail = function() {
      // close the todo details
      $("#show-to-do").fadeOut();
    }

    // add new to do element
    var $newToDo = $("<li><span class='toDo'>" + newToDo.todo + "  " + "<button class='complete'>completed</button></span></li>");
    $("ul#to-do").append($newToDo);

    $newToDo.find(".complete").on('click', function() {
      // hide the to do item if the user clicks OK.
      var complete = confirm("Press okay to complete the task: " + newToDo.todo);
      if (complete == true) {
        $(this).closest("li").fadeOut();
        hideToDoDetail();
      }
    });
    $(".toDo").last().click(openToDoDetail);

    $("#new-todo").val("");
    $("#new-detail").val("");
    $("#new-deadline").val("");

  })
})
