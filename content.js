function hi()
{
    sendData = new Array();
    window.alert("updating data started");
   let table=document.getElementsByTagName("tr");
     for(let i=0;i<table.length;i++){
     current=table[i];
     let   id = current.cells[0].textContent;
     let   name = current.cells[1].textContent;
     let   code = current.cells[2].textContent;
     let   desc = current.cells[3].textContent;
     let   price = current.cells[4].textContent;
    // let   qty = current.cells[5];
    sendData.push({'id':id,"name":name,"code":code,"desc":desc,"price":price});
    }
    return sendData;
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

