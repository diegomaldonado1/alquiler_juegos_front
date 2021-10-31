
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
    myTable+= "<th>category</th>";
    myTable+= "<th>Borrar</th>";
    myTable+= "<th>Editar</th>";
    myTable+=  "</tr>";

  
    for(i=0;i<items.length;i++){
    
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].developer+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].description+"</td>";

        if (items[i].category === null) {
            myTable+="<td> </td>";
          }
          else{
          myTable+="<td>"+items[i].category.name+"</td>";
        }
        
        myTable+="<td> <button onclick='borrarElemento_games("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='editarInformacion_games("+items[i].id+")'>Editar</button>";
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
        category: { id: +$("#games_category").val() },
        
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
            window.location.reload()
            traerInformacion_games();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
            window.location.reload()
            traerInformacion_games();
        }

    });

}


function editarInformacion_games(idElemento){
    let myData={
        id:idElemento,
        name:$("#name_games").val(),
        developer:$("#developer").val(),
        year:$("#year_game").val(),
        description:$("#description_game").val(),
        category: { id: +$("#games_category").val() },
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Game/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            alert("se ha Actualizado")
            traerInformacion_games();
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
        url:"http://155.248.208.126:8080/api/Game/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado_games").empty();
            traerInformacion_games();
            alert("Se ha Eliminado el juego.")
        },
        error : function(respuesta) {
            alert('Error, el campo tienen relacion con otro parametro y no puede ser borrado');
        }
    });
}

function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://155.248.208.126:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#games_category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

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
    myTable+= "<th>Borrar</th>";
    myTable+= "<th>Editar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idClient+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td>"+items[i].password+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].idClient+")'>Borrar</button>";
        myTable+="<td> <button onclick='editarInformacion("+items[i].idClient+")'>Editar</button>";
        
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
        password:$("#password").val(),
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
            window.location.reload()
            traerInformacion();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('Error');
            window.location.reload()
            traerInformacion();
        }


                   });

}



    function editarInformacion(idElemento){
        let myData={
            idClient:idElemento,
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
            password:$("#password").val(),
            };    
    
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://155.248.208.126:8080/api/Client/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                alert("se ha Actualizado")
                traerInformacion();
                
            },
            error : function(jqXHR, textStatus, errorThrown) {
                alert('Error');
            }
        });
    }

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado el cliente")
        },
        error : function(respuesta) {
            alert('Error, el campo tienen relacion con otro parametro y no puede ser borrado');
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
    myTable+= "<th>Cliente</th>";
    myTable+= "<th>Juego</th>";
    myTable+= "<th>Borrar</th>";
    myTable+= "<th>Editar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idMessage+"</td>";
        myTable+="<td>"+items[i].messageText+"</td>";
        
        if (items[i].client === null) {
            myTable+="<td> </td>";
          }
          else{
          myTable+="<td>"+items[i].client.name+"</td>";
        }

        if (items[i].game === null) {
            myTable+="<td> </td>";
          }
          else{
          myTable+="<td>"+items[i].game.name+"</td>";
        }
        myTable+="<td> <button onclick='borrarElemento_message("+items[i].idMessage+")'>Borrar</button>";
        myTable+="<td> <button onclick='editarInformacion_message("+items[i].idMessage+")'>Editar</button>";
        
        myTable+="</tr>";
       
    }
    myTable+="</table>";
    
    $("#resultado_message").append(myTable);
}

function guardarInformacion_message(){
    let myData={
        messageText:$("#messagetext").val(),
        client: { idClient: +$("#message_client").val() },
        game: { id: +$("#message_game").val() },
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
            window.location.reload()
            traerInformacion_message();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
            window.location.reload()
            traerInformacion_message();
        }

    });

}




function editarInformacion_message(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messagetext").val(),
        client: { idClient: +$("#message_client").val() },
        game: { id: +$("#message_game").val() },
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            alert("se ha Actualizado")
            traerInformacion_message();
            
        },
        error : function(jqXHR, textStatus, errorThrown) {
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
        url:"http://155.248.208.126:8080/api/Message/"+idElemento,
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
            alert('Error, el campo tienen relacion con otro parametro y no puede ser borrado');
        }
    });
}


function autoclient_message(){
    console.log("client")
    $.ajax({
        url:"http://155.248.208.126:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#message_client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                console.log("select "+name.idClient);
            }); 
        }
    
    })

}

function autogame_message(){
    console.log("games")
    $.ajax({
        url:"http://155.248.208.126:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#message_game");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

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
    myTable+= "<th>Cliente</th>";
    myTable+= "<th>Juego</th>";
    myTable+= "<th>Borrar</th>";
    myTable+= "<th>Editar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].idReservation+"</td>";
        myTable+="<td>"+items[i].startDate+"</td>";
        myTable+="<td>"+items[i].devolutionDate+"</td>";
        myTable+="<td>"+items[i].status+"</td>";
        myTable+="<td>"+items[i].score+"</td>";
        if (items[i].client === null) {
            myTable+="<td> </td>";
          }
          else{
          myTable+="<td>"+items[i].client.name+"</td>";
        }

        if (items[i].game === null) {
            myTable+="<td> </td>";
          }
          else{
          myTable+="<td>"+items[i].game.name+"</td>";
        }

        myTable+="<td> <button onclick='borrarElemento_reservation("+items[i].idReservation+")'>Borrar</button>";
        myTable+="<td> <button onclick='editarInformacion_reservation("+items[i].idReservation+")'>Editar</button>";
        
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
        client: { idClient: +$("#reservation_client").val() },
        game: { id: +$("#message_game").val() },
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


function borrarElemento_reservation(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado_message").empty();
            traerInformacion_reservation();
            alert("Se ha Eliminado la reservacion")
        },
        error : function(respuesta) {
            alert('Error, el campo tienen relacion con otro parametro y no puede ser borrado');
        }
    });
}


function editarInformacion_reservation(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        score:$("#score").val(),
        client: { idClient: +$("#reservation_client").val() },
        game: { id: +$("#message_game").val() }, 
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            alert("se ha Actualizado")
            traerInformacion_reservation();
            
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('Error');
        }
    });
}





function autoclient_reservation(){
    console.log("client")
    $.ajax({
        url:"http://155.248.208.126:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#reservation_client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                console.log("select "+name.idClient);
            }); 
        }
    
    })

}

function autogame_reservation(){
    console.log("games")
    $.ajax({
        url:"http://155.248.208.126:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#reservation_game");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

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

    myTable+= "<th>Borrar</th>";
    myTable+= "<th>Editar</th>";
    myTable+=  "</tr>";

    for(i=0;i<items.length;i++){
    
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento_category("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='editarInformacion_category("+items[i].id+")'>Editar</button>";
        
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
            window.location.reload()
            traerInformacion_category();
            
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('error');
            window.location.reload()
            traerInformacion_category();
            
        }

    });

}

function borrarElemento_category(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            window.location.reload()
            $("#resultado_message").empty();
            console.log(respuesta);
            alert("Se ha Eliminado la categoria")
            traerInformacion_category();
        },
        error : function(respuesta) {
            console.log(respuesta);
            alert('Error, el campo tienen relacion con otro parametro y no puede ser borrado');
        }
    });
}



function editarInformacion_category(idElemento){
    let myData={
        id:idElemento,
        name:$("#name_category").val(),
        description:$("#description_category").val(), 
        };    

    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://155.248.208.126:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            alert("se ha Actualizado")
            traerInformacion_category();
            
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('Error');
        }
    });
}


////// reportes 


function traerReporteStatus(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta);
        }
    });
}

function pintarRespuestaStatus(respuesta){

    let myTable=`<table style="width:100%">`;
        myTable+= "<tr>" ;
        myTable+= "<th>completadas</th>";
        myTable+= "<th>canceladas</th>";
        myTable+=  "</tr>";
       
        myTable+="<td>"+respuesta.completed+"</td>";
        
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}



function traerReporteDate(){
    
   

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
  console.log(fechaInicio);
  console.log(fechaCierre);

    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('Fecha invalida');
        }
        

    });
}
function pintarRespuestaDate(respuesta){
    
    $("#Rdate").val(`El numero de reservas dentro de las fechas seleccionadas son : ${respuesta.length}`);

    let myTable=`<table style="width:100%">`;
        myTable+= "<tr>" ;
        myTable+= "<th>startDate</th>";
        myTable+= "<th>devolutionDate</th>";
        myTable+= "<th>Cliente</th>";
        myTable+= "<th>Juego</th>";
        myTable+= "<th>Estado</th>";
        myTable+=  "</tr>";

          
    for(i=0;i<respuesta.length;i++){
        
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].game.name+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
      
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}


function traerReporteClientes(){
    $.ajax({
        url:"http://155.248.208.126:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable=`<table style="width:100%">`;
        myTable+= "<tr>" ;
        myTable+= "<th>total de reservas</th>";
        myTable+= "<th>Nombre</th>";
        myTable+= "<th>email</th>";
        myTable+= "<th>edad</th>";
        myTable+=  "</tr>";

         
    for(i=0;i<respuesta.length;i++){
    
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}