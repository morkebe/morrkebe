function menuresto()
{
    const menu="1:acheter des tickets\n2:les heures ";
    var i = prompt(menu); 

    if(i==1)
    {
        var q = prompt("ptt dej 50");
        var r = prompt("ptt repas 100");
        alert(+q +" " +r);
    }
    if(i==2)
    {
        var y = prompt("07h/10h");
        var v = prompt("12h/14h");
        var x = prompt("19h/21h");
        alert(+y +" " +v +" " +x);
    }
}
function menuhopital()
{
    const menu="1:cm etp\n2:cm vcn";
    var p = prompt(menu);
    var n = prompt("tickets");
    var m = prompt("on te donne rv lundi prochaine");
    if(p==1)
    {
        alert(+n +" " +m);
    }
    if(p==2)
    {
        alert(+n +" " +m);
    }
}
function menubus()
{
    const menu="1:acheter des tickets\n2:les heures";
    var a = prompt(menu);
    if(a==1)
    {
        alert("50f par tickets");
    }
    if(a==2)
    {
        var y = prompt("07h00/7h15");
        var v = prompt("08h00/08h15");
        var x = prompt("12h00/12h15");
        var g = prompt("15h00/15h15");
        var b = prompt("18h00/18h15");
        alert(+y +" " +v +" " +x +" " +g +" " +b);
    }
}
function menupavillon()
{
    const menu="1:hotel du rail\n2:cite vcn";
    var i = prompt(menu)
    if(i==1)
    {
        alert("numero chambre");
    }
    if(i==2)
    {
        var q = prompt("pavillon A");
        var a = prompt("pavillon B");
        alert("donner numero chambre");
    }
}