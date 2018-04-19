var book=book || {};
book.main=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	 };
	 var setContentView=()=>{
		 $.getScript(view,()=>{
			 bookNav();
			 bookContent();
			 });
		 };
	var bookContent=()=>{
		// 광고 이미지
		 
		 $(createDiv({
			 id : 'img-advertise',
			 clazz : 'img-advertise'
		 })).appendTo('#div-advertise');
		 $(createDiv({
			 id : 'main-advertise',
			 clazz : 'main-advertise'
		 })).appendTo('#img-advertise').attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;');
		 $(createUL({
			 id : 'wrap-main-advertise',
			 clazz : ''
		 })).appendTo('#main-advertise').attr('style','padding:0px; margin-top:0px;');
		 $(createLI({
			 id : 'main-img-advertise',
			 clazz : ''
		 })).appendTo('#wrap-main-advertise');
		 $(createATag({
			 id : 'main-img-advertise-1',
			 clazz : '',
			 val : ''
		 })).appendTo('#main-img-advertise');
		 $(createImg({
			 alt : '',
			 src : 'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'
		 })).appendTo('#main-img-advertise-1').attr('style','height: 450px; width:100%;')
		 .click(()=>{
			 alert('봄 클릭');
		 });
		 // 이미지 하단 버튼
		 $(createUL({
			 id : 'main-img-btn-clearfix',
			 clazz : ''
		 })).attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;').appendTo('#main-advertise');
		 $(createLI({
			 id : 'li-wrap-dots-1',
			 clazz : ''
		 })).appendTo('#main-img-btn-clearfix');
		 $(createATag({
			 id : 'a-wrap-doat-1',
			 val : ''
		 })).appendTo('#li-wrap-dots-1');
		 $(createButton({
			 id : 'btn-1',
			 clazz : 'btn',
			 val : '봄'
		 })).appendTo('#a-wrap-doat-1')
		 .click(()=>{
			 $('#main-img-advertise').remove();
			 $(createLI({
				 id : 'main-img-advertise',
				 clazz : ''
			 })).appendTo('#wrap-main-advertise');
			 $(createATag({
				 id : 'a-img-1',
				 clazz : '',
				 val : ''
			 })).appendTo('#main-img-advertise');
			 $(createImg({
				 alt : '',
				 src : 'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'
			 })).appendTo('#a-img-1').attr('style','height: 450px; width:100%;')
			 .click(()=>{
				 alert('봄 클릭');
			 });
		 });
		 
		 $(createLI({
			 id : 'li-wrap-dots-2',
			 clazz : ''
		 })).appendTo('#main-img-btn-clearfix');
		 $(createATag({
			 id : 'a-wrap-doat-2',
			 val : ''
		 })).appendTo('#li-wrap-dots-2');
		 $(createButton({
			 id : 'btn-2',
			 clazz : 'btn',
			 val : '여름'
		 })).appendTo('#a-wrap-doat-2')
		 .click(()=>{
			 $('#main-img-advertise').remove();
			 $(createLI({
				 id : 'main-img-advertise',
				 clazz : 'slide-img'
			 })).appendTo('#wrap-main-advertise');
			 $(createATag({
				 id : 'a-img-2',
				 clazz : '',
				 val : ''
			 })).appendTo('#main-img-advertise');
			 $(createImg({
				 alt : '',
				 src : 'http://cafefiles.naver.net/20120815_51/wltn3743_1344961625040n8zgh_JPEG/32.jpeg'
			 })).appendTo('#a-img-2').attr('style','height: 450px; width:100%;')
			 .click(()=>{
				 alert('여름 클릭');
			 });
		 });
		 
		 $(createLI({
			 id : 'li-wrap-dots-3',
			 clazz : ''
		 })).appendTo('#main-img-btn-clearfix');
		 $(createATag({
			 id : 'a-wrap-doat-3',
			 val : ''
		 })).appendTo('#li-wrap-dots-3');
		 $(createButton({
			 id : 'btn-3',
			 clazz : 'btn',
			 val : '가을'
		 })).appendTo('#a-wrap-doat-3')
		 .click(()=>{
			 $('#main-img-advertise').remove();
			 $(createLI({
				 id : 'main-img-advertise',
				 clazz : ''
			 })).appendTo('#wrap-main-advertise');
			 $(createATag({
				 id : 'a-img-3',
				 clazz : '',
				 val : ''
			 })).appendTo('#main-img-advertise');
			 $(createImg({
				 alt : '',
				 src : 'http://cafefiles.naver.net/20141024_221/duran011_1414101447080RxsoJ_JPEG/PicSpeed%2B-2071079421.jpg'
			 })).appendTo('#a-img-3').attr('style','height: 450px; width:100%;')
			 .click(()=>{
				 alert('가을 클릭');
			 });
		 });
		 
		 $(createLI({
			 id : 'li-wrap-dots-4',
			 clazz : ''
		 })).appendTo('#main-img-btn-clearfix');
		 $(createATag({
			 id : 'a-wrap-doat-4',
			 clazz : 'active',
			 val : ''
		 })).appendTo('#li-wrap-dots-4');
		 $(createButton({
			 id : 'btn-4',
			 clazz : 'btn',
			 val : '겨울'
		 })).appendTo('#a-wrap-doat-4')
		 .click(()=>{
			 $('#main-img-advertise').remove();
			 $(createLI({
				 id : 'main-img-advertise',
				 clazz : ''
			 })).appendTo('#wrap-main-advertise');
			 $(createATag({
				 id : 'a-img-4',
				 clazz : '',
				 val : ''
			 })).appendTo('#main-img-advertise');
			 $(createImg({
				 alt : '',
				 src : 'http://post.phinf.naver.net/MjAxNjEyMjhfMjUz/MDAxNDgyODkzMTQ5NTg3.huKPPgR7H7zTAqQGfv5cKJ_lfzHWBu6K-CDBVYGgE94g.GrchDz4KjXlABiHi_HUFDBYanYGJLXobf_iHr75HgZAg.JPEG/Iaj1bpuo8oXHpdZizTkVN7g_HF7E.jpg'
			 })).appendTo('#a-img-4').attr('style','height: 450px; width:100%;')
			 .click(()=>{
				 alert('겨울 클릭');
			 });
		 });
		 
		 $(createDiv({
			 id : 'div-container-2',
			 clazz : 'nav-container'
		 })).appendTo('#div-advertise');
		 $(createDiv({
			 id : 'div-section-ad',
			 clazz : 'section-ad'
		 })).appendTo('#div-container-2');
		 $(createDiv({
			 id : 'div-ad-item-1',
			 clazz : 'ad-item ad-1'
		 })).appendTo('#div-section-ad');
		 $(createATag({
			 id : 'a-ad-item-1',
			 clazz : '',
			 val : ''
		 })).appendTo('#div-ad-item-1');
		 $(createImg({
			 alt : '',
			 src : 'http://www.bookk.co.kr/img/banner/banner33.png'
		 })).appendTo('#a-ad-item-1')
		 .click(()=>{
			 alert('1번 클릭');
		 });
		 
		 $(createDiv({
			 id : 'div-ad-item-2',
			 clazz : 'ad-item ad-2'
		 })).appendTo('#div-section-ad');
		 $(createATag({
			 id : 'a-ad-item-2',
			 clazz : '',
			 val : ''
		 })).appendTo('#div-ad-item-2');
		 $(createImg({
			 alt : '',
			 src : 'http://www.bookk.co.kr/img/banner/banner46.png'
		 })).appendTo('#a-ad-item-2')
		 .click(()=>{
			 alert('2번 클릭');
		 });
		 
		 $(createDiv({
			 id : 'div-ad-item-3',
			 clazz : 'ad-item ad-3'
		 })).appendTo('#div-section-ad');
		 $(createATag({
			 id : 'a-ad-item-3',
			 clazz : '',
			 val : ''
		 })).appendTo('#div-ad-item-3');
		 $(createImg({
			 alt : '',
			 src : 'http://www.bookk.co.kr/img/banner/banner45.png'
		 })).appendTo('#a-ad-item-3')
		 .click(()=>{
			 alert('3번 클릭');
		 });
		 $(createDiv({
			 id : 'div-section-ranking',
			 clazz : 'section-ranking'
		 })).appendTo('#div-container-2');
		 $(createDiv({
			 id : 'div-left-ranking',
			 clazz : 'widget widget-ranking pull-left'
		 })).appendTo('#div-section-ranking');
		 $(createDiv({
			 id : 'div-left-ranking-header',
			 clazz : 'widget-header'
		 })).appendTo('#div-left-ranking');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '이주의 책'
		 })).appendTo('#div-left-ranking-header');
		 $(createDiv({
			 id : 'div-left-ranking-content',
			 clazz : 'widget-content tab-wrapper'
		 })).appendTo('#div-left-ranking');
		 $(createUL({
			 id : 'ul-left-ranking', 
			 clazz : 'nav nav-tabs-vertical',
			 role : 'tablist'
		 })).appendTo('#div-left-ranking-content');
		 $(createLI({
			 id : 'li-left-ranking-1',
			 clazz : 'active'
		 })).appendTo('#ul-left-ranking');
		 $(createATag({
			 id : 'a-left-ranking-1',
			 val : '종이책'
		 })).appendTo('#li-left-ranking-1')
		 .click(()=>{
			 alert('종이책클릭');
		 });
		 $(createLI({
			 id : 'li-left-ranking-2',
			 clazz : 'active'
		 })).appendTo('#ul-left-ranking');
		 $(createATag({
			 id : 'a-left-ranking-2',
			 role : 'tab',
			 val : '전자책'
		 })).appendTo('#li-left-ranking-2')
		 .click(()=>{
			 alert('전자책클릭');
		 });
		 $(createLI({
			 id : 'li-left-ranking-3',
			 clazz : 'active'
		 })).appendTo('#ul-left-ranking');
		 $(createATag({
			 id : 'a-left-ranking-3',
			 role : 'tab',
			 val : '무료책'
		 })).appendTo('#li-left-ranking-3')
		 .click(()=>{
			 alert('무료책클릭');
		 });
		 
		 $(createDiv({
			 id : 'div-right-ranking',
			 clazz : 'widget widget-ranking pull-right'
		 })).appendTo('#div-section-ranking');
		 $(createDiv({
			 id : 'div-right-ranking-header',
			 clazz : 'widget-header'
		 })).appendTo('#div-right-ranking');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '부크크 차트'
		 })).appendTo('#div-right-ranking-header');
		 $(createDiv({
			 id : 'div-right-ranking-content',
			 clazz : 'widget-content tab-wrapper'
		 })).appendTo('#div-right-ranking');
		 $(createUL({
			 id : 'ul-right-ranking', 
			 clazz : 'nav nav-tabs-vertical',
			 role : 'tablist'
		 })).appendTo('#div-right-ranking-content');
		 $(createLI({
			 id : 'li-right-ranking-1',
			 clazz : 'active'
		 })).appendTo('#ul-right-ranking');
		 $(createATag({
			 id : 'a-right-ranking-1',
			 role : 'tab',
			 val : '주간'
		 })).appendTo('#li-right-ranking-1')
		 .click(()=>{
			 alert('주간 클릭');
		 });
		 $(createLI({
			 id : 'li-right-ranking-2',
			 clazz : 'active'
		 })).appendTo('#ul-right-ranking');
		 $(createATag({
			 id : 'a-right-ranking-2',
			 role : 'tab',
			 val : '월간'
		 })).appendTo('#li-right-ranking-2')
		 .click(()=>{
			 alert('월간 클릭');
		 });
		 $(createLI({
			 id : 'li-right-ranking-3',
			 clazz : 'active'
		 })).appendTo('#ul-right-ranking');
		 $(createATag({
			 id : 'a-right-ranking-3',
			 role : 'tab',
			 val : '신간'
		 })).appendTo('#li-right-ranking-3')
		 .click(()=>{
			 alert('신간 클릭');
		 });
		 
		 //시 에세이
		 $(createDiv({
			 id : 'div-section-category',
			 clazz : 'section-category'
		 })).appendTo('#div-container-2');
		 $(createDiv({
			 id : 'div-section-category-1'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-header-1',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '시·에세이'
		 })).appendTo('#div-book-header-1');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-1')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category-1');
		 $(createDiv({
			 id : 'div-book-item-1',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-1',
			 val : ''
		 })).appendTo('#div-book-item-1');
		 $(createDiv({
			 id : 'div-book-cover-1',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-1');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-1');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-1');
		 $(createDiv({
			 id : 'div-book-meta-1',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-1');
		 
		 //소설 
		 $(createDiv({
			 id : 'div-book-header-2',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '소설'
		 })).appendTo('#div-book-header-2');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-2')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-item-2',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-2',
			 val : ''
		 })).appendTo('#div-book-item-2');
		 $(createDiv({
			 id : 'div-book-cover-2',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-2');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-2');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-2');
		 $(createDiv({
			 id : 'div-book-meta-2',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-2');
		 
		 
		 //전기/회고록
		 $(createDiv({
			 id : 'div-book-header-3',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '전기/회고록'
		 })).appendTo('#div-book-header-3');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-3')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-item-3',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-3',
			 val : ''
		 })).appendTo('#div-book-item-3');
		 $(createDiv({
			 id : 'div-book-cover-3',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-3');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-3');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-3');
		 $(createDiv({
			 id : 'div-book-meta-3',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-3');
		 
		//경영/경제/자기계발
		 $(createDiv({
			 id : 'div-book-header-4',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '경영/경제/자기계발'
		 })).appendTo('#div-book-header-4');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-4')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-item-4',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-4',
			 val : ''
		 })).appendTo('#div-book-item-4');
		 $(createDiv({
			 id : 'div-book-cover-4',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-4');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-4');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-4');
		 $(createDiv({
			 id : 'div-book-meta-4',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-4');
		 
		//인문사회
		 $(createDiv({
			 id : 'div-book-header-5',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '인문사회'
		 })).appendTo('#div-book-header-5');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-5')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-item-5',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-5',
			 val : ''
		 })).appendTo('#div-book-item-5');
		 $(createDiv({
			 id : 'div-book-cover-5',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-5');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-5');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-5');
		 $(createDiv({
			 id : 'div-book-meta-5',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-5');
		 
		//기타
		 $(createDiv({
			 id : 'div-book-header-6',
			 clazz : 'widget-header'
		 })).appendTo('#div-section-category-1');
		 $(createHTag({
			 size : '3',
			 clazz : 'widget-title',
			 val : '기타'
		 })).appendTo('#div-book-header-6');
		 $(createATag({
			 val : '더보기'
		 })).appendTo('#div-book-header-6')
		 .attr('class','more');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-book-item-6',
			 clazz : 'book-item'
		 })).appendTo('#div-category-list');
		 $(createATag({
			 id : 'a-book-item-6',
			 val : ''
		 })).appendTo('#div-book-item-6');
		 $(createDiv({
			 id : 'div-book-cover-6',
			 clazz : 'book-cover'
		 })).appendTo('#a-book-item-6');
		 $(createDiv({
			 clazz : 'book-deco'
		 })).appendTo('#div-book-cover-6');
		 $(createDiv({
			 clazz : 'book-title'
		 })).appendTo('#a-book-item-6');
		 $(createDiv({
			 id : 'div-book-meta-6',
			 clazz : 'book-meta'
		 })).appendTo('#div-book-item-6');
	}
		// 책 네비
	 var bookNav=()=>{
		 $('#div-body').html(createDiv({
			 id : 'bookk-store',
			 clazz : ''
		 }));
		 // 맨위 상단 카테고리 바
		 $(createDiv({
			 id : 'category-bar',
			 clazz : 'category-bar'
		 })).appendTo('#bookk-store');
		 $(createDiv({
			 id : 'category-bar-container',
			 clazz : 'nav-container'
		 })).appendTo('#category-bar');
		 // 전체분야
		 $(createDiv({
			 id : 'store-gnb',
			 clazz : 'store-gnb'
		 })).appendTo('#category-bar-container');
		 $(createUL({
			 id : 'store-gnb-all-menu',
			 clazz : ''
		 })).appendTo('#store-gnb');
		 $(createLI({
			 id : 'all-menu',
			 clazz : 'all-menu'
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : 'a-all-menu',
			 clazz : '',
			 val : '전체분야'
		 })).appendTo('#all-menu');
		 $(createSpan({
			 id : 'genre-list',
			 clazz : 'genre-list'
		 })).appendTo('#a-all-menu');
		 $(createSpan({
			 id : 'span-caret',
			 clazz : 'caret'
		 })).appendTo('#a-all-menu');
		 // 전체메뉴 마우스 올리면 나오는 DIV
		 $(createDiv({
			 id : 'store-lnb-box',
			 clazz : 'store-lnb'
		 })).appendTo('#all-menu');
		 $(createUL({
			 id : 'store-lnb',
			 clazz : ''
		 })).appendTo('#store-lnb-box');
		 $(createLI({
			 id : 'active',
			 clazz : 'active'
		 })).appendTo('#store-lnb');
		 // 전체메뉴 시 에세이
		 $(createATag({
			 id : 'large-category-1',
			 clazz : '',
			 val : '시·에세이'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-1').remove();
			 $(createUL({
				 id : 'active-1',
				 clazz : ''
			 })).appendTo('#active');
			 $(createLI({
				 id : 'smallgenre-category-1-1',
				 clazz : ''
			 })).appendTo('#active-1');
			 $(createATag({
				 id : 'ca-1',
				 clazz : '',
				 val : '시집'
			 })).appendTo('#smallgenre-category-1-1')
			 .click(()=>{
				 var x = {small:$('#ca-1').text(), large:$('#large-category-1').text()};
				 list(x);
			 });
			 $(createLI({
				 id : 'smallgenre-category-1-2',
				 clazz : ''
			 })).appendTo('#active-1');
			 $(createATag({
				 id : 'ca-2',
				 clazz : '',
				 val : '에세이'
			 })).appendTo('#smallgenre-category-1-2')
			 .click(()=>{
				 var x = {small:$('#ca-2').text(), large:$('#large-category-1').text()};
				 list(x);
			 });
			 $(createLI({
				 id : 'smallgenre-category-1-3',
				 clazz : ''
			 })).appendTo('#active-1');
			 $(createATag({
				 id : 'ca-3',
				 clazz : '',
				 val : '기타도서'
			 })).appendTo('#smallgenre-category-1-3')
			 .click(()=>{
				 var x = {small:$('#ca-3').text(), large:$('#large-category-1').text()};
				 list(x);
			 });
		 });
		 // 전체메뉴 소설
		 $(createATag({
			 id : 'large-category-2',
			 clazz : '',
			 val : '소설'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-2').remove();
			 $(createUL({
				 id : 'active-2',
				 clazz : ''
			 })).appendTo('#active')
			 $(createLI({
				 id : 'smallgenre-category-2-1',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-4',
				 clazz : '',
				 val : '일반'
			 })).appendTo('#smallgenre-category-2-1')
			 .click(()=>{
				 var x = {small:$('#ca-4').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-2',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-5',
				 clazz : '',
				 val : '로맨스'
			 })).appendTo('#smallgenre-category-2-2')
			 .click(()=>{
				 var x = {small:$('#ca-5').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-3',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-6',
				 clazz : '',
				 val : '판타지'
			 })).appendTo('#smallgenre-category-2-3')
			 .click(()=>{
				 var x = {small:$('#ca-6').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-4',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-7',
				 clazz : '',
				 val : 'BL'
			 })).appendTo('#smallgenre-category-2-4')
			 .click(()=>{
				 var x = {small:$('#ca-7').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-5',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-8',
				 clazz : '',
				 val : '무협'
			 })).appendTo('#smallgenre-category-2-5')
			 .click(()=>{
				 var x = {small:$('#ca-8').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-6',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-9',
				 clazz : '',
				 val : '추리/스릴러/미스터리'
			 })).appendTo('#smallgenre-category-2-6')
			 .click(()=>{
				 var x = {small:$('#ca-9').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-7',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-10',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-2-7')
			 .click(()=>{
				 var x = {small:$('#ca-10').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-8',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : 'ca-11',
				 clazz : '',
				 val : 'SF소설'
			 })).appendTo('#smallgenre-category-2-8')
			 .click(()=>{
				 var x = {small:$('#ca-11').text(), large:$('#large-category-2').text()};
				 list(x);
			 });
		 });
		 // 전체메뉴 전기/회고록
		 $(createATag({
			 id : 'large-category-3',
			 clazz : '',
			 val : '전기/회고록'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-3').remove();
			 $(createUL({
				 id : 'active-3',
				 clazz : ''
			 })).appendTo('#active');
			 
			 $(createLI({
				 id : 'smallgenre-category-3-1',
				 clazz : ''
			 })).appendTo('#active-3');
			 $(createATag({
				 id : 'ca-12',
				 clazz : '',
				 val : '자서전'
			 })).appendTo('#smallgenre-category-3-1')
			 .click(()=>{
				 var x = {small:$('#ca-12').text(), large:$('#large-category-3').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-3-2',
				 clazz : ''
			 })).appendTo('#active-3');
			 $(createATag({
				 id : 'ca-13',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-3-2')
			 .click(()=>{
				 var x = {small:$('#ca-13').text(), large:$('#large-category-3').text()};
				 list(x);
			 });
		 });
		 // 전체메뉴 경영/경제/자기계발
		 $(createATag({
			 id : 'large-category-4',
			 clazz : '',
			 val : '경영/경제/자기계발'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-4').remove();
			 $(createUL({
				 id : 'active-4',
				 clazz : ''
			 })).appendTo('#active');
			 
			 $(createLI({
				 id : 'smallgenre-category-4-1',
				 clazz : ''
			 })).appendTo('#active-4');
			 $(createATag({
				 id : 'ca-14',
				 clazz : '',
				 val : '경영'
			 })).appendTo('#smallgenre-category-4-1')
			 .click(()=>{
				 var x = {small:$('#ca-14').text(), large:$('#large-category-4').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-4-2',
				 clazz : ''
			 })).appendTo('#active-4');
			 $(createATag({
				 id : 'ca-15',
				 clazz : '',
				 val : '경제'
			 })).appendTo('#smallgenre-category-4-2')
			 .click(()=>{
				 var x = {small:$('#ca-15').text(), large:$('#large-category-4').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-4-3',
				 clazz : ''
			 })).appendTo('#active-4');
			 $(createATag({
				 id : 'ca-16',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-4-3')
			 .click(()=>{
				 var x = {small:$('#ca-16').text(), large:$('#large-category-4').text()};
				 list(x);
			 });
		 });
		 // 전체메뉴 인문사회
		 $(createATag({
			 id : 'large-category-5',
			 clazz : '',
			 val : '인문사회'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-5').remove();
			 $(createUL({
				 id : 'active-5',
				 clazz : ''
			 })).appendTo('#active');
			 
			 $(createLI({
				 id : 'smallgenre-category-5-1',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-17',
				 clazz : '',
				 val : '인문'
			 })).appendTo('#smallgenre-category-5-1')
			 .click(()=>{
				 var x = {small:$('#ca-17').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-2',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-18',
				 clazz : '',
				 val : '정치/사회'
			 })).appendTo('#smallgenre-category-5-2')
			 .click(()=>{
				 var x = {small:$('#ca-18').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-3',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-19',
				 clazz : '',
				 val : '역사'
			 })).appendTo('#smallgenre-category-5-3')
			 .click(()=>{
				 var x = {small:$('#ca-19').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-4',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-20',
				 clazz : '',
				 val : '종교'
			 })).appendTo('#smallgenre-category-5-4')
			 .click(()=>{
				 var x = {small:$('#ca-20').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-5',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-21',
				 clazz : '',
				 val : '예술/문화/기타'
			 })).appendTo('#smallgenre-category-5-5')
			 .click(()=>{
				 var x = {small:$('#ca-21').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-6',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : 'ca-22',
				 clazz : '',
				 val : 'SF 장르'
			 })).appendTo('#smallgenre-category-5-6')
			 .click(()=>{
				 var x = {small:$('#ca-22').text(), large:$('#large-category-5').text()};
				 list(x);
			 });
		 });
		 // 전체메뉴 기타
		 $(createATag({
			 id : 'large-category-6',
			 clazz : '',
			 val : '기타'
		 })).appendTo('#active')
		 .mouseover(()=>{
			 $('#active-6').remove();
			 $(createUL({
				 id : 'active-6',
				 clazz : ''
			 })).appendTo('#active');
			 
			 $(createLI({
				 id : 'smallgenre-category-6-1',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-23',
				 clazz : '',
				 val : '과학'
			 })).appendTo('#smallgenre-category-6-1')
			 .click(()=>{
				 var x = {small:$('#ca-23').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-2',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-24',
				 clazz : '',
				 val : '어린이/청소년'
			 })).appendTo('#smallgenre-category-6-2')
			 .click(()=>{
				 var x = {small:$('#ca-24').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-3',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-25',
				 clazz : '',
				 val : '진학/진로'
			 })).appendTo('#smallgenre-category-6-3')
			 .click(()=>{
				 var x = {small:$('#ca-25').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-4',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-26',
				 clazz : '',
				 val : '여행'
			 })).appendTo('#smallgenre-category-6-4')
			 .click(()=>{
				 var x = {small:$('#ca-26').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-5',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-27',
				 clazz : '',
				 val : '가정/생활'
			 })).appendTo('#smallgenre-category-6-5')
			 .click(()=>{
				 var x = {small:$('#ca-27').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-6',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : 'ca-28',
				 clazz : '',
				 val : '교재/참고서'
			 })).appendTo('#smallgenre-category-6-6')
			 .click(()=>{
				 var x = {small:$('#ca-28').text(), large:$('#large-category-6').text()};
				 list(x);
			 });
		 });
		 
		 $(createLI({
			 id : 'store-category-1',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '시·에세이'
		 })).appendTo('#store-category-1')
		 .click(()=>{
			 var x = {large:$('#store-category-1').text()};
			 list(x);
		 });
		 
		 $(createLI({
			 id : 'store-category-2',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '소설'
		 })).appendTo('#store-category-2')
		 .click(()=>{
			 var x = {large:$('#store-category-2').text()};
			 list(x);
		 });
		 
		 $(createLI({
			 id : 'store-category-3',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '전기/회고록'
		 })).appendTo('#store-category-3')
		 .click(()=>{
			 var x = {large:$('#store-category-3').text()};
			 list(x);
		 });
		 
		 $(createLI({
			 id : 'store-category-4',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '인문사회'
		 })).appendTo('#store-category-4')
		 .click(()=>{
			 var x = {large:$('#store-category-4').text()};
			 list(x);
		 });
		 
		 $(createLI({
			 id : 'store-category-5',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '경영/경제/자기계발'
		 })).appendTo('#store-category-5')
		 .click(()=>{
			 var x = {large:$('#store-category-5').text()};
			 list(x);
		 });
		 
		 $(createLI({
			 id : 'store-category-6',
			 clazz : ''
		 })).appendTo('#store-gnb-all-menu');
		 $(createATag({
			 id : '',
			 clazz : '',
			 val : '기타'
		 })).appendTo('#store-category-6')
		 .click(()=>{
			 var x = {large:$('#store-category-6').text()};
			 list(x);
		 });
		 $(createDiv({
			 id : 'div-advertise',
			 clazz : ''
		 })).appendTo('#bookk-store');
	 }
	 // 책 리스트 페이지로 넘어감
	 var list=x=>{
		 alert('대분류 : '+x.large + '소분류 : '+x.small);
		 $.getScript(view,()=>{
			 $('#div-advertise').remove();
			 $('#div-list-container').remove();
			 $(createDiv({
				 id : 'div-list-container',
				 clazz : 'category nav-container'
			 })).appendTo('#bookk-store');
			 //리스트 사이드 바
			 $(createDiv({
				 id : 'sidebar',
				 clazz : 'sidebar'
			 })).appendTo('#div-list-container');
			 $(createDiv({
				 id : 'sidebar-lnb'
			 })).appendTo('#sidebar');
			 $(createUL({
				 id : 'sidebar-lnb-category-1'
			 })).appendTo('#sidebar-lnb');
			 $(createLI({
				 id : 'depth1',
				 clazz : 'depth1'
			 })).appendTo('#sidebar-lnb-category-1');
			 $(createSpan({
				 id : 'span-circle',
				 clazz : 'circle'
			 })).appendTo('#depth1');
			 $(createATag({
				 val : '시·에세이',
				 id : 'btn-parent'
			 })).appendTo('#depth1')
			 .click(()=>{
				 $('#sidebar-lnb-category-1').empty();
				 $(createLI({
					 id : 'depth1',
					 clazz : 'active'
				 })).appendTo('#sidebar-lnb-category-1');
				 $(createSpan({
					 id : 'span-circle',
					 clazz : 'ic-horizontal'
				 })).appendTo('#depth1');
				 $(createATag({
					 val : '시·에세이',
					 id : 'btn-parent'
				 })).appendTo('#depth1')
				 .click(()=>{
					 $('#sidebar-lnb-category-1').empty();
					 list(x);
				 });
				 $(createUL({
					 id : 'ul-lnb'
				 })).appendTo('#depth1');
				 temp = ['시집','에세이','기타도서']
				 for(var i = 0; i<=2; i++){
					 $(createLI({id:'li-lnb-'+i+''})).appendTo('#ul-lnb');
					 $(createATag({id:'a-lnb-'+i+'',val:temp[i]})).appendTo('#li-lnb-'+i+'')
					 .attr('onclick','book.main.list({large:"시·에세이",small:$("#a-lnb-'+i+'").text()})'); 
				 }
			 });
			 
			 
			 // 리스트 메인
			 $(createDiv({
				 id : 'main'
			 })).appendTo('#div-list-container');
			 $(createDiv({
				 id : 'list-header',
				 clazz : 'col-sm-12'
			 })).appendTo('#main');
			 if(x.small==null){
				 $('#list-header').html((DcreateHTag({
					 size : '2',
					 val : x.large,
					 clazz : 'col-sm-10'
				 })));
			 }else{
				 $('#list-header').html((DcreateHTag({
					 size : '2',
					 val : x.small,
					 clazz : 'col-sm-10'
				 })));
			 }
			 $(createDiv({
				 id : 'location',
				 clazz : 'col-sm-2'
			 })).appendTo('#list-header');
			 $('#location').html((createATag({
				 id : 'a-main-move',
				val : '서점 >' 
			 })));
			 $(createATag({
				 id : 'a-largegenre-move',
				 val : x.large
			 })).appendTo('#location');
			 if(x.small == null){
			 }else{
				 $(createATag({
					 val : ' > '+x.small
				 })).appendTo('#location');
			 }
			 
			 //책 리스트
			 $(createDiv({
				 id : 'list-content'
			 })).appendTo('#main');
			 $(createDiv({
				 id : 'list-content-header'
			 })).appendTo('#list-content');
			 if(x.small == null){
				 $(createHTag({
					 size : '4',
					 val : x.large
				 })).appendTo('#list-content-header');
			 }else{
				 $(createHTag({
					 size : '4',
					 val : x.small
				 })).appendTo('#list-content-header');
			 }
			 $(createP({
				 val : '   - count 권의 책이 검색 되었습니다.'
			 })).appendTo('#list-content-header');
			 $(createDiv({
				 id : 'btn-group-sub-nav'
			 })).appendTo('#list-content-header');
			 $(createDiv({
				 id : 'btn-group-sub-nav-1'
			 })).appendTo('#btn-group-sub-nav');
			 $(createATag({
				 id : 'a-group-sub-nav-new',
				 val : '최신순'
			 })).appendTo('#btn-group-sub-nav-1').attr('class','active')
			 .click(()=>{
				 $('#a-group-sub-nav-name').removeAttr('class');
				 $('#a-group-sub-nav-new').attr('class','active');
			 });
			 $(createATag({
				 id : 'a-group-sub-nav-name',
				 val : '제목순'
			 })).appendTo('#btn-group-sub-nav-1')
			 .click(()=>{
				 $('#a-group-sub-nav-new').removeAttr('class');
				 $('#a-group-sub-nav-name').attr('class','active');
			 });
		 });
	 };
	 return{onCreate:onCreate,list:list}
})();