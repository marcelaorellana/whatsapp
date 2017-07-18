$(document).ready(function(){
	$("#perfil-peru").on("click", function(e){
  		$("#chat1").show();
  		$("#chat2").hide();
  		$("#chat3").hide();
  	});
  	$("#perfil-raymi").on("click", function(e){
  		$("#chat1").hide();
  		$("#chat2").show();
  		$("#chat3").hide();
  	});
  	$("#perfil-mariana").on("click", function(e){
  		$("#chat1").hide();
  		$("#chat2").hide();
  		$("#chat3").show();
  	});


	$("#boton-enviar1").on("click", function(e){
		var text = $("#chat-input1").val();
		if(text != ""){
			var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
			$(".blockes1").append(block);
			$("#last-peru").text(text);
			$("#chat-input1").val("");
		}
	});
	$("#chat1").keypress(function(event) {
		if(event.which == 13) {
	       event.preventDefault();
	     	var text = $("#chat-input1").val();
			if(text != ""){
				var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
				$(".blockes1").append(block);
				$("#last-peru").text(text);
				$("#chat-input1").val("");
			}
	    }
	});

	$("#boton-enviar2").on("click", function(e){
		var text = $("#chat-input2").val();
		if(text != ""){
			var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
			$(".blockes2").append(block);
			$("#last-raymi").text(text);
			$("#chat-input2").val("");
		}
	});
	$("#chat2").keypress(function(event) {
		if(event.which == 13) {
	       event.preventDefault();
	     	var text = $("#chat-input2").val();
			if(text != ""){
				var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
				$(".blockes2").append(block);
				$("#last-raymi").text(text);
				$("#chat-input2").val("");
			}
	    }
	});

	$("#boton-enviar3").on("click", function(e){
		var text = $("#chat-input3").val();
		if(text != ""){
			var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
			$(".blockes3").append(block);
			$("#last-marianai").text(text);
			$("#chat-input3").val("");
		}
	});
	$("#chat3").keypress(function(event) {
		if(event.which == 13) {
	       event.preventDefault();
	     	var text = $("#chat-input3").val();
			if(text != ""){
				var block= ('<div class="block-b"><div class="caja-mio"><p class="chat-p">'+ text + '</p><p class="hora">12:20</p></div></div>');
				$(".blockes3").append(block);
				$("#last-mariana").text(text);
				$("#chat-input3").val("");
			}
	    }
	});



});