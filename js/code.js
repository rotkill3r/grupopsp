
function boton(){   
  ; 
    if(checking()){        
    document.getElementById("btenvio").innerHTML="Enviado"; 
     }   
}
function checking(){       
    var sent =false;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("texto").value;  

    if(nombre=="" && correo=="" && tema=="" && mensaje==""){        
            document.getElementById("alerta").style.display = "inline-block"
     }          
    else{          
        if(getName()){            
            console.log("el nombre es correcto");
            var datoA=true;
        }else {
           
            return sent
        }
         if(getMail()){                      
            console.log("el correo es correcto");
            var datoB=true;          
        }else return sent;
        if(getTema() && datoB){
            console.log("el tema es correcto");
            var datoC=true;
        } else return sent;
        if(getMsg() && datoC){
            console.log("el mensaje es correcto");
            var datoD=true;
        }else return sent;
    } 

    if(datoA && datoB && datoC && datoD){     
        esperar(.2);       
        alert("Datos enviados con exito");
        esperar(1);
        borrarCampos(); 
        return sent =true;
    }   
}
function getName(){
    var confirmacion_nombre=false;
    var nombre = document.getElementById("nombre").value;
    if(nombre==""){        
        document.getElementById("nombre").focus()
          return confirmacion_nombre;

    }else if(nombre.length<=2){        
        document.getElementById("nombre").focus()

        return confirmacion_nombre;
    } else if(nombre.length>2){
    
        return confirmacion_nombre=true;    
    }
      
}
function getMail(){
    var confirmacion_correo=false;    
    var correo = document.getElementById("correo").value;
    if(correo==""){
        document.getElementById("correo").focus()
  
        return confirmacion_correo;
    } else if(validarEmail(correo)){
          return confirmacion_correo =true;
    }else{

        return confirmacion_correo;
    }
}
function validarEmail(valor) {
    var correoValido = false;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(expr.test(valor)){          
        return correoValido=true;   
    } else {
       return correoValido;
    }
} 
function getTema(){
    var confirmacion_tema=false;
    var tema = document.getElementById("tema").value;
    if(tema=="" || tema.length<2){
        document.getElementById("tema").focus()
  
        return confirmacion_tema;
    }else {
        return confirmacion_tema=true;    
    }  
}
function getMsg(){  
    var confirm=false;
    var msg = document.getElementById("texto").value;
    if(msg=="" || msg.length<6){
        document.getElementById("texto").focus()
     
        return confirm;
    }else {      
        
        return confirm=true;
    }  
}
function borrarCampos(){
        document.getElementById("nombre").value="";
        document.getElementById("correo").value="";
        document.getElementById("tema").value="";
        document.getElementById("texto").value="";       
}function esperar(seconds) { 
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}


function esconder(x,y){
   x.style.display = "none"
   y.style.marginBottom = "1.1em"
}
function mostrar(x, y){
    x.style.display = "block"
    y.style.marginBottom = "0"
 }
