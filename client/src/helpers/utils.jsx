/**
 *
 * I overwrite the windwo.alert prototype to improve
 * the appearance of informational and error messages
 */
export const customAlert = () => {
  //Priority
  var vis = 1000;

  // Here, I overwrite the alert method of window object
  window.alert = function (message) {
    var box = document.createElement("div");

    // Css styles
    box.style.cssText =
      'width:30vw; height:100px; border:2px solid greenyellow; border-radius:.6em; padding:10px; background:rgba(63, 67, 67, .9); box-shadow:0px 0px 8px #0006; position:fixed; top:10em; right:0; left:0; margin:auto; font-family: "Arial", sans-serif; color:white; z-index:' +
      vis +
      ";";
    box.innerHTML = "<b>Info</b><br>" + message;
    document.body.appendChild(box);
    vis--;
    box.addEventListener("click", function () {
      box.remove();
    });
  };
};
