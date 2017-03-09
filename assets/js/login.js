window.addEventListener('load',function(){
	var usuarios = [{email:"condorihuamanif@gmail.com",password:"12345"},
				{email:"camilaramos@gmail.com",password:"camila"},
				{email:"wilson_1992@gmail.com",password:"wilson"}];

	var login = document.getElementById('login');
	login.addEventListener('click',function(){
		var usuario = document.getElementById('usuario').value;
		var password = document.getElementById('password').value;
		var mensaje_usuario = document.getElementById('mensaje_usuario');
		var mensaje_password = document.getElementById('mensaje_password');

		var exprEmail = /^[a-z0-9-._]+@([a-z0-9-]+\.[a-z]{2,4})+$/;
		var encontrado;
		console.log(usuario,password);

		if(usuario!="" && password != ""){
			mensaje_usuario.innerHTML = "";
			if(exprEmail.test(usuario)){
				mensaje_usuario.innerHTML = "";
				encontrado = usuarios.filter(function(elemento){if(elemento.email == usuario){return elemento;}});
				console.log(encontrado[0]);
		
				if(encontrado.length!=0){
					mensaje_usuario.innerHTML = "";
					if(password == encontrado[0].password){
						mensaje_password.innerHTML = "";
						window.location ="perfil.html";
					}else{
						mensaje_password.innerHTML = "Password Incorrecto";	
						}
				}else{
					mensaje_usuario.innerHTML = "Usuario no registrado";
					}
			}else{
				mensaje_usuario.innerHTML = "Ingrese el formato correcto: nombre@dominio.com";
			}
			
			
		}else{
				mensaje_usuario.innerHTML = "Ingrese un usuario";
			}
	});
});