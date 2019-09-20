function validaform(){
	var nome = formsuporte.nome.value.length;
	var email = formsuporte.email.value.length;
	var telefone = formsuporte.telefone.value.length;
	var assunto = formsuporte.assunto.value.length;
	var mensagem = formsuporte.mensagem.value.length;

	if (nome == ""){
		alert("Campo nome é obrigatório");
		formsuporte.nome.focus();
		return false;
	}if (email == ""){
		alert("Campo email é obrigatório");
		formsuporte.email.focus();
		return false;
	}if (telefone == ""){
		alert("Campo telefone é obrigatório");
		formsuporte.telefone.focus();
		return false;
	}if (assunto == ""){
		alert("Insira o assunto da mensagem");
		formsuporte.nome.focus();
		return assunto;
	}if (mensagem == ""){
		alert("Por favor, explique para nós o que você precisa.");
		formsuporte.mensagem.focus();
		return false;
	}
}

function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
	v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}
function id( el ){
	return document.getElementById( el );
}
