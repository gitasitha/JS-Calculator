let nownumber;
let privices;
let op;

function num0(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.0";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=0;
    }
    else{
        document.getElementById("display").innerHTML=privices+0;
    }
}
function num1(){
    let privices =String(document.getElementById("display").innerHTML);
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.1";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=1;
    }
    else{
        document.getElementById("display").innerHTML=privices+1;
    }
}
function num2(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.2";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=2;
    }
    else{
        document.getElementById("display").innerHTML=privices+2;
    }
}
function num3(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.3";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=3;
    }
    else{
        document.getElementById("display").innerHTML=privices+3;
    }
}
function num4(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.4";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=4;
    }
    else{
        document.getElementById("display").innerHTML=privices+4;
    }
}
function num5(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.5";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=5;
    }
    else{
        document.getElementById("display").innerHTML=privices+5;
    }
}
function num6(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.6";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=6;
    }
    else{
        document.getElementById("display").innerHTML=privices+6;
    }
}
function num7(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.7";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=7;
    }
    else{
        document.getElementById("display").innerHTML=privices+7;
    }
}
function num8(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.8";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=8;
    }
    else{
        document.getElementById("display").innerHTML=privices+8;
    }
}
function num9(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.9";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=9;
    }
    else{
        document.getElementById("display").innerHTML=privices+9;
    }
}
function num00(){
    let privices =document.getElementById("display").innerHTML;
    if(privices=="0."){
        document.getElementById("display").innerHTML="0.00";
    }
    else if(privices==0){
        document.getElementById("display").innerHTML=0;
    }
    else{
        document.getElementById("display").innerHTML=privices+"00";
    }
}
function numpoint(){
    let privices =document.getElementById("display").innerHTML;
    if(privices==0){
        document.getElementById("display").innerHTML="0.";
    }
    else{
        document.getElementById("display").innerHTML=privices+".";
    }
}
function add(){
    privices=document.getElementById("display").innerHTML;
    if(privices!=0){
        document.getElementById("display").innerHTML=privices+"+";
    }
    else{
        document.getElementById("display").innerHTML=0; 
    }
    op=1;
}
function sub(){
    privices=document.getElementById("display").innerHTML;
    if(privices!=0){
        document.getElementById("display").innerHTML=privices+"-";
    }
    else{
        document.getElementById("display").innerHTML=0; 
    }
    op=2;
}
function mlt(){
    privices=document.getElementById("display").innerHTML;
    if(privices!=0){
        document.getElementById("display").innerHTML=privices+"*";
    }
    else{
        document.getElementById("display").innerHTML=0; 
    }
    op=3;
}
function div(){
    privices=document.getElementById("display").innerHTML;
    if(privices!=0){
        document.getElementById("display").innerHTML=privices+"/";
    }
    else{
        document.getElementById("display").innerHTML=0; 
    }
    op=4;
}
function pre(){
    privices=document.getElementById("display").innerHTML;
    if(privices!=0){
        document.getElementById("display").innerHTML=privices+"%";
    }
    else{
        document.getElementById("display").innerHTML=0;
    }
    op=5;
}
function equ(){
    nownumber=document.getElementById("display").innerHTML;
    let numbr=parseFloat(privices);
    let secnumber=nownumber.slice(privices.length);
    let disnum=parseFloat(secnumber.slice(1,secnumber.length));

    if(op==1){
        document.getElementById("display").innerHTML=numbr+disnum;
    }
    else if(op==2){
        document.getElementById("display").innerHTML=numbr-disnum;
    }
    else if(op==3){
        document.getElementById("display").innerHTML=numbr*disnum;
    }
    else if(op==4){
        document.getElementById("display").innerHTML=numbr/disnum;
    }
    else if(op==5){
        document.getElementById("display").innerHTML=(numbr/100)*disnum;
    }
    else{
        document.getElementById("display").innerHTML="Invalide Syntax";
    }
}
function e(){
    let privices = document.getElementById("display").innerHTML;
    let er=privices.slice(0,-1);
    if(privices.length==1){
        document.getElementById("display").innerHTML=er+0;
    }
    else{
        document.getElementById("display").innerHTML=er;
    }
    op=0;
    privices=0;
    nownumber=0;
}
function ac(){
    let privices =document.getElementById("display").innerHTML;
    let er=privices.slice(privices.length);
    document.getElementById("display").innerHTML=er+0;
    op=0;
    privices=0;
    nownumber=0;
}
