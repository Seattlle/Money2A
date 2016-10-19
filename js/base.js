$(function() {
	$("#sign-in").on("click", function() {
		location.href = "login.html";
	});
	$("#sign-up").on("click", function() {
		location.href = "regist.html";
	});
	$("body").on("click", ".tongyi,.m_radio,.status,.check", function() {
		$(this).toggleClass("checked");
		if ($(this).hasClass("m_radio")) {
			$(this).siblings(".checked").removeClass("checked");
		}
		if ($(this).hasClass("check")) {
			$(this).siblings("li.checked").removeClass("checked");
		}
	});
	$("body").on("click", ".question", function() {
		$(this).next().fadeToggle();
	});
});