window.addEventListener('load',function(){
	var publicar = document.getElementById('publicar');
	var publico = document.getElementById('publico');
	var privado = document.getElementById('privado');

	var contenedorPost = document.getElementById('contenedorPost');
	var id = 0;
	var arrayPost = [];

	publicar.addEventListener('click',function(e){
		e.preventDefault();
		var mensaje = document.getElementById('mensaje_actual').value;
		var estado = document.getElementById('estado').value;
		id++;

		var mensajeActual = new Perfil(id,mensaje,estado);
		arrayPost.push(mensajeActual);
		console.log(arrayPost);
		contenedorPost.appendChild(mensajeActual.crearPost());

		document.getElementById('formulario').reset();

	});
	
	publico.addEventListener('click', function(event){
		event.preventDefault();
		var soloPublico = arrayPost.filter(elem => elem.estado=="publico");
		console.log(soloPublico);
	});

	privado.addEventListener('click', function(event){
		event.preventDefault();
		var soloPrivado = arrayPost.filter(elem => elem.estado=="privado");
		console.log(soloPrivado);
	});

});
