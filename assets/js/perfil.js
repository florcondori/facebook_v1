function Perfil(id,mensaje,estado){
	this.id = id;
	this.mensaje = mensaje;
	this.estado = estado;  
	
	this.crearPost = function(){
		var div = document.createElement('div');
		div.setAttribute('id',this.id);
		div.classList.add('div-post');
		var p = document.createElement('p');
		p.innerHTML = this.mensaje;
		
		var eliminar = document.createElement('a');
		eliminar.setAttribute('href',"#");
		eliminar.innerHTML = "Eliminar";
		eliminar.addEventListener('click',function(event) {
		    event.preventDefault();
		    var confirmEliminar = confirm("Estar seguro de eleminar este Post");
		    if(confirmEliminar){
		    	document.getElementById('contenedorPost').removeChild(event.target.parentNode);
		    	
		    } 		    
		   
		    		 
		 });

		var editar = document.createElement('a');
		
		editar.setAttribute('href',"#");
		editar.innerHTML = "Editar";
		editar.addEventListener('click',function(event) {
			event.preventDefault();
			var textP = event.target.parentNode.getElementsByTagName('p')[0].innerHTML;
			var arrayA = event.target.parentNode.getElementsByTagName('a');
			var textArea = document.createElement('textarea');
			textArea.innerHTML = textP;
			event.target.parentNode.insertBefore(textArea,p);
			event.target.parentNode.insertBefore(document.createElement('br'),arrayA[0]);
			event.target.parentNode.removeChild(p);
			editar.classList.add('ocultar');
			arrayA[2].classList.remove('ocultar');
		});

		var guardar = document.createElement('a');
		guardar.classList.add('ocultar');
		guardar.setAttribute('href',"#");
		guardar.innerHTML = "Guardar";
		guardar.addEventListener('click',function(event){
			event.preventDefault();
			guardar.classList.add('ocultar');
			editar.classList.remove('ocultar');
		})

		div.appendChild(p);
		div.appendChild(eliminar);
		div.appendChild(editar);
		div.appendChild(guardar);

			return div;
	}
}
