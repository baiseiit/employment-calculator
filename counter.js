function count() {
	let hour = document.getElementById("hour").value;
	let studiedHours = document.getElementById("studiedHours").value;
	let result = document.getElementById("result");

	const REQUIRED_HOUR_MIDDLE = 2000;

	if (studiedHours >= REQUIRED_HOUR_MIDDLE) {
		result.innerHTML = "Сіз дайын мамансыз!";
		return;
	}

	if (hour < 1 || hour > 168) return;

	let resultInDays = ((REQUIRED_HOUR_MIDDLE - studiedHours) / hour) * 7;

	if (resultInDays >= 365) {
		result.innerHTML = Math.round(resultInDays / 365) + " жыл";
	} else {
		let necessaryMonths = Math.round(resultInDays / 30);

		if (necessaryMonths == 0) {
			result.innerHTML = "Сіз дайын мамансыз!";
			return;
		}

		result.innerHTML = necessaryMonths + " ай";
	}
}