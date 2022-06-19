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
  /////////
  $.ajax({
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    type: "POST",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      let savedTask = JSON.parse(res);
      displayTask(task);
      $("input").val("");
      $("select").val("");
      // console.log("Server Says:", res);
    },
    error: function (details) {
      console.log("Error Saving", details);
    },
  });
  /////////
}
function getStatusText(status) {
  switch (status) {
    case 0:
      return "New";
    case 1:
      return "In Progress";
    case 3:
      return "Blocked";
    case 6:
      return "Completed";
    case 9:
      return "Removed";
    default:
      return "missing";
  }
}

function displayTask(task) {
  let statusText = getStatusText(task.status);

  let syntax = `
  <div class="tasks">
    <div class="title">
      <h3>${task.title}</h3>
    </div>
    <div class="locale">
      <label><b>Location:</b> ${task.location}</label>
    </div>
    <div class="status">
      <label><b>Status:</b>  ${task.status}</label>
    </div>
    <div class="dates">
      <label><b>Task Duration:</b> ${task.duration} Days</label>
      <br>
      <label><b>Due Date:</b> ${task.dueDate}</label>
    </div>
    
  </div>`;

  $("#task-list").append(syntax);
}

/////////
function testRequest() {
  $.ajax({
    url: "https://fsdiapi.azurewebsites.net/",
    type: "DELETE",
    success: function (res) {
      console.log("Response", res);
    },
    error: function (errorDet) {
      console.log("Error on request", errorDet);
    },
  });
}

function fetchTask() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    // data: JSON.stringify(task),
    // contentType: "application/json",
    success: function (res) {
      let tasks = JSON.parse(res);
      console.log("Server Says:", tasks);
      for (let i = 0; i < tasks.length; i++) {
        let item = tasks[i];
        if (item.name == "DeVonte") {
          displayTask(item);
        }
      }
    },
    error: function (details) {
      console.log("Error Saving", details);
    },
  });
}

///////////

function deleteAll() {
  $.ajax({
    type: "DELETE",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/DeVonte",
    success: function (complete) {
      console.log("Delete Completed", complete);
    },
    error: function (err) {
      console.error(err);
    },
  });
}
function init() {
  // runTests();

  // console.log("task manager");
  // load data
  fetchTask();

  // hook events
  $("#iImportant").click(toggleImportant);
  $("#btnShowHide").click(togglePanel);
  $("#btnSaveTask").click(saveTask);
  $("#btnDel").click(deleteAll);
}
window.onload = init;
//
