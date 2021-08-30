function myFunction() {
  var year = prompt("Please enter year");
  if (year != null) {
    document.getElementById("demo").innerHTML =
      year + " is " + ((year % 4 && "not") || "") + " leap year";
  }
}
$("#button").click(function (e) {
  e.preventDefault();
  myFunction();
});
