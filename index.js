console.log("activo");
document.querySelector('#boton').addEventListener('click', traerDatos)

//voy a comenzar a trabajar con AJAX
function traerDatos(){
    console.log("funcion")
    //nuevo objeto
const xhttp = new XMLHttpRequest();
xhttp.open ('GET', 'data.json', true) 
xhttp.send();
//he mandado mis datos y voy a esperar
xhttp.onreadystatechange= function(){
    //si pasó por todos y los estados y el estatus es correcto voy a pintar en la  pantalla
    if (this.readystate == 4 && this.status ==200){
        //console.log(this.responseText)
        let datos =JSON.parse(this.responseText);
        //console.log(datos);
        let nombres= document.querySelector('#nombres');
        nombres.innerHTML ='';

        for (let item of datos) {
                nombres.innerHTML += 
                <tr>
                    <td>${item.name}</td>
                    <div class= "collapsible-header" ><i></i>${item.name}</div>
    <div class="collapsible-body">
        <h5>Rating ${item.raiting}</h5>
        <h4>Contacto :</h4>
        <p>${item.contact.site}</p>
        <p>${item.contact.email}</p>
        <p>${item.contact.phone}</p>
        <h5>Dirección</h5>
        <p>${item.adress.street}</p>
        <p>${item.adress.city}</p>
        <p>${item.adress.state}</p>
        <p>${item.adress.street}</p>
    </div>
                </tr>
        

        }
    }
} 



}