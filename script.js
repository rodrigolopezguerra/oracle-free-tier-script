const findElement_script = (selector) => document.querySelector(selector);

const findElementByText_script = (selector, text) => {
	const elements = document.querySelectorAll(selector);
	for (const el of elements) {
		if (el.textContent.trim() === text || el.getAttribute('aria-label') === text) {
			return el;
		}
	}
	return null;
};

const btnCreate_script = findElementByText_script('button', 'Create');
if (!btnCreate_script) {
    throw new Error("Failed to find 'Create' button");
}

const contentsElmt_script = document.body;
const headerElmt_script = findElement_script('header') || document.querySelector('header') || document.body;

if (!contentsElmt_script)
	throw new Error("Failed to find contents element");

if (!headerElmt_script)
	throw new Error("Failed to find header element");

const sessionWindow_script = window.open(
	"https://cloud.oracle.com",
	"_blank",
	"height=400,width=400;popup=true"
);

const statusElmt_script = document.createElement("div");
statusElmt_script.setAttribute("style", `
	z-index: 9999999999999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	color: white;
	background-color: #00688c;
	box-shadow: 0px 0px 10px -4px black;
	white-space: break-spaces;
`);

const setStatusHeight_script = () => {
	if (headerElmt_script?.clientHeight) {
		statusElmt_script.style.height = `${headerElmt_script.clientHeight}px`;
	} else {
		statusElmt_script.style.height = '60px';
	}
};

setStatusHeight_script();
window.addEventListener("resize", setStatusHeight_script);
contentsElmt_script.prepend(statusElmt_script);

const logStyle_script = color => `background-color: #222; color: ${color}`;

console.clear();

console.info(
	"%c *** Started Oracle compute instance creation script *** ",
	logStyle_script("#e0b414")
);
console.info(
	"%c *** DO NOT CLOSE THE POPUP WINDOW! *** ",
	logStyle_script("#ff4d4d")
);
console.info(
	"%c *** Filter logs with '***' to only show outputs from this script. *** ",
	logStyle_script("#f0dd99")
);
console.info(
	"%c *** It's advised to close dev tools while the script is running, as over long periods of time it may crash (Oracle's fault). *** ",
	logStyle_script("#f0dd99")
);
console.info(
	"%c *** You can change the interval duration between clicks on the fly by changing the value of the variable `INTERVAL_DURATION_script` - default is 30 (seconds). *** ",
	logStyle_script("#f0dd99")
);
console.info(
	"%c *** UI Detected: New (Direct document) *** ",
	logStyle_script("#7cde6f")
);

const currentTime_script = () => {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
};

let INTERVAL_DURATION_script = 30;

const countdownDuration_script = () => Math.round(INTERVAL_DURATION_script);

let countdown_script = countdownDuration_script();

void setInterval(() => {
	if (countdown_script > 0) {
		statusElmt_script.style.backgroundColor = "#00688c";
		statusElmt_script.innerHTML = `Clicking in <b>${countdown_script} seconds</b>`;
		countdown_script--;
		return;
	}

	sessionWindow_script.location.reload();
	btnCreate_script.click();
	statusElmt_script.style.backgroundColor = "#44bd50";
	statusElmt_script.innerHTML = `Create clicked!`;
	console.log(
		`%c *** Clicked 'Create' at ${currentTime_script()} *** `,
		logStyle_script("#7cde6f")
	);
	countdown_script = countdownDuration_script();
}, 1000);
