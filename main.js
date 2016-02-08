$(function() {
	console.log("init")
	$(".main-button").on("click", function() {
		$(".button-wrapper").addClass("clicked")
		$(".layered_content").delay(800).queue(function() {
			$(".layered_content").addClass("active")
			$(".layered_content").fadeIn("slow")
		})
	})
})