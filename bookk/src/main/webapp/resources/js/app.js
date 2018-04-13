var app=app || {};
app = {init:x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x))
		app.nav.onCreate()
		app.member.onCreate();
		app.admin.onCreate();
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
		$.getScript(view,()=>{
			$wrapper.html(createDiv({id:'div-header',clazz:'header text-center'}))
			.append(createDiv({id:'div-body',clazz:'container text-center'}))
			.append(createDiv({id:'div-footer',clazz:'container text-center'}));
			
			
			$(createButton({id:'',type:'',clazz:'btn mint long',val:'회원가입'}))
			.appendTo('#div-header')
			.on('click',e=>{
				e.preventDefault();
				app.member.join();
			});
			$(createButton({id:'',type:'',clazz:'btn mint long',val:'로그인'}))
			.appendTo('#div-header')
			.on('click',e=>{
				e.preventDefault();
				app.member.login();
			});
			$(createButton({id:'',type:'',clazz:'btn mint long',val:'마이페이지'}))
			.appendTo('#div-header')
			.on('click',e=>{
				e.preventDefault();
				app.member.admempage();
				app.member.mypage();
			});
		});
	}
	return {onCreate:onCreate}
})();
app.admin=(()=>{
	var $wrapper,context,view,iamge;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		context = $.context();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
		});
	}
	return {onCreate:onCreate}
})();
app.member=(()=>{
	var context,view;
	var onCreate=()=>{
		context = $.context();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
		});
	}
	//마이페이지 승인내역 도서관리 주문내역 판매내역 조회
	var admempage=()=>{
		$('#div-body').html(createDiv({id:'div-adminipage-menu',clazz:'container-fluid'}))
		.append(createDiv({id:'div-adminipage-submenu',clazz:'container text-center'}))
		.append(createDiv({id:'div-adminipage-content',clazz:'container text-center'}));
		$('#div-adminipage-menu')
		.html('<ul id="mypage-header" class="list-inline"></ul>');
		
		$('<li></li>')
		.append('<img src="http://www.bookk.co.kr/img/settings/index01.jpg">')
		.appendTo('#mypage-header');
		$('<li></li>')
		.append('<img src="http://www.bookk.co.kr/img/settings/index02.jpg">')
		.appendTo('#mypage-header');
		$('<li></li>')
		.append('<img src="http://www.bookk.co.kr/img/settings/index03.jpg">')
		.appendTo('#mypage-header');
		$('<li></li>')
		.append('<img src="http://www.bookk.co.kr/img/settings/index04.jpg">')
		.appendTo('#mypage-header');
	}
	var mypage=()=>{
		$('#div-adminipage-submenu')
		.html('<ul id="mypage-submenu" class="list-inline"></ul>');
		
		$('<li></li>')
		.append('<img src="http://www.bookk.co.kr/img/settings/index01.jpg">')
		.appendTo('#mypage-submenu');
	}
	var login=()=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-login',clazz:'auth-form'}))
					.attr('style','width: 300px;left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background-color:#fff;border:1px solid #969696;')}, type : 'inline'}, 0);
		$('#form-login')
		.append(createHTag({size:2,val:'로그인'})
				+createDiv({id:'div-form-group',clazz:'form-group'})
				+createDiv({id:'div-btn-group',clazz:'wrap-check'})
				+createDiv({id:'div-auth-help',clazz:'form-group auth-help'}));

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'아이디'})
				+createInput({id:'login-id',clazz:'border-input',type:'text'})+'<br/>')
		.append(createLabel({fo:'comment',val:'비밀번호'})
				+createInput({id:'login-password',clazz:'border-input',type:'password'})+'<br/>');
		
		$('label')
		.attr('style','width:100%;');
		
		$(createButton({type:'submit',clazz:'btn mint long',val:'로그인'}))
		.appendTo('#div-btn-group')
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
				error : ()=>{
					alert('일치하는 정보가 없습니다');
				}
			});
		});
		$(createATag({link:'#',val:'아이디가 없나요?'}))
		.appendTo('#div-auth-help')
		.on('click',e=>{
			e.preventDefault();
			join();
		});
		$('<a href="#" class="find-user pull-right">아이디/비밀번호 찾기</a>')
		.appendTo('#div-auth-help')
	}
	var join=()=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-join',clazz:'auth-form'}))
					.attr('style','width: 300px;left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background-color:#fff;border:1px solid #969696;')}, type : 'inline'}, 0);
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
							+createInput({id:'join-'+v.inputid,clazz:v.inputclazz,type:v.inputtype})+'<br/>');
		});
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'이메일'})
				+createInput({id:'join-email',clazz:'border-input',type:'email'})+'@'
				+createSelect('join-url')+'<br/>');

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'전화번호'})
				+createSelect('join-phoneB')+'-'
				+createInput({id:'join-phoneM',clazz:'border-input',type:'email'})+'-'
				+createInput({id:'join-phoneA',clazz:'border-input',type:'email'})+'<br/>');
		
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'주민번호'})
				+createInput({id:'join-ssnB',clazz:'border-input',type:'text'})+'-'
				+createSelect('join-ssnA')+'<br/>');

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'주소'})
				+createInput({id:'join-postCodeAddress',clazz:'border-input',type:'text'})
				+createButton({id:'join-btn-address',clazz:'btn navy',val:'우편번호 찾기'})
				+createInput({id:'join-roadAddress',clazz:'border-input',type:'text'})
				+createInput({id:'join-jibunAddress',clazz:'border-input',type:'text'})
				+createInput({id:'join-detailAddress',clazz:'border-input',type:'text'}));
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
		$('label')
		.attr('style','width:100%;');
		
		$('#join-postCodeAddress')
		.attr('style','width:80px;')
		.attr('placeholder','우편번호')
		.attr('readonly','readonly');
		$('#join-roadAddress')
		.attr('readonly','readonly')
		.attr('placeholder','도로명');
		$('#join-jibunAddress')
		.attr('readonly','readonly')
		.attr('placeholder','지번');
		$('#join-detailAddress')
		.attr('placeholder','상세주소');
		
		$('.border-input')
		.attr('autofocus','autofocus');
		
		$('#join-ssnB')
		.attr('style','width:120px;')
		.attr('placeholder','앞자리 6자리');
		$('#join-email')
		.attr('style','width:70px;');
		$('#join-phoneM')
		.attr('style','width:70px;')
		.attr('pattern','[0-9]{4}');
		$('#join-phoneA')
		.attr('style','width:70px;')
		.attr('pattern','[0-9]{4}');
		$('#join-btn-address')
		.on('click',e=>{
			e.preventDefault();
//주소 등록 메뉴.	http://postcode.map.daum.net/search?origin=http%3A%2F%2Fwww.bookk.co.kr&indaum=off&banner=on&mode=transmit&vt=popup&am=on&ani=off&sd=on&plrg=&plrgt=1.5&hmb=off&heb=off&asea=off&smh=off&us=on&msi=10&ahs=off&whas=500&sm=on&a51=off&zn=Y&fullpath=%2Fsettings%2Fprofile
		});
		
		$(createButton({id:'',type:'submit',clazz:'btn mint long',val:'가입하기'}))
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
					address:$('#join-roadAddress').val()+$('#join-jibunAddress').val()+$('#join-detailAddress').val(),
					postDetail:$('#join-postCodeAddress').val(),
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
	}
	return {onCreate:onCreate,login:login,join:join,mypage:mypage,admempage:admempage}
})();