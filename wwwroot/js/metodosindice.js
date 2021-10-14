$(document).ready(async()=>{

    const response=await fetch('/view_cadastro');
    const myJson=await response.json();
    myJson.forEach(row => {
        $('#tblView').find('tbody').append(`<tr>
                                            <td onClick="window.location.href='/cadastro.html?id=${row.id_func}'">${row.nome}</td>
                                            <td onClick="window.location.href='/cadastro.html?id=${row.id_func}'">${row.cpf}</td>
                                            <td onClick="window.location.href='/cadastro.html?id=${row.id_func}'">${row.telefone}</td>
                                            <td onClick="window.location.href='/cadastro.html?id=${row.id_func}'">${row.email}</td>
                                            <td onClick="window.location.href='/cadastro.html?id=${row.id_func}'">${row.nome_depart}</td>
                                            <td><a class="nav-link" href="#" onClick=deletarCadastro(${row.id_func})>Deletar cadastro</a></td>
                                            </tr>`);
    });
    $('#tblView').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'excel', 'print'
        ]
    } );
});

async function deletarCadastro(id){
    await fetch('/delete_cadastro',{
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        method:'POST',
        body:JSON.stringify({
            id:id
        })
    });
    window.location.href="/";
}

