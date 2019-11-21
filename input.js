function yanzheng(){
    var phone = document.getElementById('phone').value;
    if(/^1[34578]\d{9}$/.test(phone)){
        alert("提交成功");
    }else{
        alert("格式有错误");
    }                                                                                                                           
}