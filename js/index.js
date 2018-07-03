function touch(plane) {
    var startX=0;
    var startY=0;
    var pX=0;
    var pY=0;
    document.ontouchstart=function (e) {
        console.log(e.touches[0]);
        console.log(e.targetTouches);
        console.log(e.changedTouches[0]);
        startX=e.changedTouches[0].pageX;
        startY=e.changedTouches[0].pageY;
        pX=plane.offsetLeft;
        pY=plane.offsetTop;
    }
    document.ontouchmove=function (e) {
        var nX=e.changedTouches[0].pageX;
        var nY=e.changedTouches[0].pageY;
        var left=nX-startX;
        var top=nY-startY;
        console.log(left,plane.offsetLeft);
        console.log(top,plane.offsetTop);
        plane.style.left=pX+left+"px";
        plane.style.top=pY+top+"px";
        // cssTransform(plane,'translateX',left);
        // cssTransform(plane,'translateY',top);
    }
}