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
//			$('#div-header').html(
//					$(createForm({id:'form-login',clazz:'auth-form'}))
//					.attr('style','z-index: 10001; display: block;'));
//			
//			$('#form-login')
//			.append(createHTag({size:2,val:'회원가입'})
//					+createDiv({id:'div-form-group',clazz:'form-group'})
//					+createDiv({id:'div-btn-group',clazz:'wrap-check'}));
//			
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
				
				$('#div-header').html(
						$(createForm({id:'form-join',clazz:'auth-form'}))
						.attr('style','z-index: 10001; display: block;'));
				$('#form-join')
				.append(createHTag({size:2,val:'회원가입'})
						+createDiv({id:'div-form-group',clazz:'form-group'})
						+createDiv({id:'div-btn-group',clazz:'wrap-check'}));
				
				$.each([
					{labelfo:'comment',labelval:'아이디',inputid:'id',inputclazz:'border-input',inputtype:'text'},
					{labelfo:'comment',labelval:'비밀번호',inputid:'password',inputclazz:'border-input',inputtype:'password'},
					{labelfo:'comment',labelval:'이름',inputid:'name',inputclazz:'border-input',inputtype:'text'}
					],(k,v)=>{
							$('#div-form-group')
							.append(createLabel({fo:v.labelfo,val:v.labelval})
									+createInput({id:'join-'+v.inputid,clazz:v.inputclazz,type:v.inputtype})
									+'<br/>');
				});
				$('#div-form-group')
				.append(createLabel({fo:'comment',val:'이메일'})
						+createInput({id:'join-email',clazz:'border-input',type:'email'})
						+'@'+createSelect('join-url')+'<br/>');

				$('#div-form-group')
				.append(createLabel({fo:'comment',val:'전화번호'})
						+createSelect('join-phoneB')
						+'-'
						+createInput({id:'join-phoneM',clazz:'border-input',type:'email'})
						+'-'+createInput({id:'join-phoneA',clazz:'border-input',type:'email'})
						+'<br/>');
				
				$('#div-form-group')
				.append(createLabel({fo:'comment',val:'주민번호'})
						+createInput({id:'join-ssnB',clazz:'border-input',type:'text'})
						+'-'+createSelect('join-ssnA')
						+'<br/>');
				$('#div-form-group')
				.append('        <div class="wrap-check">'
						+'            <input id="agree_terms" type="checkbox" name="agree_terms" value="1" class="hidden">'
						+'            <label for="agree_terms" class="check"></label>'
						+'            <label for="agree_terms"><a href="/policy/terms" target="_blank">서비스 이용약관</a>에 동의합니다.</label><br/>'
						+'            <input id="agree_privacy" type="checkbox" name="agree_privacy" value="1" class="hidden">'
						+'            <label for="agree_privacy" class="check"></label>'
						+'            <label for="agree_privacy"><a href="/policy/privacy" target="_blank">개인정보 보호정책</a>에 동의합니다.</label>'
						+'        </div>');

				var str='';
				$.each(
						{
							'join-url':[{opVal:'@naver.com',opTxt:'naver.com'},{opVal:'@gmail.com',opTxt:'gmail.com'},{opVal:'@daum.net',opTxt:'daum.net'}],
							'join-ssnA':[{opVal:'1',opTxt:'남자'},{opVal:'2',opTxt:'여자'}],
							'join-phoneB':[{opVal:'010',opTxt:'010'},{opVal:'011',opTxt:'011'}]
						},(sk,sv)=>{
						str='';
							$.each(sv,(k,v)=>{
								str+=createOption({val:v.opVal,txt:v.opTxt});
							});
						$('#'+sk)
						.append(str);
				});
				
				$('#join-ssnB')
				.attr('style','width:120px;');
				$('#join-email')
				.attr('style','width:70px;');
				$('#join-phoneM')
				.attr('style','width:70px;')
				.attr('pattern','[0-9]{4}');
				$('#join-phoneA')
				.attr('style','width:70px;')
				.attr('pattern','[0-9]{4}');
				
				$('#div-btn-group')
				.append('<button class="btn gray close">닫기</button>');
				
				$(createButton({type:'submit',clazz:'btn mint long',val:'가입하기'}))
				.appendTo('#div-btn-group')
				.on('click',e=>{
					e.preventDefault();
					$.ajax({
						url:context+'/member/join',
						method:'POST',
						data:JSON.stringify({
							id:$('#join-id').val(),
							pass:$('#join-password').val(),
							name:$('#join-name').val(),
							email:$('#join-email').val()+$('#join-url').val(),
							phone:$('#join-phoneB').val()+'-'+$('#join-phoneM').val()+'-'+$('#join-phoneA').val(),
							ssn:$('#join-ssnB').val()+'-'+$('#join-ssnA').val(),
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
						error : ()=>{
							alert('올바르게 입력하세요');
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