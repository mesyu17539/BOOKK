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
			 id : 'div-advertise',
			 clazz : ''
		 })).appendTo('#bookk-store');
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
		 })).appendTo('#main-advertise').attr('style','padding:0px; margin-top:1px;');
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
			 })).appendTo('#a-img-1').attr('style','height: 450px; width:1360px;')
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
			 })).appendTo('#a-img-2').attr('style','height: 450px; width:1360px;')
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
			 })).appendTo('#a-img-3').attr('style','height: 450px; width:1360px;')
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
			 })).appendTo('#a-img-4').attr('style','height: 450px; width:1360px;')
			 .click(()=>{
				 alert('겨울 클릭');
			 });
		 });
		 
		 $(createDiv({
			 id : 'div-container-2',
			 clazz : 'container'
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
			 num : '3',
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
			 num : '3',
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
		 $(createDiv({
			 id : 'div-section-category',
			 clazz : 'section-category'
		 })).appendTo('#div-container-2');
		 $(createDiv({
			 id : 'div-widget-ranking-1',
			 clazz : 'widget widget-ranking'
		 })).appendTo('#div-section-category');
		 $(createDiv({
			 id : 'div-widget-header-1',
			 clazz : 'widget-header'
		 })).appendTo('#div-widget-ranking-1');
		 $(createHTag({
			 num : '3',
			 clazz : 'widget-title',
			 val : '시·에세이'
		 })).appendTo('#div-widget-header-1');
		 $(createATag({
			 id : '',
			 clazz : 'more',
			 val : '더보기'
		 })).appendTo('#div-widget-header-1');
		 $(createDiv({
			 id : 'div-category-list',
			 clazz : 'widget-content book-list clearfix'
		 })).appendTo('#div-section-category');
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
		 $(createImg({
			 src : 'http://www.bookk.co.kr/files/2018/04/05/78374/172x256/3d86c43e6b8db19f5c77ac76efbf485f.JPG'
		 })).appendTo('#div-book-cover-1');
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
		 $(createATag({
			 clazz : 'book-author',
			 val : '우병국'
		 })).appendTo('#div-book-meta-1');
	}
// 책 네비
	 var bookNav=()=>{
		 $('#div-body').html(createDiv({
			 id : 'bookk-store',
			 clazz : ''
		 }));// 맨위 상단 카테고리 바
		 $(createDiv({
			 id : 'category-bar',
			 clazz : 'category-bar'
		 })).appendTo('#bookk-store');
		 $(createDiv({
			 id : 'category-bar-container',
			 clazz : 'container'
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
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '시집'
			 })).appendTo('#smallgenre-category-1-1')
			 .click(()=>{
				 alert('시집 클릭(시집 책리스트로 이동)');
				 list();
			 });
			 $(createLI({
				 id : 'smallgenre-category-1-2',
				 clazz : ''
			 })).appendTo('#active-1');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '에세이'
			 })).appendTo('#smallgenre-category-1-2')
			 .click(()=>{
				 alert('에세이 클릭(에세이 책리스트로 이동)');
			 });
			 $(createLI({
				 id : 'smallgenre-category-1-3',
				 clazz : ''
			 })).appendTo('#active-1');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '기타도서'
			 })).appendTo('#smallgenre-category-1-3')
			 .click(()=>{
				 alert('기타도서 클릭(기타도서 책리스트로 이동)');
			 });
		 });
		 // 전체메뉴 소설
		 $(createATag({
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '일반'
			 })).appendTo('#smallgenre-category-2-1')
			 .click(()=>{
				 alert('일반 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-2',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '로맨스'
			 })).appendTo('#smallgenre-category-2-2')
			 .click(()=>{
				 alert('로맨스 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-3',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '판타지'
			 })).appendTo('#smallgenre-category-2-3')
			 .click(()=>{
				 alert('판타지 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-4',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : 'BL'
			 })).appendTo('#smallgenre-category-2-4')
			 .click(()=>{
				 alert('BL 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-5',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '무협'
			 })).appendTo('#smallgenre-category-2-5')
			 .click(()=>{
				 alert('무협 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-6',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '추리/스릴러/미스터리'
			 })).appendTo('#smallgenre-category-2-6')
			 .click(()=>{
				 alert('추리/스릴러/미스터리 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-7',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-2-7')
			 .click(()=>{
				 alert('기타 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-2-8',
				 clazz : ''
			 })).appendTo('#active-2');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : 'SF소설'
			 })).appendTo('#smallgenre-category-2-8')
			 .click(()=>{
				 alert('SF소설 클릭');
			 });
		 });
		 // 전체메뉴 전기/회고록
		 $(createATag({
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '자서전'
			 })).appendTo('#smallgenre-category-3-1')
			 .click(()=>{
				 alert('자서전 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-3-2',
				 clazz : ''
			 })).appendTo('#active-3');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-3-2')
			 .click(()=>{
				 alert('기타 클릭');
			 });
		 });
		 // 전체메뉴 경영/경제/자기계발
		 $(createATag({
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '경영'
			 })).appendTo('#smallgenre-category-4-1')
			 .click(()=>{
				 alert('경영 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-4-2',
				 clazz : ''
			 })).appendTo('#active-4');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '경제'
			 })).appendTo('#smallgenre-category-4-2')
			 .click(()=>{
				 alert('경제 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-4-3',
				 clazz : ''
			 })).appendTo('#active-4');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '기타'
			 })).appendTo('#smallgenre-category-4-3')
			 .click(()=>{
				 alert('기타 클릭');
			 });
		 });
		 // 전체메뉴 인문사회
		 $(createATag({
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '인문'
			 })).appendTo('#smallgenre-category-5-1')
			 .click(()=>{
				 alert('인문 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-2',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '정치/사회'
			 })).appendTo('#smallgenre-category-5-2')
			 .click(()=>{
				 alert('정치/사회 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-3',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '역사'
			 })).appendTo('#smallgenre-category-5-3')
			 .click(()=>{
				 alert('역사 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-4',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '종교'
			 })).appendTo('#smallgenre-category-5-4')
			 .click(()=>{
				 alert('종교 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-5',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '예술/문화/기타'
			 })).appendTo('#smallgenre-category-5-5')
			 .click(()=>{
				 alert('예술/문화/기타 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-5-6',
				 clazz : ''
			 })).appendTo('#active-5');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : 'SF 장르'
			 })).appendTo('#smallgenre-category-5-6')
			 .click(()=>{
				 alert('SF 장르 클릭');
			 });
		 });
		 // 전체메뉴 기타
		 $(createATag({
			 id : '',
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
				 id : '',
				 clazz : '',
				 val : '과학'
			 })).appendTo('#smallgenre-category-6-1')
			 .click(()=>{
				 alert('인문 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-2',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '어린이/청소년'
			 })).appendTo('#li-smallgenre-category-6-2')
			 .click(()=>{
				 alert('어린이/청소년 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-3',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '진학/진로'
			 })).appendTo('#smallgenre-category-6-3')
			 .click(()=>{
				 alert('진학/진로 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-4',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '여행'
			 })).appendTo('#smallgenre-category-6-4')
			 .click(()=>{
				 alert('여행 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-5',
				 clazz : ''
			 })).appendTo('#active-6');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '가정/생활'
			 })).appendTo('#smallgenre-category-6-5')
			 .click(()=>{
				 alert('가정/생활 클릭');
			 });
			 
			 $(createLI({
				 id : 'smallgenre-category-6-6',
				 clazz : ''
			 })).appendTo('#active-26');
			 $(createATag({
				 id : '',
				 clazz : '',
				 val : '교재/참고서'
			 })).appendTo('#smallgenre-category-6-6')
			 .click(()=>{
				 alert('교재/참고서 장르 클릭');
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
			 alert('클릭 에세이!!');
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
			 alert('클릭 소설!!');
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
			 alert('전기/회고록 !!');
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
			 alert(' 인문사회!!');
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
			 alert('경영/경제/자기계발!!');
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
			 alert('기타 소설!!');
		 });
	 }
	 // 책 리스트 페이지로 넘어감
	 var list=()=>{
		 $.getScript(view,()=>{
			 $('#img-advertise').empty();
			 $('#div-container-2').empty();
			 $(createDiv({
				 id : 'div-categor-container',
				 clazz : 'category container'
			 })).appendTo('#div-container-2');
			 $(createDiv({
				 id : 'div-sidebar',
				 clazz : 'sidebar'
			 })).appendTo('#div-categor-container');
			 $(createDiv({
				 id : 'div-lnb',
				 clazz : 'lnb'
			 })).appendTo('#div-sidebar');
			 $(createUL({
				 id : 'ul-sidebar',
				 clazz : '',
				 role : ''
			 })).appendTo('#div-lnb');
			 $(createLI({
				 id : 'li-side-category-1',
				 clazz : 'depth1 active'
			 })).appendTo('#ul-sidebar');
			 $(createSpan({
				 id : 'span-side-category-1',
				 clazz : 'circle ic-horizontal'
			 })).appendTo('#li-side-category-1');
			 $(createATag({
				 id : 'a-side-category-1',
				 clazz : 'btn-parent',
				 val : '시·에세이'
			 })).appendTo('#li-side-category-1');
			 $(createSpan({
				 id : 'span-side-category-caret-right-1',
				 clazz : 'caret right'
			 })).appendTo('#a-side-category-1');
			 $(createUL({
				 id : 'ul-side-category-1'
			 })).appendTo('#li-side-category-1');
			 $(createLI({
				 id : 'li-side-category-1-1'
			 })).appendTo('#li-side-category-1');
		 });
	 };
	 return{onCreate:onCreate}
})();