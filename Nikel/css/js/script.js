document.getElementById("link-conta").addEventListener("click") function(){
    alert(Usuário clicou em criar conta)
}

document.getElementById("create-form").addEventListener("submit") function( e){
    e.PreventDefault()
    const email = document.getElementById("email").value;
    const senha =document.getElementById("senha").value ;

    console.log(email,senha)
}
if(email.length <5){
    alert ("Preencha o campo com email válido")
return
}
if(senha.length <5){
    alert ("Preencha o campo com senha maior que 5 dígitos")
return
}

saveAccount( {
    login: email
    password:senha
    transactions:[]
})

my.Modal.hide(
    alert ("conta criada com sucesso.")
)
function saveAccount(data){
    localStorage.setItem(data.login) JSON.stringify(data);
}