//要想获取必须先去设置
function  cssTransform(obj,attr,val) {
    if(!obj.transform ){
        obj.transform={};
    }
    if(arguments.length===3){//三个参数设置
        obj.transform[attr]=val;
        var strVal='';
        for(var key in obj.transform){
            switch (key){
                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                    strVal+=key+'('+obj.transform[key] +'deg)';
                    break;
                case  'translate':
                case  'translateX':
                case  'translateY':
                    strVal+=key+'('+obj.transform[key] +'px)';
                    break;
                case  'scale':
                case  'scaleX':
                case  'scaleY':
                    strVal+=key+'('+obj.transform[key] +'px)';
                    break;
            }
            obj.style.transform=strVal;
            //console.log(strVal);
        }
    }else {//两个参数
        // val=obj.transform[attr];
        val = obj.transform[attr];
        if(typeof val=='undefined' ){
            if(attr==='scale'|| attr==='scaleX'|| attr==='scaleY'){
                val=1;
            }else {
                val=0;
            }
        }
        return val;
    }
}