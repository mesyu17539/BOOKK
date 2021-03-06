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
			$wrapper.html(createDiv({id:'div-header',clazz:''}))
			.append(createDiv({id:'div-body',clazz:''}))
			.append(createDiv({id:'div-footer',clazz:''}));
			

			$(createDiv({
	   			 id : 'div-header-userMenu',
	   			 clazz : ''
			})).appendTo('#div-header');
			$(createDiv({
	   			 id : 'div-header-pageMenu',
	   			 clazz : ''
			})).appendTo('#div-header');
			
//			서점 게시판
			$(createButton({id:'',type:'',clazz:'btn mint long',val:'서점'}))
			.appendTo('#div-header-pageMenu')
            .on('click',e=>{
                e.preventDefault();
                document.getElementById('wizcss').href=(context+'/resources/css/style.css');
                $('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
                $.getScript($.javascript()+'/book.js',()=>{
                    book.main.setContentView({context:context,view:view});
                })
            });
            $(createButton({id:'',type:'',clazz:'btn mint long',val:'게시판'}))
            .appendTo('#div-header-pageMenu')
            .on('click',e=>{
                e.preventDefault();
                document.getElementById('wizcss').href=('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
                $('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
                $.getScript($.javascript()+'/bulletin.js',()=>{
                    bulletin.board.onCreate();
                })
            });
			
//			로그인 회원가입
			$(createDiv({
	   			 id : 'wrap-tnb-menu',
	   			 clazz : 'wrap-tnb-menu'
			})).appendTo('#div-header-userMenu').attr('style','border-bottom: 2px dotted #c6c6c6;line-height:40px; ');
			$(createDiv({
	   			 id : 'tnb-menu-text-right',
	   			 clazz : 'tnb-menu text-right'
	   		 })).appendTo('#wrap-tnb-menu')
	   		 .attr('style','width:1000px;margin:0 auto; font-size:20px;  position:relative;');
	   		 $(createATag({
	   			 id : 'a-login',
	   			 clazz : 'tnb-link',
	   			 val : '로그인'
	   		 })).appendTo('#tnb-menu-text-right').attr('style','padding:0 10px; position:relative;')
				.on('click',e=>{
					e.preventDefault();
					$.getScript($.javascript()+'/user.js',()=>{
						user.member.login({context:context,view:view});
					})
				});
	   		 $(createSpan({
	   			 id : 'span-login',
	   			 clazz : 'division'
	   		 })).appendTo('#tnb-menu-text-right').attr('style','border: 2px solid green;');
	   		 $(createATag({
	   			 id : 'a-join',
	   			 clazz : 'tnb-link last',
	   			 val : '회원가입'
	   		 })).appendTo('#tnb-menu-text-right').attr('style','padding:0 10px; position:relative; ')
				.on('click',e=>{
					e.preventDefault();
					$.getScript($.javascript()+'/user.js',()=>{
						user.member.join({context:context,view:view});
					})
				});
	   		$.getScript($.javascript()+'/book.js',()=>{
	   			book.main.setContentView({image:image,context:context,view:view}); 			
	   		});
		});
	}
	return {onCreate:onCreate}
})();
