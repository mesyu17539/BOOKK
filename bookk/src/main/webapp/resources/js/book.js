var book=book || {};
var doo=JSON.parse(sessionStorage.getItem('user'));
book.main={
	setContentView:x=>{
		book.main.bookNav(x);
		 book.main.bookContent(x);
		 
	},
	bookContent:x=>{		
	//DB 연결
		$.getJSON(x.context+'/bookMain', d=>{
			
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
				clazz : '',val : ''
			})).appendTo('#main-img-advertise');
			$(createImg({
				alt : '',
				src : 'http://blogfiles5.naver.net/MjAxNzEwMjlfMjI1/MDAxNTA5MjU0NzU4MjMy.Bqo0Ef7v6bVoq6tn4usEXDGTIwkT1J1fsXGxT-d3eCYg.sHR0QYGSceFWiD8_jF5NeZ1r6MSqvtqkcjvVWBsaxsQg.JPEG.sthisplusyt/Goroda_arhitektura_vsego_mira_9_30.jpg'
			})).appendTo('#main-img-advertise-1').attr('style','height: 450px; width:100%;')
			.click(()=>{
				alert('봄 클릭');
			});
				 // 이미지 하단 버튼
			$(createUL({
				id : 'main-img-btn-clearfix',
				clazz : ''
			})).attr('style','padding:0px;margin-top:0px;margin-bottom: 0px;').appendTo('#main-advertise');
			var temp = ['상우','두영','만호','정원'];
			for(var i=0;i<temp.length;i++){
				$(createLI({
					id:'li-wrap-dots-'+i+''
				})).appendTo('#main-img-btn-clearfix');
				$(createATag({
					id : 'a-wrap-doat-'+i+'',
					val : ''
				})).appendTo('#li-wrap-dots-'+i+'');
				$(createButton({
					id : 'btn-'+i+'',
					clazz : 'btn',
					val :temp[i]
				})).appendTo('#a-wrap-doat-'+i+'');
			}
			$('#btn-0').click(e=>{
				e.preventDefault();
				$('#main-img-advertise').remove();
				$(createLI({
					id :'main-img-advertise'
				})).appendTo('#wrap-main-advertise');
				$(createATag({
					id :'a-img-1',
					val : ''
				})).appendTo('#main-img-advertise');
				$(createImg({
					src :'http://kinimage.naver.net/20170816_266/1502847836577fOR57_JPEG/1502847836389.jpg'
				})).appendTo('#a-img-1').attr('style','height: 450px; width:100%;')
				.click(()=>{
					alert('봄 사진 클릭!');
				});
			});
			$('#btn-1').click(e=>{
				e.preventDefault();
				$('#main-img-advertise').remove();
				$(createLI({
					id : 'main-img-advertise'
				})).appendTo('#wrap-main-advertise');
				$(createATag({
					id : 'a-img-2',
					val : ''
				})).appendTo('#main-img-advertise');
				$(createImg({
					src : 'http://cafefiles.naver.net/20120815_51/wltn3743_1344961625040n8zgh_JPEG/32.jpeg'
				})).appendTo('#a-img-2').attr('style','height: 450px; width:100%;')
				.click(()=>{
					alert('여름 사진 클릭!');
				});
			});
			$('#btn-2').click(e=>{
				e.preventDefault();
				$('#main-img-advertise').remove();
				$(createLI({
					id : 'main-img-advertise'
				})).appendTo('#wrap-main-advertise');
				$(createATag({
					id : 'a-img-3',
					val : ''
				})).appendTo('#main-img-advertise');
				$(createImg({
					src : 'http://cafefiles.naver.net/20141024_221/duran011_1414101447080RxsoJ_JPEG/PicSpeed%2B-2071079421.jpg'
				})).appendTo('#a-img-3').attr('style','height: 450px; width:100%;')
				.click(()=>{
					alert('가을 사진 클릭!');
				});
			});
			$('#btn-3').click(e=>{
				e.preventDefault();
				$('#main-img-advertise').remove();
				$(createLI({
					id : 'main-img-advertise'
				})).appendTo('#wrap-main-advertise');
				$(createATag({
					id : 'a-img-4',
					val : ''
				})).appendTo('#main-img-advertise');
				$(createImg({
					src : 'http://post.phinf.naver.net/MjAxNjEyMjhfMjUz/MDAxNDgyODkzMTQ5NTg3.huKPPgR7H7zTAqQGfv5cKJ_lfzHWBu6K-CDBVYGgE94g.GrchDz4KjXlABiHi_HUFDBYanYGJLXobf_iHr75HgZAg.JPEG/Iaj1bpuo8oXHpdZizTkVN7g_HF7E.jpg'
				})).appendTo('#a-img-4').attr('style','height: 450px; width:100%;')
				.click(()=>{
					alert('겨울 사진 클릭!');
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
			var temp = ['http://www.bookk.co.kr/img/banner/banner33.png','http://www.bookk.co.kr/img/banner/banner46.png','http://www.bookk.co.kr/img/banner/banner45.png'];
			for(var i=0; i<3; i++){
				$(createDiv({
					id:'div-ad-item-'+i+'',
					clazz:'ad-item ad-'+i+''
				})).appendTo('#div-section-ad');
				$(createATag({
					id:'a-ad-item-'+i+'',
					val:''
				})).appendTo('#div-ad-item-'+i+'');
				$(createImg({
					src:temp[i]
				})).appendTo('#a-ad-item-'+i+'');
			}
			$('#a-ad-item-0').click(e=>{
				e.preventDefault();
				alert('하단 광고 이미지 1번 클릭!');
			});
			$('#a-ad-item-1').click(e=>{
				e.preventDefault();
				alert('하단 광고 이미지 2번 클릭!');
			});
			$('#a-ad-item-2').click(e=>{
				e.preventDefault();
				alert('하단 광고 이미지 3번 클릭!');
			});
			//랭킹
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
				val : '최신 책'
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
			var temp = ['종이책','전자책','무료책'];
			for(var i=0;i<3;i++){
				$(createLI({
					id:'li-left-ranking-'+i+'',
					clazz:'active'
				})).appendTo('#ul-left-ranking');
				$(createATag({
					id:'a-left-ranking-'+i+'',
					val:temp[i]
				})).appendTo('#li-left-ranking-'+i+'');
			}
			$(createDiv({
				id:'left-ranking-content'
			})).appendTo('#div-left-ranking-content');
			$(createDiv({
				id:'ranking-left-div'
			})).appendTo('#left-ranking-content');
			$(createDiv({
				id:'ranking-left-cover'
			})).appendTo('#ranking-left-div');
			$(createATag({
				id:'ranking-left-a',val:''
			})).appendTo('#ranking-left-cover');
			$(createDiv({
				id:'ranking-left-book-cover',
				clazz:'book-cover'
			})).appendTo('#ranking-left-a');
			$(createImg({
				id:'ranking-left-cover-img',
				src:d.bookNewRanking[0].imageRoute
			})).appendTo('#ranking-left-book-cover');
			$(createOL({
				id:'ranking-left-ol'
			})).appendTo('#ranking-left-div');
			for(var i=1;i<=6;i++){
				$(createLI({
					id:'ranking-left-li-'+i+''
				})).appendTo('#ranking-left-ol');
				$(DcreateSpan({
					clazz:'index',
					val:i
				})).appendTo('#ranking-left-li-'+i+'');
				$(createATag({
					id:'a-a-'+i+'',
					val:d.bookNewRanking[i-1].bookName
				})).attr('class','ranking-left-title').attr('value',d.bookNewRanking[i-1].bookNum).appendTo('#ranking-left-li-'+i+'');
				$(createATag({
					val:d.bookNewRanking[i-1].writter
				})).attr('class','ranking-left-writter').appendTo('#ranking-left-li-'+i+'');
			}
			$('#ranking-left-li-1').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover')
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[0].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('#ranking-left-li-2').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover');
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[1].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('#ranking-left-li-3').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover');
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[2].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('#ranking-left-li-4').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover');
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[3].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('#ranking-left-li-5').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover');
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[4].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('#ranking-left-li-6').mouseover(()=>{
				$('#ranking-left-a').remove();
				$(createATag({
					id:'ranking-left-a',
					val:''
				})).appendTo('#ranking-left-cover');
				$(createDiv({
					id:'ranking-left-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-left-a');
				$(createImg({
					id:'ranking-left-cover-img',
					src:d.bookNewRanking[5].imageRoute
				})).appendTo('#ranking-left-book-cover');
			});
			$('.ranking-left-title').on('click',function(){
				var bookList = $(this).attr('value');
				$.ajax({
					url:x.context+'/bookDetail',
					method:'POST',
					data:JSON.stringify({bookList:bookList}),
					dataType:'json',
					contentType:'application/json',
					success:d=>{
						book.main.detail({
							bookNum:d.bookList[0].bookNum,
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
			$('#a-left-ranking-1').click(()=>{
				alert('전자책클릭!');
			});
			$('#a-left-ranking-2').click(()=>{
				alert('무료책클릭!');
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
				clazz : 'nav nav-tabs-vertical'
			})).appendTo('#div-right-ranking-content');
			var temp = ['주간','월간','전체'];
			for(var i=0;i<3;i++){
				$(createLI({
					id:'li-right-ranking-'+i+'',
					clazz:'active'
				})).appendTo('#ul-right-ranking');
				$(createATag({
					id:'a-right-ranking-'+i+'',
					val:temp[i]
				})).appendTo('#li-right-ranking-'+i+'');
			}
			$(createDiv({
				id:'right-ranking-content'
			})).appendTo('#div-right-ranking-content');
			$(createDiv({
				id:'ranking-right-div'
			})).appendTo('#right-ranking-content');
			$(createDiv({
				id:'ranking-right-cover'
			})).appendTo('#ranking-right-div');
			$(createATag({
				id:'ranking-right-a',
				val:''
			})).appendTo('#ranking-right-cover');
			$(createDiv({
				id:'ranking-right-book-cover',
				clazz:'book-cover'
			})).appendTo('#ranking-right-a');
			$(createImg({
				id:'ranking-right-cover-img',
				src:d.bookWeekRanking[0].imageRoute
			})).appendTo('#ranking-right-book-cover');
			$(createOL({
				id:'ranking-right-ol'
			})).appendTo('#ranking-right-div');
			for(var i=1;i<=6;i++){
				$(createLI({
					id:'ranking-right-li-'+i+''
				})).appendTo('#ranking-right-ol');
				$(DcreateSpan({
					clazz:'index',
					val:i
				})).appendTo('#ranking-right-li-'+i+'');
				$(createATag({
					id:'a-a-'+i+'',
					val:d.bookWeekRanking[i-1].imageName
				})).attr('class','ranking-right-title').attr('value',d.bookWeekRanking[i-1].bookNum).appendTo('#ranking-right-li-'+i+'');
				$(createATag({
					val:d.bookWeekRanking[i-1].writter
				})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
			}
			$('.ranking-right-title').on('click',function(){
				var bookList = $(this).attr('value');
				$.ajax({
					url:x.context+'/bookDetail',
					method:'POST',
					data:JSON.stringify({bookList:bookList}),
					dataType:'json',
					contentType:'application/json',
					success:d=>{
						console.log(d.bookList[0].bookName);
						book.main.detail({
							bookNum:d.bookList[0].bookNum,
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
			$('#ranking-right-li-1').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[0].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#ranking-right-li-2').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[1].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#ranking-right-li-3').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[2].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#ranking-right-li-4').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[3].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#ranking-right-li-5').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[4].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#ranking-right-li-6').mouseover(()=>{
				$('#ranking-right-a').remove();
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[5].imageRoute
				})).appendTo('#ranking-right-book-cover');
			});
			$('#a-right-ranking-0').click(e=>{
				e.preventDefault();
				$('#ranking-right-div').remove();
				$(createDiv({
					id:'ranking-right-div'
				})).appendTo('#right-ranking-content');
				$(createDiv({
					id:'ranking-right-cover'
				})).appendTo('#ranking-right-div');
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookWeekRanking[0].imageRoute
				})).appendTo('#ranking-right-book-cover');
				$(createOL({
					id:'ranking-right-ol'
				})).appendTo('#ranking-right-div');
				for(var i=1;i<=6;i++){
					$(createLI({
						id:'ranking-right-li-'+i+''
					})).appendTo('#ranking-right-ol');
					$(DcreateSpan({
						clazz:'index',
						val:i
					})).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						id:'a-a-'+i+'',
						val:d.bookWeekRanking[i-1].imageName
					})).attr('class','ranking-right-title').attr('value',d.bookWeekRanking[i-1].bookNum).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						val:d.bookWeekRanking[i-1].writter
					})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
				}
				$('#ranking-right-li-1').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[0].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-2').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[1].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-3').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[2].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-4').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[3].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-5').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[4].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-6').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookWeekRanking[5].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('.ranking-right-title').on('click',function(){
					var bookList = $(this).attr('value');
					$.ajax({
						url:x.context+'/bookDetail',
						method:'POST',
						data:JSON.stringify({bookList:bookList}),
						dataType:'json',
						contentType:'application/json',
						success:d=>{
							console.log(d.bookList[0].bookName);
							book.main.detail({
								bookNum:d.bookList[0].bookNum,
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
			$('#a-right-ranking-1').click(e=>{
				e.preventDefault();
				$('#ranking-right-div').remove();
				$(createDiv({
					id:'ranking-right-div'
				})).appendTo('#right-ranking-content');
				$(createDiv({
					id:'ranking-right-cover'
				})).appendTo('#ranking-right-div');
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookMonthRanking[0].imageRoute
				})).appendTo('#ranking-right-book-cover');
				$(createOL({
					id:'ranking-right-ol'
				})).appendTo('#ranking-right-div');
				for(var i=1;i<=6;i++){
					$(createLI({
						id:'ranking-right-li-'+i+''
					})).appendTo('#ranking-right-ol');
					$(DcreateSpan({
						clazz:'index',
						val:i
					})).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						id:'a-a-'+i+'',
						val:d.bookMonthRanking[i-1].imageName
					})).attr('class','ranking-right-title').attr('value',d.bookMonthRanking[i-1].bookNum).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						val:d.bookMonthRanking[i-1].writter
					})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
				}
				$('#ranking-right-li-1').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[0].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-2').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[1].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-3').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[2].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-4').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[3].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-5').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[4].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-6').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookMonthRanking[5].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('.ranking-right-title').on('click',function(){
					var bookList = $(this).attr('value');
					$.ajax({
						url:x.context+'/bookDetail',
						method:'POST',
						data:JSON.stringify({bookList:bookList}),
						dataType:'json',
						contentType:'application/json',
						success:d=>{
							console.log(d.bookList[0].bookName);
							book.main.detail({
								bookNum:d.bookList[0].bookNum,
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
			$('#a-right-ranking-2').click(e=>{
				e.preventDefault();
				$('#ranking-right-div').remove();
				$(createDiv({
					id:'ranking-right-div'
				})).appendTo('#right-ranking-content');
				$(createDiv({
					id:'ranking-right-cover'
				})).appendTo('#ranking-right-div');
				$(createATag({
					id:'ranking-right-a',
					val:''
				})).appendTo('#ranking-right-cover');
				$(createDiv({
					id:'ranking-right-book-cover',
					clazz:'book-cover'
				})).appendTo('#ranking-right-a');
				$(createImg({
					id:'ranking-right-cover-img',
					src:d.bookAllRanking[0].imageRoute
				})).appendTo('#ranking-right-book-cover');
				$(createOL({
					id:'ranking-right-ol'
				})).appendTo('#ranking-right-div');
				for(var i=1;i<=6;i++){
					$(createLI({
						id:'ranking-right-li-'+i+''
					})).appendTo('#ranking-right-ol');
					$(DcreateSpan({
						clazz:'index',
						val:i
					})).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						id:'a-a-'+i+'',
						val:d.bookAllRanking[i-1].imageName
					})).attr('class','ranking-right-title').attr('value',d.bookAllRanking[i-1].bookNum).appendTo('#ranking-right-li-'+i+'');
					$(createATag({
						val:d.bookAllRanking[i-1].writter
					})).attr('class','ranking-right-writter').appendTo('#ranking-right-li-'+i+'');
				}
				$('#ranking-right-li-1').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[0].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-2').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[1].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-3').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[2].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-4').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[3].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-5').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[4].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('#ranking-right-li-6').mouseover(()=>{
					$('#ranking-right-a').remove();
					$(createATag({
						id:'ranking-right-a',
						val:''
					})).appendTo('#ranking-right-cover');
					$(createDiv({
						id:'ranking-right-book-cover',
						clazz:'book-cover'
					})).appendTo('#ranking-right-a');
					$(createImg({
						id:'ranking-right-cover-img',
						src:d.bookAllRanking[5].imageRoute
					})).appendTo('#ranking-right-book-cover');
				});
				$('.ranking-right-title').on('click',function(){
					var bookList = $(this).attr('value');
					$.ajax({
						url:x.context+'/bookDetail',
						method:'POST',
						data:JSON.stringify({bookList:bookList}),
						dataType:'json',
						contentType:'application/json',
						success:d=>{
							console.log(d.bookList[0].bookName);
							book.main.detail({
								bookNum:d.bookList[0].bookNum,
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
			//시 에세이
			$(createDiv({
				id:'div-section-category',
				clazz:'section-category'
			})).appendTo('#div-container-2');
			$(createDiv({
				id:'div-section-category-1'
			})).appendTo('#div-section-category');
			var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
			for(var i= 0; i<6; i++){
				$(createDiv({
					id:'div-book-header-'+i+'',
					clazz:'widget-header'
				})).appendTo('#div-section-category-1');
				$(createHTag({
					size:'3',
					clazz:'widget-title',
					val:temp[i]
				})).appendTo('#div-book-header-'+i+'');
				$(createATag({
					id:'a-move-list-'+i+'',
					val:'더보기'
				})).appendTo('#div-book-header-'+i+'').attr('class','more');
				$(createDiv({
					id:'div-category-list-'+i+'',
					clazz:'widget-content book-list clearfix'
				})).appendTo('#div-section-category-1');
				$(createDiv({
					id:'div-book-item-'+i+'',
					clazz:'book-item'
				})).appendTo('#div-category-list-'+i+'');
				$(createATag({
					id:'a-book-item-0-'+i+'',
					val:''
				})).appendTo('#div-book-item-0').attr('class','a-book-cover a-book-cover-0').attr('value',d.book1[i].bookNum);
				$(createDiv({
					id:'div-book-cover-0-'+i+'',
					clazz:'book-cover'
				})).appendTo('#a-book-item-0-'+i+'');
				$(createImg({
					src:d.book1[i].imageRoute
				})).appendTo('#div-book-cover-0-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-0-'+i+'');
				$(createDivVal({
					id:'div-book-name-0-'+i+'',
					clazz:'book-title book-title-0',
					val:d.book1[i].bookName
				})).appendTo('#a-book-item-0-'+i+'');
				$(createDivVal({
					id:'div-book-writter-0-'+i+'',
					clazz:'book-author',val:d.book1[i].writter
				})).appendTo('#a-book-item-0-'+i+''); 
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
					error : (x,h,m)=>{
						alert('검색 실패 x='+x+', h='+h+', m='+m);
						}
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
				$(createATag({
					id:'a-book-item-1-'+i+'',
					val:''
				})).appendTo('#div-book-item-1').attr('class','a-book-cover a-book-cover-1').attr('value',d.book2[i].bookNum);
				$(createDiv({
					id:'div-book-cover-1-'+i+'',
					clazz:'book-cover book-cover-1'
				})).appendTo('#a-book-item-1-'+i+'');
				$(createImg({
					src:d.book2[i].imageRoute
				})).appendTo('#div-book-cover-1-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-1-'+i+'');
				$(createDivVal({
					id:'div-book-name-1-'+i+'',
					clazz:'book-title',
					val:d.book2[i].bookName
				})).appendTo('#a-book-item-1-'+i+'');
				$(createDivVal({
					id:'div-book-writter-1-'+i+'',
					clazz:'book-author',
					val:d.book2[i].writter
				})).appendTo('#a-book-item-1-'+i+''); 
			}
			for(var i=0;i<6;i++){
				$(createATag({
					id:'a-book-item-2-'+i+'',
					val:''
				})).appendTo('#div-book-item-2').attr('class','a-book-cover a-book-cover-2').attr('value',d.book3[i].bookNum);
				$(createDiv({
					id:'div-book-cover-2-'+i+'',
					clazz:'book-cover book-cover-2'
				})).appendTo('#a-book-item-2-'+i+'');
				$(createImg({
					src:d.book3[i].imageRoute
				})).appendTo('#div-book-cover-2-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-2-'+i+'');
				$(createDivVal({
					id:'div-book-name-2-'+i+'',
					clazz:'book-title',
					val:d.book3[i].bookName
				})).appendTo('#a-book-item-2-'+i+'');
				$(createDivVal({
					id:'div-book-writter-2-'+i+'',
					clazz:'book-author',val:d.book3[i].writter
				})).appendTo('#a-book-item-2-'+i+''); 
			}
			for(var i=0;i<6;i++){
				$(createATag({
					id:'a-book-item-3-'+i+'',
					val:''
				})).appendTo('#div-book-item-3').attr('class','a-book-cover a-book-cover-3').attr('value',d.book4[i].bookNum);
				$(createDiv({
					id:'div-book-cover-3-'+i+'',
					clazz:'book-cover book-cover-3'
				})).appendTo('#a-book-item-3-'+i+'');
				$(createImg({
					src:d.book4[i].imageRoute
				})).appendTo('#div-book-cover-3-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-3-'+i+'');
				$(createDivVal({
					id:'div-book-name-3-'+i+'',
					clazz:'book-title',
					val:d.book4[i].bookName
				})).appendTo('#a-book-item-3-'+i+'');
				$(createDivVal({
					id:'div-book-writter-3-'+i+'',
					clazz:'book-author',
					val:d.book4[i].writter
				})).appendTo('#a-book-item-3-'+i+''); 
			}
			for(var i=0;i<6;i++){
				$(createATag({
					id:'a-book-item-4-'+i+'',
					val:''
				})).appendTo('#div-book-item-4').attr('class','a-book-cover a-book-cover-4').attr('value',d.book5[i].bookNum);
				$(createDiv({
					id:'div-book-cover-4-'+i+'',
					clazz:'book-cover book-cover-4'
				})).appendTo('#a-book-item-4-'+i+'');
				$(createImg({
					src:d.book5[i].imageRoute
				})).appendTo('#div-book-cover-4-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-4-'+i+'');
				$(createDivVal({
					id:'div-book-name-4-'+i+'',
					clazz:'book-title',
					val:d.book5[i].bookName
				})).appendTo('#a-book-item-4-'+i+'');
				$(createDivVal({
					id:'div-book-writter-4-'+i+'',
					clazz:'book-author',
					val:d.book5[i].writter
				})).appendTo('#a-book-item-4-'+i+''); 
			}
			for(var i=0;i<6;i++){
				$(createATag({
					id:'a-book-item-5-'+i+'',
					val:''
				})).appendTo('#div-book-item-5').attr('class','a-book-cover a-book-cover-5').attr('value',d.book6[i].bookNum);
				$(createDiv({
					id:'div-book-cover-5-'+i+'',
					clazz:'book-cover book-cover-5'
				})).appendTo('#a-book-item-5-'+i+'');
				$(createImg({
					src:d.book6[i].imageRoute
				})).appendTo('#div-book-cover-5-'+i+'');
				$(createDiv({
					clazz:'book-deco'
				})).appendTo('#div-book-cover-5-'+i+'');
				$(createDivVal({
					id:'div-book-name-5-'+i+'',
					clazz:'book-title',
					val:d.book6[i].bookName
				})).appendTo('#a-book-item-5-'+i+'');
				$(createDivVal({
					id:'div-book-writter-5-'+i+'',
					clazz:'book-author',
					val:d.book6[i].writter
				})).appendTo('#a-book-item-5-'+i+''); 
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
							bookNum:d.bookList[0].bookNum,
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
							bookNum:d.bookList[0].bookNum,
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
							bookNum:d.bookList[0].bookNum,
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
							bookNum:d.bookList[0].bookNum,
							imageRoute:d.bookList[0].imageRoute,
							bookName:d.bookList[0].bookName,
							price:d.bookList[0].price,
							largeGenre:d.bookList[0].largeGenre,
							smallGenre:d.bookList[0].smallGenre,
							writter:d.bookList[0].writter,
							publisher:d.bookList[0].publisher,//여기까지
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
							bookNum:d.bookList[0].bookNum,
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
							bookNum:d.bookList[0].bookNum,
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
		$('#div-body').attr('style','');
		$('#div-body').html(createDiv({
								id : 'bookk-store',
								clazz : ''
							}));
		// 맨위 상단 카테고리 바
		$(createDiv({
			id : 'category-bar',
			clazz : 'category-bar'
		})).appendTo('#bookk-store');
		$(createDiv({id:'floating',clazz:'floating'})).appendTo('#category-bar');
		$(createButton({clazz:'btn-menu',val:'MENU'})).appendTo('#floating')
		.on('click',function(e){
			var doo=JSON.parse(sessionStorage.getItem('user'));
			if(doo!=null){
				$('.btn-top').remove();
				$('#floating-div-1').remove();
				$('#floating-div-2').remove();
				$('#floating-div-3').remove();
				$('.btn-menu').attr('style','bottom:40px;');
				$(createDiv({id:'floating-div-1'})).appendTo('#floating');
				$(createATag({val:'장바구니'})).appendTo('#floating-div-1')
				.on('click',function(){
					$.getScript("/web/resources/js/shop.js",function(){
							$('#div-list-container').attr('id','div-advertise');
							$('#detail-container').attr('id','div-advertise');
							shop.mall.cart({
									context:x.context,
									view:"/web/resources/js/view.js",
							});
					})
				});
				$(createDiv({id:'floating-div-2'})).appendTo('#floating');
				$(createATag({val:'My page'})).appendTo('#floating-div-2')
				.on('click',function(){
					$.getScript("/web/resources/js/user.js",function(){
							$('#div-list-container').remove();
							$('#detail-container').remove();
							user.member.mypage({
								context:x.context,
								view:"/web/resources/js/view.js",
							});
					})
				});
				$(createDiv({id:'floating-div-3'})).appendTo('#floating');
				$(createATag({val:'게시판'})).appendTo('#floating-div-3')
				.on('click',function(){
					$.getScript("/web/resources/js/bulletin.js",function(){
							$('#bookk-store').remove();
							bulletin.board.onCreate();
					})
				});
				$(createButton({clazz:'btn-top',val:'TOP&nbsp;▲'})).attr('style','top:30px;').appendTo('#floating')
				.click(function(){
					$('html').stop().animate({scrollTop: 0}, 1200);
				});
			}else{
				$('.btn-top').remove();
				$('.btn-menu').attr('style','top:70px;');
				$(createButton({clazz:'btn-top',val:'TOP&nbsp;▲'})).attr('style','top:110px;left:80px;').appendTo('#floating')
				.click(function(){
					$('html').stop().animate({scrollTop: 0}, 1200);
				});
			}
		});
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
		var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타'];
			for(var i=0;i<6;i++){
				$(createATag({
					id:'large-category-'+i+'',
					val:temp[i]
				})).appendTo('#active');
			}
			$('#large-category-0').mouseover(()=>{
				$('#active-0').remove();
				$(createUL({
					id:'active-0'
				})).appendTo('#active');
				var temp = ['시집','에세이','기타도서'];
				for(var i=0;i<3;i++){
					$(createLI({
						id : 'smallgenre-category-1-'+i+''
					})).appendTo('#active-0');
					$(createATag({
						id :'ca-1-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-1-'+i+'');
				}
				$('#ca-1-0').click(()=>{
					$('#detail-container').remove();
					var g = {small:$('#ca-1-0').text(),large:$('#large-category-0').text()};
					$.ajax({
						url:x.context+'/bookGenreSmallList',
						method:'POST',
						data:JSON.stringify({small:g.small}),
						dataType:'json',
						contentType:'application/json',
						success:d=>{
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
				$(createUL({
					id : 'active-1'
				})).appendTo('#active');
				var temp = ['일반','로맨스','판타지','BL','무협','추리/스릴러/미스터리','기타','SF소설'];
				for(var i=0;i<8;i++){
					$(createLI({
						id : 'smallgenre-category-2-'+i+''
					})).appendTo('#active-1');
					$(createATag({
						id :'ca-2-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-2-'+i+'');
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
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
							book.main.list({
								small:g.small,
								largeList:d.smallList,
								large:g.large,
								count:d.count,
								context:x.context
							});
						},
						error : (x,h,m)=>{
							alert('검색 실패 x='+x+', h='+h+', m='+m);
						}
					});
				});
			});
			$('#large-category-2').mouseover(()=>{
				$('#active-2').remove();
				$(createUL({
					id:'active-2'
				})).appendTo('#active');
				var temp = ['자서전','기타'];
				for(var i=0;i<2;i++){
					$(createLI({
						id : 'smallgenre-category-3-'+i+''
					})).appendTo('#active-2');
					$(createATag({
						id :'ca-3-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-3-'+i+'');
				}
			});
			$('#large-category-3').mouseover(()=>{
				$('#active-3').remove();
				$(createUL({
					id:'active-3'
				})).appendTo('#active');
				var temp = ['경영','경제','기타'];
				for(var i=0;i<3;i++){
					$(createLI({
						id : 'smallgenre-category-4-'+i+''
					})).appendTo('#active-3');
					$(createATag({
						id :'ca-4-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-4-'+i+'');
				}
			});
			$('#large-category-4').mouseover(()=>{
				$('#active-4').remove();
				$(createUL({
					id:'active-4'
				})).appendTo('#active');
				var temp = ['인문','정치/사회','역사','종교','예술/문화/기타','SF장르'];
				for(var i=0;i<6;i++){
					$(createLI({
						id : 'smallgenre-category-5-'+i+''
					})).appendTo('#active-4');
					$(createATag({
						id :'ca-5-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-5-'+i+'');
				}
			});
			$('#large-category-5').mouseover(()=>{
				$('#active-5').remove();
				$(createUL({
					id:'active-5'
				})).appendTo('#active');
				var temp = ['과학/IT','어린이/청소년','진학/진로','여행','가정/생활','교재/참고서'];
				for(var i=0;i<6;i++){
					$(createLI({
						id : 'smallgenre-category-6-'+i+''
					})).appendTo('#active-5');
					$(createATag({
						id :'ca-6-'+i+'',
						val :temp[i]
					})).appendTo('#smallgenre-category-6-'+i+'');
				}
			});
			var temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타'];
			for(var i=0;i<6;i++){
				$(createLI({
					id:'store-category-'+i+''
				})).appendTo('#store-gnb-all-menu');
				$(createATag({
					val:temp[i]
				})).appendTo('#store-category-'+i+'');
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
						book.main.list({
							large:g.large,
							count:d.count,
							largeList:d.largeList,
							context:x.context
						});
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
						book.main.list({
							large:g.large,
							count:d.count,
							largeList:d.largeList,
							context:x.context
						});
					},
					error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
				});
			});
			$(createDiv({
				id : 'div-advertise'
			})).appendTo('#bookk-store');
		},
		// 책 리스트
		list:x=>{
				$('#div-body').attr('style','');
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
				$(createUL({
					id:'sidebar-lnb'
				})).appendTo('#sidebar');
				temp = ['시/에세이','소설','전기/회고록','경영/경제/자기계발','인문사회','기타']
				for(var i = 0; i<=5; i++){
					$(createLI({
						id : 'depth-'+i+'',
						clazz : 'depth1'
					})).appendTo('#sidebar-lnb');
					$(createATag({
						val :'-&nbsp;&nbsp;'+temp[i], 
						id : 'btn-parent-'+i+''
					})).appendTo('#depth-'+i+'');
					$(createUL({
						id : 'ul-lnb-'+i+'',
						clazz:'ul-lnb-small'
					})).attr('style','display:none;').appendTo('#depth-'+i+'');
				}
				temp = ['시집','에세이','기타도서']
				for(var i = 0; i<=2; i++){
					$(createLI({
						id:'li-lnb-0-'+i+''
					})).appendTo('#ul-lnb-0');
					$(createATag({
						id:'a-lnb-0-'+i+'',
						val:temp[i]
					})).appendTo('#li-lnb-0-'+i+''); 
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
					});
				}); 
				temp = ['일반','로맨스','판타지','BL','무협','추리/스릴러/미스터리','기타','SF소설']
				for(var i = 0; i<=7; i++){
					$(createLI({
						id:'li-lnb-1-'+i+''
					})).appendTo('#ul-lnb-1');
					$(createATag({
						id:'a-lnb-1-'+i+'',
						val:temp[i]
					})).appendTo('#li-lnb-1-'+i+'');
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
									});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
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
							success:d=>{
								book.main.list({
									context:x.context,
									largeList:d.smallList,
									count:d.count,
									small:g.small,
									large:g.large
								});
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
					});
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
				$(createDiv({id : 'location',clazz : 'col-sm-2'})).appendTo('#list-header');
				$('#location').html((createATag({id : 'a-main-move',val : '서점 >'})));
				$('#a-main-move').click(()=>{
					book.main.bookContent(x);
					book.main.bookNav(x);
				});
				$(createATag({
					id : 'a-largegenre-move',
					val : x.large
				})).appendTo('#location')
				.click(()=>{
					var g = {large:x.large};
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
								context:x.context
							});
						},
						error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
					});
				});
				if(x.small == null){
				}else{
					$(createATag({
						val : ' > '+x.small
					})).appendTo('#location');
				}
				//책 리스트
				$(createDiv({
					id :'list-content'
				})).appendTo('#main');
				$(createDiv({
					id :'list-content-header'
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
					val : '&nbsp;&nbsp;-'+x.count+'권의 책이 검색 되었습니다.'
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
				})).appendTo('#btn-group-sub-nav-1')
				.click(()=>{
					if(x.small == null){
						var g = {large:x.large};
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
									context:x.context
								});
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
					}else{
						var g = {small:x.small};
						$.ajax({
							url:x.context+'/bookGenreSmallList',
							method:'POST',
							data:JSON.stringify({small:g.small}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({
									small:g.small,
									largeList:d.smallList,
									large:x.large,
									count:d.count,
									context:x.context
								});
							},
							error : (x,h,m)=>{
								alert('검색 실패 x='+x+', h='+h+', m='+m);
							}
						});
					}
				});
				$(createATag({
					id :'a-group-sub-nav-name',
					val : '제목순'
				})).appendTo('#btn-group-sub-nav-1')
				.click(()=>{
					if(x.small == null){
						var g = {large:x.large};
						$.ajax({
							url:x.context+'/bookNameLargeList',
							method:'POST',
							data:JSON.stringify({large:g.large}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({
									large:g.large,
									count:d.count,
									largeList:d.largeList,
									context:x.context
								});
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
					}else{
						var g = {small:x.small};
						$.ajax({
							url:x.context+'/bookNameSmallList',
							method:'POST',
							data:JSON.stringify({small:g.small}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.list({
									small:g.small,
									largeList:d.smallList,
									large:x.large,
									count:d.count,
									context:x.context
								});
							},
							error : (x,h,m)=>{
								alert('검색 실패 x='+x+', h='+h+', m='+m);
							}
						});
					}	
				});
				$(createDiv({
					id:'list-content-content'
				})).appendTo('#list-content');
				$(createTable({
					id:'list-content-table'
				})).appendTo('#list-content-content');
				var o = 'o';
				var number = 1;
				var size = 5;
				var list=()=>{
					$.each(x.largeList.slice(size*number-(size),size*number),(i,j)=>{
						$(createTr({
							id:'list-content-tr-'+i+number+o+''
						})).appendTo('#list-content-table').attr('name','tr');
						$(createTd({
							id:'list-left-td-'+i+number+o+'',
							clazz:'product-image'
						})).appendTo('#list-content-tr-'+i+number+o+'');
						$(createTd({
							id:'list-right-td-'+i+number+o+'',
							clazz:'product-info'
						})).appendTo('#list-content-tr-'+i+number+o+'');
						$(createATag({
							id:'list-left-a-'+i+number+o+'',
							val:''
						})).attr('class','move-detail').attr('value',j.bookNum).appendTo('#list-left-td-'+i+number+o+'');
						$(createDiv({
							id:'list-left-div-'+i+number+o+'',
							clazz:'book-cover'
						})).appendTo('#list-left-a-'+i+number+o+'');
						$(createImg({
							src:j.imageRoute
						})).appendTo('#list-left-div-'+i+number+o+'');
						$(DcreateHTag({
							size:'3',
							val:'',
							clazz:'list-right-htag-'+i+number+o+''
						})).appendTo('#list-right-td-'+i+number+o+'');
						$(createATag({
							val:j.bookName
						})).appendTo('.list-right-htag-'+i+number+o+'').attr('value',j.bookNum).attr('class','a-list-name');
						$(createDiv({
							id:'list-right-div-'+i+number+o+'',
							clazz:'product-meta'
						})).appendTo('#list-right-td-'+i+number+o+'');
						$(DcreateSpan({
							id:'list-right-span-'+i+number+o+'',
							val:'저자 ',
							clazz:'list-right-span'
						})).appendTo('#list-right-div-'+i+number+o+'');
						$(createATag({
							id:'list-right-writter-a-'+i+number+o+'',
							val:j.writter
						})).appendTo('#list-right-span-'+i+number+o+'');
						$(DcreateSpan({
							val:j.publisher,
							clazz:'list-right-publisher&nbsp;&nbsp;&nbsp;'
						})).appendTo('#list-right-div-'+i+number+o+'');
						$(DcreateSpan({
							val:j.publishingDate,
							clazz:'list-right-span last'
						})).appendTo('#list-right-div-'+i+number+o+'');
						$(createDiv({
							id:'list-right-price-div-'+i+number+o+'',
							clazz:'product-price'
						})).appendTo('#list-right-td-'+i+number+o+'');
						$(createStrong({
							val:Number(j.price).toLocaleString('en')
						})).appendTo('#list-right-price-div-'+i+number+o+'');
						$(DcreateSpan({
							val:'원',
							clazz:'currency'
						})).appendTo('#list-right-price-div-'+i+number+o+'');
						$(createForm({
							id:'list-right-form-'+i+number+o+'',
							clazz:'btn-group'
						})).appendTo('#list-right-td-'+i+number+o+'');
						$(createButton({
							id:'btn-cart-'+i+number+o+'',
							clazz:'btn btn-primary fas fa-shopping-cart listcart',
							val:'&nbsp;&nbsp;장바구니'
						})).attr('value',j.bookNum).appendTo('#list-right-form-'+i+number+o+'');
						$(createButton({
							clazz:'btn btn-primary fas fa-arrow-right listcart',
							val:'&nbsp;&nbsp;바로구매'
						})).attr('value',j.bookNum).appendTo('#list-right-form-'+i+number+o+'');
						$(createButton({
							clazz:'btn btn-primary far fa-heart',
							val:'&nbsp;&nbsp;찜하기'
						})).appendTo('#list-right-form-'+i+number+o+'');
					});

					$('.a-list-name').on('click',function(){
						var bookList = $(this).attr('value');
						console.log()
						$.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
									bookNum:d.bookList[0].bookNum,
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
					$('.move-detail').on('click',function(){
						var bookList = $(this).attr('value');
						$.ajax({
							url:x.context+'/bookDetail',
							method:'POST',
							data:JSON.stringify({bookList:bookList}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								book.main.detail({
									bookNum:d.bookList[0].bookNum,
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
				}
				list();
				$(createDiv({
					id:'list-more'
				})).appendTo('#list-content-content');
				$(createButton({clazz:'list-more-btn',val:'더보기'})).appendTo('#list-more')
				.click(function(){
					if($('tr[name=tr]').length===x.count){
						$('.list-more-btn').remove();
						if(x.small==null){
							$(createHTag({size:'2',val:x.large})).appendTo('#list-more');
							$(createHTag({size:'3',val:'총&nbsp;&nbsp;'+x.count+'&nbsp;&nbsp;권'})).appendTo('#list-more');
						}else{
							$(createHTag({size:'2',val:x.large+'&nbsp;>&nbsp;'+x.small})).appendTo('#list-more');
							$(createHTag({size:'3',val:'총&nbsp;&nbsp;'+x.count+'&nbsp;&nbsp;권'})).appendTo('#list-more');
						}
					}else{
						number++;
						list();
					}
				});			
				$('.listcart').on('click',function(){
					var doo=JSON.parse(sessionStorage.getItem('user'));
					$(this).attr('value')
					var bookNum = $(this).attr('value')
					if(doo==null){
						alert('로그인 해주세요');
					}else{
						$.ajax({
							url:x.context+'/bookInven',
							method:'POST',
							data:JSON.stringify({bookNum:bookNum}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								if(d.inven[0].inventory == 0){
									alert('현재 재고가 없습니다');
								}else{
									$.getScript("/web/resources/js/shop.js",function(){
				                        $('#div-list-container').attr('id','div-advertise');
				                        shop.mall.cart({
				                            context:x.context,
				                            view:"/web/resources/js/view.js",
				                            insertBook:bookNum,
				                            insertAmount:1});
				                    })
								}
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
						
					}

				});
			},
			detail:x=>{
				$('#div-body').attr('style','position: relative;bottom: 20px;');
				$('#div-list-container').remove();
				$('#div-advertise').remove();
				$('#div-list-container').remove();
				$('#detail-container').remove();
				$(createDiv({
					id:'detail-container'
				})).appendTo('#category-bar-container');
				$(createDiv({
					id:'detail-wrap-product'
				})).appendTo('#detail-container');
				$(createDiv({
					id:'detail-clearfix'
				})).appendTo('#detail-wrap-product');
				$(createDiv({
					id:'detail-left-product'
				})).appendTo('#detail-clearfix');
				$(createImg({
					src:x.imageRoute
				})).appendTo('#detail-left-product');
				$(createDiv({
					id:'detail-right-product'
				})).appendTo('#detail-clearfix');
				$(createHTag({
					size:'1',
					val:x.bookName
				})).appendTo('#detail-right-product');
				$(createDiv({
					id:'detail-wrap-price'
				})).appendTo('#detail-right-product');
				$(createDiv({
					id:'detail-price'
				})).appendTo('#detail-wrap-price');
				$(createStrong({
					val:Number(x.price).toLocaleString('en')+'&nbsp;원'
				})).appendTo('#detail-price');
				$(createDiv({
					id:'detail-sns'
				})).appendTo('#detail-wrap-price');
				$(createATag({
					val:''
				})).attr('class','fab fa-facebook').attr('href','https://www.facebook.com/').appendTo('#detail-sns');
				$(createATag({
					val:''
				})).attr('class','fab fa-twitter').attr('href','https://twitter.com/').appendTo('#detail-sns');
				$(createATag({
					val:''
				})).attr('class','fas fa-envelope-square').attr('href','https://accounts.google.com/').appendTo('#detail-sns');
				$(createDiv({
					id:'detail-wrap-alert'
				})).appendTo('#detail-right-product');
				$(createUL({
					id:'detail-ul-alert'
				})).appendTo('#detail-wrap-alert');
				$(createLI({
					id:'detail-li-alert-1'
				})).appendTo('#detail-ul-alert');
				$(createLI({
					id:'detail-li-alert-2'
				})).appendTo('#detail-ul-alert');
				$(createHTag({
					size:'6',
					val:'배송일 : 영업일 기준 2-8일 내로 배송됩니다.'
				})).appendTo('#detail-li-alert-1');
				$(createHTag({
					size:'6',
					val:'배송일 : 환불규정 : 주문 후 인쇄되므로 배송이 준비된 후에는 환불이 불가능합니다'
				})).attr('style','color:red;').appendTo('#detail-li-alert-2');
				$(createDiv({
					id:'detail-wrap-form'
				})).appendTo('#detail-right-product');
				$(createDiv({
					id:'detail-book-form'
				})).appendTo('#detail-wrap-form');
				$(createLabel({
					clazz:'label',
					val:'도서 정보'
				})).appendTo('#detail-book-form');
				$(createTable({
					id:'detail-table-form'
				})).appendTo('#detail-book-form');
				for(var i=0;i<6;i++){
					$(createTr({
						id:'detail-tr-'+i+''
					})).appendTo('#detail-table-form');
				}
				var detailTh = ['분야','작가','출판형태','판형','출판사','출판일'];
				var detailTd = [x.largeGenre+'&nbsp;>&nbsp;'+x.smallGenre,x.writter,'종이책','A5',x.publisher,x.publishingDate];
				for(var i=0;i<6;i++){
					$(DcreateTh({
						val:detailTh[i]
					})).appendTo('#detail-tr-'+i+'');
					$(DcreateTd({
						val:detailTd[i]
					})).appendTo('#detail-tr-'+i+'');
				}		
				$(createDiv({
					id:'detail-count-form'
				})).appendTo('#detail-wrap-form');
				$(createDiv({
					id:'detail-select-count'
				})).appendTo('#detail-count-form');
				$(createLabel({
					clazz:'label',
					val:'갯수 선택'
				})).appendTo('#detail-select-count');
				$(createInput({
					type:'button',
					id:'detail-book-count'
				})).attr('value','1').appendTo('#detail-select-count');
				$('#detail-book-count').spinner();
				$('.ui-spinner-button ').addClass('btn-book-count');
				$('.btn-book-count').click(e=>{
					e.preventDefault()
					var total = ((x.price * 1)*($('#detail-book-count').spinner("value")));
					$('#detail-wrap-total-price').empty();
					$(createDiv({
						id:'detail-wrap-total-price'
					})).appendTo('#detail-right-product');
					$(DcreateSpan({
						id:'detail-span-total',
						val:'총 금액'
					})).appendTo('#detail-wrap-total-price');
					$(DcreateSpan({
						id:'',
						clazz:'total-count-price',
						val:Number(total).toLocaleString('en')
					})).appendTo('#detail-wrap-total-price');
					$(DcreateSpan({
						id:'',
						val:'원'
					})).appendTo('#detail-wrap-total-price');
				});
				$(createDiv({
					id:'detail-wrap-total-price'
				})).appendTo('#detail-right-product');
				$(DcreateSpan({
					id:'detail-span-total',
					val:'총 금액'
				})).appendTo('#detail-wrap-total-price');
				$(DcreateSpan({
					id:'',
					clazz:'total-count-price',
					val:Number(x.price).toLocaleString('en')
				})).appendTo('#detail-wrap-total-price');
				$(DcreateSpan({
					id:'',
					val:'원'
				})).appendTo('#detail-wrap-total-price');
				$(createDiv({
					id:'detail-wrap-btn'
				})).appendTo('#detail-right-product');
				$(createButton({
					clazz:'btn btn-primary fas fa-shopping-cart cart',
					val:'&nbsp;&nbsp;장바구니'
				})).appendTo('#detail-wrap-btn');
				$(createButton({
					clazz:'btn btn-primary fas fa-arrow-right cart',
					val:'&nbsp;&nbsp;구매하기'
				})).appendTo('#detail-wrap-btn');
				$(createDiv({
					id:'detail-wrap-product-detail'
				})).appendTo('#detail-container');
				$(createDiv({
					id:'detail-wrap-product-div'
				})).appendTo('#detail-wrap-product-detail');
				$(createUL({
					id:'detail-wrap-product-ul'
				})).appendTo('#detail-wrap-product-div');
				var temp = ['도서소개','미리보기']
				for(var i=0;i<2;i++){
					$(createLI({
						id:'detail-product-li-'+i+''
					})).appendTo('#detail-wrap-product-ul');
					$(createATag({
						id:'detail-product-li-a-'+i+'',
						val:temp[i]
					})).appendTo('#detail-product-li-'+i+'');
				}
				$(createDiv({
					id:'detail-div-introduction'
				})).appendTo('#detail-product-li-0');
				$(createHTag({
					size:'3',
					val:'도서소개 없음'
				})).appendTo('#detail-div-introduction');
				$('#detail-product-li-0').attr('class','active');
				$('#detail-product-li-a-0').click(e=>{
					e.preventDefault();
					$('#detail-product-li-1').removeAttr('class');
					$('#detail-product-li-0').attr('class','active');
					$('#detail-div-preview').remove();
					$(createDiv({
						id:'detail-div-introduction'
					})).appendTo('#detail-product-li-0');
					$(createHTag({
						size:'3',
						val:'도서소개 없음'
					})).appendTo('#detail-div-introduction');
				});
				$('#detail-product-li-a-1').click(e=>{
					e.preventDefault();
					$('#detail-product-li-0').removeAttr('class');
					$('#detail-product-li-1').attr('class','active');
					$('#detail-div-introduction').remove();
					$(createDiv({
						id:'detail-div-preview'
					})).appendTo('#detail-product-li-0');
					$(createHTag({
						size:'3',
						val:'미리보기 없음'
					})).appendTo('#detail-div-preview');
				});
				
				$('.cart').click(()=>{
					var doo=JSON.parse(sessionStorage.getItem('user'));
					var bookNum = x.bookNum;
					if(doo==null){
						alert('로그인 해주세요');
					}else{
						$.ajax({
							url:x.context+'/bookInven',
							method:'POST',
							data:JSON.stringify({bookNum:bookNum}),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								if(d.inven[0].inventory == 0){
									alert('현재 재고가 없습니다');
								}else{
									$.getScript("/web/resources/js/shop.js",function(){
				                        $('#div-list-container').attr('id','div-advertise');
				                        $('#detail-container').attr('id','div-advertise');
				                        shop.mall.cart({
				                            context:x.context,
				                            view:"/web/resources/js/view.js",
				                            insertBook:bookNum,
				                            insertAmount:1});
				                    })
								}
							},
							error : (x,h,m)=>{alert('검색 실패 x='+x+', h='+h+', m='+m);}
						});
					}
                })
			}	
}