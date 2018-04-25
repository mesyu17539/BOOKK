var book=book || {};
book.main={
			 setContentView:x=>{
					 book.main.bookNav(x);
					 book.main.bookContent(x);
				 },
			bookContent:x=>{		
				//DB 연결
				$.getJSON(x.context+'/bookMain', d=>{
				 $(createDiv({id : 'img-advertise',clazz : 'img-advertise'})).appendTo('#div-advertise');
				 $(createDiv({id : 'main-advertise',clazz : 'main-advertise'})).appendTo('#img-advertise').attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;');
				 $(createUL({id : 'wrap-main-advertise',clazz : ''})).appendTo('#main-advertise').attr('style','padding:0px; margin-top:0px;');
				 $(createLI({id : 'main-img-advertise',clazz : ''})).appendTo('#wrap-main-advertise');
				 $(createATag({id : 'main-img-advertise-1',clazz : '',val : ''})).appendTo('#main-img-advertise');
				 $(createImg({alt : '',src : 'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'})).appendTo('#main-img-advertise-1').attr('style','height: 450px; width:100%;')
				 .click(()=>{
					 alert('봄 클릭');
				 });
				 // 이미지 하단 버튼
				 $(createUL({id : 'main-img-btn-clearfix',clazz : ''})).attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;').appendTo('#main-advertise');
				 $(createLI({id : 'li-wrap-dots-1',clazz : ''})).appendTo('#main-img-btn-clearfix');
				 $(createATag({id : 'a-wrap-doat-1',val : ''})).appendTo('#li-wrap-dots-1');
				 $(createButton({id : 'btn-1',clazz : 'btn',val : '봄'})).appendTo('#a-wrap-doat-1')
				 .click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise',clazz : ''})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-1',clazz : '',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({alt : '',src : 'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'})).appendTo('#a-img-1').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('봄 클릭');
					 });
				 });
				 
				 $(createLI({id : 'li-wrap-dots-2',clazz : ''})).appendTo('#main-img-btn-clearfix');
				 $(createATag({id : 'a-wrap-doat-2',val : ''})).appendTo('#li-wrap-dots-2');
				 $(createButton({id : 'btn-2',clazz : 'btn',val : '여름'})).appendTo('#a-wrap-doat-2')
				 .click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise',clazz : 'slide-img'})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-2',clazz : '',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({alt : '',src : 'http://cafefiles.naver.net/20120815_51/wltn3743_1344961625040n8zgh_JPEG/32.jpeg'})).appendTo('#a-img-2').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('여름 클릭');
					 });
				 });
				 
				 $(createLI({id : 'li-wrap-dots-3',clazz : ''})).appendTo('#main-img-btn-clearfix');
				 $(createATag({id : 'a-wrap-doat-3',val : ''})).appendTo('#li-wrap-dots-3');
				 $(createButton({id : 'btn-3',clazz : 'btn',val : '가을'})).appendTo('#a-wrap-doat-3')
				 .click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise',clazz : ''})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-3',clazz : '',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({alt : '',src : 'http://cafefiles.naver.net/20141024_221/duran011_1414101447080RxsoJ_JPEG/PicSpeed%2B-2071079421.jpg'})).appendTo('#a-img-3').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('가을 클릭');
					 });
				 });
				 
				 $(createLI({id : 'li-wrap-dots-4',clazz : ''})).appendTo('#main-img-btn-clearfix');
				 $(createATag({id : 'a-wrap-doat-4',clazz : 'active',val : ''})).appendTo('#li-wrap-dots-4');
				 $(createButton({id : 'btn-4',clazz : 'btn',val : '겨울'})).appendTo('#a-wrap-doat-4')
				 .click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise',clazz : ''})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-4',clazz : '',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({alt : '',src : 'http://post.phinf.naver.net/MjAxNjEyMjhfMjUz/MDAxNDgyODkzMTQ5NTg3.huKPPgR7H7zTAqQGfv5cKJ_lfzHWBu6K-CDBVYGgE94g.GrchDz4KjXlABiHi_HUFDBYanYGJLXobf_iHr75HgZAg.JPEG/Iaj1bpuo8oXHpdZizTkVN7g_HF7E.jpg'})).appendTo('#a-img-4').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('겨울 클릭');
					 });
				 });
				 
				 $(createDiv({id : 'div-container-2',clazz : 'nav-container'})).appendTo('#div-advertise');
				 $(createDiv({id : 'div-section-ad',clazz : 'section-ad'})).appendTo('#div-container-2');
				 var temp = ['http://www.bookk.co.kr/img/banner/banner33.png','http://www.bookk.co.kr/img/banner/banner46.png','http://www.bookk.co.kr/img/banner/banner45.png'];
				 for(var i=0; i<3; i++){
					 $(createDiv({id:'div-ad-item-'+i+'',clazz:'ad-item ad-'+i+''})).appendTo('#div-section-ad');
					 $(createATag({id:'a-ad-item-'+i+'',val:''})).appendTo('#div-ad-item-'+i+'');
					 $(createImg({src:temp[i]})).appendTo('#a-ad-item-'+i+'');
				 }
				 //랭킹
				 $(createDiv({id : 'div-section-ranking',clazz : 'section-ranking'})).appendTo('#div-container-2');
				 $(createDiv({id : 'div-left-ranking',clazz : 'widget widget-ranking pull-left'})).appendTo('#div-section-ranking');
				 $(createDiv({id : 'div-left-ranking-header',clazz : 'widget-header'})).appendTo('#div-left-ranking');
				 $(createHTag({size : '3',clazz : 'widget-title',val : '이주의 책'})).appendTo('#div-left-ranking-header');
				 $(createDiv({id : 'div-left-ranking-content',clazz : 'widget-content tab-wrapper'})).appendTo('#div-left-ranking');
				 $(createUL({id : 'ul-left-ranking',clazz : 'nav nav-tabs-vertical',role : 'tablist'})).appendTo('#div-left-ranking-content');
				 var temp = ['종이책','전자책','무료책'];
				 for(var i=0;i<3;i++){
					 $(createLI({id:'li-left-ranking-'+i+'',clazz:'active'})).appendTo('#ul-left-ranking');
					 $(createATag({id:'a-left-ranking-'+i+'',val:temp[i]})).appendTo('#li-left-ranking-'+i+'');
				 }
				 $('#a-left-ranking-0').click(()=>{alert('종이책클릭!');});
				 $('#a-left-ranking-1').click(()=>{alert('전자책클릭!');});
				 $('#a-left-ranking-2').click(()=>{alert('무료책클릭!');});
				 
				 $(createDiv({id : 'div-right-ranking',clazz : 'widget widget-ranking pull-right'})).appendTo('#div-section-ranking');
				 $(createDiv({id : 'div-right-ranking-header',clazz : 'widget-header'})).appendTo('#div-right-ranking');
				 $(createHTag({size : '3',clazz : 'widget-title',val : '부크크 차트'})).appendTo('#div-right-ranking-header');
				 $(createDiv({id : 'div-right-ranking-content',clazz : 'widget-content tab-wrapper'})).appendTo('#div-right-ranking');
				 $(createUL({id : 'ul-right-ranking',clazz : 'nav nav-tabs-vertical'})).appendTo('#div-right-ranking-content');
				 var temp = ['주간','월간','신간'];
				 for(var i=0;i<3;i++){
					 $(createLI({id:'li-right-ranking-'+i+'',clazz:'active'})).appendTo('#ul-right-ranking');
					 $(createATag({id:'a-right-ranking-'+i+'',val:temp[i]})).appendTo('#li-right-ranking-'+i+'');
				 }
				 $('#a-right-ranking-0').click(()=>{alert('주간클릭!');});
				 $('#a-right-ranking-1').click(()=>{alert('월간클릭!');});
				 $('#a-right-ranking-2').click(()=>{alert('신간클릭!');});
				 
				 //시 에세이
				 $(createDiv({id:'div-section-category',clazz:'section-category'})).appendTo('#div-container-2');
				 $(createDiv({id:'div-section-category-1'})).appendTo('#div-section-category');
				 var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
				 for(var i= 0; i<6; i++){
					 $(createDiv({id:'div-book-header-'+i+'',clazz:'widget-header'})).appendTo('#div-section-category-1');
					 $(createHTag({size:'3',clazz:'widget-title',val:temp[i]})).appendTo('#div-book-header-'+i+'');
					 $(createATag({val:'더보기'})).appendTo('#div-book-header-'+i+'').attr('class','more');
					 $(createDiv({id:'div-category-list-'+i+'',clazz:'widget-content book-list clearfix'})).appendTo('#div-section-category-1');
					 $(createDiv({id:'div-book-item-'+i+'',clazz:'book-item'})).appendTo('#div-category-list-'+i+'');
					 $(createATag({id:'a-book-item-0-'+i+'',val:''})).appendTo('#div-book-item-0').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-0-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-0-'+i+'');
					 $(createImg({src:d.genreL[i].imageRoute})).appendTo('#div-book-cover-0-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-0-'+i+'');
					 $(createDivVal({id:'div-book-name-0-'+i+'',clazz:'book-title',val:d.genreL[i].bookName})).appendTo('#a-book-item-0-'+i+'');
					 $(createDivVal({id:'div-book-writter-0-'+i+'',clazz:'book-author',val:d.genreL[i].writter})).appendTo('#a-book-item-0-'+i+''); 
				 	}
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-1-'+i+'',val:''})).appendTo('#div-book-item-1').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-1-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-1-'+i+'');
					 $(createImg({src:d.genreL[i+6].imageRoute})).appendTo('#div-book-cover-1-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-1-'+i+'');
					 $(createDivVal({id:'div-book-name-1-'+i+'',clazz:'book-title',val:d.genreL[i+6].bookName})).appendTo('#a-book-item-1-'+i+'');
					 $(createDivVal({id:'div-book-writter-1-'+i+'',clazz:'book-author',val:d.genreL[i+6].writter})).appendTo('#a-book-item-1-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-2-'+i+'',val:''})).appendTo('#div-book-item-2').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-2-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-2-'+i+'');
					 $(createImg({src:d.genreL[i+12].imageRoute})).appendTo('#div-book-cover-2-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-2-'+i+'');
					 $(createDivVal({id:'div-book-name-2-'+i+'',clazz:'book-title',val:d.genreL[i+12].bookName})).appendTo('#a-book-item-2-'+i+'');
					 $(createDivVal({id:'div-book-writter-2-'+i+'',clazz:'book-author',val:d.genreL[i+12].writter})).appendTo('#a-book-item-2-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-3-'+i+'',val:''})).appendTo('#div-book-item-3').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-3-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-3-'+i+'');
					 $(createImg({src:d.genreL[i+18].imageRoute})).appendTo('#div-book-cover-3-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-3-'+i+'');
					 $(createDivVal({id:'div-book-name-3-'+i+'',clazz:'book-title',val:d.genreL[i+18].bookName})).appendTo('#a-book-item-3-'+i+'');
					 $(createDivVal({id:'div-book-writter-3-'+i+'',clazz:'book-author',val:d.genreL[i+18].writter})).appendTo('#a-book-item-3-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-4-'+i+'',val:''})).appendTo('#div-book-item-4').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-4-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-4-'+i+'');
					 $(createImg({src:d.genreL[i+24].imageRoute})).appendTo('#div-book-cover-4-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-4-'+i+'');
					 $(createDivVal({id:'div-book-name-4-'+i+'',clazz:'book-title',val:d.genreL[i+24].bookName})).appendTo('#a-book-item-4-'+i+'');
					 $(createDivVal({id:'div-book-writter-4-'+i+'',clazz:'book-author',val:d.genreL[i+24].writter})).appendTo('#a-book-item-4-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-5-'+i+'',val:''})).appendTo('#div-book-item-5').attr('class','a-book-cover');
					 $(createDiv({id:'div-book-cover-5-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-5-'+i+'');
					 $(createImg({src:d.genreL[i+30].imageRoute})).appendTo('#div-book-cover-5-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-5-'+i+'');
					 $(createDivVal({id:'div-book-name-5-'+i+'',clazz:'book-title',val:d.genreL[i+30].bookName})).appendTo('#a-book-item-5-'+i+'');
					 $(createDivVal({id:'div-book-writter-5-'+i+'',clazz:'book-author',val:d.genreL[i+30].writter})).appendTo('#a-book-item-5-'+i+''); 
				 }
				 $('#div-book-cover-0-0').click(()=>{alert('책 시퀀스값 : '+d.genreL[0].bookNum);});
				 $('#div-book-name-0-0').click(()=>{alert('책 이름 : '+d.genreL[0].bookName);});
				 $('#div-book-writter-0-0').click(()=>{alert('책 저자 : '+d.genreL[0].writter);});
				 $('#div-book-cover-0-1').click(()=>{alert('책 시퀀스값 : '+d.genreL[1].bookNum);});
				 $('#div-book-name-0-1').click(()=>{alert('책 이름 : '+d.genreL[1].bookName);});
				 $('#div-book-writter-0-1').click(()=>{alert('책 저자 : '+d.genreL[1].writter);});
				 $('#div-book-cover-0-2').click(()=>{alert('책 시퀀스값 : '+d.genreL[2].bookNum);});
				 $('#div-book-name-0-2').click(()=>{alert('책 이름 : '+d.genreL[2].bookName);});
				 $('#div-book-writter-0-2').click(()=>{alert('책 저자 : '+d.genreL[2].writter);});
				 $('#div-book-cover-0-3').click(()=>{alert('책 시퀀스값 : '+d.genreL[3].bookNum);});
				 $('#div-book-name-0-3').click(()=>{alert('책 이름 : '+d.genreL[3].bookName);});
				 $('#div-book-writter-0-3').click(()=>{alert('책 저자 : '+d.genreL[3].writter);});
				 $('#div-book-cover-0-4').click(()=>{alert('책 시퀀스값 : '+d.genreL[4].bookNum);});
				 $('#div-book-name-0-4').click(()=>{alert('책 이름 : '+d.genreL[4].bookName);});
				 $('#div-book-writter-0-4').click(()=>{alert('책 저자 : '+d.genreL[4].writter);});
				 $('#div-book-cover-0-5').click(()=>{alert('책 시퀀스값 : '+d.genreL[5].bookNum);});
				 $('#div-book-name-0-5').click(()=>{alert('책 이름 : '+d.genreL[5].bookName);});
				 $('#div-book-writter-0-5').click(()=>{alert('책 저자 : '+d.genreL[5].writter);});
				});
			},
				// 책 네비
			 bookNav:x=>{
				 $('#div-body').html(createDiv({id : 'bookk-store',clazz : ''}));
				 // 맨위 상단 카테고리 바
				 $(createDiv({id : 'category-bar',clazz : 'category-bar'})).appendTo('#bookk-store');
				 $(createDiv({id : 'category-bar-container',clazz : 'nav-container'})).appendTo('#category-bar');
				 // 전체분야
				 $(createDiv({id : 'store-gnb',clazz : 'store-gnb'})).appendTo('#category-bar-container');
				 $(createUL({id : 'store-gnb-all-menu',clazz : ''})).appendTo('#store-gnb');
				 $(createLI({id : 'all-menu',clazz : 'all-menu'})).appendTo('#store-gnb-all-menu');
				 $(createATag({id : 'a-all-menu',clazz : '',val : '전체분야'})).appendTo('#all-menu');
				 $(createSpan({id : 'genre-list',clazz : 'genre-list'})).appendTo('#a-all-menu');
				 $(createSpan({id : 'span-caret',clazz : 'caret'})).appendTo('#a-all-menu');
				 // 전체메뉴 마우스 올리면 나오는 DIV
				 $(createDiv({id : 'store-lnb-box',clazz : 'store-lnb'})).appendTo('#all-menu');
				 $(createUL({id : 'store-lnb',clazz : ''})).appendTo('#store-lnb-box');
				 $(createLI({id : 'active',clazz : 'active'})).appendTo('#store-lnb');
				 // 전체메뉴 시 에세이
				 var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타'];
				 for(var i=0;i<6;i++){
					 $(createATag({id:'large-category-'+i+'',val:temp[i]})).appendTo('#active');
				 }
				 $('#large-category-0').mouseover(()=>{
					 $('#active-0').remove();
					 $(createUL({id:'active-0'})).appendTo('#active');
					 var temp = ['시집','에세이','기타도서'];
					 for(var i=0;i<3;i++){
						 $(createLI({id : 'smallgenre-category-1-'+i+''})).appendTo('#active-0');
						 $(createATag({id :'ca-1-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-1-'+i+'');
					 }
					 $('#ca-1-0').click(()=>{
						 var g = {small:$('#ca-1-0').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-1-1').click(()=>{
						 var g = {small:$('#ca-1-1').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-1-2').click(()=>{
						 var g = {small:$('#ca-1-2').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
						 	});
					 });
				 });
				 
				 // 전체메뉴 소설
				 $('#large-category-1').mouseover(()=>{
					 $('#active-1').remove();
					 $(createUL({id : 'active-1'})).appendTo('#active');
					 var temp = ['일반','로맨스','판타지','BL','무협','추리/스릴러/미스터리','기타','SF소설'];
					 for(var i=0;i<8;i++){
						 $(createLI({id : 'smallgenre-category-2-'+i+''})).appendTo('#active-1');
						 $(createATag({id :'ca-2-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-2-'+i+'');
					 }
					 $('#ca-2-0').click(()=>{
						 var g = {small:$('#ca-2-0').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-1').click(()=>{
						 var g = {small:$('#ca-2-1').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-2').click(()=>{
						 var g = {small:$('#ca-2-2').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-3').click(()=>{
						 var g = {small:$('#ca-2-3').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-4').click(()=>{
						 var g = {small:$('#ca-2-4').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-5').click(()=>{
						 var g = {small:$('#ca-2-5').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-6').click(()=>{
						 var g = {small:$('#ca-2-6').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-7').click(()=>{
						 var g = {small:$('#ca-2-7').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallCount',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,large:g.large,count:d,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
				 });
				 $('#large-category-2').mouseover(()=>{
					 $('#active-2').remove();
					 $(createUL({id:'active-2'})).appendTo('#active');
					 var temp = ['자서전','기타'];
					 for(var i=0;i<2;i++){
						 $(createLI({id : 'smallgenre-category-3-'+i+''})).appendTo('#active-2');
						 $(createATag({id :'ca-3-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-3-'+i+'');
					 }
				 });
				 $('#large-category-3').mouseover(()=>{
					 $('#active-3').remove();
					 $(createUL({id:'active-3'})).appendTo('#active');
					 var temp = ['경영','경제','기타'];
					 for(var i=0;i<3;i++){
						 $(createLI({id : 'smallgenre-category-4-'+i+''})).appendTo('#active-3');
						 $(createATag({id :'ca-4-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-4-'+i+'');
					 }
				 });
				 $('#large-category-4').mouseover(()=>{
					 $('#active-4').remove();
					 $(createUL({id:'active-4'})).appendTo('#active');
					 var temp = ['인문','정치/사회','역사','종교','예술/문화/기타','SF장르'];
					 for(var i=0;i<6;i++){
						 $(createLI({id : 'smallgenre-category-5-'+i+''})).appendTo('#active-4');
						 $(createATag({id :'ca-5-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-5-'+i+'');
					 }
				 });
				 $('#large-category-5').mouseover(()=>{
					 $('#active-5').remove();
					 $(createUL({id:'active-5'})).appendTo('#active');
					 var temp = ['과학/IT','어린이/청소년','진학/진로','여행','가정/생활','교재/참고서'];
					 for(var i=0;i<6;i++){
						 $(createLI({id : 'smallgenre-category-6-'+i+''})).appendTo('#active-5');
						 $(createATag({id :'ca-6-'+i+'',val :temp[i]})).appendTo('#smallgenre-category-6-'+i+'');
					 }
				 });
				 var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타'];
				 for(var i=0;i<6;i++){
					 $(createLI({id:'store-category-'+i+''})).appendTo('#store-gnb-all-menu');
					 $(createATag({val:temp[i]})).appendTo('#store-category-'+i+'');
				 }
				 $('#store-category-0').click(()=>{
					 
					 var g = {large:$('#store-category-0').text()};
					 $.ajax({
							url:x.context+'/bookGenreLargeList',
							method:'POST',
							data:JSON.stringify({large:g.large}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({large:g.large,count:d.count,largeList:d.largeList,context:x.context});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 $('#store-category-1').click(()=>{
					 var g = {large:$('#store-category-1').text()};
					 $.ajax({
							url:x.context+'/bookGenreLargeList',
							method:'POST',
							data:JSON.stringify({large:g.large}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({large:g.large,count:d.count,largeList:d.largeList,context:x.context});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 $(createDiv({id : 'div-advertise'})).appendTo('#bookk-store');
			 },
			 // 책 리스트 페이지로 넘어감
			 list:x=>{
					 $('#div-advertise').remove();
					 $('#div-list-container').remove();
					 $(createDiv({id : 'div-list-container',clazz : 'category nav-container'})).appendTo('#bookk-store');
					 //리스트 사이드 바
					 $(createDiv({id : 'sidebar',clazz : 'sidebar'})).appendTo('#div-list-container');
					 $(createDiv({id : 'sidebar-lnb'})).appendTo('#sidebar');
					 temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
					 for(var i = 0; i<=5; i++){
						 $(createUL({id : 'sidebar-lnb-category-'+i+''})).appendTo('#sidebar-lnb');
						 $(createLI({id : 'depth-'+i+'',clazz : 'depth1'})).appendTo('#sidebar-lnb-category-'+i+'');
						 $(createSpan({id : 'span-circle-'+i+'',clazz : 'circle'})).appendTo('#depth-'+i+'');
						 $(createATag({val :temp[i], id : 'btn-parent-'+i+''})).appendTo('#span-circle-'+i+'');
					 }
					 //사이드바 시에세이 클릭
					 $('#btn-parent-0').click(()=>{
						 $('#depth-0').remove();
						 $('#sidebar-lnb-category-1').attr('style','margin-top:89px;');
						 $(createLI({id : 'depth1',clazz : 'active'})).appendTo('#sidebar-lnb-category-0');
						 $(createSpan({id : 'span-circle',clazz : 'ic-horizontal'})).appendTo('#depth1');
						 $(createATag({val : '시/에세이',id : 'btn-parent-0'})).appendTo('#depth1')
						 .click(()=>{
							 $('#sidebar-lnb-category-0').empty();
							 book.main.list(x);
						 });
						 $(createUL({id : 'ul-lnb-0'})).appendTo('#depth1');
						 temp = ['시집','에세이','기타도서']
						 for(var i = 0; i<=2; i++){
							 $(createLI({id:'li-lnb-0-'+i+''})).appendTo('#ul-lnb-0');
							 $(createATag({id:'a-lnb-0-'+i+'',val:temp[i]})).appendTo('#li-lnb-0-'+i+''); 
						 }
						 $('#a-lnb-0-0').click(()=>{
							 var g = {small:$('#a-lnb-0-0').text(), large:$('#large-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-0-1').click(()=>{
							 var g = {small:$('#a-lnb-0-1').text(), large:$('#large-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-0-2').click(()=>{
							 var g = {small:$('#a-lnb-0-2').text(), large:$('#large-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
					 });
					 //사이드바 소설클릭
					 $('#btn-parent-1').click(()=>{
						 $('#depth-1').remove();
						 $('#sidebar-lnb-category-2').attr('style','margin-top:239px;');
						 $(createLI({id : 'depth2',clazz : 'active'})).appendTo('#sidebar-lnb-category-1');
						 $(createSpan({id : 'span-circle',clazz : 'ic-horizontal'})).appendTo('#depth2');
						 $(createATag({val : '소설',id : 'btn-parent-1'})).appendTo('#depth2')
						 .click(()=>{
							 $('#sidebar-lnb-category-1').empty();
							 book.main.list(x);
						 });
						 $(createUL({id : 'ul-lnb-1'})).appendTo('#depth2');
						 temp = ['일반','로맨스','판타지','BL','무협','추리/스릴러/미스터리','기타','SF소설']
						 for(var i = 0; i<=7; i++){
							 $(createLI({id:'li-lnb-1-'+i+''})).appendTo('#ul-lnb-1');
							 $(createATag({id:'a-lnb-1-'+i+'',val:temp[i]})).appendTo('#li-lnb-1-'+i+'');
						 }
						 $('#a-lnb-1-0').click(()=>{
							 var g = {small:$('#a-lnb-1-0').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-1').click(()=>{
							 var g = {small:$('#a-lnb-1-1').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-2').click(()=>{
							 var g = {small:$('#a-lnb-1-2').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-3').click(()=>{
							 var g = {small:$('#a-lnb-1-3').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-4').click(()=>{
							 var g = {small:$('#a-lnb-1-4').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-5').click(()=>{
							 var g = {small:$('#a-lnb-1-5').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-6').click(()=>{
							 var g = {small:$('#a-lnb-1-6').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-7').click(()=>{
							 var g = {small:$('#a-lnb-1-7').text(), large:$('#large-category-2').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallCount',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,count:d,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
					 });

					 // 리스트 메인
					 $(createDiv({id : 'main'})).appendTo('#div-list-container');
					 $(createDiv({id : 'list-header',clazz : 'col-sm-12'})).appendTo('#main');
					 if(x.small==null){
						 $('#list-header').html((DcreateHTag({size : '2',val : x.large,clazz : 'col-sm-10'})));
					 }else{
						 $('#list-header').html((DcreateHTag({size : '2',val : x.small,clazz : 'col-sm-10'})));
					 }
					 $(createDiv({id : 'location',clazz : 'col-sm-2'})).appendTo('#list-header');
					 $('#location').html((createATag({id : 'a-main-move',val : '서점 >'})));
					 $(createATag({id : 'a-largegenre-move',val : x.large})).appendTo('#location');
					 if(x.small == null){
					 }else{
						 $(createATag({val : ' > '+x.small})).appendTo('#location');
					 }
					 
					 //책 리스트
					 $(createDiv({id :'list-content'})).appendTo('#main');
					 $(createDiv({id :'list-content-header'})).appendTo('#list-content');
					 if(x.small == null){
						 $(createHTag({size : '4',val : x.large})).appendTo('#list-content-header');
					 }else{
						 $(createHTag({size : '4',val : x.small})).appendTo('#list-content-header');
					 }
					 $(createP({val : x.count+' 권의 책이 검색 되었습니다.'})).appendTo('#list-content-header');
					 $(createDiv({id : 'btn-group-sub-nav'})).appendTo('#list-content-header');
					 $(createDiv({id : 'btn-group-sub-nav-1'})).appendTo('#btn-group-sub-nav');
					 $(createATag({id : 'a-group-sub-nav-new',val : '최신순'})).appendTo('#btn-group-sub-nav-1').attr('class','active')
					 .click(()=>{
						 $('#a-group-sub-nav-name').removeAttr('class');
						 $('#a-group-sub-nav-new').attr('class','active');
					 });
					 $(createATag({id : 'a-group-sub-nav-name',val : '제목순'})).appendTo('#btn-group-sub-nav-1')
					 .click(()=>{
						 $('#a-group-sub-nav-new').removeAttr('class');
						 $('#a-group-sub-nav-name').attr('class','active');
					 });
					 $(createDiv({id:'list-content-content'})).appendTo('#list-content');
					 $(createTable({id:'list-content-table'})).appendTo('#list-content-content');
					 for(var i=0;i<x.largeList.length;i++){
						 $(createTr({id:'list-content-tr-'+i+''})).appendTo('#list-content-table');
						 $(createTd({id:'list-left-td-'+i+'',clazz:'product-image'})).appendTo('#list-content-tr-'+i+'');
						 $(createTd({id:'list-right-td-'+i+'',clazz:'product-info'})).appendTo('#list-content-tr-'+i+'');
						 $(createATag({id:'list-left-a-'+i+'',val:''})).appendTo('#list-left-td-'+i+'');
						 $(createDiv({id:'list-left-div-'+i+'',clazz:'book-cover'})).appendTo('#list-left-a-'+i+'');
						 $(createImg({src:x.largeList[i].imageRoute})).appendTo('#list-left-div-'+i+'');
						 $(DcreateHTag({size:'3',val:'',clazz:'list-right-htag-'+i+''})).appendTo('#list-right-td-'+i+'');
						 $(createATag({val:x.largeList[i].bookName})).appendTo('.list-right-htag-'+i+'');
						 $(createDiv({id:'list-right-div-'+i+'',clazz:'product-meta'})).appendTo('#list-right-td-'+i+'');
						 $(DcreateSpan({id:'list-right-span-'+i+'',val:'저자 ',clazz:'list-right-span'})).appendTo('#list-right-div-'+i+'');
						 $(createATag({id:'list-right-writter-a-'+i+'',val:x.largeList[i].writter})).appendTo('#list-right-span-'+i+'');
						 $(DcreateSpan({val:x.largeList[i].publisher+'  ',clazz:'list-right-publisher'})).appendTo('#list-right-div-'+i+'');
						 $(DcreateSpan({val:x.largeList[i].publishingDate,clazz:'list-right-span last'})).appendTo('#list-right-div-'+i+'');
						 $(createDiv({id:'list-right-price-div-'+i+'',clazz:'product-price'})).appendTo('#list-right-td-'+i+'');
						 $(createStrong({val:x.largeList[i].price})).appendTo('#list-right-price-div-'+i+'');
						 $(DcreateSpan({val:'원',clazz:'currency'})).appendTo('#list-right-price-div-'+i+'');
						 $(createForm({id:'list-right-form-'+i+'',clazz:'btn-group'})).appendTo('#list-right-td-'+i+'');
						 $(createButton({clazz:'btn btn-primary fas fa-shopping-cart',val:'&nbsp;&nbsp;장바구니'})).appendTo('#list-right-form-'+i+'');
						 $(createButton({clazz:'btn btn-primary fas fa-arrow-right',val:'&nbsp;&nbsp;바로구매'})).appendTo('#list-right-form-'+i+'');
						 $(createButton({clazz:'btn btn-primary far fa-heart',val:'&nbsp;&nbsp;찜하기'})).appendTo('#list-right-form-'+i+'');
					 }

			 }
}