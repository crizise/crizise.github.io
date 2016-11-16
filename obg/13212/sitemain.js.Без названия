/* Прокрутка вниз по клику на пунктах меню */ 	
$(document).ready(function(){
	$('#headermenu a').click(function(){
		var position = $(this).attr('href').indexOf('#');			
		if(position != -1){		//проверяем есть ли якорь в ссылке	
			$('html, body').animate({ 
				scrollTop: Math.ceil(parseInt($($(this).attr('href').substr(position)).offset().top) - parseInt($('#headerinside').height()))
			}, 1500, 'easeInOutExpo');
			return false;
		}
	});
});

/* Исправления положения страницы при переходе с других страниц по ссылкам с якорями */
$(document).ready(function(){
	//получаем данные из адресной строки в виде объекта и преобразуем в строку
	var urladress = location.toString();
	if(urladress.indexOf('#') != -1){
		window.scrollBy(0, -parseInt($('#headerinside').height())); 
	}
});
		
/* Слайдшоу block4 */
$(document).ready(function(){
	$("#block4-slider").lightSlider({
		item:1,	//количество слайдов
		auto:true,  //автоматически стартует
		loop:true,	//зациклен - после полсденего первый
		keyPress:true,  //можно мотать стрелками
		speed:400,  //скорость анимации
		pause:7000, //время между анимацией
		pager:true, //включение точек для переключения снизу
		controls: true //включение кнопок прокрутки
	});
});

/* Скрипты для переключения блоков в block2 */
$(document).ready(function(){
	var ontabinblock2 = function(){
		$('#block2formtop>div').unbind( 'click', ontabinblock2); //открепляем функцию по событию
		var last = $(this).parent().children('.active').attr('id');
		var show = $(this).attr('id');
		if(last == show){
			$('#block2formtop>div').bind( 'click', ontabinblock2); //повторно прикрепляем функцию на событие
			return true;
		}		
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		var lastmain = $('#'+last+'main');
		var showmain = $('#'+show+'main');
		if(parseInt(last.substr(-1)) < parseInt(show.substr(-1))){
			lastmain.animate({
				"marginLeft": "-100%",
				"opacity": "0"
			}, 300, "swing", function(){
				lastmain.hide().css({
					"marginLeft": "0",
					"opacity": "1"
				});
			});		
			showmain.css({
					"marginLeft": "100%",
					"opacity": "0"
				}).show().animate({
				"marginLeft": "0",
				"opacity": "1"
			}, 300, "swing", function(){
				$('#block2formtop>div').bind( 'click', ontabinblock2); //повторно прикрепляем функцию на событие
			});	
		}else{
			lastmain.animate({
				"marginLeft": "100%",
				"opacity": "0"
			}, 300, "swing", function(){
				lastmain.hide().css({
					"marginLeft": "0",
					"opacity": "1"
				});
			});		
			showmain.css({
					"marginLeft": "-100%",
					"opacity": "0"
				}).show().animate({
				"marginLeft": "0",
				"opacity": "1"
			}, 300, "swing", function(){
				$('#block2formtop>div').bind( 'click', ontabinblock2); //повторно прикрепляем функцию на событие
			});	
		}
	}		
	$('#block2formtop>div').bind( 'click', ontabinblock2); //прикрепляем функцию на событие (по загрузке)
	
});
	/* ver 3.0 
	$(document).ready(function(){
		$('#block2formtop>div').click(function(){
			var last = $(this).parent().children('.active').attr('id');
			var show = $(this).attr('id');
			if(last == show){
				return true;
			}		
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			if(parseInt(last.substr(-1)) < parseInt(show.substr(-1))){
				$('#'+last+'main').animate({
					"marginLeft": "-100%",
					"opacity": "0"
				}, 300, "swing", function(){
					$('#'+last+'main').hide().css({
						"marginLeft": "0",
						"opacity": "1"
					});
				});		
				$('#'+show+'main').css({
						"marginLeft": "100%",
						"opacity": "0"
					}).show().animate({
					"marginLeft": "0",
					"opacity": "1"
				}, 300, "swing");	
			}else{
				$('#'+last+'main').animate({
					"marginLeft": "100%",
					"opacity": "0"
				}, 300, "swing", function(){
					$('#'+last+'main').hide().css({
						"marginLeft": "0",
						"opacity": "1"
					});
				});		
				$('#'+show+'main').css({
						"marginLeft": "-100%",
						"opacity": "0"
					}).show().animate({
					"marginLeft": "0",
					"opacity": "1"
				}, 300, "swing");	
			}
		});	
	});*/
	/* ver 1.0
	$(document).ready(function(){
		$('#block2formtop>div').click(function(){
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			$('#block2formbottom>div').hide();
			var showdiv = $(this).attr('id')+'main';
			$('#'+showdiv).show();
		});	
	}); */

/* Изменение value при ручном изменении количества block2 */
$(document).ready(function(){
	$('#block2tap1mainquantity').change(function(){	
		if(!isNaN($(this).val())){
			if($(this).val() > 0){
				$(this).attr('value',$(this).val());
				$('#block2tap1maincost>p>span').html(countbookcost($(this).val()));
			}
		}		
	});
});

/* Увеличение и уменьшения количества block2 */ 
$(document).ready(function(){
	$('#block2tap1mainplus').click(function(){
		var res;
		if(isNaN($('#block2tap1mainquantity').val())){
			res = parseInt($('#block2tap1mainquantity').attr('value'))+1;
		}else{
			res = parseInt($('#block2tap1mainquantity').val())+1;
		}
		$('#block2tap1mainquantity').val(res);
		$('#block2tap1mainquantity').attr('value',res);	
		$('#block2tap1maincost>p>span').html(countbookcost(res));
	});	
	$('#block2tap1mainminus').click(function(){	
		var res;
		if(isNaN($('#block2tap1mainquantity').val())){
			res = parseInt($('#block2tap1mainquantity').attr('value'))-1;
		}else{
			res = parseInt($('#block2tap1mainquantity').val())-1;
		}	
		if(res<1){
			res = 1;
		}
		$('#block2tap1mainquantity').val(res);
		$('#block2tap1mainquantity').attr('value',res);
		$('#block2tap1maincost>p>span').html(countbookcost(res));
	});
});

/* Переключение форм block11 */ 
$(document).ready(function(){
	var ontabinblock11 = function(){
		$('#block11topinside>div').unbind( 'click', ontabinblock11); //открепляем функцию по событию
		var last = $(this).parent().children('.active').attr('id');
		var show = $(this).attr('id');
		if(last == show){
			$('#block11topinside>div').bind( 'click', ontabinblock11); //повторно прикрепляем функцию на событие
			return true;
		}		
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		var lastform = $('#'+last+'form');
		var showform = $('#'+show+'form');
		if((last == 'saythank') || ((last == 'saycomplain') && (show == 'sayadvice'))){
			lastform.animate({
				"left": "-100%",
				"opacity": "0"
			}, 300, "swing", function(){
				lastform.hide().css({
					"left": "0",
					"opacity": "1"
				});
			});		
			showform.css({
					"left": "100%",
					"opacity": "0"
				}).show().animate({
				"left": "0",
				"opacity": "1"
			}, 300, "swing", function(){
				$('#block11topinside>div').bind( 'click', ontabinblock11); //повторно прикрепляем функцию на событие
			});	
		}else{
			lastform.animate({
				"left": "100%",
				"opacity": "0"
			}, 300, "swing", function(){
				lastform.hide().css({
					"left": "0",
					"opacity": "1"
				});
			});		
			showform.css({
					"left": "-100%",
					"opacity": "0"
				}).show().animate({
				"left": "0",
				"opacity": "1"
			}, 300, "swing", function(){
				$('#block11topinside>div').bind( 'click', ontabinblock11); //повторно прикрепляем функцию на событие
			});	
		}
	}		
	$('#block11topinside>div').bind('click', ontabinblock11); //прикрепляем функцию на событие (по загрузке)
});

	/* Простая проверка наличия данных в инпутах и текстариах */
	$(document).ready(function(){	
		$('.block11check').change(function(){
			checkinfoinblock11($(this));
		});
	});	
	/* Проверка правильности ввода емаила */
	$(document).ready(function(){	
		$('.block11checkemail').change(function(){
			var blockid = $(this).attr('id');
			if($(this).val() == ""){
				$('#divfor'+blockid+' div').removeClass('check').addClass('nocheck');
			}else{				
				var str = 'checkemail='+$(this).val();		/* Ajax проверка e-mail-а */
				$.ajax({
					type: "POST",
					url: "ajax.html",
					cache: false,
					data: str,
					success: function(html){
						$('#divfor'+blockid+'>figure').html(html);
					}
				});	
			}			
		});
	});	
	/* Убираем крестик при начале ввода в каптче */
	$(document).ready(function(){	
		$('#saythankcaptcha').focus(function(){
			$('#divforsaythankcaptcha div').removeClass('check').removeClass('nocheck');				
		});
		$('#saycomplaincaptcha').focus(function(){
			$('#divforsaycomplaincaptcha div').removeClass('check').removeClass('nocheck');				
		});
		$('#sayadvicecaptcha').focus(function(){
			$('#divforsayadvicecaptcha div').removeClass('check').removeClass('nocheck');				
		});
	});	
	/* Загрузка изображения в block11*/	
	$(document).ready(function(){	
		$('.block11startuploadfile').click(function(){
			var clickid = $(this).attr('id');
			var blockname = clickid.substr(0,clickid.indexOf('addphoto'));			
			$('#'+blockname+'file').click();
			return false;
		});
		
		$('.block11uploadfile').change(function(){ 		//запускается при изменинии инпута типа file
			var clickid = $(this).attr('id');
			var blockname = clickid.substr(0,clickid.indexOf('file'));	
			$('#'+blockname+'center').show();
			var fd = new FormData();					//Формирование данных из инпут типа file
			fd.append("userimg", $(this).prop('files')[0]);
			fd.append("uploadfile", blockname);
			$.ajax({									// Ajax отправка выбранного файла
				type: "POST",
				url: "ajax.html",
				cache: false,
				processData: false,
				contentType: false,
				data: fd,
				success: function(html){					
					$('#'+blockname+'center .waiting').hide();
					$('#'+blockname+'centercontent').show().html(html);
					if(blockname == "saythank"){
						$('#'+blockname+'center .delapplication').bind( 'click', delapplicationinsaythank); //прикрепляем событие
					}
					if(blockname == "saycomplain"){
						$('#'+blockname+'center .delapplication').bind( 'click', delapplicationinsaycomplain); //прикрепляем событие
					}
					if(blockname == "sayadvice"){
						$('#'+blockname+'center .delapplication').bind( 'click', delapplicationinsayadvice); //прикрепляем событие
					}					
				}
			});	
		});
		var delapplicationinsaythank = function(){ // Удаление прикрепленного изображения в block11
			$('#saythankcenter').hide();	
			$('#saythankcentercontent').hide().html('');
			$('#saythankcenter .waiting').show();
			$('#saythankcenter .delapplication').unbind( 'click', delapplicationinsaythank); //открепляем событие
		}	
		var delapplicationinsaycomplain = function(){ // Удаление прикрепленного изображения в block11
			$('#saycomplaincenter').hide();	
			$('#saycomplaincentercontent').hide().html('');
			$('#saycomplaincenter .waiting').show();
			$('#saycomplaincenter .delapplication').unbind( 'click', delapplicationinsaycomplain); //открепляем событие
		}		
		var delapplicationinsayadvice = function(){ // Удаление прикрепленного изображения в block11
			$('#sayadvicecenter').hide();	
			$('#sayadvicecentercontent').hide().html('');
			$('#sayadvicecenter .waiting').show();
			$('#sayadvicecenter .delapplication').unbind( 'click', delapplicationinsayadvice); //открепляем событие
		}				
	});	
				
	/* Обновление captcha */
	$(document).ready(function(){	
		$('.block11captcha figure').click(function(){	
			var src = $(this).css('backgroundImage');
			var newsrc;
			if(src.indexOf('&rand') != -1){  //Чистим от прошлого &rand
				newsrc = src.substr(0,src.indexOf('&rand'))+'&rand='+Math.round(Math.random()*10000)+'")'
			}else{
				newsrc = src.substr(0,(src.length-2))+'&rand='+Math.round(Math.random()*10000)+'")'
			}
			$(this).css('backgroundImage',newsrc);
		});	
	});
	
	/* Отправка форм block11 */ 
	$(document).ready(function(){	
		$('.block11submit').click(function(){	
			var clickid = $(this).attr('id');
			var blockname = clickid.substr(0,clickid.indexOf('submit'));
			if($('#'+blockname+'name').val() == ''){
				$('#divfor'+blockname+'name div').removeClass('check').addClass('nocheck');
				$('#'+blockname+'name').animateCss('flash');
				$(this).animateCss('shake');				
			}else{
				if($('#'+blockname+'phone').val() == ''){
					$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
					$('#'+blockname+'phone').animateCss('flash');
					$(this).animateCss('shake');				
				}else{
					if($('#'+blockname+'email').val() == ''){
						$('#divfor'+blockname+'email div').removeClass('check').addClass('nocheck');
						$('#'+blockname+'email').animateCss('flash');
						$(this).animateCss('shake');				
					}else{
						if($('#'+blockname+'text').val() == ''){
							$('#divfor'+blockname+'text div').removeClass('check').addClass('nocheck');
							$('#'+blockname+'text').animateCss('flash');
							$(this).animateCss('shake');				
						}else{
							if($('#'+blockname+'captcha').val() == ''){
								$('#divfor'+blockname+'captcha div').removeClass('check').addClass('nocheck');
								$('#'+blockname+'captcha').animateCss('flash');
								$(this).animateCss('shake');				
							}else{
								var str = 'block11checkandsendemail='+blockname;		/* Ajax отправка данных */
								str += '&block11name='+$('#'+blockname+'name').val();
								str += '&block11phone='+$('#'+blockname+'phone').val();
								str += '&block11email='+$('#'+blockname+'email').val();
								str += '&block11text='+$('#'+blockname+'text').val();		
								str += '&block11captcha='+$('#'+blockname+'captcha').val();						
								str += '&block11application='+$('#'+blockname+'application').val();
								$.ajax({
									type: "POST",
									url: "ajax.html",
									cache: false,
									data: str,
									success: function(html){
										var answerblock = html.substr(0,html.indexOf('-'));
										switch(html){
											case answerblock+'-noname': 
												$('#'+answerblock+'name').val('').animateCss('flash');
												$('#divfor'+answerblock+'name div').removeClass('check').addClass('nocheck');
												$('#'+answerblock+'submit').animateCss('shake');		
												break;
											case answerblock+'-nophone': 
												$('#'+answerblock+'phone').val('').animateCss('flash');
												$('#divfor'+answerblock+'phone div').removeClass('check').addClass('nocheck');
												$('#'+answerblock+'submit').animateCss('shake');		
												break;
											case answerblock+'-noemail': 
												$('#'+answerblock+'email').val('').animateCss('flash');
												$('#divfor'+answerblock+'email div').removeClass('check').addClass('nocheck');
												$('#'+answerblock+'submit').animateCss('shake');		
												break;
											case answerblock+'-notext': 
												$('#'+answerblock+'text').val('').animateCss('flash');
												$('#divfor'+answerblock+'text div').removeClass('check').addClass('nocheck');
												$('#'+answerblock+'submit').animateCss('shake');		
												break;
											case answerblock+'-nocaptcha': 
												$('#'+answerblock+'captcha').val('').animateCss('flash');
												$('#divfor'+answerblock+'captcha div').removeClass('check').addClass('nocheck');
												$('#'+answerblock+'submit').animateCss('shake');		
												break;
											case answerblock+'-ok': 
												$('#'+answerblock+'formfig>form').hide();
												$('#'+answerblock+'success').show();		
												break;
											case answerblock+'-error': 
												alert('Произошла непредвиденная ошибка. Попробуйте позже.');
												break;
											default: 
												alert('Произошла непредвиденная ошибка. Попробуйте позже.');
										}										
									}
								});	
							}
						}
					}
				}				
			}
			return false;
		});	
	});
	
	
	/* Функции */
	function checkinfoinblock11(id){
		if(id.val() == ''){
			$('#divfor'+id.attr('name')+' div').removeClass('check').addClass('nocheck');
		}else{
			$('#divfor'+id.attr('name')+' div').removeClass('nocheck').addClass('check');
		}
	}