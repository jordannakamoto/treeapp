var datatable = {};
$.fn.dataTable.ext.errMode = 'none';

datatable.init = function(collection){

datatable = $('#maintable').DataTable( {
        data : db_menu.documents[collection],
        lengthChange: false,
        bInfo : false,
        responsive: true,
        language: {
            searchPlaceholder: "Search Table"
        },
        columns: [
            {"data":"category","title":"category"},
            {"data":"name","title":"name"},
            {"data":"baseLvl","title":"baseLvl"},
            {"data":"description","title":"description"},
            {"data":"stats.atk","title":"atk"},
            {"data":"stats.def","title":"def"},
            {"data":"stats.hp","title":"hp"},
            {"data":"stats.spd","title":"spd"},
            {"data":"range","title":"range"},
            {"data":"damage","title":"damage"},
        ],
        columnDefs: [
            {
                "targets": [ 0 ],
                "visible": false,
            },
            {
                "targets": [2,4,5,6,7,8,9],
                "className": "dt-center",
                
            }
            ]
            
    } );
    
    datatable.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputTypes": [
            {"column":3, 
            "type": "textarea",
            }]
    });
    
    //viewhack
    $('#maintable_filter label input').each(function() {
        $(this).parent().before(this);
    })
    $('#maintable_filter label').remove();
}

function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The values for each cell in that row are: "+ updatedRow.data());
    console.log(updatedCell);
    return;
    var target = updatedRow.data();
    
    $.ajax({
      type: "POST",
      url: '/' + nav.selected[0] + '/' + target['_id'] + '/update',
      data: target,
    });
}
