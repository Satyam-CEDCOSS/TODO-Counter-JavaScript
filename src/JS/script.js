function plus() {
    var x=document.getElementById("count").innerHTML;
    x++;
    document.getElementById("count").innerHTML=x;
}

function minus() {
    if (document.getElementById("count").innerHTML==0){

    }
    else{
        var x=document.getElementById("count").innerHTML;
        x--;
        document.getElementById("count").innerHTML=x
    }
}