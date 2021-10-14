$(document).ready(async()=>{
    let query=window.location.search;
    let req=new URLSearchParams(query);
    let id=req.get('id');

    if(id==undefined)
    { 
        document.getElementById('btnSubmit').onclick=async()=>{
            await fetch('/save_cadastro',{
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                method:'POST',
                body:JSON.stringify({
                    txtNome:document.getElementById('txtNome').value,
                    txtCPF:document.getElementById('txtCPF').value.replace(/\D/g,''),
                    txtTelefone:document.getElementById('txtTelefone').value.replace(/\D/g,''),
                    txtEmail:document.getElementById('txtEmail').value,
                    slcDepart:document.getElementById('slcDepart').selectedIndex
                })
            });
            window.location.href="/";
        };
        return;
    }
    const res=await fetch(`/view_cadastro?id=${id}`);
    const json=await res.json();
    document.getElementById('txtNome').value=json[0].nome;
    document.getElementById('txtCPF').value=json[0].cpf;
    document.getElementById('txtTelefone').value=json[0].telefone;
    document.getElementById('txtEmail').value=json[0].email;
    switch(json[0].nome_depart){
        case "TI":
            document.getElementById('slcDepart').selectedIndex=1;
            break;
        case "RH":
            document.getElementById('slcDepart').selectedIndex=2;
            break;
        case "Limpeza":
        document.getElementById('slcDepart').selectedIndex=3;
        break;
        case "Operacional":
            document.getElementById('slcDepart').selectedIndex=4;
            break;
        default:
        case "TI":
            document.getElementById('slcDepart').selectedIndex=0;
    };
    document.getElementById('hdnId').value=json[0].id_func;
    
    document.getElementById('btnSubmit').onclick=async()=>{await fetch('/update_cadastro',{
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                method:'POST',
                body:JSON.stringify({
                    txtNome:document.getElementById('txtNome').value,
                    txtCPF:document.getElementById('txtCPF').value.replace(/\D/g,''),
                    txtTelefone:document.getElementById('txtTelefone').value.replace(/\D/g,''),
                    txtEmail:document.getElementById('txtEmail').value,
                    slcDepart:document.getElementById('slcDepart').selectedIndex,
                    hdnId:document.getElementById('hdnId').value
                })
            });
            window.location.href="/";
        }
})