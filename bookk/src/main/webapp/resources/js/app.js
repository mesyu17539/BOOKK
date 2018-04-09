var app=app || {};
app = {init:x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x));
		app.nav.onCreate();
	})
}
};
app.nav=(()=>{
	var $wrapper,context,view,iamge;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		image=$.image();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.html(createDiv({id:'div-header',clazz:'header'}))
			.append(createDiv({id:'div-body',clazz:'container text-center'}))
			.append(createDiv({id:'div-footer',clazz:'container text-center'}));
			
//			임시 : 로그인 버튼 누르면 나오게 해야함.
			app.member.onCreate();
		});
	}
	return {onCreate:onCreate}
})();
app.member=(()=>{
	var onCreate=()=>{
		context = $.context();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
			
			$('#div-header').html(createLogin());
			$(createButton({type:'submit',clazz:'btn mint long',val:'로그인'}))
			.appendTo('.wrap-btn')
			.on('click',e=>{
				e.preventDefault();
				var userid=$('#login-id').val();
				$.ajax({
					url:context+'/member/login',
					method:'POST',
					data:JSON.stringify({
						id:userid,
						pass:$('#login-password').val(),
						type:'member'
						}),
					dataType:'json',
					contentType:'application/json',
					success : x =>{
						alert('로그인');
						if(x!==null){
							alert('로그인 성공');
							sessionStorage.setItem('id',userid);
							alert('넘어온 id : '+sessionStorage.getItem('context'));
						}else{
							alert('로그인 실패');
						}
					},
					error : (x,h,m)=>{
						alert('로그인에서 에러발생 x='+x+', h='+h+', m='+m);
					}
				});
			});
			
			$(createATag({link:'#',val:'아이디가 없나요?'}))
			.appendTo('.clearfix')
			.on('click',e=>{
				e.preventDefault();
				
				$('#div-header').html(createJoin());
				$(createButton({type:'submit',clazz:'btn mint long',val:'가입하기'}))
				.appendTo('.wrap-btn')
				.on('click',e=>{
					e.preventDefault();
					$.ajax({
						url:context+'/member/join',
						method:'POST',
						data:JSON.stringify({
							id:$('#join-id').val(),
							pass:$('#join-password').val(),
							name:$('#join-name').val(),
							email:$('#join-email').val(),
							phone:$('#join-phone').val(),
							ssn:$('#join-ssn').val(),
							address:$('#join-address').val(),
							type:'member'
							}),
						dataType:'json',
						contentType:'application/json',
						success : x =>{
							alert('가입');
							if(x.success===1){
								alert('가입 성공');
								app.member.onCreate();
							}else{
								alert('가입 실패');
							}
						},
						error : (x,h,m)=>{
							alert('로그인에서 에러발생 x='+x+', http='+h+', m='+m);
						}
					});
				});
				
			});
		});
	}
	var login=()=>{
		
	}
	var join=()=>{
		
	}
	return {onCreate:onCreate}
})();