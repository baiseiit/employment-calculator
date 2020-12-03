function count() {
	let hour = document.getElementById("hour").value;
	let result = document.getElementById("result");

	if (hour < 1 || hour > 168) return;

	const REQUIRED_HOUR_MIDDLE = 2000;

	let resultInDays = (REQUIRED_HOUR_MIDDLE / hour) * 7;

	if (resultInDays >= 365) {
		result.innerHTML = Math.round(resultInDays / 365) + " year";
	} else {
		result.innerHTML = Math.round(resultInDays / 30) + " month";
	}
}