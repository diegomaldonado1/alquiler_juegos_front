
function traerInformacion_games(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta_games(respuesta);
        }
    });
}

function pintarRespuesta_games(items){
    $("#resultado_games").empty();
    var tblBody = document.createElement("tbody");
    let myTable=`<table style="width:100%">`;
    myTable+= "<tr>" ;
    myTable+= "<th>id</th>";
    myTable+= "<th>name</th>";
    myTable+= "<th>developer</th>";
    myTable+= "<th>year</th>";
    myTable+= "<th>description</th>";
  //  myTable+= "<th>Borrar</th>";
    myTable+=  "</tr>";

  
    for(i=0;i<items.length;i++){
    
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].developer+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
    //    myTable+="<td> <button onclick='borrarElemento_games("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado_games").append(myTable);
}

function guardarInformacion_games(){
    let myData={
        name:$("#name_games").val(),
        developer:$("#developer").val(),
        year:$("#year_game").val(),
        description:$("#description_game").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Game/save",
        contentType: "application/json; charset=utf-8",
        type:"POST",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("se ha Actualizado")
 //           window.location.reload()
            traerInformacion_games();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
 //           window.location.reload()
            traerInformacion_games();
        }

    });

}


function editarInformacion_games(){
    let myData={
        id:$("#id_games").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name_games").val(),
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/games/games",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            alert("se ha Actualizado")
            
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('Error');
        }
    });
}

function borrarElemento_games(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/games/games",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado_games").empty();
            traerInformacion_games();
            alert("Se ha Eliminado.")
        },
        error : function(respuesta) {
            alert('Disculpe, existió un problema');
        }
    });
}





// --------------------------- clientes

function traerInformacion(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(items){

    $("#resultado").empty();

    var tblBody = document.createElement("tbody");
    let myTable=`<table style="width:100%">`;
    myTable+= "<tr>" ;
    myTable+= "<th>id</th>";
    myTable+= "<th>Name</th>";
    myTable+= "<th>email</th>";
    myTable+= "<th>age</th>";
    myTable+= "<th>password</th>";
  //  myTable+= "<th>Borrar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idClient+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td>"+items[i].password+"</td>";
     //   myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        age:$("#password").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Client/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("se ha Actualizado")
 //           window.location.reload()
            traerInformacion();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
 //           window.location.reload()
            traerInformacion();
        }


                   });

}


function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        };
    
        

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha Actualizado")
        },
        error : function(respuesta) {
            alert('El usuario no existe');
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        },
        error : function(respuesta) {
            alert('Disculpe, existió un problema');
        }
    });
}



// --------------------------- message


function traerInformacion_message(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta_message(respuesta);
        }
    });
}

function pintarRespuesta_message(items){
    $("#resultado_message").empty();
    var tblBody = document.createElement("tbody");
    let myTable=`<table style="width:100%">`;
    myTable+= "<tr>" ;
    myTable+= "<th>id</th>";
    myTable+= "<th>messagetext</th>";
    //myTable+= "<th>Borrar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idMessage+"</td>";
        myTable+="<td>"+items[i].messageText+"</td>";
     //   myTable+="<td> <button onclick='borrarElemento_message("+items[i].id+")'>Borrar</button>";
        
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado_message").append(myTable);
}

function guardarInformacion_message(){
    let myData={
        messageText:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Message/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("se ha Actualizado")
 //           window.location.reload()
            traerInformacion_message();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
 //           window.location.reload()
            traerInformacion_message();
        }

    });

}


function editarInformacion_message(){
    let myData={
        messageText:$("#messagetext").val(),
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado_message").empty();
            $("id_message").val("");
            $("#messagetext").val("");
            traerInformacion_message();
            alert("se ha Actualizado")
        },
        error : function(respuesta) {
            alert('Error');
        }
    });
}

function borrarElemento_message(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3de4fbc429f86-db202110011948.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado_message").empty();
            traerInformacion_message();
            alert("Se ha Eliminado.")
        },
        error : function(respuesta) {
            alert('Disculpe, existió un problema');
        }
    });
}




// --------------------------- reservation

function traerInformacion_reservation(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta_reservation(respuesta);
        }
    });
}

function pintarRespuesta_reservation(items){
    $("#resultado_reservation").empty();
    var tblBody = document.createElement("tbody");
    let myTable=`<table style="width:100%">`;
    myTable+= "<tr>" ;
    myTable+= "<th>id</th>";
    myTable+= "<th>startDate</th>";
    myTable+= "<th>devolutionDate</th>";
    myTable+= "<th>status</th>";
    myTable+= "<th>score</th>";
    //myTable+= "<th>Borrar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idReservation+"</td>";
        myTable+="<td>"+items[i].startDate+"</td>";
        myTable+="<td>"+items[i].devolutionDate+"</td>";
        myTable+="<td>"+items[i].status+"</td>";
        myTable+="<td>"+items[i].score+"</td>";

        //   myTable+="<td> <button onclick='borrarElemento_reservation("+items[i].id+")'>Borrar</button>";
        
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado_reservation").append(myTable);
}

function guardarInformacion_reservation(){
    let myData={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        score:$("#score").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("se ha Actualizado")
 //           window.location.reload()
            traerInformacion_reservation();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
 //           window.location.reload()
            traerInformacion_reservation();
        }

    });

}

// --------------------------- Category

function traerInformacion_category(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta_category(respuesta);
        }
    });
}

function pintarRespuesta_category(items){
    $("#resultado_category").empty();
    var tblBody = document.createElement("tbody");
    let myTable=`<table style="width:100%">`;
    myTable+= "<tr>" ;
    myTable+= "<th>id</th>";
    myTable+= "<th>name</th>";
    myTable+= "<th>description</th>";

    //myTable+= "<th>Borrar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";


        //   myTable+="<td> <button onclick='borrarElemento_category("+items[i].id+")'>Borrar</button>";
        
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado_category").append(myTable);
}

function guardarInformacion_category(){
    let myData={
        name:$("#name_category").val(),
        description:$("#description_category").val(), 
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Category/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("se ha Actualizado")
 //           window.location.reload()
            traerInformacion_category();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
 //           window.location.reload()
            traerInformacion_category();
        }

    });

}




