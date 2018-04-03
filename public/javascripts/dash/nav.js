var nav = {
    position: 0, //init at 0
    selected : [],
    
    //methods
    select : (node, pos)=> {
        if(nav.selected[nav.position-1] != node){
            nav.selected[nav.position] = node;
            console.log(node + " selected");
        }else{
            console.log(node + " deselected");
        };
        
        var difference = pos - nav.position
        if (pos > nav.position){
            nav.position+= difference;
            nav.test(difference,nav.position);
        }
        else if(pos < nav.position){
            nav.position+= difference;
            nav.selected[nav.position-1] = null;
            nav.test(difference,nav.position);
        }
        else if(pos == nav.position){
            nav.selected[nav.position-1] = null;
            nav.position--;
            nav.test(0,nav.position);
        }
        console.log(nav.selected, nav.position)
    },
    test : (input,navpos)=> {
        if (input > 0 && navpos != 2){
            $('#categories .menu_btn').each(function(i) {
                $(this).delay((i + 1) * 30).transition({ x: '10px', opacity: 100 }).animate({ easing: 'easeOutExpo', height: 'toggle'}, 120);
                
            });
        }
        else if (input <= 0 && navpos != 1){
            $('#categories .menu_btn').each(function(i) {
                $(this).delay((i + 1) * 50).transition({ x: '0px', opacity: 0 }).animate({ easing: 'easeOutExpo', height: 'toggle'},320);
            }
        )}
    },
}