var mall=mall || {};
mall.mall = {cart:x=>{
	$.getScript(x.view,()=>{
		$('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
		$('#div-content').html(createDiv({id:'div-wrap-root',clazz:'wrap-root'}));
		$('#div-wrap-root').append(createUL({id:'ul-root',clazz:'list-inline root'}));
		// 아래의 서점은 동적으로 들어 가게끔 꾸며야 함
		$('#ul-root').html(createMultiLi({
			id:'root',arr:['HOME>','서점>','장바구니']}))
			$('#div-content').append(createDiv({id:'div-cart-title',clazz:''}))
			$.ajax({
			url:x.context+'/cartcount/userid',
			method:'POST',
			data:JSON.stringify({userid:'장만호'}),
			dataType:'json',
			contentType:'application/json',
			success:x=>{
				
				$('#div-cart-title').html(createHTag({size:'2',val:'장바구니'+x.count+'건'}))
				$('#div-cart-title').attr('style','border-bottom:2px solid black; text-align: center')
				$(createTable({id:'table-cart',clazz:'table-cart'})).appendTo('#div-content')
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
	});
}}