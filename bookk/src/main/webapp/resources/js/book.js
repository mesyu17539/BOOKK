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
				 $(createImg({alt : '',src : 'http://blogfiles5.naver.net/MjAxNzEwMjlfMjI1/MDAxNTA5MjU0NzU4MjMy.Bqo0Ef7v6bVoq6tn4usEXDGTIwkT1J1fsXGxT-d3eCYg.sHR0QYGSceFWiD8_jF5NeZ1r6MSqvtqkcjvVWBsaxsQg.JPEG.sthisplusyt/Goroda_arhitektura_vsego_mira_9_30.jpg'})).appendTo('#main-img-advertise-1').attr('style','height: 450px; width:100%;')
				 .click(()=>{
					 alert('봄 클릭');
				 });
				 // 이미지 하단 버튼
				 $(createUL({id : 'main-img-btn-clearfix',clazz : ''})).attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;').appendTo('#main-advertise');
				 var temp = ['상우','두영','만호','정원'];
				 for(var i=0;i<temp.length;i++){
					 $(createLI({id:'li-wrap-dots-'+i+''})).appendTo('#main-img-btn-clearfix');
					 $(createATag({id : 'a-wrap-doat-'+i+'',val : ''})).appendTo('#li-wrap-dots-'+i+'');
					 $(createButton({id : 'btn-'+i+'',clazz : 'btn',val :temp[i]})).appendTo('#a-wrap-doat-'+i+'');
				 }
				 $('#btn-0').click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id :'main-img-advertise'})).appendTo('#wrap-main-advertise');
					 $(createATag({id :'a-img-1',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({src :'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'})).appendTo('#a-img-1').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('봄 클릭');
					 });
				 });
				 $('#btn-1').click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise'})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-2',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({src : 'http://cafefiles.naver.net/20120815_51/wltn3743_1344961625040n8zgh_JPEG/32.jpeg'})).appendTo('#a-img-2').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('여름 클릭');
					 });
				 });
				 $('#btn-2').click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise'})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-3',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({src : 'http://cafefiles.naver.net/20141024_221/duran011_1414101447080RxsoJ_JPEG/PicSpeed%2B-2071079421.jpg'})).appendTo('#a-img-3').attr('style','height: 450px; width:100%;')
					 .click(()=>{
						 alert('가을 클릭');
					 });
				 });
				 $('#btn-3').click(()=>{
					 $('#main-img-advertise').remove();
					 $(createLI({id : 'main-img-advertise'})).appendTo('#wrap-main-advertise');
					 $(createATag({id : 'a-img-4',val : ''})).appendTo('#main-img-advertise');
					 $(createImg({src : 'http://post.phinf.naver.net/MjAxNjEyMjhfMjUz/MDAxNDgyODkzMTQ5NTg3.huKPPgR7H7zTAqQGfv5cKJ_lfzHWBu6K-CDBVYGgE94g.GrchDz4KjXlABiHi_HUFDBYanYGJLXobf_iHr75HgZAg.JPEG/Iaj1bpuo8oXHpdZizTkVN7g_HF7E.jpg'})).appendTo('#a-img-4').attr('style','height: 450px; width:100%;')
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
				 $(createDiv({id:'left-ranking-content'})).appendTo('#div-left-ranking-content');
				 $(createDiv({id:'ranking-left-div'})).appendTo('#left-ranking-content');
				 $(createDiv({id:'ranking-left-cover'})).appendTo('#ranking-left-div');
				 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
				 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
				 $(createImg({id:'ranking-left-cover-img',src:d.book1[0].imageRoute})).appendTo('#ranking-left-book-cover');
				 $(createOL({id:'ranking-left-ol'})).appendTo('#ranking-left-div');
				 for(var i=1;i<=6;i++){
					 $(createLI({id:'ranking-left-li-'+i+''})).appendTo('#ranking-left-ol');
					 $(DcreateSpan({clazz:'index',val:i})).appendTo('#ranking-left-li-'+i+'');
					 $(createATag({id:'a-a-'+i+'',val:d.book1[i-1].bookName})).attr('class','ranking-left-title').appendTo('#ranking-left-li-'+i+'');
					 $(createATag({val:d.book1[i-1].writter})).attr('class','ranking-left-writter').appendTo('#ranking-left-li-'+i+'');
				 }
				 $('#ranking-left-li-1').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[0].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 $('#ranking-left-li-2').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[1].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 $('#ranking-left-li-3').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[2].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 $('#ranking-left-li-4').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[3].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 $('#ranking-left-li-5').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[4].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 $('#ranking-left-li-6').mouseover(()=>{
					 $('#ranking-left-a').remove();
					 $(createATag({id:'ranking-left-a',val:''})).appendTo('#ranking-left-cover');
					 $(createDiv({id:'ranking-left-book-cover',clazz:'book-cover'})).appendTo('#ranking-left-a');
					 $(createImg({id:'ranking-left-cover-img',src:d.book1[5].imageRoute})).appendTo('#ranking-left-book-cover');
				 });
				 
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
				 $(createDiv({id:'right-ranking-content'})).appendTo('#div-right-ranking-content');
				 $(createDiv({id:'ranking-right-div'})).appendTo('#right-ranking-content');
				 $(createDiv({id:'ranking-right-cover'})).appendTo('#ranking-right-div');
				 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
				 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
				 $(createImg({id:'ranking-right-cover-img',src:d.book2[0].imageRoute})).appendTo('#ranking-right-book-cover');
				 $(createOL({id:'ranking-right-ol'})).appendTo('#ranking-right-div');
				 for(var i=1;i<=6;i++){
					 $(createLI({id:'ranking-right-li-'+i+''})).appendTo('#ranking-right-ol');
					 $(DcreateSpan({clazz:'index',val:i})).appendTo('#ranking-right-li-'+i+'');
					 $(createATag({id:'a-a-'+i+'',val:d.book2[i-1].bookName})).attr('class','ranking-right-title').appendTo('#ranking-right-li-'+i+'');
					 $(createATag({val:d.book2[i-1].writter})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
				 }
				 $('#ranking-right-li-1').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[0].imageRoute})).appendTo('#ranking-right-book-cover');
				 });
				 $('#ranking-right-li-2').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[1].imageRoute})).appendTo('#ranking-right-book-cover');
				 });
				 $('#ranking-right-li-3').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[2].imageRoute})).appendTo('#ranking-right-book-cover');
				 });
				 $('#ranking-right-li-4').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[3].imageRoute})).appendTo('#ranking-right-book-cover');
				 });
				 $('#ranking-right-li-5').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[4].imageRoute})).appendTo('#ranking-right-book-cover');
				 });
				 $('#ranking-right-li-6').mouseover(()=>{
					 $('#ranking-right-a').remove();
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[5].imageRoute})).appendTo('#ranking-right-book-cover');
				 });

				 $('#a-right-ranking-0').click(e=>{
					 e.preventDefault();
					 $('#ranking-right-div').remove();
					 $(createDiv({id:'ranking-right-div'})).appendTo('#right-ranking-content');
					 $(createDiv({id:'ranking-right-cover'})).appendTo('#ranking-right-div');
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book2[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 $(createOL({id:'ranking-right-ol'})).appendTo('#ranking-right-div');
					 for(var i=1;i<=6;i++){
						 $(createLI({id:'ranking-right-li-'+i+''})).appendTo('#ranking-right-ol');
						 $(DcreateSpan({clazz:'index',val:i})).appendTo('#ranking-right-li-'+i+'');
						 $(createATag({id:'a-a-'+i+'',val:d.book2[i-1].bookName})).attr('class','ranking-right-title').appendTo('#ranking-right-li-'+i+'');
						 $(createATag({val:d.book2[i-1].writter})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
					 }
					 $('#ranking-right-li-1').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-2').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[1].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-3').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[2].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-4').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[3].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-5').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[4].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-6').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book2[5].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
				 });
				 $('#a-right-ranking-1').click(e=>{
					 e.preventDefault();
					 $('#ranking-right-div').remove();
					 $(createDiv({id:'ranking-right-div'})).appendTo('#right-ranking-content');
					 $(createDiv({id:'ranking-right-cover'})).appendTo('#ranking-right-div');
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book3[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 $(createOL({id:'ranking-right-ol'})).appendTo('#ranking-right-div');
					 for(var i=1;i<=6;i++){
						 $(createLI({id:'ranking-right-li-'+i+''})).appendTo('#ranking-right-ol');
						 $(DcreateSpan({clazz:'index',val:i})).appendTo('#ranking-right-li-'+i+'');
						 $(createATag({id:'a-a-'+i+'',val:d.book3[i-1].bookName})).attr('class','ranking-right-title').appendTo('#ranking-right-li-'+i+'');
						 $(createATag({val:d.book3[i-1].writter})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
					 }
					 $('#ranking-right-li-1').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-2').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[1].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-3').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[2].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-4').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[3].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-5').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[4].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-6').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book3[5].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
				 });
				 $('#a-right-ranking-2').click(e=>{
					 e.preventDefault();
					 $('#ranking-right-div').remove();
					 $(createDiv({id:'ranking-right-div'})).appendTo('#right-ranking-content');
					 $(createDiv({id:'ranking-right-cover'})).appendTo('#ranking-right-div');
					 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
					 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
					 $(createImg({id:'ranking-right-cover-img',src:d.book5[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 $(createOL({id:'ranking-right-ol'})).appendTo('#ranking-right-div');
					 for(var i=1;i<=6;i++){
						 $(createLI({id:'ranking-right-li-'+i+''})).appendTo('#ranking-right-ol');
						 $(DcreateSpan({clazz:'index',val:i})).appendTo('#ranking-right-li-'+i+'');
						 $(createATag({id:'a-a-'+i+'',val:d.book5[i-1].bookName})).attr('class','ranking-right-title').appendTo('#ranking-right-li-'+i+'');
						 $(createATag({val:d.book5[i-1].writter})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
					 }
					 $('#ranking-right-li-1').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[0].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-2').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[1].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-3').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[2].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-4').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[3].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-5').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[4].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
					 $('#ranking-right-li-6').mouseover(()=>{
						 $('#ranking-right-a').remove();
						 $(createATag({id:'ranking-right-a',val:''})).appendTo('#ranking-right-cover');
						 $(createDiv({id:'ranking-right-book-cover',clazz:'book-cover'})).appendTo('#ranking-right-a');
						 $(createImg({id:'ranking-right-cover-img',src:d.book5[5].imageRoute})).appendTo('#ranking-right-book-cover');
					 });
				 });
				 
				 //시 에세이
				 $(createDiv({id:'div-section-category',clazz:'section-category'})).appendTo('#div-container-2');
				 $(createDiv({id:'div-section-category-1'})).appendTo('#div-section-category');
				 var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
				 for(var i= 0; i<6; i++){
					 $(createDiv({id:'div-book-header-'+i+'',clazz:'widget-header'})).appendTo('#div-section-category-1');
					 $(createHTag({size:'3',clazz:'widget-title',val:temp[i]})).appendTo('#div-book-header-'+i+'');
					 $(createATag({id:'a-move-list-'+i+'',val:'더보기'})).appendTo('#div-book-header-'+i+'').attr('class','more');
					 $(createDiv({id:'div-category-list-'+i+'',clazz:'widget-content book-list clearfix'})).appendTo('#div-section-category-1');
					 $(createDiv({id:'div-book-item-'+i+'',clazz:'book-item'})).appendTo('#div-category-list-'+i+'');
					 $(createATag({id:'a-book-item-0-'+i+'',val:''})).appendTo('#div-book-item-0').attr('class','a-book-cover a-book-cover-0').attr('value',d.book1[i].bookNum);
					 $(createDiv({id:'div-book-cover-0-'+i+'',clazz:'book-cover'})).appendTo('#a-book-item-0-'+i+'');
					 $(createImg({src:d.book1[i].imageRoute})).appendTo('#div-book-cover-0-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-0-'+i+'');
					 $(createDivVal({id:'div-book-name-0-'+i+'',clazz:'book-title book-title-0',val:d.book1[i].bookName})).appendTo('#a-book-item-0-'+i+'');
					 $(createDivVal({id:'div-book-writter-0-'+i+'',clazz:'book-author',val:d.book1[i].writter})).appendTo('#a-book-item-0-'+i+''); 
				 	}
				 
				 //메인페이지 더보기 클릭
				 
				 $('#a-move-list-0').click(()=>{
					 var g = {large:$('#store-category-0').text()};
					 $.ajax({
							url:x.context+'/bookGenreLargeList',
							method:'POST',
							data:JSON.stringify({large:g.large}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({
									large:g.large,
									count:d.count,
									largeList:d.largeList,
									context:x.context});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 $('#a-move-list-1').click(()=>{
					 var g = {large:$('#store-category-1').text()};
					 $.ajax({
							url:x.context+'/bookGenreLargeList',
							method:'POST',
							data:JSON.stringify({large:g.large}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({
									large:g.large,
									count:d.count,
									largeList:d.largeList,
									context:x.context});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 for(var i=0;i<6;i++){ 
					 $(createATag({id:'a-book-item-1-'+i+'',val:''})).appendTo('#div-book-item-1').attr('class','a-book-cover a-book-cover-1').attr('value',d.book2[i].bookNum);
					 $(createDiv({id:'div-book-cover-1-'+i+'',clazz:'book-cover book-cover-1'})).appendTo('#a-book-item-1-'+i+'');
					 $(createImg({src:d.book2[i].imageRoute})).appendTo('#div-book-cover-1-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-1-'+i+'');
					 $(createDivVal({id:'div-book-name-1-'+i+'',clazz:'book-title',val:d.book2[i].bookName})).appendTo('#a-book-item-1-'+i+'');
					 $(createDivVal({id:'div-book-writter-1-'+i+'',clazz:'book-author',val:d.book2[i].writter})).appendTo('#a-book-item-1-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-2-'+i+'',val:''})).appendTo('#div-book-item-2').attr('class','a-book-cover a-book-cover-2').attr('value',d.book3[i].bookNum);
					 $(createDiv({id:'div-book-cover-2-'+i+'',clazz:'book-cover book-cover-2'})).appendTo('#a-book-item-2-'+i+'');
					 $(createImg({src:d.book3[i].imageRoute})).appendTo('#div-book-cover-2-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-2-'+i+'');
					 $(createDivVal({id:'div-book-name-2-'+i+'',clazz:'book-title',val:d.book3[i].bookName})).appendTo('#a-book-item-2-'+i+'');
					 $(createDivVal({id:'div-book-writter-2-'+i+'',clazz:'book-author',val:d.book3[i].writter})).appendTo('#a-book-item-2-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-3-'+i+'',val:''})).appendTo('#div-book-item-3').attr('class','a-book-cover a-book-cover-3').attr('value',d.book4[i].bookNum);
					 $(createDiv({id:'div-book-cover-3-'+i+'',clazz:'book-cover book-cover-3'})).appendTo('#a-book-item-3-'+i+'');
					 $(createImg({src:d.book4[i].imageRoute})).appendTo('#div-book-cover-3-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-3-'+i+'');
					 $(createDivVal({id:'div-book-name-3-'+i+'',clazz:'book-title',val:d.book4[i].bookName})).appendTo('#a-book-item-3-'+i+'');
					 $(createDivVal({id:'div-book-writter-3-'+i+'',clazz:'book-author',val:d.book4[i].writter})).appendTo('#a-book-item-3-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-4-'+i+'',val:''})).appendTo('#div-book-item-4').attr('class','a-book-cover a-book-cover-4').attr('value',d.book5[i].bookNum);
					 $(createDiv({id:'div-book-cover-4-'+i+'',clazz:'book-cover book-cover-4'})).appendTo('#a-book-item-4-'+i+'');
					 $(createImg({src:d.book5[i].imageRoute})).appendTo('#div-book-cover-4-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-4-'+i+'');
					 $(createDivVal({id:'div-book-name-4-'+i+'',clazz:'book-title',val:d.book5[i].bookName})).appendTo('#a-book-item-4-'+i+'');
					 $(createDivVal({id:'div-book-writter-4-'+i+'',clazz:'book-author',val:d.book5[i].writter})).appendTo('#a-book-item-4-'+i+''); 
				 }
				 for(var i=0;i<6;i++){
					 $(createATag({id:'a-book-item-5-'+i+'',val:''})).appendTo('#div-book-item-5').attr('class','a-book-cover a-book-cover-5').attr('value',d.book6[i].bookNum);
					 $(createDiv({id:'div-book-cover-5-'+i+'',clazz:'book-cover book-cover-5'})).appendTo('#a-book-item-5-'+i+'');
					 $(createImg({src:d.book6[i].imageRoute})).appendTo('#div-book-cover-5-'+i+'');
					 $(createDiv({clazz:'book-deco'})).appendTo('#div-book-cover-5-'+i+'');
					 $(createDivVal({id:'div-book-name-5-'+i+'',clazz:'book-title',val:d.book6[i].bookName})).appendTo('#a-book-item-5-'+i+'');
					 $(createDivVal({id:'div-book-writter-5-'+i+'',clazz:'book-author',val:d.book6[i].writter})).appendTo('#a-book-item-5-'+i+''); 
				 }

				 $('.a-book-cover-0').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 	});
				 
				 $('.a-book-cover-1').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 $('.a-book-cover-2').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 $('.a-book-cover-3').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 $('.a-book-cover-4').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
				 
				 $('.a-book-cover-5').on('click',function(){
					 $('#div-advertise').remove();
					 var bookList = $(this).attr('value');
					 $.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
				 });
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
						 $('#detail-container').remove();
						 var g = {small:$('#ca-1-0').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-1-1').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-1-1').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-1-2').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-1-2').text(), large:$('#large-category-0').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
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
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-0').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-1').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-1').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-2').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-2').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-3').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-3').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-4').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-4').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-5').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-5').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-6').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-6').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
								},
								error : (x,h,m)=>{
									alert('검색 실패 x='+x+', h='+h+', m='+m);
								}
								});
					 });
					 $('#ca-2-7').click(()=>{
						 $('#detail-container').remove();
						 var g = {small:$('#ca-2-7').text(), large:$('#large-category-1').text()};
						 $.ajax({
								url:x.context+'/bookGenreSmallList',
								method:'POST',
								data:JSON.stringify({small:g.small}),
								dataType:'json',
								contentType:'application/json',
								success:d=>{
									book.main.list({small:g.small,largeList:d.smallList,large:g.large,count:d.count,context:x.context});
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
					 $('#detail-container').remove();
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
					 $('#detail-container').remove();
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
					 $(createUL({id:'sidebar-lnb'})).appendTo('#sidebar');
					 temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
					 for(var i = 0; i<=5; i++){
						 $(createLI({id : 'depth-'+i+'',clazz : 'depth1'})).appendTo('#sidebar-lnb');
						 $(createATag({val :'-&nbsp;&nbsp;'+temp[i], id : 'btn-parent-'+i+''})).appendTo('#depth-'+i+'');
						 $(createUL({id : 'ul-lnb-'+i+'',clazz:'ul-lnb-small'})).attr('style','display:none;').appendTo('#depth-'+i+'');
					 }
					 temp = ['시집','에세이','기타도서']
					 for(var i = 0; i<=2; i++){
						 $(createLI({id:'li-lnb-0-'+i+''})).appendTo('#ul-lnb-0');
						 $(createATag({id:'a-lnb-0-'+i+'',val:temp[i]})).appendTo('#li-lnb-0-'+i+''); 
					 }
					 $('#btn-parent-0').click(e=>{
						 e.preventDefault();
						 $('#ul-lnb-0').toggle();
						 $('#a-lnb-0-0').click(()=>{
							 var g = {small:$('#a-lnb-0-0').text(), large:$('#store-category-0').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-0-1').click(()=>{
							 var g = {small:$('#a-lnb-0-1').text(), large:$('#store-category-0').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-0-2').click(()=>{
							 var g = {small:$('#a-lnb-0-2').text(), large:$('#store-category-0').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
					 });
					 
					 temp = ['일반','로맨스','판타지','BL','무협','추리/스릴러/미스터리','기타','SF소설']
					 for(var i = 0; i<=7; i++){
						 $(createLI({id:'li-lnb-1-'+i+''})).appendTo('#ul-lnb-1');
						 $(createATag({id:'a-lnb-1-'+i+'',val:temp[i]})).appendTo('#li-lnb-1-'+i+'');
					 }
					 $('#btn-parent-1').click(e=>{
						 e.preventDefault();
						 $('#ul-lnb-1').toggle();
						 $('#a-lnb-1-0').click(()=>{
							 var g = {small:$('#a-lnb-1-0').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-1').click(()=>{
							 var g = {small:$('#a-lnb-1-1').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-2').click(()=>{
							 var g = {small:$('#a-lnb-1-2').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-3').click(()=>{
							 var g = {small:$('#a-lnb-1-3').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-4').click(()=>{
							 var g = {small:$('#a-lnb-1-4').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-5').click(()=>{
							 var g = {small:$('#a-lnb-1-5').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-6').click(()=>{
							 var g = {small:$('#a-lnb-1-6').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
									error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							 });
						 });
						 $('#a-lnb-1-7').click(()=>{
							 var g = {small:$('#a-lnb-1-7').text(), large:$('#store-category-1').text()};
							 $.ajax({
									url:x.context+'/bookGenreSmallList',
									method:'POST',
									data:JSON.stringify({small:g.small}),
									dataType:'json',
									contentType:'application/json',
									success:d=>{book.main.list({context:x.context,largeList:d.smallList,count:d.count,small:g.small,large:g.large});},
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
					 $('#a-main-move').click(()=>{
						 book.main.bookContent(x);
						 book.main.bookNav(x);
					 });
					 $(createATag({id : 'a-largegenre-move',val : x.large})).appendTo('#location')
					 .click(()=>{
						 var g = {large:x.large};
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
					 if(x.small == null){
					 }else{
						 $(createATag({val : ' > '+x.small})).appendTo('#location');
					 }
					 $(createDiv({id:'list-section'})).appendTo('#main');
					 $(createDiv({id:'list-section-header'})).appendTo('#list-section');
					 if(x.small == null){
						 $(createHTag({size:'2',val:x.large})).appendTo('#list-section-header').attr('class','list-section-title');
					 }else{
						 $(createHTag({size:'2',val:x.small})).appendTo('#list-section-header').attr('class','list-section-title');
					 }
					 $(DcreateSpan({id:'list-section-title-span',val:'&nbsp;&nbsp;&nbsp;추천도서'})).appendTo('.list-section-title');
					 
					 //책 리스트
					 $(createDiv({id :'list-content'})).appendTo('#main');
					 $(createDiv({id :'list-content-header'})).appendTo('#list-content');
					 if(x.small == null){
						 $(createHTag({size : '4',val : x.large})).appendTo('#list-content-header');
					 }else{
						 $(createHTag({size : '4',val : x.small})).appendTo('#list-content-header');
					 }
					 $(createP({val : '&nbsp;&nbsp;-'+x.count+'권의 책이 검색 되었습니다.'})).appendTo('#list-content-header');
					 $(createDiv({id : 'btn-group-sub-nav'})).appendTo('#list-content-header');
					 $(createDiv({id : 'btn-group-sub-nav-1'})).appendTo('#btn-group-sub-nav');
					 $(createATag({id : 'a-group-sub-nav-new',val : '최신순'})).appendTo('#btn-group-sub-nav-1').attr('class','active')
					 .click(()=>{
						 $('#a-group-sub-nav-name').removeAttr('class');
						 $('#a-group-sub-nav-new').attr('class','active');
					 });
					 $(createATag({id :'a-group-sub-nav-name',val : '제목순'})).appendTo('#btn-group-sub-nav-1')
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
						 $(createATag({val:x.largeList[i].bookName})).appendTo('.list-right-htag-'+i+'').attr('value',x.largeList[i].bookNum).attr('class','a-list-name');
						 $(createDiv({id:'list-right-div-'+i+'',clazz:'product-meta'})).appendTo('#list-right-td-'+i+'');
						 $(DcreateSpan({id:'list-right-span-'+i+'',val:'저자 ',clazz:'list-right-span'})).appendTo('#list-right-div-'+i+'');
						 $(createATag({id:'list-right-writter-a-'+i+'',val:x.largeList[i].writter})).appendTo('#list-right-span-'+i+'');
						 $(DcreateSpan({val:x.largeList[i].publisher+'  ',clazz:'list-right-publisher'})).appendTo('#list-right-div-'+i+'');
						 $(DcreateSpan({val:x.largeList[i].publishingDate,clazz:'list-right-span last'})).appendTo('#list-right-div-'+i+'');
						 $(createDiv({id:'list-right-price-div-'+i+'',clazz:'product-price'})).appendTo('#list-right-td-'+i+'');
						 $(createStrong({val:x.largeList[i].price})).appendTo('#list-right-price-div-'+i+'');
						 $(DcreateSpan({val:'원',clazz:'currency'})).appendTo('#list-right-price-div-'+i+'');
						 $(createForm({id:'list-right-form-'+i+'',clazz:'btn-group'})).appendTo('#list-right-td-'+i+'');
						 $(createButton({id:'btn-cart-'+i+'',clazz:'btn btn-primary fas fa-shopping-cart',val:'&nbsp;&nbsp;장바구니'})).attr('value',x.largeList[i].bookNum).appendTo('#list-right-form-'+i+'');
						 $(createButton({clazz:'btn btn-primary fas fa-arrow-right',val:'&nbsp;&nbsp;바로구매'})).appendTo('#list-right-form-'+i+'');
						 $(createButton({clazz:'btn btn-primary far fa-heart',val:'&nbsp;&nbsp;찜하기'})).appendTo('#list-right-form-'+i+'');
					 }
					 
					 
					 $('.fa-shopping-cart').on('click',function(){
						 $(this).attr('value')
						 alert($(this).attr('value'));
						 });
					 $('.a-list-name').on('click',function(){
						var bookList = $(this).attr('value');
						$.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								console.log(d.bookList[0].bookName);
								alert(d.bookList[0].bookName);
								book.main.detail({
													imageRoute:d.bookList[0].imageRoute,
													bookName:d.bookList[0].bookName,
													price:d.bookList[0].price,
													largeGenre:d.bookList[0].largeGenre,
													smallGenre:d.bookList[0].smallGenre,
													writter:d.bookList[0].writter,
													publisher:d.bookList[0].publisher,
													publishingDate:d.bookList[0].publishingDate,
													context:x.context
													});
								},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
							});
					 });
					 },
			detail:x=>{
				$('#div-list-container').remove();
				$(createDiv({id:'detail-container',clazz:'container'})).appendTo('#category-bar-container');
				$(createDiv({id:'detail-wrap-product'})).appendTo('#detail-container');
				$(createDiv({id:'detail-clearfix'})).appendTo('#detail-wrap-product');
				$(createDiv({id:'detail-left-product'})).appendTo('#detail-clearfix');
				$(createImg({src:x.imageRoute})).appendTo('#detail-left-product');
				$(createDiv({id:'detail-right-product'})).appendTo('#detail-clearfix');
				$(createHTag({size:'1',val:x.bookName})).appendTo('#detail-right-product');
				$(createDiv({id:'detail-wrap-price'})).appendTo('#detail-right-product');
				$(createDiv({id:'detail-price'})).appendTo('#detail-wrap-price');
				$(createStrong({val:x.price+'&nbsp;원'})).appendTo('#detail-price');
				$(createDiv({id:'detail-sns'})).appendTo('#detail-wrap-price');
				$(createATag({val:''})).attr('class','fab fa-facebook').attr('href','https://www.facebook.com/').appendTo('#detail-sns');
				$(createATag({val:''})).attr('class','fab fa-twitter').attr('href','https://twitter.com/').appendTo('#detail-sns');
				$(createATag({val:''})).attr('class','fas fa-envelope-square').attr('href','https://accounts.google.com/').appendTo('#detail-sns');
				$(createDiv({id:'detail-wrap-alert'})).appendTo('#detail-right-product');
				$(createUL({id:'detail-ul-alert'})).appendTo('#detail-wrap-alert');
				$(createLI({id:'detail-li-alert-1'})).appendTo('#detail-ul-alert');
				$(createLI({id:'detail-li-alert-2'})).appendTo('#detail-ul-alert');
				$(createHTag({size:'6',val:'배송일 : 영업일 기준 2-8일 내로 배송됩니다.'})).appendTo('#detail-li-alert-1');
				$(createHTag({size:'6',val:'배송일 : 환불규정 : 주문 후 인쇄되므로 배송이 준비된 후에는 환불이 불가능합니다'})).attr('style','color:red;').appendTo('#detail-li-alert-2');
				$(createDiv({id:'detail-wrap-form'})).appendTo('#detail-right-product');
				$(createDiv({id:'detail-book-form'})).appendTo('#detail-wrap-form');
				$(createLabel({clazz:'label',val:'도서 정보'})).appendTo('#detail-book-form');
				$(createTable({id:'detail-table-form'})).appendTo('#detail-book-form');
				for(var i=0;i<6;i++){
					$(createTr({id:'detail-tr-'+i+''})).appendTo('#detail-table-form');
				}
				$(DcreateTh({val:'분야'})).appendTo('#detail-tr-0');
				$(DcreateTd({val:x.largeGenre+'&nbsp;>&nbsp;'+x.smallGenre})).appendTo('#detail-tr-0');
				$(DcreateTh({val:'작가'})).appendTo('#detail-tr-1');
				$(DcreateTd({val:x.writter})).appendTo('#detail-tr-1');
				$(DcreateTh({val:'출판형태'})).appendTo('#detail-tr-2');
				$(DcreateTd({val:'종이책'})).appendTo('#detail-tr-2');
				$(DcreateTh({val:'판형'})).appendTo('#detail-tr-3');
				$(DcreateTd({val:'A5'})).appendTo('#detail-tr-3');
				$(DcreateTh({val:'출판사'})).appendTo('#detail-tr-4');
				$(DcreateTd({val:x.publisher})).appendTo('#detail-tr-4');
				$(DcreateTh({val:'출판일'})).appendTo('#detail-tr-5');
				$(DcreateTd({val:x.publishingDate})).appendTo('#detail-tr-5');
				$(createDiv({id:'detail-count-form'})).appendTo('#detail-wrap-form');
				$(createDiv({id:'detail-select-count'})).appendTo('#detail-count-form');
				$(createLabel({clazz:'label',val:'갯수 선택'})).appendTo('#detail-select-count');
				$(createInput({type:'button',id:'detail-book-count'})).attr('value','1').appendTo('#detail-select-count');
				$('#detail-book-count').spinner();
				$('.ui-spinner-button ').addClass('btn-book-count');
				$('.btn-book-count').click(()=>{
					var total = ((x.price * 1)*($('#detail-book-count').spinner("value")));
					$('#detail-wrap-total-price').empty();
					$(createDiv({id:'detail-wrap-total-price'})).appendTo('#detail-right-product');
					$(DcreateSpan({id:'detail-span-total',val:'총 금액'})).appendTo('#detail-wrap-total-price');
					$(DcreateSpan({id:'',clazz:'total-count-price',val:total})).appendTo('#detail-wrap-total-price');
					$(DcreateSpan({id:'',val:'원'})).appendTo('#detail-wrap-total-price');
				});
				$(createDiv({id:'detail-wrap-total-price'})).appendTo('#detail-right-product');
				$(DcreateSpan({id:'detail-span-total',val:'총 금액'})).appendTo('#detail-wrap-total-price');
				$(DcreateSpan({id:'',clazz:'total-count-price',val:x.price})).appendTo('#detail-wrap-total-price');
				$(DcreateSpan({id:'',val:'원'})).appendTo('#detail-wrap-total-price');
				$(createDiv({id:'detail-wrap-btn'})).appendTo('#detail-right-product');
				$(createButton({clazz:'btn btn-primary fas fa-shopping-cart',val:'&nbsp;&nbsp;장바구니'})).appendTo('#detail-wrap-btn');
				$(createButton({clazz:'btn btn-primary fas fa-arrow-right',val:'&nbsp;&nbsp;구매하기'})).appendTo('#detail-wrap-btn');
			}
}