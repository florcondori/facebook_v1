window.addEventListener('load',function(){
	function Perfil(mensaje,estado){
		this.mensaje = mensaje;
		this.estado = estado; 
		this.crearPost = function(){
			var div = document.createElement('div');
			var p = document.createElement('textarea');
			p.disabled = "true";			

			var textParrafo = document.createTextNode(this.mensaje);
			p.appendChild(textParrafo);

			var eliminar = document.createElement('a');
			eliminar.href = "#";
			eliminar.innerHTML = "eliminar";
			eliminar.addEventListener('click',function(event) {
			    event.preventDefault();
			    var postParent = event.target.parent;
			    var resp = confirm("Estar seguro de eleminar este Post");
			    console.log(resp);
			 
			  });

			var editar = document.createElement('a');
			editar.href = "#";
			editar.appendChild(document.createTextNode("Editar"));
			editar.addEventListener('click',function(event) {
				event.preventDefault();
				var postParent = event.target.parent;
				p.removeAttribute("disabled");
				console.log(p.disabled);
				//alert("editar");
			  });

			div.appendChild(p);
			div.appendChild(eliminar);
			div.appendChild(editar);

				return div;
		}
	}

	var mensajeTotales = [];
	var publicar = document.getElementById('publicar');
	var contenedorPost = document.getElementById('contenedorPost');

	publicar.addEventListener('click',function(){
		var mensaje = document.getElementById('mensaje_actual').value;
		var estado = document.getElementById('estado').value;
		

		var mensaje_actual = new Perfil(mensaje,estado);
		console.log(mensaje_actual);
		mensajeTotales.push(mensaje_actual);

		contenedorPost.appendChild(mensaje_actual.crearPost());
		console.log(mensajeTotales);
	});

	var publico = document.getElementById('publico');
	publico.addEventListener('click', function(event){
		event.preventDefault();
		var filtro = mensajeTotales.filter(function(elem){if(elem.estado=="publico"){ return elem;}});
		console.log(filtro);
	});

});