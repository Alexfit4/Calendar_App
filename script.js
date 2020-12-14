// Varaible Section //

var currentDate = dayjs().format("dddd, MMMM DD YYYY");
var currentHour = dayjs().format("h");
var currentMinute = dayjs().format("mm");
var current12 = dayjs().format("A");
var columnWidths = [2, 8, 2];
var columnNumber = 0;
var testHour = dayjs().hour();

// Used API to access current time //
$("#currentDay").text(currentHour + ":" + currentMinute + " " + currentDate);

// Timeblock array holding an object for each workday hour
var timeBlocks = [
	{
		time: 8,
		showTime: "8AM",
		hourEvent: "",
	},
	{
		time: 9,
		showTime: "9AM",
		hourEvent: "",
	},
	{
		time: 10,
		showTime: "10AM",
		hourEvent: "",
	},
	{
		time: 11,
		showTime: "11AM",
		hourEvent: "",
	},
	{
		time: 12,
		showTime: "12PM",
		hourEvent: "",
	},
	{
		time: 13,
		showTime: "1PM",
		hourEvent: "",
	},
	{
		time: 14,
		showTime: "2PM",
		hourEvent: "",
	},
	{
		time: 15,
		showTime: "3PM",
		hourEvent: "",
	},
	{
		time: 16,
		showTime: "4PM",
		hourEvent: "",
	},
	{
		time: 17,
		showTime: "5PM",
		hourEvent: "",
	},
	{
		time: 18,
		showTime: "6PM",
		hourEvent: "",
	},
];

// Nested Col into Rows // -Thanks Johnnie for helping me out with this!
for (var i = 0; i < timeBlocks.length; i++) {
	var row = $("<div>");
	row.attr("class", "row");
	$(".container").append(row);
	for (var j = 0; j < 3; j++) {
		if (j === 0) {
			var timeDisplay = $("<div>");
			timeDisplay.text(timeBlocks[i].showTime);
			timeDisplay.attr("class", "col-2 time-block hour");
		} else if (j === 1) {
			var planner = $("<textarea>");
			var event;
			planner.attr("class", "col-8 description");
			planner.attr("style", "color: black");
			planner.attr("id", "anEvent");

			// Changes background color of text box depending on what time it is. If time is on the current hour color turns red, All the time before will be turned grey, and all the time ahead will be green //
			if (testHour === timeBlocks[i].time) {
				$(planner).addClass("present");
			} else if (testHour < timeBlocks[i].time) {
				$(planner).addClass("future");
			} else {
				$(planner).addClass("past");
			}
		} else if (j === 2) {
			var save = $("<button>");
			save.attr("class", "col-2 saveBtn fas fa-save fa-4x fa-fw");
		}
	}
	// Send column detail to each row
	$(row).append(timeDisplay, planner, save);
}
