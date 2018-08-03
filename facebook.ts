class facebook
{
    name:string;
    city:string;
    education:string;
    dob:number;
    mobileno:number;
    work:string;
    email_id:string;
constructor(fbname:string,fbcity:string,fbeducction:string,fbdob:number,fbmobileno:number,fbwork:string,fbemail_id:string)
{
this.name=fbname,
this.city=fbcity,
this.education=fbeducction,
this.dob=fbdob,
this.mobileno=fbmobileno,
this.work=fbwork,
this.email_id=fbemail_id
}
getName=()=>
{
    return this.name;
}
setWork=(updateWork:string)=>
{
    return this.work=updateWork;
}
}
let fbProfile=new facebook('shalini Dubey','Hyderabad','B.E',07-03-1990,8712710289,'notyet','dubey.shalini@gmail.com',);
let userName=fbProfile.getName();
console.log(fbProfile);
console.log(userName);
let workUpadte=fbProfile.setWork("google");
console.log("updated work" +" "+workUpadte+" " + "");
