
function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById('table_1').deleteRow(i);
       
}
function finishRow(r) {
     
     if(r.checked){
        r.parentNode.nextSibling.style.textDecoration ="line-through"; 
     }
     else   r.parentNode.nextSibling.style.textDecoration ="none"; 
       
}
function Delete_all(){
    var elmtTable = document.getElementById('table_1');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x=rowCount-1; x>0; x--) {
        elmtTable.removeChild(tableRows[x]);
}
}
function Add() {
        var table = document.getElementById('table_1');
        var tr_1 = document.createElement('tr');
        var button_2 = document.createElement("input");    
        var inpute = document.querySelectorAll('.form input');
        button_2.setAttribute("onclick", "deleteRow(this)");
        button_2.type = "button";
        button_2.value = "Удалить";
        button_2.className = "delete";
        var checkbox = document.createElement('input'); 
        checkbox.type= 'checkbox';
        checkbox.name = "finished";
        checkbox.setAttribute("onclick", "finishRow(this)");
        var td_1 = document.createElement('td');
        td_1.appendChild(checkbox);
        tr_1.appendChild(td_1);  
        var td_1 = document.createElement('td');
        td_1.innerHTML = inpute[0].value;
        tr_1.appendChild(td_1);  
        var td_1 = document.createElement('td');
        td_1.innerHTML = inpute[1].value;
        tr_1.appendChild(td_1); 
        var td_1 = document.createElement('td');
        td_1.appendChild(button_2);
        tr_1.appendChild(td_1);  
        table.appendChild(tr_1); 
}
