const span = document.getElementById("span");
const formPlanner = document.getElementById("formPlanner");
const plannerContainer = document.getElementById("plannerContainer");
const timeContainer = document.getElementById("timeContainer");
const time = document.getElementById("time");
const todoinput = document.getElementById("todoinput");

Date.prototype.monthName = function () {
	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return monthsOfYear[this.getMonth()];
};

// As with the previous block, this block states the days of the week so the script
// can match the named days of the week to corresponding numerical values.

Date.prototype.dayName = function () {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return daysOfWeek[this.getDay()];
};

function realtimeClock() {
	const now = new Date(),
		today = now.dayName(),
		year = now.getFullYear(),
		month = now.monthName(),
		day = now.getDate(),
		secs = ("0" + now.getSeconds()).slice(-2),
		mins = ("0" + now.getMinutes()).slice(-2),
		hours = now.getHours(),
		container = document.querySelector(".clock");

	span.textContent = `${today}, ${day} ${month} ${year}. 
    Time: ${hours}:${mins}:${secs}`;

	requestAnimationFrame(realtimeClock);
}

requestAnimationFrame(realtimeClock);

function myFunction() {
	let time = [
		"8am:",
		"9am:",
		"10am:",
		"11am:",
		"12pm:",
		"1pm:",
		"2pm:",
		"3pm:",
		"4pm:",
		"5pm:",
		"6pm:",
	];

	for (let i = 0; i < time.length; i++) {
		console.log(time[i]);

		let div = document.createElement("div");
		div.id = "timeContainer";
		div.className = "input-group";
		div.className = "flex-nowrap";

		let span = document.createElement("span");
		span.id = "time";
		span.className = "input-group-text";
		span.innerText = `${time[i]}`;
		// console.log(span);

		let input = document.createElement("input");
		input.id = "todoinput";
		input.className = "form-control";
		input.type = "text";
		// console.log(input);

		let button = document.createElement("button");
		button.id = "saveButton";
		button.className = "btn";
		button.className = "btn-outline-secondary";
		button.innerText = "SAVE";
		button.type = "button";

		div.appendChild(span);
		span.appendChild(input);
		span.appendChild(button);

		plannerContainer.appendChild(div);
		console.log(plannerContainer);
	}
}

myFunction();
