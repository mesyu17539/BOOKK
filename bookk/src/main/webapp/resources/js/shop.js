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
		$('input[id=input-checkbox-0]').click(()=>{
			if ($('input[id=input-checkbox-0]').is(':checked')) {
				alert('체크되네?');
				$('input[id=input-checkbox-1]').removeAttr('disabled');
				$('#span-td-1').text('2500');
				$('input[id=input-checkbox-0]').attr('value','2500');
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
				
				
			} else {
				alert('체크안되네?');
				$('#span-td-1').text('0');
				$('input[id=input-checkbox-1]').prop('checked',false);
				$('input[id=input-checkbox-1]').attr('disabled','disabled');
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
			}
		});
		$('input[id=input-checkbox-1]').click(()=>{
			if ($('input[id=input-checkbox-1]').is(':checked')) {
				alert('체크되네?');
				$('input[id=input-checkbox-1]').removeAttr('disabled');
				$('input[id=input-checkbox-1]').attr('value','2500');
				$('#span-td-1').text(($('input[id=input-checkbox-0]').val())*1+($('input[id=input-checkbox-1]').val())*1);
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
				
			}else{
				alert('체크안되네?');
				$('#span-td-1').text(parseInt($('input[id=input-checkbox-0]').val()));
				$('#span-td-2').text(($('#span-td-0').text())*1+($('#span-td-1').text())*1);
			}
		});
		
				
			
	
		//디스에이블 체크박스
		/*if ($('input[name=sampleCheckbox]').is(":checked")) {
		    $('input[name=sampleHidden]').val('Y');
		} else {
		    $('input[name=sampleHidden]').val('N');
		}*/
	});
}}