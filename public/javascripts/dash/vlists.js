var db_menu = new Vue({
    el: '#menu',
    data: {
        collections: [],
        documents: {},
        categories: [],
    },
    methods: {
        init: function(){
            queryserver();
        },
        update: function(){
            this.$forceUpdate();
        },
    }
})

var menuAPI = {};

/* ul equips
            li wands
            li rings
            li amulets
            li hats
            li orbs
            li bags */
            
/* get data from server */
function queryserver () {$.get( "/collections", function( data ) {
    data.forEach(function(collection){
        var newCollection = {};
        newCollection.name = collection;
        /* newCollection.docCount =  CALL API*/
        db_menu.collections.push(newCollection)
    });
})};


function finddocs (collection) {$.get( "/" + collection, function( data ) {
    var test = data.map(a => a.category)
    db_menu.categories = test;
    db_menu.documents[collection] = [];
    data.forEach(function(doc){
        db_menu.documents[collection].push(doc);
        });
    datatable = $('#maintable').DataTable( {
        data : db_menu.documents[collection],
        lengthChange: false,
        bInfo : false,
        responsive: true,
        columns: [
            {"data":"category","title":"category"},
            {"data":"name","title":"name"},
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
            },]
    } );
    
    datatable.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputTypes": [
            {"column":2, 
            "type": "textarea",
            }]
    });
})};

    function myCallbackFunction (updatedCell, updatedRow, oldValue) {
        console.log("The new value for the cell is: " + updatedCell.data());
        console.log("The values for each cell in that row are: " + updatedRow.data());
        var target = updatedRow.data();
        console.log(target)
        
        $.ajax({
          type: "POST",
          url: '/' + nav.selected[0] + '/' + target['_id'] + '/update',
          data: target,
        });
    }

