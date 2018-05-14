var app=app || {};
app = {init:x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x))
		app.nav.onCreate();
	})
	}
	
};
app.nav=(()=>{
	var $wrapper,context,view,iamge;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		image=$.image();
		context = $.context();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
			$wrapper.html(createDiv({id:'intro'}));

			$('#intro')
			.append('<div style="width: 100%; height: 800px; background-image: url(https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2F20160504_298%2F1462304932785tr8te_JPEG%2FI-CxqleoPpR1kkjDLfL7GZHFUJtg.jpg&type=b400); background-repeat: no-repeat; background-size: cover;">'
			 +'<div id="goMain" style="font-size: 100px; text-align: center; color: white; font-weight: bold;"> Bookk '
			 +'<div style="font-size: 20px; text-align: center; color: white; font-weight: bold; cursor: pointer;">부크크 시작하기</div></div>'
			 +'<div>'
			   +'<h1 id="dam" style="color: darkturquoise; float: left; margin-left: 200px; font-size: 20px;">'
			     +'담당'
			       +'<p style="color: white">'
			           +'박상우 <br>'
			           +'고객 관리, 책(판매량 / 재고량) 차트, 책 등록, 수정, 삭제 <br>'
			           +'API : 주소, 달력, 차트, 팝업 <br>'
			           +'김두영 <br>'
			           +'책(장르별 / 순위별) 이미지 리스트, 책 정보 조회 <br>'
			           +'장만호 <br>'
			           +'책(구매 / 예약) 리스트 <br>'
			           +'API : 주소, 달력 <br>'
			           +'김정원 <br>'
			           +'게시글 리스트, 게시글 상세페이지, 게시글 댓글,<br> 게시글 쓰기, 게시글 검색 리스트 <br>'
			           +'API : bootstrap <br>'
			       +'</p>'
			   +'</h1>'
			   +'<h1 id="pro" style="color: darkturquoise; float: right; margin-top: 250px; font-size: 20px; margin-right: 50px;">'
			     +'프로젝트 환경 기술'
			       +'<p style="color: white">'
			           +'환경 : Spring4 기반, HashMap, MARIADB(MySql) <br>  mybatis, JavaScript, Jquery, maven <br>  JackSon, JSON,  POJO, FileUpload, Lombok <br> <br>  '
			           +'API : magnific-popup, bootstrap, google chart <br>  postcode map daum, daterangepicker(달력)'
			       +'</p>'
			   +'</h1>'
			   +'<h1 id="cham" style="color: darkturquoise; float: right; position: absolute; right: 229px; font-size: 20px;">'
			     +'프로젝트 참여자'
			       +'<p style="color: white">'
			         +'박상우 (매니저) 010-9796-7773 <br>'
			         +'김두영 (책) 010-4952-4862 <br>  '
			         +'장만호 (쇼핑몰) 010-5604-1198 <br>  '
			         +'김정원 (게시판) 010-5566-9840 <br>  '
			       +'</p>'
			   +'</h1>'
			 +'</div>'
			+'</div>');
			
			$('#goMain')
			.on('click',()=>{
						$wrapper.html(createDiv({id:'div-header',clazz:''}))
						.append(createDiv({id:'div-body',clazz:''}))
						.append(createDiv({id:'div-footer',clazz:''}));
						
						$('#div-footer').html(createMultiDiv({id:'div-footer',arr:makeCount(2)}))
						.attr('style','width:1600px;margin-top:100px;background:black;color:#777777;position: absolute;');
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
						
						
						$(createDiv({
				   			 id : 'div-header-userMenu',
				   			 clazz : ''
						})).appendTo('#div-header').attr('style','background: black;');
						$(createDiv({
				   			 id : 'div-header-pageMenu',
				   			 clazz : ''
						})).appendTo('#div-header').attr('style','width: 100%; margin: 0 auto; position: relative; height: 60px; border-bottom: 2px solid white; background: black;');
						
//						서점 게시판
						$(createATag({id:'logo',val:''})).appendTo('#div-header-pageMenu').attr('style','position: absolute; top: 5px; left: 250px;');
						$(createImg({src:'http://www.twitlogo.com/c/59b67a6a5d76956c9a5ae80ec933efcd.png'})).appendTo('#logo').attr('style','width: 150px; height: 50px;').on('click',e=>{
							$('#shop-btn').click();
						});
						$(createDiv({id:'main-search-div'})).appendTo('#div-header-pageMenu').attr('style','margin: 0; padding: 0; position: absolute; top: 15px; left: 450px;');
						$(createForm({id:'main-search-form'})).appendTo('#main-search-div').attr('style','position: relative;');
						$(createInput({id:'main-search-input',type:'text'})).appendTo('#main-search-form').attr('style','position: absolute; width: 350px; min-height: 34px; box-sizing: border-box; text-align: center; font-size: 15px; font-weight: bold;');
						$(createButton({id:'main-search-btn',val:'검색'})).appendTo('#main-search-form').attr('type','submit').attr('style','position:absolute; left: 350px; width: 50px; height: 34px; color: white; background: black; border: 1px solid white;');
						$(createButton({id:'shop-btn',type:'',clazz:'btn mint long',val:'서점'})).attr('style','position: absolute; right: 300px; top: 5px; color: white; font-weight: bold; font-size: 20px;background: black;')
						.appendTo('#div-header-pageMenu')
			            .on('click',e=>{
			                e.preventDefault();
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
			                document.getElementById('wizcss').href=(context+'/resources/css/style.css');
			                $('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
			                $.getScript($.javascript()+'/book.js',()=>{
			                    book.main.setContentView({context:context,view:view,image:image});
			                })
			            });
			            $(createButton({id:'bulletin-btn',type:'',clazz:'btn mint long',val:'게시판'})).attr('style','position: absolute; right: 200px; top: 5px; color: white; font-weight: bold; font-size: 20px; background: black;')
			            .appendTo('#div-header-pageMenu')
			            .on('click',e=>{
			                e.preventDefault();
			                $('#div-footer').html('<div id="div-footer" class="col-sm-12">'
			    					+'	<div id="div-footer-0" class="undefined">'
			    					+'		<ul id="ul-footer" class="undefined" style="border-bottom: 1px solid #777777;height:70%;width:70%;margin:0 auto">'
			    					+'			<li id="li-li-footer-0" class="undefined" style="float:left;border-right: 1px solid #777777;width:120px;list-style: none;margin-top:10px;text-align:center;padding: 5px 5px;">'
			    					+'				<a href="#" class="undefined" style="color:#777777;font-weight:  bold;font-size:  15px;">이용약관</a>'
			    					+'				</li><li id="li-li-footer-1" class="undefined" style="float:left;border-right: 1px solid #777777;list-style: none;width:120px;margin-top:10px;text-align:center;padding: 5px 5px;">'
			    					+'					<a href="#" class="undefined" style="font-size:  17px;color:#777777;font-weight:  bold;">개인보호정책</a></li>'
			    					+'					<li id="li-li-footer-2" class="undefined" style="float:left;border-right: 1px solid #777777;list-style: none;width:120px;margin-top:10px;padding: 5px 5px;text-align:center;font-size:  15px;font-weight: bold;">'
			    					+'						<a href="#" class="undefined" style="color:#777777">고객센터</a>'
			    					+'					</li></ul></div>'
			    					+'					<div id="div-footer-1" class="col-sm-12" style="padding-left: 280px;border-top: 1px solid;">'
			    					+'<span id="span-footer-1" class="undefined" style="color:#777777;font-size:14px;bottom:15px;">업체명 : 주식회사 부크크</span>'
			    					+'<span id="span-footer-2" class="undefined" style="color:#777777;font-size:14px;bottom:15px;right:5px;margin-right:20px;">대표이사 : ㅁㅁㅁ</span>'
			    					+'<span id="span-footer-3" class="undefined" style="color:#777777;font-size:14px;bottom:15px;right:5px;margin-right:20px;">대표전화 : 000-0000-0000</span>'
			    					+'<p style="bottom:30px;right:5px;font-size:14px;">주소: 서울시 마포구 신촌 비트캠프 오세요~</p>'
			    					+'<div id="div-footer-1-0" class="undefined" style="bottom:45px;right:5px;font-size:14px;">'
			    					+'	<span id="span-footer-4" class="undefined" style="margin-right:20px;">사업자등록번호 : 000-00-00000</span>'
			    					+'	<span id="span-footer-5" class="undefined" style="margin-right:20px;">통신판매업신고 : 제 2018-서울신촌-0000호</span>'
			    					+'	<span id="span-footer-6" class="undefined" style="margin-right:20px;">사업자등록정보확인</span></div><div id="div-footer-1-1" class="undefined" style="'
			    					+'    padding-top: 50px;'
			    					+'    font-size:  17px;">Copyright © Bookk Co, Ltd. All rights reserved.</div>'
			    					+'</div>'
			    					+'</div>')
			                document.getElementById('wizcss').href=('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
			                $('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
			                $.getScript($.javascript()+'/bulletin.js',()=>{
			                    bulletin.board.onCreate();
			                })
			            });
//						로그인 회원가입 글자
						$(createDiv({
							id : 'wrap-tnb-menu',
							clazz : 'wrap-tnb-menu'
						})).appendTo('#div-header-userMenu').attr('style','line-height: 40px;');
						$(createDiv({
							id : 'tnb-menu-text-right',
							clazz : 'tnb-menu text-right'
						})).appendTo('#wrap-tnb-menu')
						.attr('style','width:1000px;margin:0 auto; font-size:20px;  position:relative;');
						if(sessionStorage.getItem('admin')!=null){
							$.getScript($.javascript()+'/user.js',()=>{
								user.admin.login({image:image,context:context,view:view});
							})
						}else{
							if(sessionStorage.getItem('user')!=null){
								$.getScript($.javascript()+'/user.js',()=>{
									user.member.costomer({image:image,context:context,view:view});
								})
							}else{
								$(createATag({
									id : 'a-login',
									clazz : 'tnb-link',
									val : '로그인'
								})).appendTo('#tnb-menu-text-right').attr('style','padding:0 10px; position:relative;color:white;')
								.on('click',e=>{
									e.preventDefault();
									$.getScript($.javascript()+'/user.js',()=>{
										user.member.login({image:image,context:context,view:view});
									})
								});
								$(createSpan({
									id : 'span-login',
									clazz : 'division'
								})).appendTo('#tnb-menu-text-right').attr('style','border: 2px solid blue;');
								$(createATag({
									id : 'a-join',
									clazz : 'tnb-link last',
									val : '회원가입'
								})).appendTo('#tnb-menu-text-right').attr('style','padding:0 10px; position:relative;color:white; ')
								.on('click',e=>{
									e.preventDefault();
									$.getScript($.javascript()+'/user.js',()=>{
										user.member.join({image:image,context:context,view:view});
									})
								});
							}
							$.getScript($.javascript()+'/book.js',()=>{
								book.main.setContentView({image:image,context:context,view:view}); 	
							});
						}
					})
		});
		
		
	}
	return {onCreate:onCreate}
})();
