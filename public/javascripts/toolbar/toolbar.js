var $toolbar = $('#toolbar');
var $form1 = $('#form1');

var toolbar = {
    init: ()=> {
        $toolbar.transition({width:'200px'});
        setTimeout(()=>{$("#toolbar .tool_btn").fadeIn();},400)
        $('#newItem_btn').on('click', () =>{
                getSchema(nav.selected[1]);
                $('#form1').dialog({
                      buttons: [
                        {
                          text: "OK",
                          click: function() {
                            noodle();
                            $(this).dialog( "close" );
                          }
                        }
                      ],
                      show: { effect: "blind", duration: 400 },
                      width: 370,
                });
                
        })
        
    }
}

function getSchema (schema) {
    $.get( "/schema/" + schema, function( data ) {
        var ugly = data;
        ugly.name = "";
        ugly.category = schema;
        ugly['description'] = "";
        ugly.baseLvl = 0;
        ugly.stats = {"atk":0};
        ugly.range = [0,0];
        ugly.damage = [0,0];
        var pretty = JSON.stringify(ugly, undefined, 4);
        $ta = $("#form1 textarea");
        $ta.text(pretty);
        autosize($('#form1 textarea'));
        $ta.highlightTextarea({
        words: ['""', '0'], color:'#d6ebf2'
        });
})};

function noodle(){
    var cool = ($('#form1 textarea').val());
    cool = JSON.parse(cool);
    $.ajax({
      type: "POST",
      url: '/' + nav.selected[0] + '/newDoc',
      data: cool,
    });
}