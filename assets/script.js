var currentTime = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentTime);

function saveBtn(event) {
//console.log(event)
if (event.target.nodeName === "BUTTON"){
  console.log(event)
  var id= event.target.attributes[1].nodeValue
  var inputValue = $("." + id).val()
    console.log(inputValue)
    localStorage.setItem(id, inputValue)
}
}

for (let i=8; i < 20; i++) {
  var timeBlock = $("#hour" + i)
  var currentHour = moment().format("HH")

  if (currentHour > i) {
    timeBlock.addClass("past")
  }
  console.log (currentHour, i)
  if (currentHour == i) {
    timeBlock.addClass("present")
  }
  if (currentHour < i) {
    timeBlock.addClass("future")
  }
  $("." + i).val(localStorage.getItem(i))
}

$(".hours").click(saveBtn)