var bulletin = bulletin || {};

bulletin.board=(x=>{
	var context,view;
	var onCreate=()=>{
		view = $.javascript()+'/view.js';
		setContentView();
	};
	
	var setContentView=()=>{
		$.getScript(view,()=>{
			// Border Main Button
			$('#div-body')
				.html($(createDiv({id:'jw-div',clazz:'container'}))
				.attr('style','padding:0px;'));				
			$(createDiv({id:'row-div',clazz:''}))
				.appendTo('#jw-div');
			// notice
			$(createDiv({id:'',clazz:'col-sm-1'}))
				.appendTo('#row-div')
				.attr('style','height: 200px;padding: 1px');
			$(createDiv({id:'col-1',clazz:'col-sm-2'}))
				.appendTo('#row-div')
				.attr('style','padding: 1px');
			$(createImage({id:'notice-img',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJsKhhu3CEjTbmKwJtkNz7aB8rGTSqBO08iKvLSrID3-YuNn8tg',clazz:''}))
				.appendTo('#col-1')
				.attr('style','height: 200px; max-width:100%;')
			// qna
				
			$(createDiv({id:'col-2',clazz:'col-sm-2'}))
				.appendTo('#row-div')
				.attr('style','padding: 1px');
			$(createImage({id:'qna-img',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJsKhhu3CEjTbmKwJtkNz7aB8rGTSqBO08iKvLSrID3-YuNn8tg',clazz:''}))
				.appendTo('#col-2')
				.attr('style','height: 200px; max-width:100%;')
			// help https://i.imgur.com/YVOZuRqb.jpg
			$(createDiv({id:'col-3',clazz:'col-sm-2'}))
				.appendTo('#row-div')
				.attr('style','padding: 1px');
			$(createImage({id:'help-img',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJsKhhu3CEjTbmKwJtkNz7aB8rGTSqBO08iKvLSrID3-YuNn8tg',clazz:''}))
				.appendTo('#col-3')
				.attr('style','height: 200px; max-width:100%;')
			// review
				
			$(createDiv({id:'col-4',clazz:'col-sm-2'}))
				.appendTo('#row-div')
				.attr('style','padding: 1px');
			$(createImage({id:'review-img',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJsKhhu3CEjTbmKwJtkNz7aB8rGTSqBO08iKvLSrID3-YuNn8tg',clazz:''}))
				.appendTo('#col-4')
				.attr('style','height: 200px; max-width:100%;')
			// board
			$(createDiv({id:'col-5',clazz:'col-sm-2'}))
				.appendTo('#row-div')
				.attr('style','padding: 1px');
			$(createImage({id:'board-img',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TrIyRb8uy6IT98yokhFMv2mGxk74kgB036MenUiJEEnUf7xXuA',clazz:'boo'}))
				.appendTo('#col-5')
				.attr('style','height: 200px; max-width:100%;')
								   .hover(()=>{
									   $('.boo').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesp9RlBJ4fbN7VEzCUh1u0KTnjH11YumY3Grr7-WXbpX1ik-w');
								   }, ()=>{
									   $('.boo').attr('src','https://media.istockphoto.com/vectors/community-line-icon-vector-id618555678');
								   })
								   .on('click',()=>{
										boards();
								});
			$(createDiv({id:'',clazz:'col-sm-1'}))
				.appendTo('#row-div')
				.attr('style','height: 200px;');
		// Border Main Carousel
			$(createDiv({id:'myCarousel',clazz:'carousel slide'}))
				.attr('data-ride','carousel')
				.appendTo('#div-body');
			$(createOL({id:'ol-data',clazz:'carousel-indicators'}))
				.appendTo('#myCarousel');
			$(createLI({id:'1-li',clazz:'board-li active'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','0')
				.attr('style','height:20px; width:20px;')
				.appendTo('#ol-data');		
			$(createLI({id:'2-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('style','height:20px; width:20px;')
				.attr('data-slide-to','1')
				.appendTo('#ol-data');
			$(createLI({id:'3-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('style','height:20px; width:20px;')
				.attr('data-slide-to','2')
				.appendTo('#ol-data');
			$(createLI({id:'4-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('style','height:20px; width:20px;')
				.attr('data-slide-to','3')
				.appendTo('#ol-data');
			$(createLI({id:'5-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('style','height:20px; width:20px;')
				.attr('data-slide-to','4')
				.appendTo('#ol-data');
			$(createLI({id:'6-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('style','height:20px; width:20px;')
				.attr('data-slide-to','5')
				.appendTo('#ol-data');
			// list-box
			$(createDiv({id:'inner-box',clazz:'carousel-inner'}))
				.attr('role','listbox')
				.appendTo('#myCarousel')
				.attr('style','margin-top:40px;');
			// 1 -box
			$(createDiv({id:'item-box',clazz:'item active'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'http://www.goodlifeproject.com/wp-content/uploads/2016/10/community-header.png'}))
				.attr('style','margin:0 auto;')
				.attr('style','width:100%; height:500px;')
				.appendTo('#item-box');
			// 2 -box
			$(createDiv({id:'item2-box',clazz:'item'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'https://media.giphy.com/media/10B1POqoY9kOME/giphy.gif', clazz:''}))
				.attr('style','width:100%; height:500px;')
				.appendTo('#item2-box');
			// 3-box
			$(createDiv({id:'item3-box',clazz:'item'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'https://media1.tenor.com/images/1e9f2d5423e13d68ae60dbe25b98e388/tenor.gif?itemid=11579831', clazz:''}))
				.attr('style','width:100%; height:500px;')
				.appendTo('#item3-box');
			// 4-box
			$(createDiv({id:'item4-box',clazz:'item'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'https://media.giphy.com/media/3o6ZtmGkSCwGWQNTOg/giphy.gif', clazz:''}))
				.attr('style','width:100%; height:500px;')
				.appendTo('#item4-box');
			// 5- box
			$(createDiv({id:'item5-box',clazz:'item'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'http://cdn.collider.com/wp-content/uploads/2016/11/kong-skull-island-monster-image.jpg', clazz:''}))
				.attr('style','width:100%; height:500px;')
				.appendTo('#item5-box');
			// 6- box
			$(createDiv({id:'item6-box',clazz:'item'}))
				.appendTo('#inner-box');
			$(createImage({id:'',src:'https://media1.popsugar-assets.com/files/thumbor/sEsLflIEp_nfioQsE4aGa8zq9CY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/03/278/n/1922398/addurlYAmgaN/i/Nope-Rat.gif' , clazz:''}))
				.attr('style','width:100%; height:500px;')
				.appendTo('#item6-box');
			

		});
	};
	var boards=x=>{
		$.getScript(view,()=>{
			$('#myCarousel').remove();
			$('#borders-h').remove();
			$(createDiv({id:'borders-h',clazz:'container'}))
				.attr('style','padding:1px; margin-top:50px;')
				.appendTo('#div-body');
			$(createDiv({id:'',clazz:'col-sm-1'}))
				.appendTo('#borders-h');
			$(createDiv({id:'left-side',clazz:'col-sm-2'}))
				.appendTo('#borders-h')
				.attr('style','float:left;padding:10px; ');
			$(createUL({id:'left-ul',clazz:''}))
				.appendTo('#left-side')
				.attr('style','margin:0px; padding:0px; list-style:none; ');
			$(createLI({id:'1-left-li',clazz:''}))
				.appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px;');
			$(createATag({id:'1-left-atag',val:'자유게시판'}))
				.appendTo('#1-left-li')
				.attr('style','padding:10px 50px 10px 50px;')
				.on('click',()=>{
					bulletin.jau.onCreate();
				});
			$(createLI({id:'2-left-li',clazz:''}))
				.appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px; ');
			$(createATag({id:'2-left-atag',val:'작가노하우'}))
				.appendTo('#2-left-li')
				.on('click',()=>{		
					bulletin.jau.jakga();
			});
			$(createLI({id:'3-left-li',clazz:''}))
				.appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px;');
			$(createATag({id:'3-left-atag',val:'독서토론'}))
				.appendTo('#3-left-li');
			// 오른쪽 상세내용
			$(createDiv({id:'new-right-side',clazz:'col-sm-8'}))
				.appendTo('#borders-h');
				bulletin.jau.onCreate();
		});
		
	}			
		
	return{onCreate:onCreate,boards:boards};
})();
bulletin.jau=(()=>{
	var $wrapper,context,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		view = $.javascript()+'/view.js';
		community();
	};
	
	var community=()=>{
		$.getScript(view,()=>{
			$('#new-right-side')
				.html($(createDiv({id:'right-side',clazz:'col-sm-12'}))
				.attr('style','padding:10px; margin-bottom: 30px; '));
			$(createDiv({id:'board-all',clazz:''}))
			.appendTo('#right-side');
			$(createDiv({id:'board-title',clazz:'col-sm-3'}))
				.appendTo('#board-all')
				.attr('style','padding:10px;');
			$(createHTag({size:'4',val:'자유게시판'}))
				.appendTo('#board-title')
				.attr('style','border-left:5px solid #10b5cf; font-size:24px; padding-left:10px;');
			
			$(createDiv({id:'board-search',clazz:'col-sm-7'}))
				.appendTo('#right-side')
				.attr('style','padding:10px;margin-top:9px;');
			$(createForm({id:'search-form',clazz:'form-inline'}))
				.appendTo('#board-search');
			$(createSelect('select'))
				.appendTo('#search-form')
				.attr('class','form-control');
			$(createOption({val:'co_title',txt:'제목'}))
				.appendTo('#select')
				.attr('select','selected');
			$(createOption({val:'contents',txt:'내용'}))
				.appendTo('#select');
			$(createInput({id:'select-text',clazz:'form-control',type:'search'}))
				.appendTo('#search-form')
				.attr('placeholder','Search..');
			// 검색 엔진
			$(createButton({id:'',clazz:'btn btn-primary',val:'검색'}))
				.appendTo('#search-form')
				.attr('type','submit')
				.on('click',e=>{
					e.preventDefault();
					var select = $('#select').val();
					searchList({select:select,x:1,data:$('#select-text').val()});
				});
			
			$(createDiv({id:'btn-write',clazz:'col-sm-2'}))
				.appendTo('#right-side')
				.attr('style','padding:10px; margin-top:9px;');
			// 글쓰기
			$(createButton({id:'',clazz:'btn btn-primary',val:'글쓰기'}))
				.appendTo('#btn-write')
				.attr('type','button')
				.attr('style','float:right')
				.on('click',()=>{
					var ub=JSON.parse(sessionStorage.getItem('user'));
					if(ub!=null){
						articleWriting();
					}else{
							alert('로그인 해주세요');
							$.getScript($.javascript()+'/user.js',()=>{
								user.member.login({context:context,view:view});
							})
					}
				});
			
			$(createDiv({id:'div-articles',clazz:'col-sm-12'}))
				.appendTo('#new-right-side');
				articles(1);
		});
		};
	var searchList=x=>{
			$.getScript(view,()=>{
				$.ajax({
					url : context+'/searchArticle/'+x.select+'/'+x.x,
					data:JSON.stringify({
						type : x.select,
						data : x.data
					}),
					dataType:'JSON',
					contentType:'application/json',
					method : 'POST',
					success:d =>{

						if(d.list==""){
							alert('검색결과가 없습니다.');
							bulletin.jau.articles(1);
						}
						// 검색결과
						$('#div-articles')
							.attr('style','padding:0px;');
						$('#div-articles')
							.html($(createTab({id:'tab-articles1',clazz:''}))
							.attr('style','width:100%;font-size:15px; border-top: 5px solid #adcfdf;border-bottom: 5px solid #adcfdf;'));
						$(createTHJW({id:'th-articles1',thList: ''}))
							.appendTo('#tab-articles1')
							.attr('style','border-top: 2px solid #adcfdf; ');
						$(createTRJW({list : d.list, clazz : ''}))
							.appendTo('#tab-articles1')
							.attr('style', 'text-align: center;height: 60px; border-bottom:1px dotted;');
						$('._0').attr('class','col-sm-1');				
						$('._1').attr('style','text-align:left;').attr('class','col-sm-7');
						$('._2').attr('class','col-sm-1');
						$('._3').attr('class','col-sm-1');
						$('._4').attr('class','col-sm-2');	

						for(var i=0; i<=d.page.pageSize;i++){
							$('#a_'+i+'_1').attr('style','cursor:pointer').attr('onClick','bulletin.jau.articleDetail('+($('#td_'+i+'_0').text())+')')					
						}
								
						// pagenation
						$(createDiv({id:'div-page1',clazz:''}))
							.appendTo('#div-articles')
							.attr('style','margin :60px auto; font-size:14px;text-align:center; ');		
						$(createUL({id:'ul-page1',clazz:'pagination'}))
							.appendTo('#div-page1');
						var t = '';
						if(d.page.preBlock){
							$(createLI({id:'li-pre-page1',clazz:''}))
								.appendTo('#ul-page1');
							$(createATag({id:'a-pre-page1',val:''}))
								.appendTo('#li-pre-page1')
								.attr('onClick','bulletin.jau.searchList('+(d.page.prev)+'); return false;');									
							$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-left',val:''}))
								.appendTo('#a-pre-page1');
						}
						for(var i=d.page.pageStart; i<=d.page.pageEnd; i++){

							if(i==d.page.pageNum){
								$(createLI({id:'li-page1-'+i,clazz:'active'}))
									.appendTo('#ul-page1');
								$(createATag({id:'a-pageNum1',val:i}))
									.appendTo('#li-page1-'+i);
								
							}else{
								$(createLI({id:'li-page1-'+i,clazz:''}))
								 	.appendTo('#ul-page1');
								$(createATag({id:'a-else-pageNum1',val:i}))
									.appendTo('#li-page1-'+i)			
								.on('click',function(){
									bulletin.jau.searchList({select:x.select,x:parseInt($(this).text()),data:x.data});	
								});
							}
						}
						if(d.page.nextBlock){
							$(createLI({id:'li-next-page1',clazz:''}))
								.appendTo('#ul-page1');
							$(createATag({id:'a-next-page1',val:''}))
								.appendTo('#li-next-page1')
								.attr('onClick','bulletin.jau.searchList('+(d.page.next)+'); return false;');		
							$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-right',val:''}))
								.appendTo('#a-next-page1');
						};		
					},
					error : function(x,s,m){}
				});	
			});
		};

	var postList=x=>{
		$.getScript(x.view, ()=>{	
			
			$('#div-articles')
				.attr('style','padding:0px;');
			$('#div-articles')
				.html($(createTab({id:'tab-articles',clazz:''}))
				.attr('style','width:100%;font-size:15px; border-top: 5px solid #adcfdf;border-bottom: 5px solid #adcfdf;'));
			$(createTHJW({id:'th-articles',thList: ''}))
				.appendTo('#tab-articles')
				.attr('style','border-top: 2px solid #adcfdf;');
			$(createTRJW({list : x.d.list,clazz : ''}))
				.appendTo('#tab-articles')
				.attr('style', 'text-align: center;height: 60px;border-bottom:1px dotted; ');
			$('._0').attr('class','col-sm-1');
			$('._1').attr('style','text-align:left;').attr('class','col-sm-7');
			$('._2').attr('class','col-sm-1');
			$('._3').attr('class','col-sm-1');
			$('._4').attr('class','col-sm-2');	
			// 상세게시글
			for(var i=0; i<=x.d.page.pageSize;i++){
				$('#a_'+i+'_1').attr('style','cursor:pointer').attr('onClick','bulletin.jau.articleDetail('+($('#td_'+i+'_0').text())+')')					
			}				
			$(createDiv({id:'lat',clazz:'col-sm-1'}))
				.appendTo('#div-articles');		
			// pagenation
			$(createDiv({id:'div-page',clazz:''}))
				.appendTo('#div-articles')
				.attr('style',' margin :60px auto; font-size:14px;text-align:center; ');		
			$(createUL({id:'ul-page',clazz:'pagination'}))
				.appendTo('#div-page');
			if(x.d.page.preBlock){
				$(createLI({id:'li-pre-page',clazz:''}))
					.appendTo('#ul-page');
				$(createATag({id:'a-pre-page',val:''}))
					.appendTo('#li-pre-page')
					.attr('onClick','bulletin.jau.articles('+(x.d.page.prev)+'); return false;');									
				$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-left',val:''}))
					.appendTo('#a-pre-page');
			}
			for(var i=x.d.page.pageStart; i<=x.d.page.pageEnd; i++){

				if(i==x.d.page.pageNum){
					$(createLI({id:'li-page-'+i,clazz:'active'}))
						.appendTo('#ul-page');
					$(createATag({id:'a-pageNum',val:i}))
						.appendTo('#li-page-'+i);

				}else{
					$(createLI({id:'li-page-'+i,clazz:''}))
						.appendTo('#ul-page');
					$(createATag({id:'a-else-pageNum',val:i}))
						.appendTo('#li-page-'+i)			
						.attr('onClick','bulletin.jau.articles('+i+'); return false;');
				}
			}
			if(x.d.page.nextBlock){
				$(createLI({id:'li-next-page',clazz:''}))
					.appendTo('#ul-page');
				$(createATag({id:'a-next-page',val:''}))
					.appendTo('#li-next-page')
					.attr('onClick','bulletin.jau.articles('+(x.d.page.next)+'); return false;');		
				$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-right',val:''}))
					.appendTo('#a-next-page');
			};
		});


	}
	var articles=x=>{
		$.getJSON(context+'/articles/'+x, d=>{
			postList({d:d,x:x,view:view});
					});
	};
	var articleWriting=x=>{
		// 글쓰기
		$.getScript(view, ()=>{
			$('#right-side')
				.html($(createDiv({id:'articleW-right-side',clazz:'col-sm-12'})))
				.attr('style','weight:100%;');
			$(createDiv({id:'articleW-right-header',clazz:''}))
				.appendTo('#articleW-right-side').attr('style','padding:20px;')
			$(createHTag({size:'4',val:'자유게시판  |  '}))
				.appendTo('#articleW-right-header')
				.attr('style','padding:10px;')
				.attr('style','float:left; padding-left: 5px;');
			$(createSpanJW({id:'',clazz:'',val:'자유로운 소식을 전해주세요.'}))
				.appendTo('#articleW-right-header')
				.attr('style','float:left; padding:10px;');
			$('#div-articles')
				.html($(createForm({id:'articleW-right-form',clazz:''})))
				.attr('style',' font-size: 14px; ');;
			// formtag 시작
			$(createDiv({id:'articleW-right-select',clazz:''}))
				.appendTo('#articleW-right-form')
				.attr('style','float:left; height:22px; margin-right:10px; padding: 14px;padding-left: 7px; min-height: 60px; font: inherit;');
			// select option / input
			$(createSelect('articleW-right-SO'))
				.appendTo('#articleW-right-select')
				.attr('style','height:30px;')
				.attr('class','col-sm-3');
			$(createOption({val:'jaW',txt:'자유게시판'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'jakW',txt:'작가노하우'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'dokW',txt:'독서토론'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'#',txt:'문의하기'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'#',txt:'공지사항'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'#',txt:'가이드'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'#',txt:'후기 인증'}))
				.appendTo('#articleW-right-SO');
			$(createOption({val:'#',txt:'자주 묻는 질문'}))
				.appendTo('#articleW-right-SO');
			$(createInput({id:'input-jau-W',clazz:'',type:'text'}))
				.attr('placeholder','제목을 입력하세요.')
				.attr('class','col-sm-3')
				.attr('style','width:400px; margin-left :10px; height:30px;')
				.appendTo('#articleW-right-select');
			$(createDiv({id:'file-upload-type',clazz:''}))
				.appendTo('#articleW-right-form');
		/*	$(createInput({id:'input-fileUp',clazz:'',type:'file'}))
				.appendTo('#file-upload-type')
				.attr('style','padding:10px; border:1px solid red;')
				.attr('name','file')*/
			$(createDiv({id:'div-input-content',clazz:''}))
				.appendTo('#articleW-right-form');
			$(textarea({id:'jw-text'}))
				.attr('class','form-control')
				.attr('style','resize: vertical;height:300px;')
				.appendTo('#div-input-content');
			$(createDiv({id:'articles-button',clazz:'col-sm-12'}))
				.appendTo('#articleW-right-form')
				.attr('style','padding:10px;')
			$(createButton({id:'',clazz:'btn',val:'목록'}))
				.appendTo('#articles-button')
				.attr('style','float:left; width:80px; height:30px; background-color:white; border:1px solid gray ')
				.on('click',()=>{
					bulletin.jau.onCreate();
				});
			$(createButton({id:'',clazz:'btn-danger',val:'등록하기'}))
				.appendTo('#articles-button')
				.attr('style','float:right;width:80px; height:30px; ')
				.on('click',e=>{
					
					e.preventDefault();
					var ub=JSON.parse(sessionStorage.getItem('user'));
					alert('클릭은먹음');
					$.ajax({
						url:context+'/articleW',
						data:JSON.stringify({
							select : $('#articleW-right-SO').val(),
							title :$('#input-jau-W').val(),
							contents : $('#jw-text').val(),
							id : ub.memID
						}),
						dataType:'JSON',
						contentType:'application/json',
						method:'POST',
						success : x =>{
							alert('성공');
							bulletin.jau.community();
						},
						error : ()=>{
							alert('실패');
						}										
					});
				});
			});
	};
	var articleDetail =x=>{
		// 상세게시판
		$.getJSON(context+'/articleDetail/'+x, d=>{
			$.getScript(view,()=>{
				$('#right-side')
					.html($(createDiv({id:'articleDetail-main',clazz:''})))
					.attr('style','padding:10px; margin-bottom: 30px; ');
				$(createDiv({id:'articleDetail-title',clazz:'col-sm-3'}))
					.appendTo('#articleDetail-main')
					.attr('style','padding:10px;');
				$(createHTag({size:'4',val:'자유게시판'}))
					.appendTo('#articleDetail-title')
					.attr('style','border-left:5px solid #10b5cf; font-size:24px; padding-left:10px;');
				$(createDiv({id:'',clazz:'col-sm-7'}))
					.appendTo('#articleDetail-main')
				$(createDiv({id:'articleDetail-list',clazz:'col-sm-2'}))
					.appendTo('#articleDetail-main')
					.attr('style','padding:10px; margin-top:9px;');
				$(createButton({id:'',clazz:'btn btn-primary',val:'목록'}))
					.appendTo('#articleDetail-list')
					.attr('type','button').attr('style','float:right')
					.on('click',()=>{
						bulletin.jau.onCreate();	
					});				
				$('#div-articles')
					.html($(createDiv({id:'detail-post-title',clazz:''})))
					.attr('style','inline-height:100%; padding:0px; border-top: 5px solid #adcfdf;');
				$(createDiv({id:'detail-post-title-head',clazz:''}))
					.attr('style','  height:50px;border-bottom: 1px dotted #c6c6c6;margin-top:15px; ')
					.appendTo('#detail-post-title');
				$(createDiv({id:'detail-post-title-subhead',clazz:''})).appendTo('#detail-post-title');
				
				var ub=JSON.parse(sessionStorage.getItem('user'));
				
				if(ub!=null &&ub.memID==d.o.memID){
					
					$(createDiv({id:'inner-div',clazz:'col-sm-12'})).appendTo('#detail-post-title-subhead')
					$(createDiv({id:'inner-div-btnF',clazz:''})).appendTo('#inner-div')
					$(createButton({id:'inner-div-firstbtn',clazz:'btn',val:'삭제'})).appendTo('#inner-div-btnF')
					.attr('style','float:right; color:red; background-color:teal; margin-left:5px;')
					.on('click',()=>{
						$.ajax({
							url:context+'/deleteArticle/'+x,
							dataType:'json',
							contentType:'application/json',
							success:x=>{
								alert('삭제되었습니다.');
								bulletin.jau.onCreate();
							}
						})
						
					});
					$(createButton({id:'inner-div-secondbtn',clazz:'btn',val:'수정'}))
						.appendTo('#inner-div-btnF')
						.attr('style','float:right; color:brown; background-color:antiquewhite;')
						.on('click',()=>{					
							$('#div-articles')
							.html($(createDiv({id:'detail-post-title2',clazz:''})))
								.attr('style',' inline-height:100%; padding:0px; border-top: 5px solid #adcfdf;');
							$(createDiv({id:'detail-post-title-head2',clazz:''}))
								.attr('style','  height:50px;border-bottom: 1px dotted #c6c6c6;margin-top:15px; ')
								.appendTo('#detail-post-title2');
							$(createDiv({id:'detail-post-title-subhead2',clazz:''}))
								.appendTo('#detail-post-title2');
							$(createDiv({id:'detail-post-title-a2',clazz:'col-sm-7'}))
								.appendTo('#detail-post-title-head2');
							$(createInput({id:'title',clazz:'',type:'text'}))
								.attr('value',d.o.title)
								.appendTo('#detail-post-title-a2')
								.attr('style','color:#10b5cf; font-size:20px;');
							$(createDiv({id:'detail-post-title-b2',clazz:'col-sm-2'}))
								.appendTo('#detail-post-title-head2')
								.attr('style','margin-top:5px; color:#10b5cf');
							$(createSpanJW({id:'',clazz:'',val:d.o.memID}))
								.appendTo('#detail-post-title-b2')
								.attr('style','font-size:20px');
							$(createDiv({id:'detail-post-title-c2',clazz:'col-sm-3'}))
								.appendTo('#detail-post-title-head2')
								.attr('style','margin-top:5px; color:#10b5cf');
							$(createSpanJW({id:'',clazz:'',val:d.o.createDate}))
								.appendTo('#detail-post-title-c2')
								.attr('style','font-size:20px;');
							$(createDiv({id:'detail-post-content2',clazz:'col-sm-12'}))
								.appendTo('#detail-post-title2')
								.attr('style','padding:20px;');
							$(createInput({id:'content',clazz:'',type:'text'}))
								.attr('value',d.o.contents)
								.appendTo('#detail-post-content2')
								.attr('style','font-size:20px; overflow:hidden; word-bread:bread-word; width:100%; height:300px;');
							$(createButton({id:'',clazz:'btn',val:'수정하기'}))
							.appendTo('#detail-post-content2')
							.attr('style','float:right; background-color : aqua')
							.on('click',function(){	
								$.ajax({
									url:context+'/updateBoard/'+x,
									data:JSON.stringify({
										title :$('#title').val(),
										contents : $('#content').val(),
									}),
									method : 'POST',
									dataType:'json',
									contentType:'application/json',
									success:x=>{
										bulletin.jau.onCreate();
										}
									})
								});
								});
				
								}else{
									$('#inner-div').remove();
								}	
								$(createDiv({id:'detail-post-title-a',clazz:'col-sm-7'}))
									.appendTo('#detail-post-title-head');
								$(createHTag({size:'4',val:d.o.title}))
									.appendTo('#detail-post-title-a')
									.attr('style','color:#10b5cf;font-size:20px;');
								$(createDiv({id:'detail-post-title-b',clazz:'col-sm-2'}))
									.appendTo('#detail-post-title-head')
									.attr('style','margin-top:5px; color:#10b5cf');
								$(createSpanJW({id:'',clazz:'',val:d.o.memID}))
									.appendTo('#detail-post-title-b')
									.attr('style','font-size:20px');
								$(createDiv({id:'detail-post-title-c',clazz:'col-sm-3'}))
									.appendTo('#detail-post-title-head')
									.attr('style','margin-top:5px; color:#10b5cf');
								$(createSpanJW({id:'',clazz:'',val:d.o.createDate}))
									.appendTo('#detail-post-title-c')
									.attr('style','font-size:20px;');
								$(createDiv({id:'detail-post-content',clazz:'col-sm-12'}))
									.appendTo('#detail-post-title')
									.attr('style','padding:20px; ');
								$(createP({val:d.o.contents}))
									.appendTo('#detail-post-content')
									.attr('style','font-size:20px; overflow:hidden; word-bread:bread-word;');
							
								
								
								// 댓글구현
							
								$(createDiv({id:'div-comment',clazz:''}))
									.appendTo('#div-articles');
								$(createDiv({id:'div-comment-a',clazz:''}))
									.appendTo('#div-comment')
									.attr('style','border-bottom: 1px dotted #c6c6c6; margin-top:30px; margin-bottom:30px; padding : 5px;');
								$(createHTag({size:'5',val:'댓글('+d.count+')'}))
									.appendTo('#div-comment-a');
								$('#div-aa').remove();
								$(createDiv({id:'div-aa',clazz:''}))
								.appendTo('#div-comment')
								.attr('style',' overflow-x: hidden;overflow-y: scroll; height:300px; border-bottom:2px solid #efefef');
								$.each(d.Clist,(i,j)=>{	
								if(d.o.board_id==d.Clist.board_id){						
									$(createDiv({id:'div-aa-'+i,clazz:''}))
									.appendTo('#div-aa')
									.attr('style','height:70px; border-bottom:1px solid #efefef; margin-bottom:30px; position:relative; top:20px;')
									.attr('class','');
									$(createImage({id:'',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqeFAYIE3hTj9Gs1j3v7o-oBadM5uDkuPBuXMPtXS85LufL7UVA'}))
									.appendTo('#div-aa-'+i)
									.attr('style','height:50px;width:50px;');
									$(createP({val:j.mem_id}))
									.attr('style','width:30px; position:relative; bottom:67px; left:70px; font-weight:bold;')
									.appendTo('#div-aa-'+i);
									$(createP({val:j.comment_date}))
									.attr('style','position:relative; bottom:95px; left:120px; font-size:13px;')
									.appendTo('#div-aa-'+i);
									$(createP({val:j.comment_content}))
									.attr('style','font-size:13px;position:relative; bottom:100px; left:70px;')
									.appendTo('#div-aa-'+i);
									
									if(ub!=null &&ub.memID==j.mem_id){
										$(createButton({id:'',clazz:'',val:'삭제'}))
										.appendTo('#div-aa-'+i)
										.attr('style','position:relative;bottom:140px;left:650px;')
										.on('click',()=>{
											$.ajax({
												url:context+'/deleteComment/'+j.c_seq,
												dataType:'json',
												method:'POST',
												contentType:'application/json',
												success : z =>{
													alert('성공적으로 댓글이 삭제되었습니다.');												
													articleDetail(x);
												}
											})
										});
									}
									}
								})
					
									
								
								$(createForm({id:'form-comment',clazz:''}))
									.appendTo('#div-comment')
									.attr('style','margin-top:30px;');
								$(createImage({id:'img-comment',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqeFAYIE3hTj9Gs1j3v7o-oBadM5uDkuPBuXMPtXS85LufL7UVA',clazz:'col-sm-2'}))
									.appendTo('#form-comment');
								$(textarea({id:'text-comment'}))
									.appendTo('#form-comment')
									.attr('class','col-sm-10')
									.attr('style','overflow-y:auto; display:block;resize:none;margin-bottom:10px;height:200px;width:598px;');
								$(createButton({id:'button-comment',clazz:'btn btn-danger',val:'등록하기'}))
								.appendTo('#form-comment')
								.attr('style','margin-left:123px;')
								.on('click',function(){	
									if(ub!=null){
									$.ajax({
										url:context+'/articleComment/'+x,
										data:JSON.stringify({						
											comment : $('#text-comment').val(),
											id : ub.memID
										}),
										method:'POST',
										dataType:'json',
										contentType:'application/json',
										success: y =>{
											alert('성공');
											articleDetail(x);
										
										},
									});
									}else{
										alert('회원만 입력가능합니다.');
										$.getScript($.javascript()+'/user.js',()=>{
											user.member.login({context:context,view:view});
										});
									};
								});		
								
							});					
						});		
					};
				
	var jakga=x=>{
		
		$.getJSON(context+'/DetailMore', d=>{
			
			var listNum = 0;
			var commentNum =0;
			$.getScript(view,()=>{
				$('#div-articles')
					.html($(createDiv({id:'infinity-articles',clazz:''})))
					.attr('style','inline-height:100%; padding:0px;')
					.appendTo('#new-right-side');
	var printlist=()=>{
					$.each(d.Dlist.slice(listNum,listNum+5),(i,j)=>{
						$(createDiv({id:'infinity-articles-sector-'+listNum+i,clazz:''}))
							.appendTo('#infinity-articles')
							.attr('style','padding-bottom:20px;  border-top: 5px solid #adcfdf; margin-bottom:30px;');					
						$(createDiv({id:'infinity-head-'+listNum+i,clazz:'col-sm-12'}))
							.attr('style','height:50px;border-bottom: 1px dotted #c6c6c6;margin-top:15px; ')
							.appendTo('#infinity-articles-sector-'+listNum+i);	
						$(createDiv({id:'infinity-seq-'+listNum+i,clazz:'col-sm-1'}))
						.attr('style','float:left')
						.appendTo('#infinity-head-'+listNum+i);
						$(createHTag({size:'5',val:'No.'+j.bID})).attr('value',j.bID).attr('class','bsid')
						.appendTo('#infinity-seq-'+listNum+i)				
						.attr('style','color:#ea0a0a');
						$(createDiv({id:'infinity-post-title-a-'+listNum+i,clazz:'col-sm-6'}))
							.appendTo('#infinity-head-'+listNum+i);	
						$(createHTag({size:'4',val:j.title}))
							.appendTo('#infinity-post-title-a-'+listNum+i)
							.attr('style','color:#10b5cf');
						$(createDiv({id:'infinity-post-title-b-'+listNum+i,clazz:'col-sm-2'}))
							.appendTo('#infinity-head-'+listNum+i)
							.attr('style','margin-top:5px; color:#10b5cf');
						$(createSpanJW({id:'',clazz:'',val:j.memID}))
							.appendTo('#infinity-post-title-b-'+listNum+i)
							.attr('style','font-size:20px');
						$(createDiv({id:'infinity-post-title-c-'+listNum+i,clazz:'col-sm-3'}))
							.appendTo('#infinity-head-'+listNum+i)
							.attr('style','margin-top:5px; color:#10b5cf');
						$(createSpanJW({id:'',clazz:'',val:j.createDate}))
							.appendTo('#infinity-post-title-c-'+listNum+i)
							.attr('style','font-size:20px;');
						$(createDiv({id:'infinity-post-content-'+listNum+i,clazz:'col-sm-12'}))
							.appendTo('#infinity-articles-sector-'+listNum+i)
							.attr('style','padding:20px; ');
						$(createP({val:j.contents}))
							.appendTo('#infinity-post-content-'+listNum+i)
							.attr('style','font-size:20px; overflow:hidden; word-bread:bread-word;');
						
		
						// 댓글구현
						// 보드의 pk 를 가져왔다.
						
			$.getJSON(context+'/CommentMore/'+j.bID, t=>{	
						$(createDiv({id:'infinity-comment-'+listNum+i,clazz:''}))
						.appendTo('#infinity-articles-sector-'+listNum+i);
						$(createDiv({id:'infinity-comment-a-'+listNum+i,clazz:''}))
						.appendTo('#infinity-comment-'+listNum+i)
						.attr('style',' margin-top:30px; margin-bottom:30px; padding : 5px; ');
						$(createHTag({size:'5',val:'댓글('+t.count+')'}))
						.appendTo('#infinity-comment-'+listNum+i)
						.attr('style','border-bottom:1px solid bisque');
						$('#div-i-'+listNum+i).remove();
						$(createDiv({id:'div-i-'+listNum+i,clazz:''}))
						.appendTo('#infinity-comment-'+listNum+i)
						.attr('style',' overflow-x: hidden;overflow-y: scroll; height:100px; border-bottom:2px solid #efefef');
						var ub=JSON.parse(sessionStorage.getItem('user'));
						
						$.each(t.DComment,(q,w)=>{
							$(createDiv({id:'div-dc-'+i+commentNum+q,clazz:''}))
							.appendTo('#div-i-'+listNum+i)
							.attr('style','height:70px;')
							$(createImage({id:'',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqeFAYIE3hTj9Gs1j3v7o-oBadM5uDkuPBuXMPtXS85LufL7UVA'}))
							.appendTo('#div-dc-'+i+commentNum+q)
							.attr('style','height:50px;width:50px;');;
							$(createP({val:w.memID}))
							.appendTo('#div-dc-'+i+commentNum+q)
							.attr('style','position:relative; bottom:50px; left:60px; font-weight:bold;');
							$(createP({val:w.commentDate}))
							.appendTo('#div-dc-'+i+commentNum+q)
							.attr('style','position:relative; bottom:80px; left:100px; font-size:13px;');;
							$(createP({val:w.comment}))
							.appendTo('#div-dc-'+i+commentNum+q)
							.attr('style','position:relative; bottom:80px; left:70px;');
							if(ub!=null &&ub.memID==w.memID){
								$(createButton({id:'',clazz:'',val:'삭제'}))
								.appendTo('#div-dc-'+i+commentNum+q)
								.attr('style','position:relative;bottom:140px;left:650px;')
								.on('click',()=>{
									console.log(w,"222");
									$.ajax({
										url:context+'/deleteComment/'+w.CID,
										dataType:'json',
										method:'POST',
										contentType:'application/json',
										success : z =>{										
											alert('성공적으로 댓글이 삭제되었습니다.');
											jakga(x);
										}
									})
								});
							}
						});		
					
						$(createForm({id:'infinity-form-comment-'+listNum+i,clazz:''}))
							.appendTo('#infinity-comment-'+listNum+i);
						$(createImage({id:'infinity-img-comment-'+listNum+i
							,src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqeFAYIE3hTj9Gs1j3v7o-oBadM5uDkuPBuXMPtXS85LufL7UVA'
							,clazz:'col-sm-2'}))
							.appendTo('#infinity-form-comment-'+listNum+i);
						$(textarea({id:'infinity-text-comment-'+listNum+i}))
							.appendTo('#infinity-form-comment-'+listNum+i)
							.attr('class','col-sm-10')
							.attr('style','overflow-y:auto; display:block;resize:none;margin-bottom:10px;height:200px;width:598px;');
						$(createButton({id:'infinity-button-comment-'+listNum+i,clazz:'btn btn-danger',val:'등록하기'}))
							.appendTo('#infinity-form-comment-'+listNum+i)
							.attr('style','margin-left:123px;')	
							.on('click',function(e){	
								e.preventDefault();
								var ub=JSON.parse(sessionStorage.getItem('user'));
								if(ub!=null){
								$.ajax({
									url:context+'/DetailCommentInsert/'+j.bID,
									data:JSON.stringify({						
										comment : $('#infinity-text-comment-'+listNum+i).val(),
										id : ub.memID
									}),
									method:'POST',
									dataType:'json',
									contentType:'application/json',
									success: y =>{
										console.log(j,"zzz");
										console.log(x,"xxx");
										console.log(j.BID,"cidcid");
										alert('성공');
										jakga(x);

									},
								});
								}else{
									alert('회원만 입력가능합니다.');
									$.getScript($.javascript()+'/user.js',()=>{
										user.member.login({context:context,view:view});
									});
								};
							});	
						});		
				});
				}
						printlist();
						$('#up-btn-div').remove();
						$(createDiv({id:'up-btn-div',clazz:''}))
							.appendTo('#new-right-side')
							.attr('style','height:50px;')
						$(createButton({id:'up-btn',clazz:'btn glyphicon glyphicon-chevron-up',val:''}))
							.appendTo('#up-btn-div')
							.attr('style','float:right;width:80px; background-color:darkgray; color:red;')
							.on('click',()=>{					
								$('html').stop().animate({scrollTop: 0}, 200);
							});								
						$(createDiv({id:'infinity-btn-div',clazz:''}))
							.appendTo('#div-articles')
							.attr('style','height:50px;')
						$(createButton({id:'infinity-button',clazz:'btn glyphicon glyphicon-triangle-bottom',val:''}))
							.appendTo('#infinity-btn-div')
							.attr('style','margin-left:350px; width:100px; background-color:crimson;color:aliceblue')
							.on('click',()=>{
								listNum+=5;
								commentNum+=5;
								if(listNum+5>=d.Dlist.length){
									$('#infinity-button').hide();
								};
								printlist();				
							});					
					});
			});
	};
		return{onCreate:onCreate,articles:articles,articleWriting:articleWriting,articleDetail:articleDetail,searchList:searchList,community:community,jakga:jakga};
})();