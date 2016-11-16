/* Cсылка назад */
function back() {
    history.back();
}

/* Шапка */
	/* Показ блока с поиском в шапке */
	$(document).ready(function(){
		$('#headersearch').click(function(){
			$('#cartmenu').slideUp('fast');							//Скрываем меню корзины
			$('#headerbottomfig').slideToggle('slow');
		});  
	});

		/* Активация инпута по нажатию на значек поиска в инпуте поиска */
		$(document).ready(function(){
			$('#searchinsearch').click(function(){	
				$('#searchtext').focus();
			});  
		});

/* Модальные окна */ 
	/* Вызов */ 
	$(document).ready(function(){
		$('#headerbut a').click(function(){
			showmodwin(1);
			return false;		
		});	
	});

	$(document).ready(function(){
		$('#block2tap1mainsubmit').click(function(){
			showmodwin(1);
			var num = parseInt($('#block2tap1mainquantity').attr('value'));
			$('#modwin1 input[name=modwin1quantity]').val(num);
			$('#modwin1 input[name=modwin1quantity]').attr('value',num);
			$('#modwin1sumcost').html(countbookcost(num));
			$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(num));
			$('#modwin1allsum').val(countbookcostwithdelivery(num));
		});	
	});
		
	$(document).ready(function(){
		$('#block8leftbut a').click(function(){
			showmodwin(1);
			var num = 3;
			$('#modwin1 input[name=modwin1quantity]').val(num);
			$('#modwin1 input[name=modwin1quantity]').attr('value',num);
			$('#modwin1sumcost').html(countbookcost(num));
			$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(num));
			$('#modwin1allsum').val(countbookcostwithdelivery(num));
			return false;		
		});	
	});
	
	$(document).ready(function(){
		$('#block8centerbut a').click(function(){
			showmodwin(1);
			var num = 5;
			$('#modwin1 input[name=modwin1quantity]').val(num);
			$('#modwin1 input[name=modwin1quantity]').attr('value',num);
			$('#modwin1sumcost').html(countbookcost(num));
			$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(num));
			$('#modwin1allsum').val(countbookcostwithdelivery(num));
			return false;		
		});	
	});
	
	$(document).ready(function(){
		$('#block8rightbut a').click(function(){
			showmodwin(1);
			var num = 10;
			$('#modwin1 input[name=modwin1quantity]').val(num);
			$('#modwin1 input[name=modwin1quantity]').attr('value',num);
			$('#modwin1sumcost').html(countbookcost(num));
			$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(num));
			$('#modwin1allsum').val(countbookcostwithdelivery(num));
			return false;		
		});	
	});
	
	$(document).ready(function(){
		$('#block2tap2mainleftsubmit').click(function(){
			showmodwin(2);
			$('#modwin2 input[name=modwin2type]').val('pdf');
			
		});	
	});
	
	$(document).ready(function(){
		$('#block2tap3mainleftsubmit').click(function(){
			showmodwin(2);
			$('#modwin2 input[name=modwin2type]').val('mp3');
		});	
	});
	
	$(document).ready(function(){
		$('#block2tap2mainrightsubmit').click(function(){
			showmodwin(3);
			$('#modwin3 input[name=modwin3type]').val('pdf');
		});	
	});
	
	$(document).ready(function(){
		$('#block2tap3mainrightsubmit').click(function(){
			showmodwin(3);
			$('#modwin3 input[name=modwin3type]').val('mp3');
		});	
	});
	
	$(document).ready(function(){
		$('a.modwin4').click(function(){
			showmodwin(4);
			$('#modwin4 input[name=modwin4text]').val($(this).parent().parent().parent().children('h5').html());
			$('#modwin4 input[name=modwin4type]').val($(this).parent().parent().parent().children('p.block14boxtype').html());
			$('#modwin4 input[name=modwin4price]').val($(this).parent().parent().parent().children('p').children('span').html());
			return false;
		});	
	});

	/* Сокрытие по нажатию Esc */
	$(document).ready(function(){
		document.documentElement.onkeydown=function(e) {
			if (!e) {e=window.event}
			if (e.keyCode=="27") {
				if($('#blockscreen').css('display') != "none"){					
					hidemodwin();
				}
			}
		} 
	});
	
	/* Сокрытие по клику на крестик */
	$(document).ready(function(){
		$('.closemodwin').click(function(){			
			hidemodwin();
		});  
	});
	
	/* modwin1 */
		/* Изменение value при ручном изменении количества modwin1 */
		$(document).ready(function(){
			$('#modwin1quantity').change(function(){	
				if(!isNaN($(this).val())){
					if($(this).val() > 0){
						$(this).attr('value',$(this).val());
						$('#modwin1sumcost').html(countbookcost($(this).val()));
						$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery($(this).val()));
						$('#modwin1allsum').val(countbookcostwithdelivery($(this).val()));
					}
				}		
			});
		});
		/* Увеличение и уменьшения количества modwin1 */ 
		$(document).ready(function(){
			$('#modwin1plus').click(function(){
				var res;
				if(isNaN($('#modwin1quantity').val())){
					res = parseInt($('#modwin1quantity').attr('value'))+1;
				}else{
					res = parseInt($('#modwin1quantity').val())+1;
				}
				$('#modwin1quantity').val(res);
				$('#modwin1quantity').attr('value',res);	
				$('#modwin1sumcost').html(countbookcost(res));
				$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(res));
				$('#modwin1allsum').val(countbookcostwithdelivery(res));
			});	
			$('#modwin1minus').click(function(){	
				var res;
				if(isNaN($('#modwin1quantity').val())){
					res = parseInt($('#modwin1quantity').attr('value'))-1;
				}else{
					res = parseInt($('#modwin1quantity').val())-1;
				}	
				if(res<1){
					res = 1;
				}
				$('#modwin1quantity').val(res);
				$('#modwin1quantity').attr('value',res);
				$('#modwin1sumcost').html(countbookcost(res));
				$('#modwin1rightbottomallsum>p>span').html(countbookcostwithdelivery(res));
				$('#modwin1allsum').val(countbookcostwithdelivery(res));
			});
		});
		/* Ajax подгрузка городов по выбору страны */		
		$(document).ready(function(){
			$('#modwin1 select[name=modwin1country]').change(function(){
				ajaxgetcityinmodwin1();	
			});
		});
		/* Функции */
		function ajaxgetcityinmodwin1(){
			var str = "getcitiesbycountry="+$('#modwin1 select[name=modwin1country]').val();
			$.ajax({
				type: "POST",
				url: "ajax.html",
				cache: false,
				data: str,
				success: function(html){
					$('#modwin1 select[name=modwin1city]').html(html);
				}
			});	
		}
		function clearmodwin1(){
			$('#modwin1 input[name=modwin1name]').val('');
			$('#modwin1 input[name=modwin1email]').val('');
			$('#modwin1 input[name=modwin1phone1]').val('+');
			$('#modwin1 input[name=modwin1phone2]').val('');
			$('#modwin1 input[name=modwin1phone3]').val('');
			$('#modwin1 select[name=modwin1country]').html($('#modwin1 select[name=modwin1country]').html());
			$('#modwin1 select[name=modwin1city]').html('<option selected value="0" disabled style="color: #E6E6E6;">Город</option>');
			$('#modwin1 input[name=modwin1street]').val('');
			$('#modwin1 input[name=modwin1house]').val('');
			$('#modwin1 input[name=modwin1flat]').val('');
			$('#modwin1 textarea[name=modwin1text]').val('');
			$('#modwin1 input[name=modwin1quantity]').val('1');
			$('#modwin1 input[name=modwin1quantity]').attr('value','1');
			$('#modwin1sumcost').html(parseInt($('#bookprice').val()));
			$('#modwin1rightbottomallsum>p>span').html(parseInt($('#bookprice').val())+parseInt($('#modwin1delivery').val()));			
			$('#modwin1allsum').val(parseInt($('#bookprice').val())+parseInt($('#modwin1delivery').val()));
			$('#modwin1 .check').removeClass('check');
			$('#modwin1 .nocheck').removeClass('nocheck');			
			$('#modwin1left').show();		//Показ если успешно куплено
			$('#modwin1right').show();		//		-//-
			$('#modwin1success').hide();	//		-//-
		}
		/* Отправка форм modwin1 */ 	
		$(document).ready(function(){	
			$('#modwin1submit').click(function(){
				var clickid = $(this).attr('id');
				var blockname = clickid.substr(0,clickid.indexOf('submit'));
				if($('#'+blockname+'name').val() == ''){
					$('#divfor'+blockname+'name div').removeClass('check').addClass('nocheck');
					$('#'+blockname+'name').animateCss('flash');
					$(this).animateCss('shake');				
				}else{
					if($('#'+blockname+'email').val() == ''){
						$('#divfor'+blockname+'email div').removeClass('check').addClass('nocheck');
						$('#'+blockname+'email').animateCss('flash');
						$(this).animateCss('shake');				
					}else{
						if($('#'+blockname+'phone1').val() == ''){
							$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
							$('#'+blockname+'phone1').animateCss('flash');
							$(this).animateCss('shake');				
						}else{	
							if($('#'+blockname+'phone2').val() == ''){
								$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
								$('#'+blockname+'phone2').animateCss('flash');
								$(this).animateCss('shake');				
							}else{	
								if($('#'+blockname+'phone3').val() == ''){
									$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
									$('#'+blockname+'phone3').animateCss('flash');
									$(this).animateCss('shake');				
								}else{	
									if(($('#'+blockname+'country').val() == '') || ($('#'+blockname+'country').val() == '0')  || ($('#'+blockname+'country').val() === null)){
										$('#divfor'+blockname+'country div').removeClass('check').addClass('nocheck');
										$('#'+blockname+'country').animateCss('flash');
										$(this).animateCss('shake');				
									}else{	
										if(($('#'+blockname+'city').val() == '') || ($('#'+blockname+'city').val() == '0')  || ($('#'+blockname+'city').val() === null)){
											$('#divfor'+blockname+'city div').removeClass('check').addClass('nocheck');
											$('#'+blockname+'city').animateCss('flash');
											$(this).animateCss('shake');				
										}else{	
											if($('#'+blockname+'house').val() == ''){
												$('#divfor'+blockname+'house div').removeClass('check').addClass('nocheck');
												$('#'+blockname+'house').animateCss('flash');
												$(this).animateCss('shake');				
											}else{	
												if(!$('#'+blockname+'checkbox').prop("checked")){
													$('#divfor'+blockname+'checkbox div').removeClass('check').addClass('nocheck');
													$('#'+blockname+'checkbox').animateCss('flash');
													$('#'+blockname+'lastp').animateCss('flash');
													$(this).animateCss('shake');				
												}else{
													var str = 'modwincheckandsendemail='+blockname;		/* Ajax отправка данных */
													str += '&modwinname='+$('#'+blockname+'name').val();
													str += '&modwinemail='+$('#'+blockname+'email').val();
													str += '&modwinphone1='+$('#'+blockname+'phone1').val();
													str += '&modwinphone2='+$('#'+blockname+'phone2').val();
													str += '&modwinphone3='+$('#'+blockname+'phone3').val();
													str += '&modwincountry='+$('#'+blockname+'country').val();
													str += '&modwincity='+$('#'+blockname+'city').val();
													str += '&modwinstreet='+$('#'+blockname+'street').val();
													str += '&modwinhouse='+$('#'+blockname+'house').val();
													str += '&modwinflat='+$('#'+blockname+'flat').val();
													str += '&modwintext='+$('#'+blockname+'text').val();
													str += '&modwinbookprice='+$('#bookprice').val();
													str += '&modwinquantity='+$('#'+blockname+'quantity').val();
													str += '&modwindelivery='+$('#'+blockname+'delivery').val();
													str += '&modwinallsum='+$('#'+blockname+'allsum').val();
													str += '&modwinanonym=false';
													str += '&modwintype=no';
													str += '&modwincheckbox='+$('#'+blockname+'checkbox').prop("checked");
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
																case answerblock+'-noemail': 
																	$('#'+answerblock+'email').val('').animateCss('flash');
																	$('#divfor'+answerblock+'email div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nophone': 
																	$('#'+answerblock+'phone1').val('').animateCss('flash');
																	$('#'+answerblock+'phone2').val('').animateCss('flash');
																	$('#'+answerblock+'phone3').val('').animateCss('flash');
																	$('#divfor'+answerblock+'phone div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nocountry': 
																	$('#'+answerblock+'country').animateCss('flash');
																	$('#divfor'+answerblock+'country div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nocity': 
																	$('#'+answerblock+'city').animateCss('flash');
																	$('#divfor'+answerblock+'city div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nostreet': 
																	$('#'+answerblock+'street').val('').animateCss('flash');
																	$('#divfor'+answerblock+'street div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nohouse': 
																	$('#'+answerblock+'house').val('').animateCss('flash');
																	$('#divfor'+answerblock+'house div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-nocheckbox': 
																	$('#'+answerblock+'checkbox').animateCss('flash');
																	$('#'+answerblock+'lastp').animateCss('flash');
																	$('#divfor'+answerblock+'checkbox div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
																case answerblock+'-ok': 
																	$('#'+answerblock+'left').hide();
																	$('#'+answerblock+'right').hide();
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
							}						
						}
					}	
				}
				return false;
			});	
		});	
		
	/* modwin2 */
		/* Функции */
		function clearmodwin2(){
			$('#modwin2 input[name=modwin2name]').val('');
			$('#modwin2 input[name=modwin2email]').val('');
			$('#modwin2 input[name=modwin2phone1]').val('+');
			$('#modwin2 input[name=modwin2phone2]').val('');
			$('#modwin2 input[name=modwin2phone3]').val('');
			$('#modwin2 textarea[name=modwin2text]').val('');
			$('#modwin2 input[name=modwin2type]').val('');
			$('#modwin2 .check').removeClass('check');
			$('#modwin2 .nocheck').removeClass('nocheck');	
			$('#modwin2left').show();		//Показ если успешно куплено
			$('#modwin2right').show();		//		-//-
			$('#modwin2success').hide();	//		-//-
		}
				
		/* Отправка форм modwin2 */ 	
		$(document).ready(function(){	
			$('#modwin2submit').click(function(){
				var clickid = $(this).attr('id');
				var blockname = clickid.substr(0,clickid.indexOf('submit'));
				if($('#'+blockname+'email').val() == ''){
					$('#divfor'+blockname+'email div').removeClass('check').addClass('nocheck');
					$('#'+blockname+'email').animateCss('flash');
					$(this).animateCss('shake');				
				}else{
					if(($('#'+blockname+'name').val() == '') && (!$('#'+blockname+'anonym').prop("checked"))){
						$('#divfor'+blockname+'name div').removeClass('check').addClass('nocheck');
						$('#'+blockname+'name').animateCss('flash');
						$(this).animateCss('shake');				
					}else{	
						if($('#'+blockname+'phone1').val() == ''){
							$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
							$('#'+blockname+'phone1').animateCss('flash');
							$(this).animateCss('shake');				
						}else{	
							if($('#'+blockname+'phone2').val() == ''){
								$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
								$('#'+blockname+'phone2').animateCss('flash');
								$(this).animateCss('shake');				
							}else{	
								if($('#'+blockname+'phone3').val() == ''){
									$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
									$('#'+blockname+'phone3').animateCss('flash');
									$(this).animateCss('shake');				
								}else{	
									if(!$('#'+blockname+'checkbox').prop("checked")){
										$('#divfor'+blockname+'checkbox div').removeClass('check').addClass('nocheck');
										$('#'+blockname+'checkbox').animateCss('flash');
										$('#'+blockname+'lastp').animateCss('flash');
										$(this).animateCss('shake');				
									}else{
										var str = 'modwincheckandsendemail='+blockname;		/* Ajax отправка данных */
										str += '&modwinname='+$('#'+blockname+'name').val();
										str += '&modwinemail='+$('#'+blockname+'email').val();
										str += '&modwinphone1='+$('#'+blockname+'phone1').val();
										str += '&modwinphone2='+$('#'+blockname+'phone2').val();
										str += '&modwinphone3='+$('#'+blockname+'phone3').val();
										str += '&modwincountry=no';
										str += '&modwincity=no';
										str += '&modwinstreet=no';
										str += '&modwinhouse=no';
										str += '&modwinflat=no';
										str += '&modwintext='+$('#'+blockname+'text').val();
										str += '&modwinbookprice='+$('#'+blockname+'allsum').val();
										str += '&modwinquantity=1';
										str += '&modwindelivery=no';
										str += '&modwinallsum='+$('#'+blockname+'allsum').val();
										str += '&modwinanonym='+$('#'+blockname+'anonym').prop("checked");
										str += '&modwintype='+$('#'+blockname+'type').val();
										str += '&modwincheckbox='+$('#'+blockname+'checkbox').prop("checked");
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
													case answerblock+'-noemail': 
														$('#'+answerblock+'email').val('').animateCss('flash');
														$('#divfor'+answerblock+'email div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-nophone': 
														$('#'+answerblock+'phone1').val('').animateCss('flash');
														$('#'+answerblock+'phone2').val('').animateCss('flash');
														$('#'+answerblock+'phone3').val('').animateCss('flash');
														$('#divfor'+answerblock+'phone div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-nocheckbox': 
														$('#'+answerblock+'checkbox').animateCss('flash');
														$('#'+answerblock+'lastp').animateCss('flash');
														$('#divfor'+answerblock+'checkbox div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-ok': 
														$('#'+answerblock+'left').hide();
														$('#'+answerblock+'right').hide();
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
				}
				return false;
			});	
		});	
		
	/* modwin3 */
		/* Функции */
		function clearmodwin3(){
			$('#modwin3 input[name=modwin3name]').val('');
			$('#modwin3 input[name=modwin3email]').val('');
			$('#modwin3 input[name=modwin3phone1]').val('+');
			$('#modwin3 input[name=modwin3phone2]').val('');
			$('#modwin3 input[name=modwin3phone3]').val('');
			$('#modwin3 textarea[name=modwin3text]').val('');
			$('#modwin3 input[name=modwin3type]').val('');
			$('#modwin3 .check').removeClass('check');
			$('#modwin3 .nocheck').removeClass('nocheck');
			$('#modwin3forminside').show();		//Показ если успешно куплено
			$('#modwin3success').hide();	//		-//-
		}		
				
		/* Отправка форм modwin3 */ 	
		$(document).ready(function(){	
			$('#modwin3submit').click(function(){
				var clickid = $(this).attr('id');
				var blockname = clickid.substr(0,clickid.indexOf('submit'));				
				if($('#'+blockname+'name').val() == ''){
					$('#divfor'+blockname+'name div').removeClass('check').addClass('nocheck');
					$('#'+blockname+'name').animateCss('flash');
					$(this).animateCss('shake');				
				}else{
					if($('#'+blockname+'email').val() == ''){
						$('#divfor'+blockname+'email div').removeClass('check').addClass('nocheck');
						$('#'+blockname+'email').animateCss('flash');
						$(this).animateCss('shake');				
					}else{
						if($('#'+blockname+'phone1').val() == ''){
							$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
							$('#'+blockname+'phone1').animateCss('flash');
							$(this).animateCss('shake');				
						}else{	
							if($('#'+blockname+'phone2').val() == ''){
								$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
								$('#'+blockname+'phone2').animateCss('flash');
								$(this).animateCss('shake');				
							}else{	
								if($('#'+blockname+'phone3').val() == ''){
									$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
									$('#'+blockname+'phone3').animateCss('flash');
									$(this).animateCss('shake');				
								}else{	
									if(!$('#'+blockname+'checkbox').prop("checked")){
										$('#divfor'+blockname+'checkbox div').removeClass('check').addClass('nocheck');
										$('#'+blockname+'checkbox').animateCss('flash');
										$('#'+blockname+'lastp').animateCss('flash');
										$(this).animateCss('shake');				
									}else{
										var str = 'modwincheckandsendemail='+blockname;		/* Ajax отправка данных */
										str += '&modwinname='+$('#'+blockname+'name').val();
										str += '&modwinemail='+$('#'+blockname+'email').val();
										str += '&modwinphone1='+$('#'+blockname+'phone1').val();
										str += '&modwinphone2='+$('#'+blockname+'phone2').val();
										str += '&modwinphone3='+$('#'+blockname+'phone3').val();
										str += '&modwincountry=no';
										str += '&modwincity=no';
										str += '&modwinstreet=no';
										str += '&modwinhouse=no';
										str += '&modwinflat=no';
										str += '&modwintext=no';
										str += '&modwinbookprice='+$('#'+blockname+'allsum').val();
										str += '&modwinquantity=1';
										str += '&modwindelivery=no';
										str += '&modwinallsum='+$('#'+blockname+'allsum').val();
										str += '&modwinanonym=false';
										str += '&modwintype='+$('#'+blockname+'type').val();
										str += '&modwincheckbox='+$('#'+blockname+'checkbox').prop("checked");
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
													case answerblock+'-noemail': 
														$('#'+answerblock+'email').val('').animateCss('flash');
														$('#divfor'+answerblock+'email div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-nophone': 
														$('#'+answerblock+'phone1').val('').animateCss('flash');
														$('#'+answerblock+'phone2').val('').animateCss('flash');
														$('#'+answerblock+'phone3').val('').animateCss('flash');
														$('#divfor'+answerblock+'phone div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-nocheckbox': 
														$('#'+answerblock+'checkbox').animateCss('flash');
														$('#'+answerblock+'lastp').animateCss('flash');
														$('#divfor'+answerblock+'checkbox div').removeClass('check').addClass('nocheck');
														$('#'+answerblock+'submit').animateCss('shake');		
														break;
													case answerblock+'-ok': 
														$('#'+answerblock+'forminside').hide();
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
				}
				return false;
			});	
		});	
		
	/* modwin4 */
		/* Ajax подгрузка городов по выбору страны */		
		$(document).ready(function(){
			$('#modwin4 select[name=modwin4country]').change(function(){
				ajaxgetcityinmodwin4();	
			});
		});
		/* Функции */
		function ajaxgetcityinmodwin4(){
			var str = "getcitiesbycountry="+$('#modwin4 select[name=modwin4country]').val();
			$.ajax({
				type: "POST",
				url: "ajax.html",
				cache: false,
				data: str,
				success: function(html){
					$('#modwin4 select[name=modwin4city]').html(html);
				}
			});	
		}
		function clearmodwin4(){
			$('#modwin4 input[name=modwin4name]').val('');
			$('#modwin4 input[name=modwin4email]').val('');
			$('#modwin4 input[name=modwin4phone1]').val('+');
			$('#modwin4 input[name=modwin4phone2]').val('');
			$('#modwin4 input[name=modwin4phone3]').val('');
			$('#modwin4 select[name=modwin4country]').html($('#modwin4 select[name=modwin4country]').html());
			$('#modwin4 select[name=modwin4city]').html('<option selected value="0" disabled style="color: #E6E6E6;">Город</option>');
			$('#modwin4 input[name=modwin4text]').val('');
			$('#modwin4 input[name=modwin4type]').val('');
			$('#modwin4 input[name=modwin4price]').val('');
			$('#modwin4 .check').removeClass('check');
			$('#modwin4 .nocheck').removeClass('nocheck');
			$('#modwin4forminside').show();		//Показ если успешно куплено
			$('#modwin4success').hide();	//		-//-
		}
		
		/* Отправка форм modwin4 */ 	
		$(document).ready(function(){	
			$('#modwin4submit').click(function(){
				var clickid = $(this).attr('id');
				var blockname = clickid.substr(0,clickid.indexOf('submit'));				
				if($('#'+blockname+'name').val() == ''){
					$('#divfor'+blockname+'name div').removeClass('check').addClass('nocheck');
					$('#'+blockname+'name').animateCss('flash');
					$(this).animateCss('shake');				
				}else{
					if($('#'+blockname+'email').val() == ''){
						$('#divfor'+blockname+'email div').removeClass('check').addClass('nocheck');
						$('#'+blockname+'email').animateCss('flash');
						$(this).animateCss('shake');				
					}else{
						if($('#'+blockname+'phone1').val() == ''){
							$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
							$('#'+blockname+'phone1').animateCss('flash');
							$(this).animateCss('shake');				
						}else{	
							if($('#'+blockname+'phone2').val() == ''){
								$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
								$('#'+blockname+'phone2').animateCss('flash');
								$(this).animateCss('shake');				
							}else{	
								if($('#'+blockname+'phone3').val() == ''){
									$('#divfor'+blockname+'phone div').removeClass('check').addClass('nocheck');
									$('#'+blockname+'phone3').animateCss('flash');
									$(this).animateCss('shake');				
								}else{	
									if(($('#'+blockname+'country').val() == '') || ($('#'+blockname+'country').val() == '0')  || ($('#'+blockname+'country').val() === null)){
										$('#divfor'+blockname+'country div').removeClass('check').addClass('nocheck');
										$('#'+blockname+'country').animateCss('flash');
										$(this).animateCss('shake');				
									}else{	
										if(($('#'+blockname+'city').val() == '') || ($('#'+blockname+'city').val() == '0')  || ($('#'+blockname+'city').val() === null)){
											$('#divfor'+blockname+'city div').removeClass('check').addClass('nocheck');
											$('#'+blockname+'city').animateCss('flash');
											$(this).animateCss('shake');				
										}else{	
											if(!$('#'+blockname+'checkbox').prop("checked")){
												$('#divfor'+blockname+'checkbox div').removeClass('check').addClass('nocheck');
												$('#'+blockname+'checkbox').animateCss('flash');
												$('#'+blockname+'lastp').animateCss('flash');
												$(this).animateCss('shake');				
											}else{
												var str = 'modwincheckandsendemail='+blockname;		/* Ajax отправка данных */
												str += '&modwinname='+$('#'+blockname+'name').val();
												str += '&modwinemail='+$('#'+blockname+'email').val();
												str += '&modwinphone1='+$('#'+blockname+'phone1').val();
												str += '&modwinphone2='+$('#'+blockname+'phone2').val();
												str += '&modwinphone3='+$('#'+blockname+'phone3').val();
												str += '&modwincountry='+$('#'+blockname+'country').val();
												str += '&modwincity='+$('#'+blockname+'city').val();
												str += '&modwinstreet=no';
												str += '&modwinhouse=no';
												str += '&modwinflat=no';
												str += '&modwintext='+$('#'+blockname+'text').val();
												str += '&modwinbookprice='+$('#'+blockname+'price').val();
												str += '&modwinquantity=1';
												str += '&modwindelivery=no';
												str += '&modwinallsum=no'
												str += '&modwinanonym=false';
												str += '&modwintype='+$('#'+blockname+'type').val();
												str += '&modwincheckbox='+$('#'+blockname+'checkbox').prop("checked");
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
															case answerblock+'-noemail': 
																$('#'+answerblock+'email').val('').animateCss('flash');
																$('#divfor'+answerblock+'email div').removeClass('check').addClass('nocheck');
																$('#'+answerblock+'submit').animateCss('shake');
																break;
															case answerblock+'-nophone': 
																$('#'+answerblock+'phone1').val('').animateCss('flash');
																$('#'+answerblock+'phone2').val('').animateCss('flash');
																$('#'+answerblock+'phone3').val('').animateCss('flash');
																$('#divfor'+answerblock+'phone div').removeClass('check').addClass('nocheck');
																$('#'+answerblock+'submit').animateCss('shake');
																break;
															case answerblock+'-nocountry': 
																	$('#'+answerblock+'country').animateCss('flash');
																	$('#divfor'+answerblock+'country div').removeClass('check').addClass('nocheck');
																	$('#'+answerblock+'submit').animateCss('shake');		
																	break;
															case answerblock+'-nocity': 
																$('#'+answerblock+'city').animateCss('flash');
																$('#divfor'+answerblock+'city div').removeClass('check').addClass('nocheck');
																$('#'+answerblock+'submit').animateCss('shake');	
																break;
															case answerblock+'-nocheckbox': 
																$('#'+answerblock+'checkbox').animateCss('flash');
																$('#'+answerblock+'lastp').animateCss('flash');
																$('#divfor'+answerblock+'checkbox div').removeClass('check').addClass('nocheck');
																$('#'+answerblock+'submit').animateCss('shake');
																break;
															case answerblock+'-ok': 
																$('#'+answerblock+'forminside').hide();
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
						}
					}
				}
				return false;
			});	
		});	
	
	/* Простая проверка наличия данных в инпутах и текстариах */
	$(document).ready(function(){	
		$('.modwincheck').change(function(){
			checkinfoinblock11($(this));
		});
	});	
	/* Проверка правильности ввода емаила */
	$(document).ready(function(){	
		$('.modwincheckemail').change(function(){
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
	/* Проверка правильности ввода телефона */
	$(document).ready(function(){	
		$('.modwincheckphone').change(function(){
			var blockid = $(this).attr('id').substr(0,12);
			if(($("#"+blockid+"1").val() != "") && ($("#"+blockid+"1").val() != "+") && ($("#"+blockid+"2").val() != "") && ($("#"+blockid+"3").val() != "")){
				var str = 'checkphone=check&phone1='+$("#"+blockid+"1").val()+'&phone2='+$("#"+blockid+"2").val()+'&phone3='+$("#"+blockid+"3").val();		/* Ajax проверка телефона */
				$.ajax({
					type: "POST",
					url: "ajax.html",
					cache: false,
					data: str,
					success: function(html){
						$('#divfor'+blockid+'>figure').html(html);
					}
				});				
			}else{
				$('#divfor'+blockid+' div').removeClass('check').addClass('nocheck');
			}	
		});
	});	
	/* Убираем крестик при отменчании чекбокса (крестик появлется после отпраки)*/
	$(document).ready(function(){	
		$('.modwincheckcheckbox').change(function(){
			var blockid = $(this).attr('id');
			$('#divfor'+blockid+' div').removeClass('check').removeClass('nocheck');				
		});
	});	
	/* Убираем крестик у имени при отменчании чекбокса аноним (крестик появлется после отпраки)*/
	$(document).ready(function(){	
		$('.modwincheckanonym').change(function(){
			var blockid = $(this).attr('id').substr(0,7);
			$('#divfor'+blockid+'name div').removeClass('check').removeClass('nocheck');				
		});
	});
	/* Функции */		
	function showmodwin(num){
		$('#blockscreen').show();
		//$('body').css("overflow","hidden"); // Блокировка прокрутки
		$('#modwin'+num).show();
		centeredmodwin(num);
		$(window).on("resize", function(){		//Повторная центровка модального окна в случае изменения ширины
			centeredmodwin(num);
		});
	}
	
	function hidemodwin(){
		$('#footerinside>div').hide();
		//$('body').css("overflow","auto"); // Блокировка прокрутки
		// Очистка формы	
		clearmodwin1();
		clearmodwin2();
		clearmodwin3();
		clearmodwin4();
	}
	
	function centeredmodwin(num){
		var popravka = Math.ceil(($(window).height() - $('#modwin'+num).height())/2);
		if (popravka <0){
			popravka = 0;
		}
		$('#modwin'+num).css("top",popravka+"px");
	}
	function countbookcost(num){
		var price = parseInt($('#bookprice').val());
		if(num>=3 && num<5){
			return ((price*num)-Math.ceil(price*num*0.1));
		}else{
			if(num>=5 && num<10){
				return ((price*num)-price);
			}else{
				if(num>=10){
					return ((price*num)-(price*2));
				}else{
					return (price*num);
				}
			}
		}
	}
	function countbookcostwithdelivery(num){
		return (countbookcost(num) + parseInt($('#modwin1delivery').val()));
	}
	function checkinfoinmodwin(id){
		if(id.val() == ''){
			$('#divfor'+id.attr('name')+' div').removeClass('check').addClass('nocheck');
		}else{
			$('#divfor'+id.attr('name')+' div').removeClass('nocheck').addClass('check');
		}
	}

/* Тест
$(document).ready(function(){
	alert($(window).width());
}); */