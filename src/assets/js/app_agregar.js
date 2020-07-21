$(function () {

    const link = 'http://localhost:3000';

    $('#cargarP').on('click', function(e) {
        e.preventDefault();
        $.ajax({
          url: link,
          success:function(productos){
            let tbody = $('tbody');
            tbody.html('');
            productos.forEach(element => {
              alert(productos);
              tbody.append(`
                <tr>
                  <td class="id">${element.id}</td>
                  <td class="nombre">${element.nombre}</td>
                  <td class="categoria">${element.categoria}</td>
                  <td class="precio">${element.precio}</td>
                  <td class="descuento">${element.descuento}</td>
                </tr>
              `)
            });
          }
        })
    });

    // POST PRODUCTOS
    $('#productForm').on('submit', (e) => {
      e.preventDefault();//para que el navegador no se refresque
      let nombre = $('#nombre');
      let categoria = $('#categoria');
      let precio = $('#precio');
      let descuento = $('#descuento');
      let imagen = $('#imagen');
      let descripcion = $('#descripcion');
  
      $.ajax({
        url: link,
        method: 'POST',
        data: {
          nombre: nombre.val(),
          categoria: categoria.val(),
          precio: precio.val(),
          descuento: descuento.val(),
          imagen: imagen.val(),
          descripcion: descripcion.val()
        },
        success: function(response) {
          if(response==1){
            alert("agregado con exito");
            //¿Aquí iría el borrar contenido del formulario no?

          }else{
              alert("Fallo en el servidor");
          }
        //  newProduct.val('');
        //  $('#getProducts').click();
        },
        error: function (err) {
          console.log(err);
        }
      });
    }); 
   
  });
  