jQuery(function($) {'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if( $('#video-container').length ) {
		$("#video-container").fitVids();
	}

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if( $('.masonery_area').length ) {
			$('.masonery_area').masonry();//Masonry
		}

		var $portfolio_selectors = $('.portfolio-filter >li>a');
		
		if($portfolio_selectors.length) {
			
			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}

		if( $('#posiciones-libre-a').length ) {
			var t = $('#posiciones-libre-a').DataTable({
						"language": {
						    "decimal":        "",
						    "emptyTable":     "No existen equipos disponibles",
						    "info":           "Mostrando _START_ - _END_ de un total de _TOTAL_ equipos",
						    "infoEmpty":      "Mostrando 0 - 0 de un total de 0 equipos",
						    "infoFiltered":   "(filtrado de _MAX_ total de equipos)",
						    "infoPostFix":    "",
						    "thousands":      ",",
						    "lengthMenu":     "Mostrar _MENU_ equipos",
						    "loadingRecords": "Cargando...",
						    "processing":     "Procesando...",
						    "search":         "Buscar:",
						    "zeroRecords":    "Equipo no encontrado",
						    "paginate": {
						        "first":      "",
						        "last":       "",
						        "next":       "Sig.",
						        "previous":   "Prev."
						    },
						    "aria": {
						        "sortAscending":  ": activatar para ordenar columna de manera ascendente",
						        "sortDescending": ": activatar para ordenar columna de manera descendente"
						    }
						},
				        /*"order": [[ 6, "desc" ], [ 5, 'desc' ]],*/
				        "ordering": false,
        				"info": true,
        				"paging": true,
        				"responsive": true,
        				"searching": true
				    });
				t.row.add( [
		            'AS Roma',
		            3,
		            3,
		            0,
		            0,
		            4,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Dynamo',
		            3,
		            3,
		            0,
		            0,
		            3,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Hay Equipo',
		            3,
		            3,
		            0,
		            0,
		            3,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Gladiators',
		            3,
		            3,
		            0,
		            0,
		            2,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Garra Charrua',
		            3,
		            2,
		            1,
		            0,
		            4,
		            7
		        ] ).draw( false );
		        t.row.add( [
		            'El Fortin',
		            3,
		            2,
		            1,
		            0,
		            3,
		            7
		        ] ).draw( false );
		        t.row.add( [
		            'Juventus',
		            3,
		            2,
		            0,
		            1,
		            3,
		            6
		        ] ).draw( false );
		        t.row.add( [
		            'Branca FC',
		            3,
		            2,
		            0,
		            1,
		            2,
		            6
		        ] ).draw( false );
		        t.row.add( [
		            'San Jose',
		            3,
		            1,
		            1,
		            1,
		            2,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Robles',
		            3,
		            1,
		            1,
		            1,
		            1,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Barceona FC',
		            3,
		            1,
		            1,
		            1,
		            0,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Chateau FC',
		            3,
		            1,
		            1,
		            1,
		            -1,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'RM',
		            3,
		            1,
		            0,
		            2,
		            0,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'Catania',
		            3,
		            1,
		            0,
		            2,
		            0,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'Sportivo Canabis',
		            3,
		            1,
		            0,
		            2,
		            -2,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'El Fede',
		            3,
		            0,
		            1,
		            2,
		            -3,
		            1
		        ] ).draw( false );
		        t.row.add( [
		            'El Torbe',
		            3,
		            0,
		            1,
		            2,
		            -3,
		            1
		        ] ).draw( false );
		        t.row.add( [
		            'Pachuca',
		            3,
		            0,
		            0,
		            3,
		            -5,
		            0
		        ] ).draw( false );
		        t.row.add( [
		            'Bosteros',
		            3,
		            0,
		            0,
		            3,
		            -6,
		            0
		        ] ).draw( false );
		        t.row.add( [
		            'Tallerers',
		            3,
		            0,
		            0,
		            3,
		            -7,
		            0
		        ] ).draw( false );
		}


		if( $('#posiciones-libre-b').length ) {
			var t = $('#posiciones-libre-b').DataTable({
						"language": {
						    "decimal":        "",
						    "emptyTable":     "No existen equipos disponibles",
						    "info":           "Mostrando _START_ - _END_ de un total de _TOTAL_ equipos",
						    "infoEmpty":      "Mostrando 0 - 0 de un total de 0 equipos",
						    "infoFiltered":   "(filtrado de _MAX_ total de equipos)",
						    "infoPostFix":    "",
						    "thousands":      ",",
						    "lengthMenu":     "Mostrar _MENU_ equipos",
						    "loadingRecords": "Cargando...",
						    "processing":     "Procesando...",
						    "search":         "Buscar:",
						    "zeroRecords":    "Equipo no encontrado",
						    "paginate": {
						        "first":      "",
						        "last":       "",
						        "next":       "Sig.",
						        "previous":   "Prev."
						    },
						    "aria": {
						        "sortAscending":  ": activatar para ordenar columna de manera ascendente",
						        "sortDescending": ": activatar para ordenar columna de manera descendente"
						    }
						},
				        /*"order": [[ 6, "desc" ], [ 5, 'desc' ]],*/
				        "ordering": false,
        				"info": true,
        				"paging": true,
        				"responsive": true,
        				"searching": true
				    });
				t.row.add( [
		            'La Once',
		            3,
		            3,
		            0,
		            0,
		            4,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Arias Jrs.',
		            3,
		            3,
		            0,
		            0,
		            3,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Noroeste',
		            3,
		            3,
		            0,
		            0,
		            3,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'Granada',
		            3,
		            3,
		            0,
		            0,
		            2,
		            9
		        ] ).draw( false );
		        t.row.add( [
		            'San Bartolome',
		            3,
		            2,
		            1,
		            0,
		            4,
		            7
		        ] ).draw( false );
		        t.row.add( [
		            'Apostoles',
		            3,
		            2,
		            1,
		            0,
		            3,
		            7
		        ] ).draw( false );
		        t.row.add( [
		            'El Granate',
		            3,
		            2,
		            0,
		            1,
		            3,
		            6
		        ] ).draw( false );
		        t.row.add( [
		            'Bajo Palermo',
		            3,
		            2,
		            0,
		            1,
		            2,
		            6
		        ] ).draw( false );
		        t.row.add( [
		            'Albos',
		            3,
		            1,
		            1,
		            1,
		            2,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'DC United',
		            3,
		            1,
		            1,
		            1,
		            1,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Marquez',
		            3,
		            1,
		            1,
		            1,
		            0,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Estadio 11',
		            3,
		            1,
		            1,
		            1,
		            -1,
		            4
		        ] ).draw( false );
		        t.row.add( [
		            'Intocables',
		            3,
		            1,
		            0,
		            2,
		            0,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'Los Chantas',
		            3,
		            1,
		            0,
		            2,
		            0,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'Vieja Signora',
		            3,
		            1,
		            0,
		            2,
		            -2,
		            3
		        ] ).draw( false );
		        t.row.add( [
		            'Instituto',
		            3,
		            0,
		            1,
		            2,
		            -3,
		            1
		        ] ).draw( false );
		        t.row.add( [
		            'CA Carvallo',
		            3,
		            0,
		            1,
		            2,
		            -3,
		            1
		        ] ).draw( false );
		        t.row.add( [
		            'Liniers',
		            3,
		            0,
		            0,
		            3,
		            -5,
		            0
		        ] ).draw( false );
		        t.row.add( [
		            'Boca Unido',
		            3,
		            0,
		            0,
		            3,
		            -6,
		            0
		        ] ).draw( false );
		        t.row.add( [
		            'Galleres',
		            3,
		            0,
		            0,
		            3,
		            -7,
		            0
		        ] ).draw( false );
		}
	});


	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	// Progress Bar
	$.each($('div.progress-bar'),function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});

	if( $('#gmap').length ) {
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: -31.379663,
			lng: -64.287094,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : true,
			streetViewControl : true,
			mapTypeControl: true,
			overviewMapControl: true,
			clickable: true
		});

		map.addMarker({
			lat: -31.379663,
			lng: -64.287094,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#3e8bff',
		});
	}

});