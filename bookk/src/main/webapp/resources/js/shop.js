var shop=shop || {};
var se=JSON.parse(sessionStorage.getItem('user'));
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

		
			
		
					$.ajax({
					url:x.context+'/cartlist/b',
					method:'POST',
					data:JSON.stringify({
						userid:se.memID,
						insertBook:x.insertBook,
						insertAmount:x.insertAmount
						}),
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
						// tr의 길이
							$(createMultiTr({id:'tr-cart-list',arr:makeCount(Object.keys(y).length)}))
							.appendTo('#table-cart');
							
						for(var i =0; i<=Object.keys(y).length-1;i++){
							// 멀티 td 영역
							$('#tr-cart-list-'+i+'').append(createMultiTd({
								id:'td-tr'+i+'-cart-list',
								arr:makeCount(Object.keys(y[0]).length-5)}))
							$(createInput({id:'book-check-'+i+'',type:'checkbox',clazz:'update'})).appendTo('#td-tr'+i+'-cart-list-0')
							.attr('name','book-check').attr('checked','checked').attr('value',y[i].orderNum);
							$('#td-tr'+i+'-cart-list-1').append(createDiv({
								id:'div-cart-list-content-'+i+'',clazz:''}))
								
							$(createButton({id:'btn-book-del-'+i+'',clazz:'btn book-del book-modify',val:'삭제'})).appendTo('#td-tr'+i+'-cart-list-3')
							.attr('value',y[i].orderNum)
							
							$('#div-cart-list-content-'+i+'').append(createMultiDiv({
								id:'div-tr'+i+'-td1-cart-list',
								arr:makeCount(3),
								clazz:'div-cart-list-content'}));
							
							
							$(createImage({id:'',src:y[i].imageRoute,clazz:''})).appendTo('#div-tr'+i+'-td1-cart-list-0')
							.attr('style','width:80px;height:120px;margin-top:20px');
							$('#div-tr'+i+'-td1-cart-list-0').attr('style','margin-right:30px;margin-bottom:10px;');
							$('#div-tr'+i+'-td1-cart-list-1').append(strong({id:'strong-'+i+'',val:y[i].bookName}))
							.attr('style','margin-top:7%;margin-right:40px;width:300px;font-size:14px');
							
							$('#div-tr'+i+'-td1-cart-list-1').append(createP({id:'p-'+i+'',val:'by '+y[i].writter}));
							$('#div-tr'+i+'-td1-cart-list-2').append(createInput({id:'input-amount-'+i+'',type:'text',clazz:'update'}))
							.attr('style','margin-top:10%').attr('name','input-amount');
							$('#input-amount-'+i+'').attr('value',y[i].amount)
							.attr('style','width:100px;');
							$('#td-tr'+i+'-cart-list-2').text(y[i].price).attr('style', 'text-align: center');
								$('#input-amount-'+i+'').spinner({
								min:0,
								max:10,
								
								});
								
								
							$('.ui-spinner').attr('style','background: white');
							
						
								
						
							
						}// for문 끝나는 지점
						
						
						$('#ip-check-all').change(()=>{
							if($('#ip-check-all').is(":checked")){
								$('input[name=book-check]').prop('checked',true);
							}else if(!($('#ip-check-all').is(":checked"))){
								$('input[name=book-check]').prop('checked',false);
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
							$('#div-cart-footer-content-right').append(createButton({id:'btn-amount-update',clazz:'btn book-modify',val:'예약 수량 변경'}))
								$('#div-cart-footer-content-right').append(createButton({
									id:'btn-select-del',
									clazz:'btn book-modify',val:'선택한 도서 삭제'}))
								$('#btn-amount-update').attr('style','margin-right:20px; background-color:#f8f8f8;color:black;border-color:#c8c8c8');
								$('#btn-select-del').attr('style','background-color:#f8f8f8;color:black;border-color:#c8c8c8');
						// 주문 금액 영역
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
						
						// 배송 checkbox div
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
						//계산 기능
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
							var calc = function(){
								for(var i =0;i<Object.keys(y).length;i++){
								
								if($('#book-check-'+i+'').is(':checked')){
									
									
									zz += 1*$( "#input-amount-"+i).spinner("value")*$('#td-tr'+i+'-cart-list-2').text();
								}
							}
							
							$('#span-td-0').text(zz).attr('style','font-size:30px');
							$('#span-td-2').text(zz+$('#span-td-1').text()*1).attr('style','font-size:30px');
							
							};
						});
						
						
							//수정 삭제 기능
								$('.book-modify').on('click', function(){
									var delnumbers = '';

									var modifyKey = ''; 
									var modifyVal = '';
									
									if($(this).text()=='삭제'){
										delnumbers="'"+$(this).val()+"'"
									}else if($(this).text()=='예약 수량 변경'){
										for(var i =0;i<Object.keys(y).length;i++){
											/*modifyKey.push(y[i].orderNum);
											modifyVal.push($( "#input-amount-"+i).spinner("value"));*/
											if($( "#input-amount-"+i).spinner("value")==0&& i!=Object.keys(y).length-1){
												
												modifyKey += y[i].orderNum+',';
												modifyVal += 1+',';
											}else if($( "#input-amount-"+i).spinner("value")==0&& i==Object.keys(y).length-1){
												
												modifyKey += y[i].orderNum;
												modifyVal += 1;
											}else if(i!=Object.keys(y).length-1){
												
												modifyKey += y[i].orderNum+',';
												modifyVal +=$( "#input-amount-"+i).spinner("value")+',';
											}else if(i==Object.keys(y).length-1){
												
												modifyKey += y[i].orderNum;
												modifyVal +=$( "#input-amount-"+i).spinner("value");
											}
											
												
													
												
										}
									}else if($(this).text()=='선택한 도서 삭제'){
										//체크된 값 가져오기
									$('input:checkbox[name=book-check]:checked').each(function(i){
										
										if($('input:checkbox[name=book-check]:checked').length-1==i){
											delnumbers+= "'"+$(this).val()+"'";
										}else{
											delnumbers+= "'"+$(this).val()+"'"+',';
										}
									});
									}
									alert(delnumbers);
									if(delnumbers!=""||modifyVal!==null){
										
										$.ajax({
											url:x.context+'/cartlist/sd',
											method:'POST',
											data:JSON.stringify({
												userid:'ju',
												deleteNum:delnumbers,
												modifyKey:modifyKey,
												modifyVal:modifyVal,
												}),
											dataType:'json',
											contentType:'application/json',
											success:y=>{
												shop.mall.cart(x);
											},
											error:(y,h,m)=>{
												alert('실패');
											}
										});
									}else if(delnumbers==''){
										alert('삭제할 도서를 선택하세요');
									}
								
								});
						
						
								
							
						
						$(createDiv({id:'div-btn-wrapper',clazz:''})).appendTo('#div-content');
						$('#div-btn-wrapper').append(createButton({id:'btn-cart-payment',clazz:'btn',val:'결제하기'}))
						$('#btn-cart-payment').attr('style','background:#ce6a52;color:#fff; width:250px').click(()=>{
							if(($('input:checkbox[name=book-check]:checked').length==0)){
								alert('주문 할 도서를 선택해주세요');
								
							}else{
								var checklist = [];
								$('input:checkbox[name=book-check]:checked').each(function(i){
									for(var j = 0; j<y.length;j++){
										
										if($(this).val()==y[j].orderNum){
											checklist.push(y[j]); 
										}
									}
									
								});
								
								shop.mall.sell({
									view:x.view,
									context:x.context,
									val:'02 주문/결제 ',
									orderPrice:[$('#span-td-0').text(),$('#span-td-1').text(),$('#span-td-2').text()],
									y:checklist
									});
							}
							
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
		console.log(x.y);
		
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
			// div 추가하는 곳
			$('#div-sell-2').append(createMultiDiv({id:'div-sell-2',arr:['','','','','','','','','']}))
			$('#div-sell-2-0').append(createTable({id:'table-cart',clazz:'table-cart'}))
			$('#table-cart').append(createTr({id:'tr-head'}));
			$('#tr-head').append(createMultiTh({arr:['',''],id:'th'}))
			$('#th-0').text('상품정보').attr('style','width:80%');
			$('#th-1').text('상품금액');
			$(createMultiTr({id:'tr-list',arr:makeCount(Object.keys(x.y).length)}))
			.appendTo('#table-cart');
			for(var i =0;i<Object.keys(x.y).length;i++){
				$(createMultiTd({id:'td-tr'+i+'-list',arr:['','']})).appendTo('#tr-list-'+i+'');
				$(createMultiDiv({id:'div-tr'+i+'-td0-list',arr:['',''],clazz:''}))
				.appendTo('#td-tr'+i+'-list-0').attr('style','float:left');
				$(createImage({id:'',src:x.y[i].imageRoute,clazz:''})).appendTo('#div-tr'+i+'-td0-list-0')
				.attr('style','width:80px;height:120px;margin-top:10px;margin-right:30px;margin-bottom:10px;margin-left:20px;');
				
				
				
				$('#div-tr'+i+'-td0-list-1').append(strong({id:'strong-'+i+'',val:x.y[i].bookName}))
				.attr('style','margin-top:4%;margin-right:40px;width:300px;font-size:14px');
				$('#div-tr'+i+'-td0-list-1').append(createP({id:'p-'+i+'',val:'by '+x.y[i].writter}));
				$('#td-tr'+i+'-list-1').text(x.y[i].price+'원').attr('style','text-align:center');
				
				
			}
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
			
			$('#input-buyer-info-0').val(se.memID)
			$('#input-buyer-info-1').val(se.memPhone)
			$('#input-buyer-info-2').val(se.memEmail)
			$('#div-sell-2-4').append(createMultiDiv({id:'div-sell-2-4',arr:['','']}));
			$('#div-sell-2-4-0').text('받는 사람 정보').attr('style','font-size:20px;margin:20px');
			$('#div-sell-2-4-1').append(createInput({id:'input-buyer-check',clazz:'',type:'checkbox'}))
			.attr('style','float:right;maring-right:5px');
			$('#input-buyer-check').val(false);
			
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
			$(createMultiDiv({id:'div-addr',arr:['','','','','','','','']}))
			.appendTo('#td-tr2-recipient-info-1').attr('name','div-addr');
			
			$('div[name=div-addr]').each(function(i){
				 if(i%2==1){
					$(this).append(createInput({id:'input-addr-'+i+'',type:'text',clazz:''}))
					.attr('style','height:15%;');
					
				}
				$('#td-tr2-recipient-info-0').attr('style','height:280px');
				$('#div-addr-0').text('우편번호').attr('style','font-size:12;margin-left:17px;');
				$('#input-addr-1').attr('style','border-radius: 3px;background: #fafafa;border: 1px solid #aaa;').attr('readonly','readonly');
				$('#div-addr-2').text('도로명 주소').attr('style','font-size:12;margin-left:17px');
				$('#input-addr-3').attr('style','border-radius: 3px;background: #fafafa;border: 1px solid #aaa; width:450px')
				.attr('readonly','readonly')
				
				$('#div-addr-4').text('지번 주소').attr('style','font-size:12;margin-left:17px');
				$('#input-addr-5').attr('style','border-radius: 3px;background: #fafafa;border: 1px solid #aaa; width:450px')
				.attr('readonly','readonly');
				$('#div-addr-6').text('나머지 주소').attr('style','font-size:12;margin-left:17px');
				$('#input-addr-7').attr('style','width:450px');
				
			});
			$(createButton({id:'btn-find-addr',clazz:'btn',val:'우편번호 찾기'})).appendTo('#div-addr-1')
			.attr('style',
					'background-color:#c33e38;color:white;margin-left: 15;'
				    +'height: 30px;'
				    +'position: relative;'
				    +'top: 6;').on('click',e=>{
				    	e.preventDefault();
						new daum.Postcode({
					        oncomplete: function(data) {
					        	// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
					            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
					            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

					            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
					            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
					                extraRoadAddr += data.bname;
					            }
					            // 건물명이 있고, 공동주택일 경우 추가한다.
					            if(data.buildingName !== '' && data.apartment === 'Y'){
					                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
					            }
					            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					            if(extraRoadAddr !== ''){
					                extraRoadAddr = ' (' + extraRoadAddr + ')';
					            }
					            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
					            if(fullRoadAddr !== ''){
					                fullRoadAddr += extraRoadAddr;
					            }

					            // 우편번호와 주소 정보를 해당 필드에 넣는다.
					            document.getElementById('input-addr-1').value = data.zonecode; //5자리 새우편번호 사용
					            document.getElementById('input-addr-3').value = fullRoadAddr;
					            document.getElementById('input-addr-5').value = data.jibunAddress;

					        }
					    }).open();
				    });
			
			$('#tr-recipient-info-2').attr('style','height:200px').append(createTd({id:'td-tr2-recipient-info-2',clazz:''}));
			$('#td-tr3-recipient-info-1').append(textarea({id:'textarea-tr3-td1-requierment'}));
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
			$('#input-buyer-check').on('click',function(){
				if($(this).is(":checked")){
					$(this).val(true);
					$('#input-recipient-info-0').val(se.memName);
					$('#input-recipient-info-1').val(se.memPhone);
					$('#input-addr-1').val(se.addrPostCode);
					$('#input-addr-3').val(se.addrRoad);
					$('#input-addr-5').val(se.addrJibun);
					$('#input-addr-7').val(se.addrDetailAddr);
				}else{
					$(this).val(false);
					$('#input-recipient-info-0').val('');
					$('#input-recipient-info-1').val('');
					$('#input-addr-1').val('');
					$('#input-addr-3').val('');
					$('#input-addr-5').val('');
					$('#input-addr-7').val('');
				}
				
			});
			$(createButton({id:'btn-payment',clazz:'btn',val:'결제하기'})).appendTo('#div-sell-2-8')
			.attr('style','background-color:#c33e38;color:#fff;border-color:#c33e38')
			$('#div-sell-2-8').attr('style','text-align:center;margin-top:20px').click(()=>{
				if($('#input-recipient-info-0').val()===''
					||$('#input-recipient-info-1').val()===''
						||$('#input-addr-1').val()===''){
					alert('값 넣어라 임마');
				}else{
					var oNum = '';
					var oAmount = '';
					var oOderNum = '';
				
					$.each(x.y,function(i,j){
						
						if(x.y.length-1==i){
							oNum+= "'"+j.bookNum+"'";
							oOderNum+= "'"+j.orderNum+"'";
							oAmount+=j.amount;
							
							
							
						}else{
							oNum+= "'"+j.bookNum+"'"+',';
							oOderNum+= "'"+j.orderNum+"'"+',';
							oAmount+= j.amount+',';
							
						}
						
					});
					alert(oNum+'//'+oAmount);
					alert(se.memID);
					alert(
							$('#input-recipient-info-0').val()+","
							+$('#input-recipient-info-1').val()+","
							+$('#input-addr-1').val()+","
							+$('#input-addr-3').val()+","
							+$('#input-addr-5').val()+","
							+$('#input-addr-7').val()+","	
							+$('#textarea-tr3-td1-requierment').val()+","
							+$('#input-buyer-check').val()+","
							+se.memID+","
							+oOderNum
					);
				$.ajax({
						url:x.context+'/cartlist/sd',
						method:'POST',
						data:JSON.stringify({
							size:x.y.length,
							bookNum:oNum,
							salesamount:oAmount,
							recipient:$('#input-recipient-info-0').val(),
							recipientNum:$('#input-recipient-info-1').val(),
							requirements:$('#textarea-tr3-td1-requierment').val(),
							postDetail:$('#input-addr-1').val(),
							roadAddress:$('#input-addr-3').val(),
							jibunAddress:$('#input-addr-5').val(),
							detailAddress:$('#input-addr-7').val(),
							userid:se.memID,
							recipentCheck:$('#input-buyer-check').val(),
							orderNum:oOderNum
							}),
						dataType:'json',
						contentType:'application/json',
						success:z=>{
							alert('결제 완료');
						},
						error:(y,h,m)=>{
							alert('실패');
						}
					});
				}
				
			});
	});
	
	
},
orderCheck:x=>{
	/*location.reload();*/
	user.member.admempage();

		$('li[name="li-headMenu"]').attr('style','border: 1px solid #eee;');
		$('#li-headMenu-2').attr('style','border: 1px solid #adcfdf;');
		$('#div-adminipage-submenu').attr('style','border-bottom: 2px solid #dddddd;margin-top:80px;width:100%').
		append(createUL({id:'ul-sub-menu',clazz:''}));
		$('#ul-sub-menu').append(createMultiLi({
			id:'sub-menu',
			clazz:'a-sub-menu',
			arr:[createATag({id:'a-sub-menu-0',val:'도서 주문내역'}),
				createATag({id:'a-sub-menu-1',val:'작가 서비스 주문내역'})]}))
				.attr('style','position: relative; bottom: 37px;margin: 0;padding: 0;');
		$('#li-sub-menu-0')
		.attr('style','float: left; width: 200px;text-align: center;'
				+'border-bottom:2px solid;height:37px');
		$('#li-sub-menu-1')
		.attr('style','float: left; width: 200px;text-align: center;height:37px');
		
		$('.a-sub-menu').on('click',function(){
			if($(this).text()==='도서 주문내역'){
				$('#li-sub-menu-0')
				.attr('style','float: left; width: 200px;text-align: center;'
				+'border-bottom:2px solid;height:37px');
				$('#li-sub-menu-1')
				.attr('style','float: left; width: 200px;text-align: center;height:37px;border-bottom:none;');
			}else{
				$('#li-sub-menu-0')
				.attr('style','float: left; width: 200px;text-align: center;'
				+'border-bottom:none;height:37px');
				$('#li-sub-menu-1')
				.attr('style','float: left; width: 200px;text-align: center;height:37px;border-bottom:2px solid;');
			}
		});
	$('#div-adminipage-content').append(createMultiDiv({id:'div-content',arr:makeCount(3)}));
	$('#div-content-0').attr('style','width:100%;background-color:#f9f9f9;border: 1px solid #ddd;height:111px;margin-top: 30px;')
	.append(createTable({id:'table-search'}));
	
	$('#table-search').append(createMultiTr({id:'tr-search',arr:makeCount(2)}))
	.attr('style','width:100%;height:100%;text-align:center;border-collapse:collapse');
	$('#table-search tr').each(function(i){
		$(this).append(createMultiTd({id:'td-tr'+i+'-search',arr:makeCount(2)}));
		
	});
	$('#table-search tr td').attr('style','height:50px;');
	$('#td-tr0-search-0').attr('style','padding-bottom:15px;');
	$('#td-tr1-search-0').remove();
	$('#td-tr0-search-0').attr('rowspan','2').text('조회기간').attr('style')
	$('#td-tr0-search-1').append(createDiv({}));
	$(createMultiDiv({clazz:'term-check',arr:['','','','','']})).appendTo('#td-tr0-search-1 div')
	.attr('style','font-size:11px;'
			+'width:60px;float:left;height:30px');
	var btn = ['1주일','15일','1개월','3개월','6개월']
	$('.term-check').each(function(i){
		$(this).append(createButton({clazz:'btn btn-term',val:btn[i]}));
	});
	$('.btn-term')
	.attr('style','width:100%;height:100%; background-color: #f8f8f8;border-color: #c8c8c8;')
	.on('click',function(){
		$('.btn-term')
		.attr('style','width:100%;height:100%; background-color: #f8f8f8;border-color: #c8c8c8;')
		$(this).attr('style','width:100%;height:100%;color:#fff; background-color: #c33e38;border-color: #c33e38;')
	});
	var elements = [createInput({id:'input-startdate',clazz:'timepicker',type:'text'}),
					' ~ ',
					createInput({id:'input-enddate', clazz:'timepicker',type:'text'}),
					createButton({id:'btn-search', clazz:'btn',val:'조회하기'})];
	$('#td-tr1-search-1').append(createMultiDiv({arr:makeCount(4)}));
	
	$('#td-tr1-search-1 div').each(function(i){
		
		$(this).append(elements[i]).attr('style','float:left');
	});
	$.datepicker.regional['kr'] = {
		    closeText: '닫기', // 닫기 버튼 텍스트 변경
		    currentText: '오늘', // 오늘 텍스트 변경
		    monthNames: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
		    monthNamesShort: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
		    dayNames: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'], // 요일 텍스트 설정
		    dayNamesShort: ['월','화','수','목','금','토','일'], // 요일 텍스트 축약 설정&nbsp;   dayNamesMin: ['월','화','수','목','금','토','일'], // 요일 최소 축약 텍스트 설정
		    dateFormat: 'yy-mm-dd' // 날짜 포맷 설정
		};

		// Seeting up default language, Korean
		$.datepicker.setDefaults($.datepicker.regional['kr']);
	
		
	$('#input-startdate').attr('style','margin-right:10px;width:118px;height:20px').datepicker();
	$('#input-enddate').attr('style','margin-left:10px;width:118px;height:20px').datepicker();
	
	$('#ui-datepicker-div').attr('style', 'left: 27%;  top: 56%; position: absolute;');
	$('#btn-search').attr('style','background-color: #f8f8f8;border-color:#c8c8c8;height:40px;'
			+'position:relative;bottom: 10px;left:20px;');
	
		
		
	$('.btn-term').on('click',function(){
		
			var calcDate = new Date();
			if($(this).text()==='1주일'){
				calcDate.setDate(calcDate.getDate() - 7 );
			}else if($(this).text()==='15일'){
				calcDate.setDate(calcDate.getDate() - 15 );
			}else if($(this).text()==='1개월'){
				calcDate.setMonth(calcDate.getMonth() - 1 );
			}else if($(this).text()==='3개월'){
				calcDate.setMonth(calcDate.getMonth() - 3 );
			}else if($(this).text()==='6개월'){
				calcDate.setMonth(calcDate.getMonth() - 6 );
			}
		
			var year = calcDate.getFullYear(); 
			var month = new String(calcDate.getMonth() + 1 ); 
			var day = new String(calcDate.getDate()); 
			if(month.length == 1){ 
				  month = "0" + month; 
				} 
				if(day.length == 1){ 
				  day = "0" + day; 
				} 
			$('#input-startdate').val(year+'-'+month+'-'+day);
			var thisYear = new Date().getFullYear(); 
			var thisMonth = new String(new Date().getMonth() + 1 ); 
			var today = new String(new Date().getDate()); 
			var size = 5;
			var page = 1;
			if(thisMonth.length == 1){ 
				  month = "0" + month; 
				} 
				if(today.length == 1){ 
				  day = "0" + day; 
				} 
				$('#input-enddate').val(thisYear+'-'+thisMonth+'-'+today);
	})
	$('#btn-search').click(()=>{
		
		
		$.getJSON(
				x.context+'/orderlist/'
				+$('#input-startdate').val()+','+$('#input-enddate').val()+','+se.memID
			,li=>{
				var sDate = [];
				var sBook = [];
				for(var i =0;i<li.length;i++){
					var check = false;
					for(var j=0;j<li.length;j++){
						if(sDate[j]===li[i].salesdate){
							
							check = true;
							break;
							
						}
					}
					if(check){
						continue;
					}else{
						sDate.push(li[i].salesdate);
						sBook.push(li[i].bookName);
					}
					
					
				}
				sDate.reverse();
				var word = ['주문일','상품/옵션정보','결제 금액','상태'];
				var att = ['152px','549px','166px','133px'];
				var pageBlock = (sDate.length % 5 == 0) ? sDate.length / 5 : (sDate.length /5)+1;
				var page = 1;
				var startRow = (page*5)-5;
				var endRow = startRow+5;
				var keydate = new Array(sDate.length);
				var totPrice = new Array(sDate.length);
				var totAmount = new Array(sDate.length);
				$('#table-orderlist').remove();
				$(createTable({id:'table-orderlist'})).appendTo('#div-content-1')
				.attr('style','width:100%;border-collapse:collapse;margin-top:40px;');
				$('#div-content-2').html(multiBtn({id:'btn-page',clazz:'btn btn-page',arr:makeCount(pageBlock)}))
				.attr('style','text-align:center;margin-top:30px;');
				$('#table-orderlist').append(createTr({id:'tr-head'}));
				$('#tr-head').append(createMultiTh({id:'th-head',arr:makeCount(4)}));
				
				for(var i =0;i<sDate.length;i++){
					var content =[];
					var temp=0;
					var temp2=0;
					$.each(li,function(k,v){
						
						if(sDate[i]===v.salesdate){
							content.push(v);
							temp += v.price*1;
							temp2 += v.salesamount*1;
						}
					});
					
					totPrice[i] = temp;
					totAmount[i] = temp2;
					keydate[i] = {item:content}
				}
				$('#tr-head th').each(function(i){
					$('#th-head-'+i).text(word[i]).attr('style','width:'+att[i]+'');
				});
				$('#table-orderlist tr td').attr('style','text-align:center');
				console.log(keydate);
				$.each(keydate.slice(startRow,endRow),(k,v)=>{
					
					$('#table-orderlist').append(createTr({id:'tr-orderlist-'+k}))
					$(createMultiTd({id:'td-tr'+k+'',arr:makeCount(4)})).appendTo('#tr-orderlist-'+k);
					$('#td-tr'+k+'-0').text(sDate[k]).append(createDiv({id:'div-btn-wrapper-'+k+''}));
					$(createButton({id:'btn-'+k+'',clazz:'btn btn-detail',val:'구매 상세보기'})).appendTo('#td-tr'+k+'-0 div').
					attr('style','background-color:#f8f8f8;color: black;border-color: #c8c8c8;').attr('value',k)
					$('#td-tr'+k+'-1').attr('style','text-align:left')
					$(strong({id:'strong-'+k+'',val:sBook[k]+'  '+' 외'+(keydate[k].item.length-1)+'권'})).appendTo('#td-tr'+k+'-1')
					.attr('style','position:relative;bottom: 10px;left:10px');
					$('#td-tr'+k+'-1').append(createDiv({id:'div-option-'+k+'',clazz:'div-option'}));
					$('#div-option-'+k+'').text('종이책/주문금액 : '+Number(totPrice[k]).toLocaleString('en')+'원/총 권수 : '+totAmount[k]+' 권');
					$('#td-tr'+k+'-2').text(Number(totPrice[k]+2500).toLocaleString('en')+'원');
					$('#td-tr'+k+'-3').text('배송완료');
				});
				$('.btn-page').on('click',function(){
					alert($(this).text());
					$('#table-orderlist').empty();
					$('#table-orderlist').append(createTr({id:'tr-head'}));
					$('#tr-head').append(createMultiTh({id:'th-head',arr:makeCount(4)}));
					$('#tr-head th').each(function(i){
						$('#th-head-'+i).text(word[i]).attr('style','width:'+att[i]+'');
					});
					$('#table-orderlist tr td').attr('style','text-align:center');
					page = $(this).text();
					startRow = (page*5)-5;
					endRow = startRow+5;
					if(endRow>sDate.length){
						endRow = sDate.length;
					}
					shop.mall.orderList({
						keydate:keydate,
						startRow:startRow,
						endRow:endRow,
						sDate:sDate,
						sBook:sBook,
						totPrice:totPrice,
						totAmount:totAmount
					})
					
				});
				
				
			}
		)
	});
	$('#div-footer').html(createMultiDiv({id:'div-footer',arr:makeCount(2)}))
	.attr('style','width:1600px;margin-top:100px;background:black;color:#777777;position: relative;top: 100px;');
	$(createUL({id:'ul-footer'})).appendTo('#div-footer-0').append(createMultiLi({
		id:'li-footer',
		arr:['이용약관','개인보호정책','고객센터']}));
	
	$('#ul-footer').attr('style','border-bottom: 1px solid #777777;height:70%;width:70%;margin:0 auto')
	$('#ul-footer li').attr('style','float:left;border-right: 1px solid #777777;width:120px;margin-top:10px;text-align:center');
	$('#ul-footer li a').attr('style','color:#777777');
	$('#div-footer-1').html(createSpan({id:'span-footer-1'})).append(createSpan({id:'span-footer-2'}))
	.append(createSpan({id:'span-footer-3'})).append(createP({val:'주소: 서울시 마포구 신촌 비트캠프 오세요~'}))
	.attr('style','margin: 0 auto;height:130px;width:1150px;')
	$('#div-footer-1 span').attr('style','color:#777777;font-size:14px;position:relative;bottom:15px;right:5px;margin-right:20px;');
	$('#div-footer-1 p').attr('style','position:relative;bottom:30px;right:5px;font-size:14px;');
	$(createDiv({id:'div-footer-1-0'})).appendTo('#div-footer-1').html(createSpan({id:'span-footer-4'})).append(createSpan({id:'span-footer-5'}))
	.append(createSpan({id:'span-footer-6'}))
	$('#div-footer-1-0').attr('style','position:relative;bottom:45px;right:5px;font-size:14px;')
	$('#div-footer-1-0 span').attr('style','margin-right:20px;');
	$('#div-footer-1').append(createDiv({id:'div-footer-1-1'}))
	$('#span-footer-1').text('업체명 : 주식회사 부크크');
	$('#span-footer-2').text('대표이사 : ㅁㅁㅁ');
	$('#span-footer-3').text('대표전화 : 000-0000-0000');
	$('#span-footer-4').text('사업자등록번호 : 000-00-00000');
	$('#span-footer-5').text('통신판매업신고 : 제 2018-서울신촌-0000호');
	$('#span-footer-6').text('사업자등록정보확인');
	$('#div-footer-1-1').text('Copyright © Bookk Co, Ltd. All rights reserved.')
	
},
	orderList:x=>{
		
		
		
		$.each(x.keydate.slice(x.startRow,x.endRow),(k,v)=>{
			
			$('#table-orderlist').append(createTr({id:'tr-orderlist-'+k}))
			$(createMultiTd({id:'td-tr'+k+'',arr:makeCount(4)})).appendTo('#tr-orderlist-'+k);
			$('#td-tr'+k+'-0').text(x.sDate[x.startRow+k]).append(createDiv({id:'div-btn-wrapper-'+k+''}));
			$(createButton({id:'btn-'+k+'',clazz:'btn btn-detail',val:'구매 상세보기'})).appendTo('#td-tr'+k+'-0 div').
			attr('style','background-color:#f8f8f8;color: black;border-color: #c8c8c8;').attr('value',x.startRow+k)
			$('#td-tr'+k+'-1').attr('style','text-align:left')
			$(strong({id:'strong-'+k+'',val:x.sBook[x.startRow+k]+'  '+' 외'+(x.keydate[x.startRow+k].item.length-1)+'권'})).appendTo('#td-tr'+k+'-1')
			.attr('style','position:relative;bottom: 10px;left:10px');
			$('#td-tr'+k+'-1').append(createDiv({id:'div-option-'+k+'',clazz:'div-option'}));
			$('#div-option-'+k+'').text('종이책/주문금액 : '+Number(x.totPrice[x.startRow+k]).toLocaleString('en')+'원/총 권수 : '+x.totAmount[x.startRow+k]+' 권');
			$('#td-tr'+k+'-2').text(Number(x.totPrice[x.startRow+k]+2500).toLocaleString('en')+'원');
			$('#td-tr'+k+'-3').text('배송완료');
		});
	}
}
