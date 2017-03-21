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
		eliminar.setAttribute('id',"eliminar");
		eliminar.innerHTML = "Eliminar";
		eliminar.addEventListener('click',function(event) {
			event.preventDefault();
		    var confirmEliminar = confirm("Estar seguro de eleminar este Post");
		    if(confirmEliminar){
		     	document.getElementById('contenedorPost').removeChild(event.target.parentNode);
		     	var idPost = event.target.parentNode.getAttribute('id');
		     	var index = arrayPost.forEach(function(elem,i){if(elem[id] == idPost){ return i;}});
		     	arrayPost.splice(index,1);
		     	console.log(arrayPost);
		    }    
		  		    		 
		});

		var editar = document.createElement('a');		
		editar.setAttribute('href',"#");
		editar.innerHTML = "Editar";
		editar.addEventListener('click',function(event) {
			event.preventDefault();
			var parrafo = event.target.parentNode.getElementsByTagName('p')[0];
			var textParrafo = parrafo.innerHTML;
			var arrayA = event.target.parentNode.getElementsByTagName('a');
			var textArea = document.createElement('textarea');
			textArea.value = textParrafo;
			event.target.parentNode.insertBefore(textArea,parrafo);
			event.target.parentNode.insertBefore(document.createElement('br'),arrayA[0]);
			event.target.parentNode.removeChild(parrafo);
			editar.classList.add('ocultar');
			arrayA[2].classList.remove('ocultar');
		});

		var guardar = document.createElement('a');
		guardar.classList.add('ocultar');
		guardar.setAttribute('href',"#");
		guardar.innerHTML = "Guardar";
		guardar.addEventListener('click',function(event){
			event.preventDefault();
			var textArea = event.target.parentNode.getElementsByTagName('textarea')[0];
			var textTextArea = textArea.value;
			var parrafo = document.createElement('p');
			parrafo.innerHTML = textTextArea;
			event.target.parentNode.insertBefore(parrafo,eliminar);
			event.target.parentNode.removeChild(event.target.parentNode.getElementsByTagName('br')[0]);
			event.target.parentNode.removeChild(textArea);
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