var shop=shop || {};

/*	var exed = x=>{
		// iframe을 넣은 element를 안보이게 한다.
    	element_wrap.style.display = 'none';
	};
*/
/*shop.ajax = {aj:()=>{
		$.ajax({
					url:x.context+'/cartlist/'+id.userid+'',
					method:'POST',
					data:JSON.stringify({
						userid:id.userid}),
					dataType:'json',
					contentType:'application/json',
					success:x=>{
						console.log(x,'1');
						alert(x[5].imageName+'김정워이씨발');
						x=j
					
					},
					error:(x,h,m)=>{
						
					}
				});
				
}}*/
shop.mall = {cart:x=>{
	$.getScript(x.view,()=>{
		
		$('#div-advertise').html(createDiv({id:'div-content',clazz:''}));
		$('#div-content').html(createDiv({id:'div-wrap-root',clazz:'wrap-root'}));
		$('#div-wrap-root').append(createUL({id:'ul-root',clazz:'list-inline root'}));
		// 아래의 서점은 동적으로 들어 가게끔 꾸며야 함
		$('#ul-root').html(createMultiLi({
			id:'root',arr:['HOME>','서점>','장바구니']}))
			$('#div-content').append(createDiv({id:'div-cart-title',clazz:''}))
			$('#div-content').append(createDiv({id:'div-cart-content',clazz:''}))
			$('#div-content').attr('style','width:1000px; margin: 0 auto');

		
			var id ={userid:'ju'}
			
					$.ajax({
					url:x.context+'/cartlist/'+id.userid+'',
					method:'POST',
					data:JSON.stringify({
						userid:id.userid}),
					dataType:'json',
					contentType:'application/json',
					success:y=>{
						
						
						console.log(y);
						console.log(Object.keys(y).length,'리스트의 개수');

						
						$('#div-cart-title').html(createHTag({size:'2',val:'장바구니 '+Object.keys(y).length+'건'}))
							$('#div-cart-title').attr('style','border-bottom:2px solid black; text-align: center')
							$(createTable({id:'table-cart',clazz:'table-cart'})).appendTo('#div-cart-content')
							$(createTr({id:'tr-head'})).appendTo('#table-cart')
							$(createMultiTh({arr:['1','2','3','4'],clazz:'',id:'th'})).appendTo('#tr-head')
							$('#th-0').html(createInput({id:'ip-check-all',clazz:'update',type:'checkbox'})).attr('style','width:5%;padding-right:30px;')
							$('#ip-check-all').attr('checked','checked')
							$('#th-1').text('상품정보').attr('style','width:65%')
							$('#th-2').text('상품금액')
							$('#th-3').text('삭제').attr('colspan','3').attr('style','width:10%');
						//tr의 길이
							$(createMultiTr({id:'tr-cart-list',arr:makeCount(Object.keys(y).length)}))
							.appendTo('#table-cart');
							
						for(var i =0; i<=Object.keys(y).length-1;i++){
							//멀티 td 영역
							$('#tr-cart-list-'+i+'').append(createMultiTd({
								id:'td-tr'+i+'-cart-list',
								arr:makeCount(Object.keys(y[0]).length-5)}))
							$(createInput({id:'book-check-'+i+'',type:'checkbox',clazz:'update'})).appendTo('#td-tr'+i+'-cart-list-0')
							.attr('name','book-check').attr('checked','checked')
							$('#td-tr'+i+'-cart-list-1').append(createDiv({
								id:'div-cart-list-content-'+i+'',clazz:''}))
								
							$(createButton({id:'btn-book-del-'+i+'',clazz:'btn',val:'삭제'})).appendTo('#td-tr'+i+'-cart-list-3')
							.attr('style','background-color:#ce6a52;color:white;width:50%;margin-left:25%');
							
							$('#div-cart-list-content-'+i+'').append(createMultiDiv({
								id:'div-tr'+i+'-td1-cart-list',
								arr:makeCount(3),
								clazz:'div-cart-list-content'}));
							
							
							$(createImage({id:'',src:y[i].imageRoute,clazz:''})).appendTo('#div-tr'+i+'-td1-cart-list-0')
							.attr('style','width:80px;height:120px;margin-top:20px');
							$('#div-tr'+i+'-td1-cart-list-0').attr('style','margin-right:30px;margin-bottom:10px;');
							$('#div-tr'+i+'-td1-cart-list-1').append(strong({id:'strong-'+i+'',val:y[i].bookName}))
							.attr('style','margin-top:7%;margin-right:40px;width:300px;font-size:14px');
							
							$('#div-tr'+i+'-td1-cart-list-1').append(createP({id:'p-'+i+'',val:y[i].writter}));
							$('#div-tr'+i+'-td1-cart-list-2').append(createInput({id:'input-amount-'+i+'',type:'text',clazz:'update'}))
							.attr('style','margin-top:10%');
							$('#input-amount-'+i+'').attr('value',y[i].amount)
							.attr('style','width:100px;');
							$('#td-tr'+i+'-cart-list-2').text(y[i].price).attr('style', 'text-align: center');
								$('#input-amount-'+i+'').spinner({
								min:0,
								max:10,
								
								});
								
								
							$('.ui-spinner').attr('style','background: white');
							
						
								
						
							
						}//for문 끝나는 지점
						
						
						$('#ip-check-all').change(()=>{
							if($('#ip-check-all').is(":checked")){
								$('input[type=checkbox]').prop('checked',true);
							}else if(!($('#ip-check-all').is(":checked"))){
								$('input[type=checkbox]').prop('checked',false);
							}
						});
					
						
						
						$('#div-content').append(createDiv({id:'div-cart-footer',clazz:''}))
						$(createDiv({id:'div-cart-footer-content',clazz:''})).appendTo('#div-cart-footer')
						.attr('style','padding-top: 20px');
						$('#div-cart-footer-content').append(createDiv({
							id:'div-cart-footer-content-left',
							clazz:''}))
						$('#div-cart-footer-content').append(createDiv({
							id:'div-cart-footer-content-right',
							clazz:''}))
							$('#div-cart-footer-content-left').text('부크크의 도서의 경우 주문제작 상품이기 때문에 결제 후 4~5일 정도 배송에 소요됩니다.')
							$('#div-cart-footer-content-right').append(createButton({
								id:'btn-select-del',
								clazz:'btn',val:'선택한 도서 삭제'}))
								$('#btn-select-del').attr('style','background-color:#f8f8f8;color:black;border-color:#c8c8c8');
						//주문 금액 영역
						$('#div-content').append(createDiv({id:'div-cart-price',clazz:''}))
						$('#div-cart-price').append(createTable({id:'table-cart-price',clazz:'table-cart-price'}))
						$('#table-cart-price').append(createMultiTr({arr:['',''],id:'tr-cart-price'}))
						$('#tr-cart-price-0').append(createMultiTh({id:'th-price-head',arr:['1','2','3']}))
						$('#th-price-head-0').text('주문금액');
						$('#th-price-head-1').text('배송비');
						$('#th-price-head-2').text('결제 예정금액');
						$('#tr-cart-price-1').append(createMultiTd({arr:['','',''],id:'td-cart-price'}));
						$('#td-cart-price-0').append(createSpan({id:'span-td-0',clazz:''})+'원');
						var val = 0
						for(var i =0;i<Object.keys(y).length;i++){
						val +=	y[i].amount*y[i].price*1
						}
						$('#span-td-0').text(val).attr('style','font-size:30px');
						
						
						
						
						$('#td-cart-price-1').append(createSpan({id:'span-td-1',clazz:''})+'원');
						$('#span-td-1').attr('style','font-size:30px');
						$('#td-cart-price-2').append(createSpan({id:'span-td-2',clazz:''})+'원');
						$('#span-td-2').attr('style','font-size:30px');
						
						//배송 checkbox div
						$('#div-content').append(createDiv({id:'div-delivery-price'}))
						$('#div-delivery-price').append(createMultiDiv({id:'div-delivery-price',arr:['','']}));
						$('#div-delivery-price').attr('font-weight','normal');
						
						
						$('#div-delivery-price-0').append(createLabel({
							fo:'',
							val:createInput({
								id:'input-checkbox-0',
								clazz:'',
								type:'checkbox'})+'배송료를 선불로 지불합니다. (기본 2,500원)'}));
						$('#input-checkbox-0').attr('value','2500');
						$('#input-checkbox-0').attr('checked','checked');
						$('#div-delivery-price-1').append(createLabel({
							fo:'',
							val:createInput({
								id:'input-checkbox-1',
								clazz:'',
								type:'checkbox'})+'제주도 및 도서산간지역(+2,500원)'}));
						$('#input-checkbox-1').attr('value','2500');
						$('#span-td-1').text('2500');
						$('#span-td-2').text($('#span-td-0').text()*1+($('#span-td-1').text())*1);
						$('input[id=input-checkbox-0]').click(()=>{
							if ($('input[id=input-checkbox-0]').is(':checked')) {
								
								$('input[id=input-checkbox-1]').removeAttr('disabled');
								$('#span-td-1').text('2500');
								$('input[id=input-checkbox-0]').attr('value','2500');
								$('#span-td-2').text($('#span-td-0').text()*1+($('#span-td-1').text())*1);
								
								
							} else {
								
								$('#span-td-1').text('0');
								$('input[id=input-checkbox-1]').prop('checked',false);
								$('input[id=input-checkbox-1]').attr('disabled','disabled');
								$('#span-td-2').text($('#span-td-0').text()*1+($('#span-td-1').text())*1);
							}
						});
						$('input[id=input-checkbox-1]').click(()=>{
							if ($('input[id=input-checkbox-1]').is(':checked')) {
								
								$('input[id=input-checkbox-1]').removeAttr('disabled');
								$('input[id=input-checkbox-1]').attr('value','2500');
								$('#span-td-1').text(($('input[id=input-checkbox-0]').val())*1+($('input[id=input-checkbox-1]').val())*1);
								$('#span-td-2').text($('#span-td-0').text()*1+($('#span-td-1').text())*1);
								 
							}else{
								
								$('#span-td-1').text(parseInt($('input[id=input-checkbox-0]').val()));
								$('#span-td-2').text($('#span-td-0').text()*1+($('#span-td-1').text())*1);
							}
						});
						$('.ui-spinner-button').addClass('update');
						var zz = 0;
						$('.update').click(()=>{
							zz =0;
							$(function(){
								if($('#ip-check-all').is(':checked')){
									calc();
								}else {
									calc();
									$('#span-td-0').text(zz).attr('style','font-size:30px');
								}
								
							});
							var calc = function(){for(var i =0;i<Object.keys(y).length;i++){
								
								if($('#book-check-'+i+'').is(':checked')){
									zz += 1*$( "#input-amount-"+i).spinner("value")*$('#td-tr'+i+'-cart-list-2').text();
								}
							}
							$('#span-td-0').text(zz).attr('style','font-size:30px');
							$('#span-td-2').text(zz+$('#span-td-1').text()*1).attr('style','font-size:30px');
							};
						});
						$(createDiv({id:'div-btn-wrapper',clazz:''})).appendTo('#div-content');
						$('#div-btn-wrapper').append(createButton({id:'btn-cart-payment',clazz:'btn',val:'결제하기'}))
						$('#btn-cart-payment').attr('style','background:#ce6a52;color:#fff; width:250px').click(()=>{
							
							shop.mall.sell({
								view:x.view,
								context:x.context,
								val:'02 주문/결제 ',
								orderPrice:[$('#span-td-0').text(),$('#span-td-1').text(),$('#span-td-2').text()],
								y:y
								});
						})
						$('#div-btn-wrapper').attr('style','text-align:center; margin:20px');
						
						
					},
					error:(y,h,m)=>{
						
					}
				});

	});
	
	
},
sell:x=>{
	$.getScript(x.view,()=>{
		
		$('div[id=div-content]').html(createMultiDiv({
			id:'div-sell',
			clazz:'',
			arr:['','','']}));
		$('#div-sell-0').text('구매확인').attr('style','font-size:30px; margin-top:20px');
		$('#div-sell-1').attr('style','float:right;font-size:20px').append(createMultiSpan({id:'span-root',arr:['','','']}))
		var k =['01 장바구니 ','02 주문/결제 ','03 결제완료'];
		for(var i=0;i<=2;i++){
			$('#span-root-'+i+'').text(k[i]);
			if(x.val===$('#span-root-'+i+'').text()){
				$('#span-root-'+i+'').attr('style','color:#ce6a52')
			}else{
				$('#span-root-'+i+'').attr('style','color:gray')
			}
			};	
			//div 추가하는 곳
			$('#div-sell-2').append(createMultiDiv({id:'div-sell-2',arr:['','','','','','','','','']}))
			$('#div-sell-2-0').append(createTable({id:'table-cart',clazz:'table-cart'}))
			$('#table-cart').append(createTr({id:'tr-head'}));
			$('#tr-head').append(createMultiTh({arr:['',''],id:'th'}))
			$('#th-0').text('상품정보').attr('style','width:80%');
			$('#th-1').text('상품금액');
			$('#div-sell-2-1').append(createTable({id:'table-cart-price',clazz:'table-cart-price'}))
			$('#table-cart-price').append(createMultiTr({id:'tr-cart-price',arr:['','']}));
			$('#tr-cart-price-0').append(createMultiTh({arr:['','',''],id:'th-tr0-cart-price'}))
			$('#th-tr0-cart-price-0').text('주문금액')
			$('#th-tr0-cart-price-1').text('배송비')
			$('#th-tr0-cart-price-2').text('결제 예정금액')
			$('#tr-cart-price-1').append(createMultiTd({id:'td-tr1-cart-price',arr:['','','']}));
			
			for(var i =0;i<=2;i++){
				$('#td-tr1-cart-price-'+i+'').html(createSpan({id:'span-td-'+i+'',clazz:''})+'원');
				$('#span-td-'+i+'').text(x.orderPrice[i]).attr('style','font-size:30px');
			}
			$('#div-sell-2-2').text('구매자 정보').attr('style','font-size:20px;margin:20px');
			$('#div-sell-2-3').append(createTable({id:'table-buyer-info',clazz:'table-buyer-info'}));
			$('#table-buyer-info').append(createMultiTr({id:'tr-buyer-info',arr:['','','']}));
			var temp = ['주문자','연락처','이메일'];
			for(var i =0;i<=2;i++){
				$('#tr-buyer-info-'+i+'').append($(createMultiTd({id:'td-tr'+i+'-buyer-info',arr:['','']})));
				$('#td-tr'+i+'-buyer-info-0')
				.attr('class','left-td')
				.text(temp[i]);
				$('#td-tr'+i+'-buyer-info-1').append(createInput({
					id:'input-buyer-info-'+i+'',
					clazz:'',
					type:'text'}))
			}
			$('#div-sell-2-4').append(createMultiDiv({id:'div-sell-2-4',arr:['','']}));
			$('#div-sell-2-4-0').text('받는 사람 정보').attr('style','font-size:20px;margin:20px');
			$('#div-sell-2-4-1').append(createInput({id:'input-buyer-check',clazz:'',type:'checkbox'}))
			.attr('style','float:right;maring-right:5px');
			$('#div-sell-2-4-1').append(createLabel({fo:'',val:'구매자 정보와 동일'}));
			$('#div-sell-2-5').append(createTable({id:'table-recipient-info',clazz:'table-buyer-info'}))
			$('#table-recipient-info').append(createMultiTr({id:'tr-recipient-info',arr:['','','','']}))
			var recipient = ['받으시는 분 *','연락처 *','배송 주소 *','배송 시 요구사항']
			for(var i =0; i<=3;i++){
				$('#tr-recipient-info-'+i+'').append(createMultiTd({id:'td-tr'+i+'-recipient-info',arr:['','']}));
				$('#td-tr'+i+'-recipient-info-0').attr('class','left-td-2').text(recipient[i]);
			}
			$('#td-tr0-recipient-info-1').append(createInput({id:'input-recipient-info-0',type:'text',clazz:''}));
			$('#td-tr1-recipient-info-1').append(createInput({id:'input-recipient-info-1',type:'text',clazz:''}));
			$('#tr-recipient-info-2').attr('style','height:200px').append(createTd({id:'td-tr2-recipient-info-2',clazz:''}));
			$('#td-tr3-recipient-info-1').append(textarea('textarea-tr3-td1-requierment'));
			$('#div-sell-2-6').text('결제 정보').attr('style','margin:20px;font-size:20px');
			$('#div-sell-2-7').append(createTable({id:'table-payment-info',clazz:'table-buyer-info'}));
			$('#table-payment-info').append(createTr({id:'tr-payment-info'}));
			$('#tr-payment-info').append(createMultiTd({
				id:'td-tr-payment-info',
				arr:['','']}))
			$('#td-tr-payment-info-0').attr('class','left-td').text('결제 방법 *');
			$('#td-tr-payment-info-1').append(createSelect('select-payment'))
			$('#select-payment').append(multiOption({id:'',
				arr:['신용카드 결제','실시간 은행계좌이체','무통장 입금(가상계좌)']}))
				.attr('style','width:170px;height:60%;margin-left:15px')
			
			$(createButton({id:'btn-payment',clazz:'btn',val:'결제하기'})).appendTo('#div-sell-2-8')
			.attr('style','background-color:#c33e38;color:#fff;border-color:#c33e38')
			$('#div-sell-2-8').attr('style','text-align:center;margin-top:20px');
				
		    
		    
			
			
			
			
	});
	
	
}
}