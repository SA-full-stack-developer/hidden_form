# hidden_form

Se compone de un div que al clicar despliega un formulario y un mapa de Google Maps en modo persiana.

# Index.html

Se compone de dos bloques principales, el primero es el que contendrá el div desplegable. El segundo es el formulario y mapa ocultos.

        <h1>TÍTULO</h1>
        <div class="arrow">
          <img src="img/arrow.png" alt="">
        </div>
        <div class="formulario" id="formulario">
          <div>
            <span class="title"><h2>CONTACTO</h2></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, enim accusamus est dignissimos magni esse sed autem aliquid illum ad. Fugiat, accusantium vero error incidunt delectus quis earum doloremque perferendis.
            </p>
          </div>
-----------------------------------------------------------------------------------------------------------------------------          
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d160894.54413006487!2d2.0346723842304266!3d41.468730685117265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1472143190618" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <form action="" id="formu">
            <div>
              <input type="text" placeholder="EMAIL*" required="true" name="email" id="email">
              <input type="text" placeholder="NOMBRE*" required="true" name="nombre" id="nombre">
              <select id="pack" name="pack">
                <option value="Opción 1">Opción 1</option>
                <option value="Opción 2">Opción 2</option>
                <option value="Opción 3">Opción 3</option>
                <option value="Opción 4">Opción 4</option>
              </select>
            </div>
            <div>
              <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="DESCRIPCIÓN"></textarea>
            </div>
            <div id="contenedorBoton">
              <div>
                <input type="checkbox" name="cgv" id="cgv" value="1">
                <label for="cgv">Acepto las condiciones del servicio.</label> 
                <a href="#" class="iframe" rel="nofollow">(Lea las condiciones del servicio)</a>
              </div>
              <ul class="buttonContainer">
                <li class="button">
                  <a id="btn_enviar" href="#">
                    <span>ENVIAR</span>
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
 
 <img src="https://github.com/SA-full-stack-developer/hidden_form/blob/master/img/2017-02-15_163904.png"/>
 
 # style.css

Aquí le damos algunos estilos básicos. A destacar la clase arcoiris.

# javascript.js

Muestra el formulario.

    $(".arrow").click(function(){
      formulario();
    });


    function formulario() {
      if(!$(".formulario").is(":visible")){
        $(".formulario").toggle("slow");
      }
    }
