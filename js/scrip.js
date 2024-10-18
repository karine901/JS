function AddCadastro() {
    let cadastro = {
        "nome": document.getElementById("nome").value,
        "dataNascimento": document.getElementById("dataNascimento").value,
        "email": document.getElementById("email").value,
        "curso": document.getElementById("curso").value
    };
    console.log(cadastro);
}
 

function ClearCadastro() {
    document.getElementById("registrationForm").reset();
    console.log("Cadastro excluído");
}
 

let cadastros = [];
 
function AddCadastroArray() {
    let cadastro = {
        "nome": document.getElementById("nome").value,
        "dataNascimento": document.getElementById("dataNascimento").value,
        "email": document.getElementById("email").value,
        "curso": document.getElementById("curso").value
    };
    cadastros.push(cadastro);
    console.log(cadastros);
}
 
AddCadastro();
 
function viewName(){
    for(let i = 0; i < alunos.length; i++ ){
        console.log(alunos[i].nome);
    }

    
}

function updateCursos(){
    for(let i = 0; i < alunos.length; i++ ){
        alunos[i].curso = "informática"
    }

}