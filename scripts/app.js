const nonImportant = "far fa-star";
const impIcon = "fas fa-star";
var isImportant = false;

var showHide= true;


function toggleImportant(){
    // toggle to fas fa-star
    
    if(isImportant){
        $("#iImportant").removeClass(impIcon).addClass(nonImportant);
        isImportant =false;
    }else{
        $("#iImportant").removeClass(nonImportant).addClass(impIcon); //chaining saves time for processing if many searches are happening
        // $("#iImportant").addClass(impIcon);
        isImportant= true;
    }
}

function togglePanel(){
    console.log("Button Clicked");

    if(showHide){
        $(".form").hide();
        showHide=false;
    }else{
        $(".form").show();
        showHide=true;
    }
}

function init(){
    console.log("task manager");
    // load data

    // hook events
    $("#iImportant").click(toggleImportant);

    $("#btnShowHide").click(togglePanel)


}
window.onload=init;
//
