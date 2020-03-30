var ENV = {
	TEST: { name: "TEST", domain: "www.testcam.tv" },
	PROD: { name: "PROD", domain: "www.cam.tv" },
}

function RenderSdkScript(env) {
	var htmlString = "&lt;script src=\"https://{ENV}/assets/js/camtv_login_v3.js\"&gt;&lt;/script&gt;";
	switch (env) {
		case ENV.TEST.name:
			htmlString = htmlString.replace("{ENV}", ENV.TEST.domain);
			break;
		case ENV.PROD.name:
			htmlString = htmlString.replace("{ENV}", ENV.PROD.domain);
			break;
	}
	$(".SdkScript").html(htmlString);
}

$(document).ready(function () {

	$(".ChangeEnv a").on("click", function (evt) {
		var jqLink = $(evt.currentTarget);
		var env = jqLink.attr("data-env");
		RenderSdkScript(env);
	})

	RenderSdkScript(ENV.PROD.name);

})