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

    $("ul#to-do").append("<li><span class='toDo'>" + newToDo.todo + "  " + "<button type='button'>completed</button></span></li>");

    $(".toDo").last().click(function() {
      $("#show-to-do h2").text(newToDo.todo);
      $(".todo").text(newToDo.todo);
      $(".detail").text(newToDo.detail);
      $(".deadline").text(newToDo.deadline);
      $("#show-to-do").show();
    });

    $("#new-todo").val("");
    $("#new-detail").val("");
    $("#new-deadline").val("");

    $("button").click(function() {
      var complete = confirm("Press okay when the task is completed.")
      if (complete == true) {
        $("toDo").fadeOut();
        $("this").fadeOut();
      }
    });
  })
})
