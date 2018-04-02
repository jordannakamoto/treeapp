var collection_loaded = {};
var test432 = true;
setTimeout(function(){
	$('#menu .menu_btn').on('click', function(e){ //might need to discriminate this later
		var $this = $(this);
		if(!collection_loaded[$this.text()]){
			finddocs($this.text());
			collection_loaded[$this.text()] = 1;
			setTimeout(()=> {$('#categories .menu_btn').each(function(i) {
				var $thisbtn = $(this);
				$thisbtn.on('click', ()=> {nav.select($thisbtn.text(),2);
				if(test432){
	    		$thisbtn.siblings().transition({opacity:0, easing:'easeOutExpo',duration: 200}).slideUp();
					test432 = !test432;
					datatable.column( 0 ).search( $thisbtn.text() ).draw();
					$('#maintable_wrapper').fadeIn()
				}
	    		else{
	    		$(this).siblings().transition({opacity:100, easing:'easeOutExpo',duration: 200}).slideDown()
	    			test432 = !test432;
	    		}
				});
	    		
                $(this).delay((i + 1) * 30).transition({ x: '10px', opacity: 100 }).animate({ easing: 'easeOutExpo', height: 'toggle'}, 120);
                
            });}, 200)
		}
		nav.select($this.text(),1);
	    $this.siblings().animate({ height: 'toggle', easing: 'easeOutExpo', opacity: 'toggle' }, 320);
	});
	

}, 1000); //probably should use promises here but i dont know how to do that





