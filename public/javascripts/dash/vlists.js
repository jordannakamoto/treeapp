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
    var removeDuplicates = [];
    $.each(test, function(i, el){
        if($.inArray(el, removeDuplicates) === -1) removeDuplicates.push(el);
    });
    db_menu.categories = removeDuplicates;
    db_menu.documents[collection] = [];
    data.forEach(function(doc){
        db_menu.documents[collection].push(doc);
        });
    datatable.init(collection);
})};
