var base = location.protocol+'//'+location.host;

$(document).ready(function(){
    editor_init(descripcion);
})

$( "#btn_guardar" ).submit(function( event ) {
    iniciar();
  });

function editor_init(field){
    CKEDITOR.replace(field,{
        toolbar:[
            {name: 'clipboard', items: ['Cut','Copy', 'Paste', 'Undo', 'Redo']},
            {name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', 'Image', 'Link']},
            {name: 'document', items: ['CodeSnippet', 'EmojiPanel', 'Preview', 'Source']}
        ],
        placeholder:'Placeholder Text',
        height: 80, 
    });
}
