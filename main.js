let box=document.createElement('div');
let mainbox=document.createElement('div');
let input=document.createElement("input");
input.setAttribute('type','text');
input.setAttribute('id','taketext');


mainbox.append(input);
box.append(mainbox);
main.append(box);
let btn=document.createElement("button");
let btntext=document.createTextNode("Click Me");
btn.setAttribute('onclick','result()');
btn.append(btntext);
mainbox.append(btn);
let ol=document.createElement('ol');
let h=document.createElement("h3");
h.textContent="Enter you text";
ol.append(h);

btn.style.backgroundColor="green";
btn.style.padding="12px 30px"
btn.style.border="0px"
btn.style.outline="none"
btn.style.borderRadius="10px";

input.style.height="28px"
input.style.width="30vw";

main.style.backgroundColor="pink";
main.style.display="flex";
main.style.justifyContent="center"
main.style.alignItem="center";
main.style.height="100%";

box.style.backgroundColor="#06bbbb";
box.style.width="53%";
box.style.height="550px";
box.style.display="flex";
box.style.flexDirection="column"
box.style.alignItems="center"
box.style.marginTop="10px"

mainbox.style.marginTop="20px"

ol.style.height="400px";

ol.style.width="279px"
ol.style.overflow="scroll"

// ol.style.backgroundColor="RED"
ol.style.marginLeft="-100px"

function result(){ 
let li=document.createElement('li');
li.setAttribute('id','textid');
li.style.backgroundColor="GRey"
li.style.color="cyan"

li.style.fontSize="25px"
li.style.height="30px"
li.style.width="250px"
li.style.lineHeight="30px";
li.style.textAlign="center"
li.style.marginTop="5px"
li.textContent=taketext.value;
taketext.value=" ";
ol.append(li);
if(h.value){   }
else{
    h.remove();
}
}
box.append(ol);


