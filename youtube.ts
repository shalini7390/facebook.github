class youtube
{
    title:string;
    hostname:string;
    dateofupload:number;
    views:number;
    likes:number;
    dislikes:number;
constructor(v_title:string,v_hostname:string,v_dateofupload:number,v_view:number,v_likes:number,v_dislikes:number)
{
this.title=v_title,
this.hostname=v_hostname,
this.dateofupload=v_dateofupload,
this.views=v_view,
this.likes=v_likes,
this.dislikes=v_dislikes
}
getNoOfview=()=>
{
    return this.views;
}
setNoOfview=(updateview:number)=>
{
    return this.views=updateview;
}
}
let hViews=new youtube("Angular","shalini",03-08-2018,10000,8000,90);
let youTubeViews=hViews.getNoOfview();
console.log(("Angular has" + " "+youTubeViews+" " + "Views");
console.log(hViews);
let videoViews=hViews.setNoOfview(90000);
console.log("updated views" +" "+videoViews+" " + "views");
