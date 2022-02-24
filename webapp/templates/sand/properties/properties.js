$(document).ready(() => {
	$(".toggle-panel").on("click", () => {
		$("#properties-panel-parent").toggleClass("collapsed");
		$("#js-canvas").toggleClass("col-md-12 col-md-8");
		$("#btn-toggle > i").toggleClass("bi bi-toggle-on bi bi-toggle-off");
		return false;
	});
});
