const nonImportant = "far fa-star";
const impIcon = "fas fa-star";
var isImportant = false;

var showHide = true;

function toggleImportant() {
  // toggle to fas fa-star

  if (isImportant) {
    $("#iImportant").removeClass(impIcon).addClass(nonImportant);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImportant).addClass(impIcon); //chaining saves time for processing if many searches are happening
    // $("#iImportant").addClass(impIcon);
    isImportant = true;
  }
}

function togglePanel() {
  //   console.log("Button Clicked");

  if (showHide) {
    $(".form").hide();
    showHide = false;
  } else {
    $(".form").show();
    showHide = true;
  }
}

function saveTask() {
  // console.log("Saved Data");

  let title = $("#txtTitle").val();
  let duration = $("#txtDuration").val();
  let dueDate = $("#selDueDate").val();
  let location = $("#txtLocation").val();
  let status = $("#selStatus").val();
  // console.log(title, duration, dueDate, location, status);
  ////////////////////

  let task = new Task(
    0,
    title,
    isImportant,
    duration,
    dueDate,
    location,
    status
  );
  console.log(task);

  displayTask(task);
  $("input").val("");
  $("select").val("");
}

function displayTask(task) {
  let syntax = `
  <div class="tasks">
    <div class="title">
      <h3>${task.title}</h3>
    </div>
    <div class="locale">
      <label><b>Location:</b> ${task.location}</label>
    </div>
    <div class="dates">
        <label><b>Task Duration:</b> ${task.duration} Days</label>
        <br>
        <label><b>Due Date:</b> ${task.dueDate}</label>
    </div>
  </div>`;

  $("#task-list").append(syntax);
}

function init() {
  // runTests();

  // console.log("task manager");
  // load data

  // hook events
  $("#iImportant").click(toggleImportant);

  $("#btnShowHide").click(togglePanel);

  $("#btnSaveTask").click(saveTask);
}
window.onload = init;
//
