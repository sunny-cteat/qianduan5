let mima1=document.getElementById('mima1');
let mima2=document.getElementById('mima2');
function check(){
    if(mima1.value != mima2.value){
        alert("两次输入密码不一致")
        mima1.value=/^[0-9][a-z][A-Z]{8,}$/;
        mima2.value="";
    }
}