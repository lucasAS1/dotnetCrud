let regexCPF="999.999.999-99";
let regexTel="(99)9999-9999";
let regexCel="(99)99999-9999";



$("#txtCPF").mask("000.000.000-00")

$("#txtTelefone").keyup(()=>{
    if($("#txtTelefone").val().length<13){
        $("#txtTelefone").mask("(00)0000-0000")
    }else{
        $("#txtTelefone").mask("(00)00000-0000")
    }
});
