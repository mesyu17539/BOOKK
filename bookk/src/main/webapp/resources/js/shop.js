var shop=shop || {};
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
			url:x.context+'/cartcount/userid',
			method:'POST',
			data:JSON.stringify({userid:'장만호'}),
			dataType:'json',
			contentType:'application/json',
			success:x=>{
				

				$('#div-cart-title').html(createHTag({size:'2',val:'장바구니'+x.count+'건'}))
				$('#div-cart-title').attr('style','border-bottom:2px solid black; text-align: center')
				$(createTable({id:'table-cart',clazz:'table-cart'})).appendTo('#div-cart-content')
				$(createTr({id:'tr-head'})).appendTo('#table-cart')
				$(createMultiTh({arr:['1','2','3','4'],clazz:'',id:'th'})).appendTo('#tr-head')
				$('#th-0').html(createInput({id:'ip-check-all',clazz:'',type:'checkbox'}))
				$('#th-1').text('상품정보')
				$('#th-2').text('상품금액')
				$('#th-3').text('삭제')
			
				
			},
			error : (x,h,m)=>{
				alert('검색 실패 x='+x+', h='+h+', m='+m);
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
		$('#span-td-0').text('9500').attr('style','font-size:30px');
		
		
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
		$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
		$('input[id=input-checkbox-0]').click(()=>{
			if ($('input[id=input-checkbox-0]').is(':checked')) {
				
				$('input[id=input-checkbox-1]').removeAttr('disabled');
				$('#span-td-1').text('2500');
				$('input[id=input-checkbox-0]').attr('value','2500');
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
				
				
			} else {
				
				$('#span-td-1').text('0');
				$('input[id=input-checkbox-1]').prop('checked',false);
				$('input[id=input-checkbox-1]').attr('disabled','disabled');
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
			}
		});
		$('input[id=input-checkbox-1]').click(()=>{
			if ($('input[id=input-checkbox-1]').is(':checked')) {
				
				$('input[id=input-checkbox-1]').removeAttr('disabled');
				$('input[id=input-checkbox-1]').attr('value','2500');
				$('#span-td-1').text(($('input[id=input-checkbox-0]').val())*1+($('input[id=input-checkbox-1]').val())*1);
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
				 
			}else{
				
				$('#span-td-1').text(parseInt($('input[id=input-checkbox-0]').val()));
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
			}
		});
		$(createDiv({id:'div-btn-wrapper',clazz:''})).appendTo('#div-content');
		$('#div-btn-wrapper').append(createButton({id:'btn-cart-payment',clazz:'btn',val:'결제하기'}))
		$('#btn-cart-payment').attr('style','background:#ce6a52;color:#fff; width:250px').click(()=>{
			
			shop.mall.sell({
				view:x.view,
				context:x.context,
				val:'02 주문/결제 ',
				orderPrice:[$('#span-td-0').text(),$('#span-td-1').text(),$('#span-td-2').text()],
				});
		})
		$('#div-btn-wrapper').attr('style','text-align:center; margin:20px');
			
		
		
		
		
		//디스에이블 체크박스
		/*if ($('input[name=sampleCheckbox]').is(":checked")) {
		    $('input[name=sampleHidden]').val('Y');
		} else {
		    $('input[name=sampleHidden]').val('N');
		}*/
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
			$('#div-sell-2').append(createMultiDiv({id:'div-sell-2',arr:['','','','','','']}))
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
			$('#td-tr0-recipient-ifo-1').append(createInput({id:'input-recipient-info-0',type:'text',clazz:''}));
			$('#td-tr1-recipient-ifo-1').append(createInput({id:'input-recipient-info-1',type:'text',clazz:''}));
			
	});
	
	
}
}