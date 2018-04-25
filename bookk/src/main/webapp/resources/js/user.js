var user=user || {};
user.admin={
	login:x=>{
		
	}
}
user.member={
	// 마이페이지 승인내역 도서관리 주문내역 판매내역 조회
	admempage:x=>{
		
		$('#div-advertise').html(createDiv({id:'div-adminipage-menu',clazz:'text-center'}))
		.attr('style','width: 1050px;margin: 0 auto;')
		.append(createDiv({id:'div-adminipage-submenu',clazz:'text-left'}))
		.append(createDiv({id:'div-adminipage-content',clazz:'text-left'}));
		$('#div-adminipage-menu')
		.attr('style','width: 100%;')
		.html(createUL({id:'mypage-header',clazz:'mylist-inline'}));
		
		$.each([
			'http://www.bookk.co.kr/img/settings/index01.jpg',
			'http://www.bookk.co.kr/img/settings/index02.jpg',
			'http://www.bookk.co.kr/img/settings/index03.jpg',
			'http://www.bookk.co.kr/img/settings/index04.jpg',
			'http://www.bookk.co.kr/img/settings/index05.jpg'
		],(k,v)=>{
			$(createLI({id:'li-headMenu-'+k,clazz:''}))
			.attr('name','li-headMenu')
			.append(createImg({id:'',alt:'',src:v,clazz:''}))
			.appendTo('#mypage-header');			
		});
		$('#li-headMenu-0')
		.on('click',e=>{
			e.preventDefault();
			user.member.mypage(x);
		});
		$('#li-headMenu-2')
		.on('click',e=>{
			e.preventDefault();
			$('li[name="li-headMenu"]').attr('style','border: 1px solid #eee;');
			$('#li-headMenu-2').attr('style','border: 1px solid #adcfdf;');
		});
	},
	mypage:x=>{
		$('li[name="li-headMenu"]').attr('style','border: 1px solid #eee;');
		$('#li-headMenu-0').attr('style','border: 1px solid #adcfdf;');
		var d=JSON.parse(sessionStorage.getItem('user'));
		$('#div-adminipage-submenu')
		.attr('style','border-bottom: 2px solid #dddddd;')
		.html(createUL({id:'mypage-submenu',clazz:'mylist-inline'}));

		$.each(['프로필관리','인증관리','계정관리','내 활동내역','찜목록'],(k,v)=>{
			$(createLI({id:'',clazz:''}))
			.append(createATag({id:'a-submenu-'+k,val:v}))
			.appendTo('#mypage-submenu');			
		});
		$('#div-adminipage-content')
		.html(createDiv({id:'div-openTitle',clazz:''}));
		$('#div-openTitle')
		.append(createHTag({size:2,val:'공개 정보'}))
		.append(createP({val:'자신을 홍보하기 위해 부크크 사용자들에게 공개되는 프로필 정보입니다.'}));
		$(createTable({id:'table-profile',clazz:'table-profile'}))
		.appendTo('#div-openTitle');
		$(createTr({id:'tr-0'}))
		.appendTo('#table-profile');
		$(createTh({id:'',clazz:''}))
		.appendTo('#tr-0')
		.text('닉네임');
		$(createTd({id:'',clazz:''}))
		.appendTo('#tr-0')
		.append(createInput({id:'nickName',clazz:'my-border-input',type:'text'}));		
		
		$.each([
			{title:'프로필 사진',content:'자신을 대표하는 이미지 사진을 업로드합니다. (5MB 미만의 JPG, PNG, GIF 파일)'},
			{title:'마이부크크 상단 사진',content:'마이부크크 상단에 노출될 이미지 사진을 업로드합니다. (5MB 미만의 JPG, PNG, GIF 파일)'}
		],(k,v)=>{
			$(createTr({id:'tr-'+(k+1)}))
			.appendTo('#table-profile');
			$(createTh({id:'',clazz:''}))
			.appendTo('#tr-'+(k+1))
			.text(v.title);
			$(createTd({id:'td-'+(k+1),clazz:''}))
			.attr('style','position: relative;')
			.appendTo('#tr-'+(k+1))
			.append($(createSpan({id:'',clazz:''}))
					.attr('style','position: absolute;bottom: 0px;font-size: 12px;right: 0px;')
					.text(v.content))
					.append(createInput({id:'input-',clazz:'',type:'file'}))
					.append(createDiv({id:'',clazz:'div-img-profile'}));			
		});

		$(createTr({id:'tr-3'}))
		.appendTo('#table-profile');
		$(createTh({id:'',clazz:''}))
		.appendTo('#tr-3')
		.text('자기소개');
		$(createTd({id:'',clazz:''}))
		.appendTo('#tr-3')
		.append(textarea({id:'introduce'}));		
		
		$(createDiv({id:'div-industrialTitle',clazz:''}))
		.appendTo('#div-adminipage-content')
		.append(createHTag({size:2,val:'비공개 정보'}))
		.append(createP({val:'서비스 운영을 위해 필요한 개인 정보로, 다른 사용자에게 공개되지 않습니다.'}));
		$(createTable({id:'table-induProfile',clazz:'table-induProfile'}))
		.appendTo('#div-industrialTitle');
		
		$.each([
			'성명','아이디','이메일 주소','휴대전화번호','생년월일'
		],(k,v)=>{
			$(createTr({id:'tr-indu-'+k}))
			.appendTo('#table-induProfile');
			$(createTh({id:'',clazz:''}))
			.attr('style','text-align: left;')
			.appendTo('#tr-indu-'+k)
			.text(v);
			$(createTd({id:'td-indu-'+k,clazz:''}))
			.appendTo('#tr-indu-'+k);
			$(createInput({id:'input-indu-'+k,clazz:'my-border-input',type:'text'}))
			.appendTo('#td-indu-'+k);
		});
		$('#input-indu-0')
		.attr('readonly','readonly');
		$('#input-indu-1')
		.attr('readonly','readonly');
		
		$(createButton({id:'btn-phone',clazz:'lo-btn',val:'번호변경'}))
		.appendTo('#td-indu-3');
		
		
		$(createTr({id:'tr-indu-5'}))
		.appendTo('#table-induProfile');
		$(createTh({id:'',clazz:''}))
		.attr('style','text-align: left;')
		.appendTo('#tr-indu-5')
		.text('주소');
		$(createTd({id:'td-indu-5',clazz:''}))
		.appendTo('#tr-indu-5');
		
		$('#td-indu-5')
		.append(createInput({id:'my-postCodeAddress',clazz:'my-border-input',type:'text'}))
		.append(createButton({id:'my-btn-address',clazz:'lo-btn',val:'우편번호 찾기'})+'</br>')
		.append(createInput({id:'my-roadAddress',clazz:'my-border-input',type:'text'})+'</br>'
				+createInput({id:'my-jibunAddress',clazz:'my-border-input',type:'text'})+'</br>'
				+createInput({id:'my-detailAddress',clazz:'my-border-input',type:'text'})+'</br>')
		.append($(createSpan({id:'',clazz:''})).text('주문한 도서를 수령할 주소를 입력합니다.'));
		
		$(createTr({id:'tr-indu-6'}))
		.appendTo('#table-induProfile');
		$(createTh({id:'',clazz:''}))
		.attr('style','text-align: left;')
		.appendTo('#tr-indu-6')
		.text('알림설정');
		$(createTd({id:'td-indu-6',clazz:''}))
		.appendTo('#tr-indu-6')
		.append($(createSpan({id:'',clazz:''})).text('구매, 판매, 정산에 관한 알림을 수신합니다.'))
		.append('</br>'+createInput({id:'alarm',clazz:'',type:'checkbox'}))
		.append(createLabel({fo:'notice_type2',val:'휴대전화'}))
		.append(createInput({id:'alarm',clazz:'',type:'checkbox'}))
		.append(createLabel({fo:'notice_type2',val:'이메일'}));
		
		$(createDiv({id:'div-titleBtn-group',clazz:''}))
		.appendTo('#div-adminipage-content');
		$(createButton({id:'',clazz:'lo-btn',val:'저장'}))
		.appendTo('#div-titleBtn-group')
		.attr('style','width:904px')
		.on('click',e=>{
			e.preventDefault();
			alert('컨트롤에서 업뎃하고 세션 user에 다시 담기 실행 후 mypage 재실행');
		});

		$('#my-postCodeAddress')
		.attr('value',d.addrPostCode)
		.attr('placeholder','우편번호')
		.attr('readonly','readonly');
		$('#my-roadAddress')
		.attr('value',d.addrRoad)
		.attr('readonly','readonly')
		.attr('style','width:500px')
		.attr('placeholder','도로명');
		$('#my-jibunAddress')
		.attr('value',d.addrJibun)
		.attr('readonly','readonly')
		.attr('style','width:500px')
		.attr('placeholder','지번');
		$('#my-detailAddress')
		.attr('value',d.addrDetailAddr)
		.attr('style','width:500px')
		.attr('placeholder','상세주소');
		
		
		$('#nickName').attr('value',d.memNickName);
		$('#introduce')
		.text(d.memIntroduce)
		.attr('style','resize: none;border: 1px solid #dfdfdf;min-height: 200px;width: 100%;');
		
		$.each([d.memName,d.memID,d.memEmail,d.memPhone,(d.memSsn)],(k,v)=>{
			$('#input-indu-'+k)
			.attr('value',v);					
		});

		$('table')
		.attr('style','display:table;border-collapse: collapse;border-color: inherit;border-top: 1px solid #f3f4f5;border-bottom: 1px solid #f3f4f5;')
		$('tr')
		.attr('style','border-bottom: 1px solid #f3f4f5;')
		
		$('#my-btn-address')
		.on('click',e=>{
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
		            document.getElementById('my-postCodeAddress').value = data.zonecode; //5자리 새우편번호 사용
		            document.getElementById('my-roadAddress').value = fullRoadAddr;
		            document.getElementById('my-jibunAddress').value = data.jibunAddress;

		        }
		    }).open();
		});
	},
	login:x=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-login',clazz:'auth-form'}))
					.attr('style','width: 300px;left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background-color:#fff;border:1px solid #969696;')}, type : 'inline'}, 0);
		$('#form-login')
		.append(createHTag({size:2,val:'로그인'}))
		.append($(createDiv({id:'div-form-group',clazz:'form-group'})).attr('style','margin-bottom: 15px;'))
		.append(createDiv({id:'div-btn-group',clazz:'wrap-check'})
				+createDiv({id:'div-auth-help',clazz:'form-group auth-help'}));

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'아이디'})+'<br/>'
				+createInput({id:'login-id',clazz:'my-border-input',type:'text'})+'<br/>')
		.append(createLabel({fo:'comment',val:'비밀번호'})+'<br/>'
				+createInput({id:'login-password',clazz:'my-border-input',type:'password'})+'<br/>');
		$('#login-id').attr('value','user');
		$('#login-password').attr('value','user');
		$('label')
		.attr('style','display: inline-block;margin-bottom: 5px;max-width: 100%;font-weight: 700;');
		
		$('#div-btn-group')
		.append($(createLabel({fo:'comment',val:'관리자 로그인'}))
				.attr('style','font-size: 11px;'))
		.append('<br/>');
		
		$(createButton({type:'submit',clazz:'lo-btn',val:'로그인'}))
		.attr('style','padding: 6px 12px;border: 1px solid transparent;border-radius: 4px;')
		.appendTo('#div-btn-group')
		.on('click',e=>{
			e.preventDefault();
			var userid=$('#login-id').val();
			var userpass=$('#login-password').val();
			$.ajax({
				url:x.context+'/member/login',
				method:'POST',
				data:JSON.stringify({
					id:userid,
					pass:userpass,
					type:'member'
					}),
				dataType:'json',
				contentType:'application/json',
				success : d =>{
					if(d!==null){
						sessionStorage.setItem('user',JSON.stringify(d));
						$('#div-header-userMenu').html(createDiv({id:'div-member-bar',clazz:''}));
						
						$(createATag({id:'a-cs',val:'고객센터'})).appendTo('#div-member-bar')
						.on('click',()=>{
							alert('서비스 준비중..');
						});
						$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
						$(createATag({id:'a-delivery-check',val:'주문배송조회'})).appendTo('#div-member-bar')
						.on('click',()=>{
							alert('서비스 준비중..');
						});
						$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
						$(createATag({id:'a-cart',val:'장바구니'})).appendTo('#div-member-bar')
						.on('click',e=>{
							e.preventDefault();
							document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
							$.getScript($.javascript()+'/book.js',()=>{
								book.main.bookNav(x);
								$.getScript($.javascript()+'/shop.js',()=>{
									shop.mall.cart(x);
								});
							});
						});
						
						$(createButton({id:'',type:'',clazz:'lo-btn',val:'마이페이지'}))
						.appendTo('#div-header')
						.on('click',e=>{
							e.preventDefault();
							document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
							$.getScript($.javascript()+'/book.js',()=>{
								book.main.bookNav(x);   			
								$.getScript($.javascript()+'/user.js',()=>{
									user.member.admempage(x);
									user.member.mypage(x);
								});
							});
						});
						$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
						$(createATag({id:'a-logout',val:'로그아웃'})).appendTo('#div-member-bar')
						.on('click',e=>{
							e.preventDefault();
							sessionStorage.removeItem('user');
							$('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
							$.getScript($.javascript()+'/app.js',()=>{
								app.init(x.context);
							})
						});
						$.magnificPopup.close();
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
			user.member.join(x);
		});
		$('<a href="#" class="find-user pull-right">아이디/비밀번호 찾기</a>')
		.appendTo('#div-auth-help');
	},
	join:x=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-join',clazz:'auth-form'}))
					.attr('style','width: 300px;left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background-color:#fff;border:1px solid #969696;')}, type : 'inline'}, 0);
		$('#form-join')
		.append(createHTag({size:2,val:'회원가입'})+'<br/>')
		.append($(createDiv({id:'div-form-group',clazz:'form-group'})).attr('style','margin-bottom: 15px;'))
		.append(createDiv({id:'div-btn-group',clazz:'wrap-check'}));
		
		$.each([
			{labelfo:'comment',labelval:'아이디',inputid:'id',inputclazz:'my-border-input',inputtype:'text'},
			{labelfo:'comment',labelval:'비밀번호',inputid:'password',inputclazz:'my-border-input',inputtype:'password'},
			{labelfo:'comment',labelval:'이름',inputid:'name',inputclazz:'my-border-input',inputtype:'text'}
			],(k,v)=>{
					$('#div-form-group')
					.append(createLabel({fo:v.labelfo,val:v.labelval})+'<br/>'
							+createInput({id:'join-'+v.inputid,clazz:v.inputclazz,type:v.inputtype})+'<br/>');
		});
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'이메일'})+'<br/>'
				+createInput({id:'join-email',clazz:'my-border-input',type:'email'})+'@'
				+createSelect('join-url')+'<br/>');

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'전화번호'})+'<br/>'
				+createSelect('join-phoneB')+'-'
				+createInput({id:'join-phoneM',clazz:'my-border-input',type:'email'})+'-'
				+createInput({id:'join-phoneA',clazz:'my-border-input',type:'email'})+'<br/>');
		
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'주민번호'})+'<br/>'
				+createInput({id:'join-ssnB',clazz:'my-border-input',type:'text'})+'-'
				+createSelect('join-ssnA')+'<br/>');

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'주소'})+'<br/>'
				+createInput({id:'join-postCodeAddress',clazz:'my-border-input',type:'text'}))
		.append($(createButton({id:'join-btn-address',clazz:'lo-btn',val:'우편번호 찾기'}))
				.attr('style','padding: 6px 12px;border: 1px solid transparent;border-radius: 4px;'))
		.append(createInput({id:'join-roadAddress',clazz:'my-border-input',type:'text'})
				+createInput({id:'join-jibunAddress',clazz:'my-border-input',type:'text'})
				+createInput({id:'join-detailAddress',clazz:'my-border-input',type:'text'}));
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
		.attr('style','display: inline-block;margin-bottom: 5px;max-width: 100%;font-weight: 700;');
		$('input')
		.attr('required',true);
		
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
		
		$('.my-border-input')
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
		            document.getElementById('join-postCodeAddress').value = data.zonecode; //5자리 새우편번호 사용
		            document.getElementById('join-roadAddress').value = fullRoadAddr;
		            document.getElementById('join-jibunAddress').value = data.jibunAddress;

		        }
		    }).open();
		});
		
		$(createButton({id:'',type:'submit',clazz:'lo-btn',val:'가입하기'}))
		.attr('style','padding: 6px 12px;border: 1px solid transparent;border-radius: 4px;')
		.appendTo('#div-btn-group')
		.on('click',e=>{
			e.preventDefault();
			
			id=$('#join-id').val();
			pass=$('#join-password').val();
			ssn=$('#join-ssnB').val();
			postDetail=$('#join-postCodeAddress').val();
			phoneM=$('#join-phoneM').val();
			phoneA=$('#join-phoneA').val();
			if(id===''){
				alert('아이디를 입력하세요');
				$('#join-id').focus();
				return;
			}
			if(pass===''){
				alert('비밀번호를 입력하세요');
				$('#join-password').focus();
				return;
			}
			if(ssn===''){
				alert('생년월일을 입력하세요');
				$('#join-ssnB').focus();
				return;
			}
			if(ssn.length!=4){
				alert('생년월일 6자리를 입력하세요');
				$('#join-ssnB').select();
				return;
			}
			if(phoneM===''){
				alert('전화번호를 입력하세요');
				$('#join-phoneM').focus();
				return;
			}if(phoneA===''){
				alert('전화번호를 입력하세요');
				$('#join-phoneA').focus();
				return;
			}
			for(var i=0;i<ssn.length;i++){
				var cha = ssn.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자만 가능합니다');
					$('#join-ssnB').select();
					return;
				}
			}
			for(var i=0;i<phoneM.length;i++){
				var cha = phoneM.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자로 입력하세요');
					$('#join-phoneM').select();
					return;
				}
			}
			for(var i=0;i<phoneA.length;i++){
				var cha = phoneA.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자로 입력하세요');
					$('#join-phoneA').select();
					return;
				}
			}
			if(postDetail===''){
				alert('주소를 입력하세요');
				$('#join-btn-address').click();
				return;
			}
			
			$.ajax({
				url:x.context+'/member/join',
				method:'POST',
				data:JSON.stringify({
					id:id,
					pass:pass,
					name:$('#join-name').val(),
					email:$('#join-email').val()+$('#join-url').val(),
					phone:$('#join-phoneB').val()+'-'+phoneM+'-'+phoneA,
					ssn:ssn+'-'+$('#join-ssnA').val(),
					postDetail:postDetail,
					roadAddress:$('#join-roadAddress').val(),
					jibunAddress:$('#join-jibunAddress').val(),
					detailAddress:$('#join-detailAddress').val(),
					type:'member'
					}),
				dataType:'json',
				contentType:'application/json',
				success : d =>{
					if(d.success===1){
						alert('가입 성공');
						$.magnificPopup.close();
						user.member.login(x);
					}else{
						alert('아이디가 중복됩니다.');
					}
				},
				error : ()=>{
					alert('전부 입력하세요');
					}
			});
		});
	}
};
