    var x=20, y=20, r=20;
    var t, g; //tahvel, graafiline kontekst

    var x1=30, y1=20, r1=6;

    var x2=10, y2=20, r2=6;

    var ysamm=1, ykiirendus=0.4;
    var ysamm1=1, ykiirendus1=0.4;
    var ysamm2=1, ykiirendus2=0.4;

function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 30);
}

// joonistab palli
function joonista(){

    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="red";
    g.fillStyle="red";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
}
    function joonistas(){
        g.strokeStyle="green";
        g.fillStyle="green";
        g.beginPath()
        g.arc(x1, y1, r1, 0, 2*Math.PI, true);
        g.stroke();
        g.fill();
    }

    function joonistass(){
        g.strokeStyle="green";
        g.fillStyle="green";
        g.beginPath()
        g.arc(x2, y2, r2, 0, 2*Math.PI, true);
        g.stroke();
        g.fill();
    }

// kukkumine alla   Y
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;

    ysamm1=ysamm1+ykiirendus1;
    y1=y1+ysamm1;

    ysamm2=ysamm2+ykiirendus2;
    y2=y2+ysamm2;

    /*hiirAlla(e)*/
    joonista();
    joonistas()
    joonistass()

}/*
    function hiirAlla(e){
        var tahvlikoht=t.getBoundingClientRect();
        x=hx;
        y=hy;
        var hx=e.clientX-tahvlikoht.left;
        var hy=e.clientY-tahvlikoht.top;

        ysamm=0;
    }
*/