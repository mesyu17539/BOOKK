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
			})).appendTo('#div-header').attr('style','background: black;');
			$(createDiv({
	   			 id : 'div-header-pageMenu',
	   			 clazz : ''
			})).appendTo('#div-header').attr('style','width: 100%; margin: 0 auto; position: relative; height: 60px; border-bottom: 2px solid white; background: black;');
			
//			서점 게시판
			$(createATag({id:'logo',val:''})).appendTo('#div-header-pageMenu').attr('style','position: absolute; top: 5px; left: 250px;');
			$(createImg({src:'http://www.twitlogo.com/c/59b67a6a5d76956c9a5ae80ec933efcd.png'})).appendTo('#logo').attr('style','width: 150px; height: 50px;');
			$(createDiv({id:'main-search-div'})).appendTo('#div-header-pageMenu').attr('style','margin: 0; padding: 0; position: absolute; top: 15px; left: 450px;');
			$(createForm({id:'main-search-form'})).appendTo('#main-search-div').attr('style','position: relative;');
			$(createInput({id:'main-search-input',type:'text'})).appendTo('#main-search-form').attr('style','position: absolute; width: 350px; min-height: 34px; box-sizing: border-box; text-align: center; font-size: 15px; font-weight: bold;');
			$(createButton({id:'main-search-btn',val:'검색'})).appendTo('#main-search-form').attr('type','submit').attr('style','position:absolute; left: 350px; width: 50px; height: 34px; color: white; background: black; border: 1px solid white;');
			$(createButton({id:'shop-btn',type:'',clazz:'btn mint long',val:'서점'})).attr('style','position: absolute; right: 300px; top: 5px; color: white; font-weight: bold; font-size: 20px;background: black;')
			.appendTo('#div-header-pageMenu')
            .on('click',e=>{
                e.preventDefault();
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
                document.getElementById('wizcss').href=('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
                $('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
                $.getScript($.javascript()+'/bulletin.js',()=>{
                    bulletin.board.onCreate();
                })
            });
//			로그인 회원가입 글자
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
					user.admin.login({context:context,view:view,image:image});
				})
			}else{
				if(sessionStorage.getItem('user')!=null){
					$.getScript($.javascript()+'/user.js',()=>{
						user.member.costomer({context:context,view:view});
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
							user.member.login({context:context,view:view});
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
							user.member.join({context:context,view:view});
						})
					});
				}
				$.getScript($.javascript()+'/book.js',()=>{
					book.main.setContentView({image:image,context:context,view:view}); 	
				});
			}
		});
	}
	return {onCreate:onCreate}
})();
