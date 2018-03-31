
var db_menu = new Vue({
    el: '#menu',
    data: {
        collections: [],
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
});
}