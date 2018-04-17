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
			$('#div-body').html($(createDiv({id:'jw-div',clazz:'container'})).attr('style','border:1px solid gray;padding:0px; '));
			
			$(createDiv({id:'row-div',clazz:''})).appendTo('#jw-div')
			.attr('style',' border:1px solid red; ');
		/*
		 * $(createDiv({id:'image-div',clazz:'row'})).appendTo('#jw-div').attr('style','padding:
		 * 30px; margin:0 auto;');
		 */
			// notice
			$(createDiv({id:'',clazz:'col-sm-1'})).appendTo('#row-div').attr('style','height: 200px; border:2px solid blue;padding: 1px');
			$(createDiv({id:'col-1',clazz:'col-sm-2'})).appendTo('#row-div').attr('style','border:2px solid blue; padding: 1px');
			$(createImage({id:'notice-img',src:'https://files.slack.com/files-pri/T8NV14PJB-FA47Q1KAA/image.png',clazz:''})).appendTo('#col-1')
				 .attr('style','height: 200px; max-width:100%;')
			// qna
			$(createDiv({id:'col-2',clazz:'col-sm-2'})).appendTo('#row-div').attr('style','border:2px solid blue; padding: 1px');
			$(createImage({id:'qna-img',src:'https://files.slack.com/files-pri/T8NV14PJB-FA34CAZCL/image.png',clazz:''})).appendTo('#col-2')
			.attr('style','height: 200px; max-width:100%;')
			// help
			$(createDiv({id:'col-3',clazz:'col-sm-2'})).appendTo('#row-div').attr('style','border:2px solid blue;padding: 1px');
			$(createImage({id:'help-img',src:'https://files.slack.com/files-pri/T8NV14PJB-FA3B5HH0S/image.png',clazz:''})).appendTo('#col-3')
			.attr('style','height: 200px; max-width:100%;')
			// review
			$(createDiv({id:'col-4',clazz:'col-sm-2'})).appendTo('#row-div').attr('style','border:2px solid blue;padding: 1px');
			$(createImage({id:'review-img',src:'https://files.slack.com/files-pri/T8NV14PJB-FA2L14LSU/image.png',clazz:''})).appendTo('#col-4')
			.attr('style','height: 200px; max-width:100%;')
			// board
			$(createDiv({id:'col-5',clazz:'col-sm-2'})).appendTo('#row-div').attr('style','border:2px solid blue;padding: 1px');
			$(createImage({id:'board-img',src:'https://bit.ly/2vkHU4L',clazz:'boo'})).appendTo('#col-5')
			.attr('style','height: 200px; max-width:100%;')
								   .hover(()=>{
									   $('.boo').attr('src','https://bit.ly/2qF90hc');
								   }, ()=>{
									   $('.boo').attr('src','https://bit.ly/2qF90hc');
								   })
								   .on('click',()=>{
										boards();
								});
			$(createDiv({id:'',clazz:'col-sm-1'})).appendTo('#row-div').attr('style','border:2px solid blue;');
		// Border Main Carousel
			$(createDiv({id:'myCarousel',clazz:'carousel slide'}))
			.attr('data-ride','carousel').appendTo('#div-body');
			$(createOL({id:'ol-data',clazz:'carousel-indicators'})).appendTo('#myCarousel');
			$(createLI({id:'1-li',clazz:'board-li active'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','0').appendTo('#ol-data');		
			$(createLI({id:'2-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','1').appendTo('#ol-data');
			$(createLI({id:'3-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','2').appendTo('#ol-data');
			$(createLI({id:'4-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','3').appendTo('#ol-data');
			$(createLI({id:'5-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','4').appendTo('#ol-data');
			$(createLI({id:'6-li',clazz:'board-li'}))
				.attr('data-target','#myCarousel')
				.attr('data-slide-to','5').appendTo('#ol-data');
			// list-box
			$(createDiv({id:'inner-box',clazz:'carousel-inner'}))
				.attr('role','listbox').appendTo('#myCarousel')
				.attr('style','margin-top:40px;');
			// 1 -box
			$(createDiv({id:'item-box',clazz:'item active'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://files.slack.com/files-pri/T8NV14PJB-F8X4J27ND/pasted_image_at_2018_01_24_03_32_pm.png'}))
				.attr('style','margin:0 auto;')
				.attr('style','width:100%; height:500px;').appendTo('#item-box');
			// 2 -box
			$(createDiv({id:'item2-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
				.attr('style','width:100%; height:500px;').appendTo('#item2-box');
			// 3-box
			$(createDiv({id:'item3-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
				.attr('style','width:100%; height:500px;').appendTo('#item3-box');
			// 4-box
			$(createDiv({id:'item4-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
				.attr('style','width:100%; height:500px;').appendTo('#item4-box');
			// 5- box
			$(createDiv({id:'item5-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
				.attr('style','width:100%; height:500px;').appendTo('#item5-box');
			// 6- box
			$(createDiv({id:'item6-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe' , clazz:''}))
				.attr('style','width:100%; height:500px;').appendTo('#item6-box');
			

		});
	};
	var boards=x=>{
		$.getScript(view,()=>{
			$('#myCarousel').remove();
			$('#borders-h').remove();
			$(createDiv({id:'borders-h',clazz:'container'})).attr('style','border:1px solid gray; padding:1px; margin-top:50px;').appendTo('#div-body');
			$(createDiv({id:'',clazz:'col-sm-1'})).appendTo('#borders-h');
			$(createDiv({id:'left-side',clazz:'col-sm-2'})).appendTo('#borders-h')
				.attr('style','float:left; border: 0px solid blue; padding:10px; ');
			$(createUL({id:'left-ul',clazz:''})).appendTo('#left-side')
				.attr('style','margin:0px; padding:0px; list-style:none; ');
			$(createLI({id:'1-left-li',clazz:''})).appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px;');
			$(createATag({id:'1-left-atag',val:'자유게시판'})).appendTo('#1-left-li')
				.attr('style','padding:10px 50px 10px 50px;')
				.on('click',()=>{
					bulletin.jau.onCreate();
				});
			$(createLI({id:'2-left-li',clazz:''})).appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px; ');;
			$(createATag({id:'2-left-atag',val:'작가노하우'})).appendTo('#2-left-li')
			.on('click',()=>{
				$('#right-side').html()
			});
			$(createLI({id:'3-left-li',clazz:''})).appendTo('#left-ul')
				.attr('style',' height: 60px; line-height: 60px; border: 1px solid green; text-align: center; margin-top: -1px;');;
			$(createATag({id:'3-left-atag',val:'독서토론'})).appendTo('#3-left-li');
		
			// 오른쪽 상세내용
			$(createDiv({id:'new-right-side',clazz:''})).appendTo('#borders-h');
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
			$('#new-right-side').html($(createDiv({id:'right-side',clazz:'col-sm-8'}))
			.attr('style',' border: 1px solid red;padding:10px; border:1px solid red; margin-bottom: 30px; '));
			$(createDiv({id:'board-all',clazz:''})).appendTo('#right-side');
			$(createDiv({id:'board-title',clazz:'col-sm-3'})).appendTo('#board-all');
			$(createHTag({size:'4',val:'자유게시판'})).appendTo('#board-title')
			.attr('style','border-left:5px solid #10b5cf; font-size:24px;');
			
			$(createDiv({id:'board-search',clazz:'col-sm-7'})).appendTo('#right-side');
			$(createForm({id:'search-form',clazz:'form-inline'})).appendTo('#board-search');
			$(createSelect({id:'select'})).appendTo('#search-form').attr('class','form-control');
			$(createOption({val:'title',txt:'제목'})).appendTo('#select').attr('select','selected');
			$(createOption({val:'titleContent',txt:'제목+내용'})).appendTo('#select');
			$(createOption({val:'content',txt:'내용'})).appendTo('#select');
			$(createInput({id:'',clazz:'form-control',type:'search'})).appendTo('#search-form').attr('placeholder','Search..');
			// 검색 엔진
			$(createButton({id:'',clazz:'btn btn-primary',val:'검색'})).appendTo('#search-form').attr('type','submit');
			$(createDiv({id:'btn-write',clazz:'col-sm-2'})).appendTo('#right-side');
			// 글쓰기
			$(createButton({id:'',clazz:'btn btn-primary',val:'글쓰기'})).appendTo('#btn-write').attr('type','button')
			.on('click',()=>{
				articleWriting();
			});
			$(createDiv({id:'',clazz:'col-sm-1'})).appendTo('#new-right-side').attr('style','border: 2px solid blue;');
			$(createDiv({id:'jw-page',clazz:''})).appendTo('#new-right-side');
			articles(1);
		});
		};
	var articles=x=>{
		$.getJSON(context+'/articles/'+x, d=>{
			$.getScript(view, ()=>{	
				
				$('#jw-page').html(createDiv({id:'div-articles',clazz:'col-sm-8'}))
					.attr('style','border :1px solid blue; padding:0px;');
				$(createTab({id:'tab-articles',clazz:''})).appendTo('#div-articles')
					.attr('style','width:100%;font-size:15px; border-top: 5px solid #adcfdf;border-bottom: 5px solid #adcfdf;');
				$(createTHJW({id:'th-articles',thList: ''})).appendTo('#tab-articles').attr('style','border-top: 2px solid #adcfdf;');
				$(createTRJW({list : d.list, clazz : ''})).appendTo('#tab-articles')
					.attr('style', 'text-align: center; border: 1px solid gray;height: 60px; ');
				$('._0').attr('class','col-sm-1');
				$('._1').attr('style','text-align:left;').attr('class','col-sm-7');
				$('._2').attr('class','col-sm-1');
				$('._3').attr('class','col-sm-1');
				$('._4').attr('class','col-sm-2');	
				
				for(var i=1; i<=d.page.pageSIze;i++){
					$('#td_'+i+'_0').attr('onClick','alert("'+$('#td_'+i+'_0').text()+'")')
					
				}
				
				$(createDiv({id:'lat',clazz:'col-sm-1'})).appendTo('#new-right-side');		
				// pagenation
				$(createDiv({id:'div-page',clazz:''})).appendTo('#div-articles')
				.attr('style','border: 2px solid red; margin :60px auto; font-size:14px; ');		
				$(createUL({id:'ul-page',clazz:'pagination'})).appendTo('#div-page');
				var t = '';
				if(d.page.preBlock){
					t+=$(createLI({id:'li-pre-page',clazz:''})).appendTo('#ul-page');
					t+=$(createATag({id:'a-pre-page',val:''})).appendTo('#li-pre-page')
					.attr('onClick','bulletin.jau.articles('+(d.page.prev)+'); return false;');									
					t+=$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-left',val:''})).appendTo('#a-pre-page');
				}
				for(var i=d.page.pageStart; i<=d.page.pageEnd; i++){

					if(i==d.page.pageNum){
						t+= $(createLI({id:'li-page-'+i,clazz:'active'})).appendTo('#ul-page');
						t+=$(createATag({id:'a-pageNum',val:i})).appendTo('#li-page-'+i);

					}else{
						t+= $(createLI({id:'li-page-'+i,clazz:''})).appendTo('#ul-page');
						t+=$(createATag({id:'a-else-pageNum',val:i})).appendTo('#li-page-'+i)			
						.attr('onClick','bulletin.jau.articles('+i+'); return false;');
					}
				}
				if(d.page.nextBlock){
					t+=$(createLI({id:'li-next-page',clazz:''})).appendTo('#ul-page');
					t+=$(createATag({id:'a-next-page',val:''})).appendTo('#li-next-page')
					.attr('onClick','bulletin.jau.articles('+(d.page.next)+'); return false;');		
					t+=$(createSpanJW({id:'',clazz:'glyphicon glyphicon-hand-right',val:''})).appendTo('#a-next-page');
				};
			});
		});
	};
	var articleWriting=x=>{
		// 글쓰기
		$.getScript(view, ()=>{
			$('#right-side').html($(createDiv({id:'articleW-right-side',clazz:'col-sm-12'})))
				.attr('style','border: 1px solid red;weight:100%;');
			$(createDiv({id:'articleW-right-header',clazz:''})).appendTo('#articleW-right-side').attr('style','padding:20px;')
			$(createHTag({size:'4',val:'자유게시판  |  '})).appendTo('#articleW-right-header')
			.attr('style','float:left; border-left:5px solid blueviolet;padding-left: 5px;');
			$(createSpanJW({id:'',clazz:'',val:'자유로운 소식을 전해주세요.'})).appendTo('#articleW-right-header')
				.attr('style','float:left; padding:10px;');
/*
 * $('#div-articles').html($(createDiv({id:'articleW-form-body',clazz:''})))
 * .attr('style',' font-size: 14px; border : 2px solid blue');
 */
			$('#div-articles').html($(createForm({id:'articleW-right-form',clazz:''})))
			.attr('style',' font-size: 14px; border : 2px solid blue');;
			// formtag 시작
			/* $(createForm({id:'articleW-right-form',clazz:''})).appendTo('#articleW-right-form'); */
			$(createDiv({id:'articleW-right-select',clazz:''})).appendTo('#articleW-right-form')
				.attr('style','float:left; height:22px; margin-right:10px; padding: 14px;padding-left: 7px; min-height: 60px; font: inherit; border:1px solid pink');
			// select option / input
			$(createSelect({id:'articleW-right-SO'})).appendTo('#articleW-right-select').attr('style','height:30px;');
			$(createOption({val:'',txt:'자유게시판'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'작가노하우'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'독서토론'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'문의하기'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'공지사항'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'가이드'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'후기 인증'})).appendTo('#articleW-right-SO');
			$(createOption({val:'',txt:'자주 묻는 질문'})).appendTo('#articleW-right-SO');
			$(createInput({id:'',clazz:'',type:'text'})).attr('placeholder','제목을 입력하세요.')
			.attr('style','width:400px; margin-left :10px; height:30px;').appendTo('#articleW-right-select');
			$(createDiv({id:'file-upload',clazz:''})).appendTo('#articleW-right-form')
			.attr('style','border : 1px solid green');
			$(createHTag({size:'4',val:'fileUpload'})).appendTo('#file-upload');
			$(createDiv({id:'div-input-content',clazz:''})).appendTo('#articleW-right-form');
			$(textarea({id:'jw-text'}))
			.attr('class','form-control')
			.attr('style','resize: vertical;height:300px;')
			.appendTo('#div-input-content');
			$(createDiv({id:'articles-button',clazz:''})).appendTo('#articleW-right-form').attr('style','margin-top:10px;')
			$(createButton({id:'',clazz:'btn',val:'목록'})).appendTo('#articles-button')
			.attr('style','float:left; width:50px; height:30px; background-color:white; border : 1px solid gray; text-align: center')
			.on('click',()=>{
				bulletin.jau.onCreate();
		
			});
			$(createButton({id:'',clazz:'btn-danger',val:'등록하기'})).appendTo('#articles-button')
			.attr('style','float:right;width:80px; height:30px; ')
			.on('click',()=>{
				
			});
			
			
			
		});
	};
		return{onCreate:onCreate,articles:articles,articleWriting:articleWriting};
})();
