function hi()
{
    window.alert("updating data started");
   let table=document.getElementsByTagName("table")[0].rows;
    for(let i=1, len = table.length,current=[];i<len;i++){
        current = table[i];
     console.log(i);
     console.log(current);
     break;
     let   id = current.cells(0);
     let   name = current.cells(1);
     let   code = current.cells(2);
     let   desc = current.cells(3);
     let   price = current.cells(4);
     let   qty = current.cells(5);
     

    }
}
hi();

    //window.alert("Name :  Hello World");
   // window.alert("welecome to open-vision-updater !!!");

a = document.createElement('a');
icon= document.createElement('img');
icon.id='icon';
link = document.createTextNode("update");
a.appendChild(link);
a.appendChild(icon);
a.id='activateUpdate';
a.href='#';
a.addEventListener("click",hi)
document.body.appendChild(a);
console.log('working on the page');

