var user=user || {};
user.admin={
	login:x=>{
        document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
		$('#div-header-userMenu').html(createDiv({id:'div-member-bar',clazz:''})).attr('style','background: white;')
		$('#div-header-pageMenu').remove();
		$('#div-footer').remove();
		$('#div-member-bar')
		.attr('style','display: grid;grid-template-columns: 1000px 200px;margin: 0 auto;width:1200px;')
		.append(createDiv({id:'div-userMenu-left',clazz:''}))
		.append(
				$(createDiv({id:'div-userMenu-right',clazz:''}))
				.attr('style','border-top: 2px solid black;border-right: 2px solid black;text-align: left;padding: 15px 20px;'));
		
		$('#div-userMenu-left')
		.attr('style','width: 1164px;background-color:black;color:white; padding: 12px 18px;margin:0 auto; text-align: left;')
		$(createATag({id:'a-logout',val:'로그아웃'}))
		.appendTo('#div-userMenu-right')
		.attr('style','color: white;')
		.on('click',e=>{
			e.preventDefault();
			document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
			sessionStorage.removeItem('admin');
			$('#div-advertise').html(createDiv({id:'div-content',clazz:''}));
			$.getScript($.javascript()+'/app.js',()=>{
				app.init(x.context);
			})
		});
		$(createImage({id:'',src:'http://www.bookk.co.kr/img/logo_blue.png',clazz:''}))
		.attr('style','height: 31px;')
		.appendTo('#div-userMenu-left')
		.on('click',e=>{
				app.init(x.context);
			});
		
		user.admin.adminContent(x);
	},
	adminContent:x=>{
		$('#div-body').html(createDiv({id:'div-admin',clazz:''}));
		$('#div-admin')
		.attr('style','display: grid;grid-template-columns: 200px 1000px;height:770px;margin: 0 auto;width:1200px;')
		.append(createDiv({id:'div-adminSideMenu',clazz:''}))
		.append(createDiv({id:'div-adminContent',clazz:''}))
		
		$('#div-adminSideMenu')
		.attr('style','background-color: black;')
		.html(createUL({id:'ul-sideMenu',clazz:''}));
		$('#div-adminContent')
		.attr('style','border: 2px solid black;');
		$('#ul-sideMenu')
		.attr('style','color: white;');
		
		
		$.each([
			['판매량 통계', ['연간 장르별<br/>판매량<br/>라인 차트','연간 판매량<br/>테이블 차트'], user.admin.lineCharts,
				user.admin.lineCharts, user.admin.bookTableChart],
			['서적 관리', ['서적 리스트','재고량 차트'], user.admin.tableCharts,
				user.admin.tableCharts, user.admin.pietableChart]
		],(k,v)=>{
			$(createLI({id:'li-sideMenu-'+k,clazz:''}))
			.attr('name','li-sideMenu-'+k)
			.attr('style','padding: 10px;min-height: 240px;font-size: 26px;text-align: center;')
			.append(
					$(createATag({id:'',val:v[0]}))
					.attr('style','color: white;')
					.on('click',function(e){
						e.preventDefault();
						$('a')
						.attr('style','color: white;');
						$(this)
						.attr('style','color: red;');
						
						$('#div-adminContent').html(v[2](x));
						$('#div-subMenu-ul')
						.html($(createUL({id:'ul-subMenu',clazz:'mylist-inline'})).attr('style','margin: 0 auto;'));
						
						$('#div-adminContent')
						.html(createDiv({id:'div-adminContent-dash',clazz:''}))
						.append(createDiv({id:'div-adminContent-chartbtn',clazz:'text-center'}));
						$('#div-adminContent-dash')
						.append(createDiv({id:'div-adminContent-chart',clazz:'text-center'}))
						.append(createDiv({id:'div-adminContent-control',clazz:'text-center'}));
						
					}))
			.append($(createUL({id:'ul-subMenu-'+k,clazz:'ul-subMenus'}))
//					.attr('style','display:none;')
					)
			.appendTo('#ul-sideMenu');
			$.each(v[1],(sk,sv)=>{
				$(createLI({id:'li-subMenu-'+sk,clazz:'subMenus'}))
				.attr('style','font-size: 15px;margin: 17px 5px;')
				.append($(createATag({id:'',val:sv})).attr('style','color: white;'))
				.appendTo('#ul-subMenu-'+k)
				.on('click',function(e){
					e.preventDefault();
					$('a')
					.attr('style','color: white;');
					$(this).children('a')
					.attr('style','color: red;');
					$('#div-adminContent').html(v[3+sk](x));
					$('#div-adminContent')
					.html(createDiv({id:'div-adminContent-dash',clazz:''}))
					.append(createDiv({id:'div-adminContent-chartbtn',clazz:'text-center'}));
					$('#div-adminContent-dash')
					.append(createDiv({id:'div-adminContent-chart',clazz:'text-center'}))
					.append(createDiv({id:'div-adminContent-control',clazz:'text-center'}));
				})
			});
			
		});
	},
	undefind:x=>{
		alert('업데이트 중')
	},
	bookTableChart:x=>{
		var chartList={'cols':[],'rows':[]};
		$.getJSON(x.context+'/chartData/book', d=>{
			var rowlen;
			var collen;
			var cbooleans;
			var rbooleans;
			$.each(d.chartData,(k,v)=>{
				if(chartList.cols.length==0){
					chartList.cols.push(v.largeGenre)
					collen=chartList.cols.length;
				}else{
					cbooleans=true;
					$.each(chartList.cols,(kc,vc)=>{
						if(vc===String(v.largeGenre)){
							cbooleans=false;
							collen=kc+1;
						}
					});
					if(cbooleans){
						chartList.cols.push(v.largeGenre);
						collen=chartList.cols.length;
					}
				}
				if(chartList.rows.length===0){
					chartList.rows.push([v.salesdate])
					rowlen=chartList.rows.length;
					
				}else{
					rbooleans=true;
					$.each(chartList.rows,(kc,vc)=>{
						if(vc[0]===String(v.salesdate)){
							rbooleans=false;
							rowlen=kc+1;
						}
					});
					if(rbooleans){
						chartList.rows.push([v.salesdate]);
						rowlen=chartList.rows.length;
					}
				}
				--collen;
				--rowlen;
				chartList.rows[rowlen][collen+1]=v.salesamount;		
			});
			$.each(chartList.rows,(ro,rv)=>{
				for(var i=0;i<=chartList.cols.length;i++){
					chartList.rows[ro][0]=new Date(chartList.rows[ro][0])
					if(chartList.rows[ro][i]==null){
						chartList.rows[ro][i]=0;
					}
				}				
			});
			
			google.charts.load('current', {packages: ['corechart', 'controls', 'table']});
			google.charts.setOnLoadCallback(drawChart);
			var data;
			var control;
			var lineChart;
			var tableChart;
			var view;
			var dashboard;
			function drawChart() {
				
				data=new google.visualization.DataTable();
				data.addColumn('date', 'Year');
				$.each(chartList.cols,(kc,vc)=>{
					data.addColumn('number', vc);
				});
				$.each(chartList.rows,(k,v)=>{
					data.addRow(v);
				});
				
				
				dashboard = new google.visualization.Dashboard(
						document.getElementById('div-adminContent-dash'));
				
				control = new google.visualization.ControlWrapper({
					controlType: 'DateRangeFilter',
					containerId: 'div-adminContent-control',
					options: {
						filterColumnIndex: '0',
						'ui': { 'format': { 'pattern': 'yyyy/MM/dd' } },
					}
				});
				tableChart = new google.visualization.ChartWrapper({
					'chartType': 'Table',
					'containerId': 'div-adminContent-chart',
					'options': {
						width: 950,
						height: 500,
						allowHtml: true,
						showRowNumber: true,
						page: 'enable',
						pageSize: 5,
						legend: { position: 'right' },
						'title': '연간 판매량 파이 차트',			
						'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
						'pieSliceText': ''
							
					}
				});
				
				dashboard.bind(control, [tableChart]);
				dashboard.draw(data);
				$('#div-adminContent-chart').attr('style','margin-top: 55px;')
			}
			
			$('#div-adminContent-chartbtn')
			.append(createUL({id:'ul-chart-genre',clazz:'mylist-inline'}))
			$.each(chartList.cols,(k,v)=>{
					$(createLI({id:'li-chart-genre-'+k,clazz:''}))
					.appendTo('#ul-chart-genre')
					.append(
							$(createInput({id:'',clazz:'',type:'checkbox'}))
							.attr('name','genrelist-check')
							.attr('checked',true)
							.attr('value',k+1)
							.on('click',function(e){
								var selected = [0];
								var nonselected = [];
								$('input[name=genrelist-check]').each(function(){
									if(this.checked){
										selected.push(parseInt($(this).val()));
									}else{
										nonselected.push(parseInt($(this).val()));
									}
								})
								if(selected.length==1){
									alert('하나 이상 체크하셔야 합니다');
									e.preventDefault();
									return;
								}
								view = new google.visualization.DataView(data);
								view.setColumns(selected);
								view.hideColumns(nonselected);
								dashboard.draw(view);
							}))
							.append(createLabel({fo:'comment',val:v})+' ');
				});
		});
	},
	lineCharts:x=>{
		var chartList={'cols':[],'rows':[]};
		$.getJSON(x.context+'/chartData/book', d=>{
			var rowlen;
			var collen;
			var cbooleans;
			var rbooleans;
			$.each(d.chartData,(k,v)=>{
				if(chartList.cols.length==0){
					chartList.cols.push(v.largeGenre)
					collen=chartList.cols.length;
				}else{
					cbooleans=true;
					$.each(chartList.cols,(kc,vc)=>{
						if(vc===String(v.largeGenre)){
							cbooleans=false;
							collen=kc+1;
						}
					});
					if(cbooleans){
						chartList.cols.push(v.largeGenre);
						collen=chartList.cols.length;
					}
				}
				if(chartList.rows.length===0){
					chartList.rows.push([v.salesdate])
					rowlen=chartList.rows.length;
					
				}else{
					rbooleans=true;
					$.each(chartList.rows,(kc,vc)=>{
						if(vc[0]===String(v.salesdate)){
							rbooleans=false;
							rowlen=kc+1;
						}
					});
					if(rbooleans){
						chartList.rows.push([v.salesdate]);
						rowlen=chartList.rows.length;
					}
				}
				--collen;
				--rowlen;
				chartList.rows[rowlen][collen+1]=v.salesamount;		
			});
			$.each(chartList.rows,(ro,rv)=>{
				for(var i=0;i<=chartList.cols.length;i++){
					chartList.rows[ro][0]=new Date(chartList.rows[ro][0])
					if(chartList.rows[ro][i]==null){
						chartList.rows[ro][i]=0;
					}
				}				
			});
	
		google.charts.load('current', {packages: ['corechart', 'controls', 'table']});
		google.charts.setOnLoadCallback(drawChart);
		var data;
		var control;
		var lineChart;
		var pieChart;
		var view;
		var dashboard;
		function drawChart() {
			data=new google.visualization.DataTable();
			data.addColumn('date', 'Year');
			$.each(chartList.cols,(kc,vc)=>{
				data.addColumn('number', vc);
			});
			$.each(chartList.rows,(k,v)=>{
				data.addRow(v);
			});
			
			dashboard = new google.visualization.Dashboard(
		            document.getElementById('div-adminContent-dash'));
			control = new google.visualization.ControlWrapper({
				controlType: 'DateRangeFilter',
				containerId: 'div-adminContent-control',
		        options: {
		            filterColumnIndex: '0',
		            'ui': { 'format': { 'pattern': 'yyyy/MM/dd' } },
		          }
		        });
			lineChart = new google.visualization.ChartWrapper({
			     'chartType': 'LineChart',
			     'containerId': 'div-adminContent-chart',
				'options' : {
					title: '연간 판매량 라인 차트',
					curveType: 'function',
					pointSize: 3,
					width: 950,
					height: 600,
					legend: { position: 'right' }
				}
			});
			dashboard.bind(control, [lineChart]);
        	dashboard.draw(data);
    		$('#div-adminContent-chart').attr('style','')
	      }
		
		$('#div-adminContent-chartbtn')
		.append(createUL({id:'ul-chart-genre',clazz:'mylist-inline'}))
		$.each(chartList.cols,(k,v)=>{
				$(createLI({id:'li-chart-genre-'+k,clazz:''}))
				.appendTo('#ul-chart-genre')
				.append(
						$(createInput({id:'',clazz:'',type:'checkbox'}))
						.attr('name','genrelist-check')
						.attr('checked',true)
						.attr('value',k+1)
						.on('click',function(e){
							var selected = [0];
							var nonselected = [];
							$('input[name=genrelist-check]').each(function(){
								if(this.checked){
									selected.push(parseInt($(this).val()));
								}else{
									nonselected.push(parseInt($(this).val()));
								}
							})
							if(selected.length==1){
								alert('하나 이상 체크하셔야 합니다');
								e.preventDefault();
								return;
							}
							view = new google.visualization.DataView(data);
							view.setColumns(selected);
							view.hideColumns(nonselected);
							dashboard.draw(view);
						}))
						.append(createLabel({fo:'comment',val:v})+' ');
			});
        });
		
//		setInterval(() => {
//		}, 3000);
	},
	tableCharts:x=>{
		var chartList={'cols':[],'rows':[]};
		$.getJSON(x.context+'/chartData/books', d=>{
			var rowlen;
			var collen;
			var cbooleans;
			var rbooleans;
			$.each(d.chartData,(k,v)=>{
				if(chartList.cols.length==0){
					chartList.cols.push(v.largeGenre)
					collen=chartList.cols.length-1;
					chartList.rows[collen]=[]
				}else{
					cbooleans=true;
					collen=0;
					$.each(chartList.cols,(kc,vc)=>{
						if(vc===String(v.largeGenre)){
							cbooleans=false;
						}
						if(cbooleans){
							collen=kc+1;
						}
					});
					if(cbooleans){
						chartList.cols.push(v.largeGenre);
						chartList.rows[chartList.cols.length-1]=[]
					}
				}
				rbooleans=true;
				rowlen=0;
				$.each(chartList.rows[collen],(kc,vc)=>{
					if(vc===String(v.smallGenre)){
						rbooleans=false;
					}
					if(rbooleans){
						rowlen=kc+1;
					}
				});
				if(rbooleans){
					chartList.rows[collen][rowlen]=k;
				}
			});
			
			google.charts.load('current', {packages: ['corechart', 'controls', 'table']});
			google.charts.setOnLoadCallback(drawChart);
			var data;
			var control;
			var lineChart;
			var tableChart;
			var view;
			var dashboard;
			function drawChart() {
				data=new google.visualization.DataTable();
				$.each({
					'이미지':'string','출판일':'date','대장르':'string','소장르':'string','책ID':'number','책이름':'string','출판사':'string','가격':'number','재고량':'number'},(kc,vc)=>{
					data.addColumn(vc, kc);
				});
				$.each(d.chartData,(k,v)=>{
//				.attr('style','height:150px,width:104px')
//					k+1번째 튜플을 지우게 한다.
					var name=(v.imageRoute.split('\\\\resources\\\\img\\\\'))[1];
					var imgRoute;
					if(name!=null){
						imgRoute=x.image+'/'+name;
					}else{
						imgRoute=v.imageRoute;
					}
					data.addRow([
						createChartImg({id:'',src:imgRoute,clazz:'listIMG'}),
						new Date(v.publishingDate),
							v.largeGenre,
							v.smallGenre,
							v.bookNum,
							v.bookName,
							v.publisher,
							v.price,
							v.inventory]);
				});
				
				dashboard = new google.visualization.Dashboard(
						document.getElementById('div-adminContent-dash'));
				
				control = new google.visualization.ControlWrapper({
					controlType: 'DateRangeFilter',
					containerId: 'div-adminContent-control',
					options: {
						filterColumnIndex: '1',
						'ui': { 'format': { 'pattern': 'yyyy/MM/dd' } },
					}
				});
				tableChart = new google.visualization.ChartWrapper({
					'chartType': 'Table',
					'containerId': 'div-adminContent-chart',
					'options': {
						width: 950,
						height: 500,
						allowHtml: true,
						showRowNumber: true,
						page: 'enable',
						pageSize: 5,
						legend: { position: 'right' },
						'title': '연간 판매량 파이 차트',			
						'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
						'pieSliceText': ''
							
					}
				});
				
				dashboard.bind(control, [tableChart]);
				dashboard.draw(data);
				$('#div-adminContent-chart').attr('style','margin-top: 55px;')
				
				$('#div-adminContent-chartbtn')
				.append(createUL({id:'ul-chart-genre',clazz:'mylist-inline'}))
				$.each(chartList.cols,(k,v)=>{
					$(createLI({id:'li-chart-genre-'+k,clazz:''}))
					.appendTo('#ul-chart-genre')
					.append(
							$(createInput({id:'',clazz:'',type:'checkbox'}))
							.attr('name','genrelist-check')
							.attr('checked',true)
							.attr('value',k)
							.on('click',function(e){
								var selected = [];
								var nonselected = [];
								$('input[name=genrelist-check]').each(function(){
									if(this.checked){
										$.each(chartList.rows[parseInt($(this).val())],(rk,rv)=>{
											selected.push(rv);
										});
									}else{
										$.each(chartList.rows[parseInt($(this).val())],(rk,rv)=>{
											nonselected.push(rv);
										});
									}
								})
								if(selected.length==0){
									alert('하나 이상 체크하셔야 합니다');
									e.preventDefault();
									return;
								}
								view = new google.visualization.DataView(data);
								view.setRows(selected);
								view.hideRows(nonselected);
								dashboard.draw(view);
							}))
							.append(createLabel({fo:'comment',val:v})+' ');
				});
				$('#div-adminContent-chartbtn')
				.append(createUL({id:'ul-chart-bookMg',clazz:'mylist-inline'}))
				$.each([
					['서적 등록',user.admin.bookADD],
					['서적 삭제',user.admin.bookDEL]],(k,v)=>{
					$(createLI({id:'li-chart-bookMg-'+k,clazz:''}))
					.appendTo('#ul-chart-bookMg')
					.append(
							$(createButton({id:'',clazz:'',val:v[0]}))
							.on('click',function(e){
								e.preventDefault();
								v[1](x)
							}))
				});
			}
			
		});
	},
	bookDEL:x=>{
		if(confirm('책을 삭제하시겠습니까?')){
			var p = prompt('삭제할 책 ID를 입력하세요');
			var rp = prompt('이 책을 정말 삭제하시겠습니까? 삭제할 시 \n"삭제합니다" 라고 입력하세요');
//			직원 번호 5자리 숫자로만 되어 있다
			if(rp==='삭제합니다'){
				$.ajax({
					url:x.context+'/book/delete',
					method:'POST',
					data:JSON.stringify({bookID:p}),
					dataType:'json',
					contentType:'application/json',
					success : s =>{
						$('a')
						.attr('style','color: white;');
						$(this)
						.attr('style','color: red;');
						
						$('#div-subMenu-ul')
						.html($(createUL({id:'ul-subMenu',clazz:'mylist-inline'})).attr('style','margin: 0 auto;'));
						
						$('#div-adminContent')
						.html(createDiv({id:'div-adminContent-dash',clazz:''}))
						.append(createDiv({id:'div-adminContent-chartbtn',clazz:'text-center'}));
						$('#div-adminContent-dash')
						.append(createDiv({id:'div-adminContent-chart',clazz:'text-center'}))
						.append(createDiv({id:'div-adminContent-control',clazz:'text-center'}));
						user.admin.tableCharts(x);
					},
					error : ()=>{
						alert('존재하지 않는 ID 입니다');
					}
				});
			}else{
				alert('삭제를 취소하셨습니다')
			}
		}
	},
	bookADD:x=>{
		$.getJSON(x.context+'/genreInfo', d=>{
			$('#div-adminContent').html(createDiv({id:'detail-container',clazz:'container'}));
			$(createDiv({id:'detail-wrap-product'})).appendTo('#detail-container');
			$(createDiv({id:'detail-clearfix'})).appendTo('#detail-wrap-product');
			$(createDiv({id:'detail-left-product'})).appendTo('#detail-clearfix');
			
			$(createDiv({id:'',clazz:'div-img-profile'}))
			.attr('style','width: 100%;height: 500px;margin: 0 4%;')
			.appendTo('#detail-left-product');
			$(createForm({id:'imgForm',clazz:''}))
			.append($(createInput({id:'bookImg',clazz:'',type:'file'}))
					.attr('name','file'))
			.appendTo('.div-img-profile');
			
			$(createDiv({id:'detail-right-product'})).appendTo('#detail-clearfix').attr('style','top: 10px;');
			$(createInput({id:'title',clazz:'',type:'text'}))
			.appendTo('#detail-right-product').attr('placeholder','책 제목');
			$(createDiv({id:'detail-wrap-price'})).appendTo('#detail-right-product');
			$(createDiv({id:'detail-price'})).appendTo('#detail-wrap-price');
			$(createInput({id:'price',clazz:'',type:'text'})).val(0).appendTo('#detail-price').attr('placeholder','책 가격');
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
			$(createTd({})).append(createSelect('select-genre')).appendTo('#detail-tr-0').append(createSelect('select-smallGenre'));
			$(DcreateTh({val:'작가'})).appendTo('#detail-tr-1');
			$(createTd({})).append($(createInput({id:'writter',clazz:'',type:'text'})).attr('placeholder','작가')).appendTo('#detail-tr-1');
			$(DcreateTh({val:'출판형태'})).appendTo('#detail-tr-2');
			$(DcreateTd({val:'종이책'})).appendTo('#detail-tr-2');
			$(DcreateTh({val:'판형'})).appendTo('#detail-tr-3');
			$(DcreateTd({val:'A5'})).appendTo('#detail-tr-3');
			$(DcreateTh({val:'출판사'})).appendTo('#detail-tr-4');
			$(createTd({})).append($(createInput({id:'publisher',clazz:'',type:'text'})).attr('placeholder','출판사')).appendTo('#detail-tr-4');
			$(DcreateTh({val:'출판일'})).appendTo('#detail-tr-5');
			$(createTd({})).append($(createInput({id:'publishingDate',clazz:'',type:'text'}))
					.attr('placeholder','출판일')
					.attr('readonly','readonly')
					).appendTo('#detail-tr-5');
			$('#publishingDate')
			.daterangepicker({
				autoUpdateInput: false,
				locale: {
					cancelLabel: 'Clear',
					format: 'YYMMDD'
				},
				singleDatePicker: true,
				showDropdowns: true
			}, 
			function(start, end, label) {
				$('#publishingDate').val(moment().format('YYYY-MM-DD'));
			});
			$('.daterangepicker').attr('style','display: none;position: fixed;width: 300px;left: 0;right: -40%;margin-left: auto;margin-right: auto;top: 65%;border: 1px solid #969696;background-color: #fff;');
			$(createDiv({id:'detail-count-form'})).appendTo('#detail-wrap-form');
			$(createDiv({id:'detail-select-count'})).appendTo('#detail-count-form');
			$(createLabel({clazz:'label',val:'갯수 선택'})).appendTo('#detail-select-count');
			$(createInput({type:'button',id:'detail-book-count'})).attr('value','1').appendTo('#detail-select-count');
			$('#detail-book-count').spinner();
			$('.ui-spinner-button ').addClass('btn-book-count');
			var total = function(){
				return (($('#price').val() * 1)*($('#detail-book-count').spinner("value")));
			}
			$('#price').on('input',function(){
				$('#total-prices').text(total())
			});
			$('.btn-book-count').click(()=>{
				$('#total-prices').text(total())
			});
			$(createDiv({id:'detail-wrap-total-price'})).appendTo('#detail-right-product');
			$(DcreateSpan({id:'detail-span-total',val:'총 금액'})).appendTo('#detail-wrap-total-price');
			$(DcreateSpan({id:'total-prices',clazz:'total-count-price',val:total()})).appendTo('#detail-wrap-total-price');
			$(DcreateSpan({id:'',val:'원'})).appendTo('#detail-wrap-total-price');
			$(createDiv({id:'detail-wrap-btn'})).appendTo('#detail-right-product');
			
			var bookkAd= function(s){
				$.ajax({
					url:x.context+'/book/ADD',
					method:'POST',
					data:JSON.stringify({
						genreNum:parseInt($('#select-smallGenre').val()),
						title:$('#title').val(),
						price:$('#price').val(),
						writ:$('#writter').val(),
						publisher:$('#publisher').val(),
						publishingDate:$('#publishingDate').val(),
						bookImg:s.Imgpath,
						inven:parseInt($('#detail-book-count').val())
					}),
					dataType:'json',
					contentType:'application/json',
					success : s =>{
						$('a')
						.attr('style','color: white;');
						$(this)
						.attr('style','color: red;');
						
						$('#div-subMenu-ul')
						.html($(createUL({id:'ul-subMenu',clazz:'mylist-inline'})).attr('style','margin: 0 auto;'));
						
						$('#div-adminContent')
						.html(createDiv({id:'div-adminContent-dash',clazz:''}))
						.append(createDiv({id:'div-adminContent-chartbtn',clazz:'text-center'}));
						$('#div-adminContent-dash')
						.append(createDiv({id:'div-adminContent-chart',clazz:'text-center'}))
						.append(createDiv({id:'div-adminContent-control',clazz:'text-center'}));
						user.admin.tableCharts(x);
					},
					error : ()=>{
						alert('다시 입력 하십시오');
					}
				});
			}
			var bolea=true;
			$(createButton({clazz:'btn btn-primary fas fa-arrow-right',val:'&nbsp;&nbsp;책 등록하기'})).appendTo('#detail-wrap-btn')
			.on('click',function(e){
				e.preventDefault();
				if($('#bookImg').val()===''){
					alert('필수 선택입니다');
					$('#bookImg').click();
					return;
				}
				if($('#select-smallGenre').val()===''){
					alert('필수입력입니다');
					$('#select-smallGenre').focus();
					return;
				}
				if($('#title').val()===''){
					alert('필수입력입니다');
					$('#title').focus();
					return;
				}
				if($('#price').val()===''){
					alert('필수입력입니다');
					$('#price').focus();
					return;
				}
				for(var i=0;i<$('#price').val().length;i++){
					var cha = $('#price').val().charAt(i)
					if(cha<'0'||cha>'9'){
						alert('숫자만 가능합니다');
						$('#price').select();
						return;
					}
				}
				if($('#writter').val()===''){
					alert('필수입력입니다');
					$('#writter').focus();
					return;
				}
				if($('#publisher').val()===''){
					alert('필수입력입니다');
					$('#publisher').focus();
					return;
				}
				if($('#publishingDate').val()===''){
					alert('필수입력입니다');
					$('#publishingDate').focus();
					return;
				}
				if(bolea){
					$('#imgForm').ajaxForm({
						url:x.context+'/book/fileupLoad',
						method:'POST',
						enctype:'multipart/form-data',
						beforeSubmit:function(){
							alert("올리는 중입니다");
						},
						success : s =>{
							bolea=false;
							$('#bookImg').attr('display','none');
							$('.div-img-profile').append(createImage({src:s.Imgpath}))
							bookkAd(s);
						},
						error : ()=>{
							alert('업로드 실패');
						}
					}).submit();
				}else{
					bookkAd();
				}
			});
			var genreList=d.genres;
			$(createOption({val:'selectPlease',txt:'--대장르를 선택해주세요--'})).appendTo('#select-genre');
			$(createOption({val:'selectPlease',txt:'--소장르를 선택해주세요--'})).appendTo('#select-smallGenre')
			$.each(genreList,(k,v)=>{
				$(createOption({val:k,txt:v.largeGenre})).appendTo('#select-genre');
			});
			
			$('#select-genre').change(function(){
				var state=$('#select-genre option:selected').val();
				$('#select-smallGenre').empty();
				if(state==='selectPlease'){
					$('#select-smallGenre').append(createOption({val:'selectPlease',txt:'--소장르를 선택해주세요--'}))
				}else{
					var smallNumList=genreList[state].genreNum.split(',')
					var smallGenreList=genreList[state].smallGenre.split(',')
					$.each(smallNumList,(k,v)=>{
						$('#select-smallGenre').append(createOption({val:v,txt:smallGenreList[k]}))
					});
				}
			});
		});
	},
	pietableChart:x=>{
		var chartList={'cols':[],'rows':[]};
		$.getJSON(x.context+'/chartData/books', d=>{
			var rowlen;
			var collen;
			var cbooleans;
			var rbooleans;
			$.each(d.chartData,(k,v)=>{
				if(chartList.cols.length==0){
					chartList.cols.push(v.largeGenre)
					collen=chartList.cols.length-1;
					chartList.rows[collen]=[]
				}else{
					cbooleans=true;
					collen=0;
					$.each(chartList.cols,(kc,vc)=>{
						if(vc===String(v.largeGenre)){
							cbooleans=false;
						}
						if(cbooleans){
							collen=kc+1;
						}
					});
					if(cbooleans){
						chartList.cols.push(v.largeGenre);
						chartList.rows[chartList.cols.length-1]=[]
					}
				}
				rbooleans=true;
				rowlen=0;
				$.each(chartList.rows[collen],(kc,vc)=>{
					if(vc===String(v.smallGenre)){
						rbooleans=false;
					}
					if(rbooleans){
						rowlen=kc+1;
					}
				});
				if(rbooleans){
					chartList.rows[collen][rowlen]=k;
				}
			});
			
			google.charts.load('current', {packages: ['corechart', 'controls', 'table']});
			google.charts.setOnLoadCallback(drawChart);
			var data;
			var control;
			var lineChart;
			var pietableChart;
			var view;
			var dashboard;
			function drawChart() {
				data=new google.visualization.DataTable();
				$.each({'책이름':'string','재고량':'number'},(kc,vc)=>{
					data.addColumn(vc, kc);
				});
				$.each(d.chartData,(k,v)=>{
//					k+1번째 튜플을 지우게 한다.
					data.addRow([v.bookName,v.inventory]);
				});
				
				dashboard = new google.visualization.Dashboard(
						document.getElementById('div-adminContent-dash'));
				
				control = new google.visualization.ControlWrapper({
					controlType: 'NumberRangeFilter',
					containerId: 'div-adminContent-control',
					options: {
						filterColumnIndex: 1,
			            'ui': {'labelStacking': 'vertical'}
					}
				});
				pietableChart = new google.visualization.ChartWrapper({
					'chartType': 'PieChart',
					'containerId': 'div-adminContent-chart',
					'options': {
						width: 950,
						height: 500,
						'pieSliceText': 'value',
						legend: { position: 'right' },
						'title': '연간 판매량 파이 차트',			
						'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
						'pieSliceText': ''
							
					}
				});
				
				dashboard.bind(control, pietableChart);
				dashboard.draw(data);
				$('#div-adminContent-chart').attr('style','margin-top: 55px;')
				
				$('#div-adminContent-chartbtn')
				.append(createUL({id:'ul-chart-genre',clazz:'mylist-inline'}))
				$.each(chartList.cols,(k,v)=>{
					$(createLI({id:'li-chart-genre-'+k,clazz:''}))
					.appendTo('#ul-chart-genre')
					.append(
							$(createInput({id:'',clazz:'',type:'checkbox'}))
							.attr('name','genrelist-check')
							.attr('checked',true)
							.attr('value',k)
							.on('click',function(e){
								var selected = [];
								var nonselected = [];
								$('input[name=genrelist-check]').each(function(){
									if(this.checked){
										$.each(chartList.rows[parseInt($(this).val())],(rk,rv)=>{
											selected.push(rv);
										});
									}else{
										$.each(chartList.rows[parseInt($(this).val())],(rk,rv)=>{
											nonselected.push(rv);
										});
									}
								})
								if(selected.length==0){
									alert('하나 이상 체크하셔야 합니다');
									e.preventDefault();
									return;
								}
								view = new google.visualization.DataView(data);
								view.setRows(selected);
								view.hideRows(nonselected);
								dashboard.draw(view);
							}))
							.append(createLabel({fo:'comment',val:v})+' ');
				});
			}
			
		});
	
	}
}
user.member={
	// 마이페이지 승인내역 도서관리 주문내역 판매내역 조회
	admempage:x=>{
		$('#div-advertise').html(createDiv({id:'div-adminipage-menu',clazz:'text-center'}))
		.attr('style','width: 1050px;margin: 0 auto;')
		.append(createDiv({id:'div-adminipage-submenu',clazz:'text-left'}))
		.append(createDiv({id:'div-adminipage-content',clazz:'text-left'}));
		$('#div-adminipage-menu')
		.attr('style','width: 100%;')
		.html(createUL({id:'mypage-header',clazz:'mylist-inline'}));
		
		$.each([
			'http://www.bookk.co.kr/img/settings/index01.jpg',
			'http://www.bookk.co.kr/img/settings/index02.jpg',
			'http://www.bookk.co.kr/img/settings/index03.jpg',
			'http://www.bookk.co.kr/img/settings/index04.jpg',
			'http://www.bookk.co.kr/img/settings/index05.jpg'
		],(k,v)=>{
			$(createLI({id:'li-headMenu-'+k,clazz:''}))
			.attr('name','li-headMenu')
			.append(createImg({id:'',alt:'',src:v,clazz:''}))
			.appendTo('#mypage-header');			
		});
		
		$('#li-headMenu-0')
		.on('click',e=>{
			e.preventDefault();
			user.member.mypage(x);
		});
		$('#li-headMenu-2')
		.on('click',e=>{
			e.preventDefault();
			$.getScript($.javascript()+'/shop.js',()=>{
				shop.mall.orderCheck(x);
			});
		});
	},
	mypage:x=>{
		$('li[name="li-headMenu"]').attr('style','border: 1px solid #eee;');
		$('#li-headMenu-0').attr('style','border: 1px solid #adcfdf;');
		var d=JSON.parse(sessionStorage.getItem('user'));
		$('#div-adminipage-submenu')
		.attr('style','border-bottom: 2px solid #dddddd;')
		.html(createUL({id:'mypage-submenu',clazz:'mylist-inline'}));

		$.each(['프로필관리','인증관리','계정관리','내 활동내역','찜목록'],(k,v)=>{
			$(createLI({id:'',clazz:''}))
			.append(createATag({id:'a-submenu-'+k,val:v}))
			.appendTo('#mypage-submenu');			
		});
		$('#div-adminipage-content')
		.html(createDiv({id:'div-openTitle',clazz:''}));
		$('#div-openTitle')
		.append(createHTag({size:2,val:'공개 정보'}))
		.append(createP({val:'자신을 홍보하기 위해 부크크 사용자들에게 공개되는 프로필 정보입니다.'}));
		$(createTable({id:'table-profile',clazz:'table-profile'}))
		.appendTo('#div-openTitle');
		$(createTr({id:'tr-0'}))
		.appendTo('#table-profile');
		$(createTh({id:'',clazz:''}))
		.appendTo('#tr-0')
		.text('닉네임');
		$(createTd({id:'',clazz:''}))
		.appendTo('#tr-0')
		.append(createInput({id:'nickName',clazz:'my-border-input',type:'text'}));		
		
		$.each([
			{title:'프로필 사진',content:'자신을 대표하는 이미지 사진을 업로드합니다. (5MB 미만의 JPG, PNG, GIF 파일)'},
			{title:'마이부크크 상단 사진',content:'마이부크크 상단에 노출될 이미지 사진을 업로드합니다. (5MB 미만의 JPG, PNG, GIF 파일)'}
		],(k,v)=>{
			$(createTr({id:'tr-'+(k+1)}))
			.appendTo('#table-profile');
			$(createTh({id:'',clazz:''}))
			.appendTo('#tr-'+(k+1))
			.text(v.title);
			$(createTd({id:'td-'+(k+1),clazz:''}))
			.attr('style','position: relative;')
			.appendTo('#tr-'+(k+1))
			.append($(createSpan({id:'',clazz:''}))
					.attr('style','position: absolute;bottom: 0px;font-size: 12px;right: 0px;')
					.text(v.content))
					.append(createInput({id:'input-',clazz:'',type:'file'}))
					.append(createDiv({id:'',clazz:'div-img-profile'}));			
		});

		$(createTr({id:'tr-3'}))
		.appendTo('#table-profile');
		$(createTh({id:'',clazz:''}))
		.appendTo('#tr-3')
		.text('자기소개');
		$(createTd({id:'',clazz:''}))
		.appendTo('#tr-3')
		.append(textarea({id:'introduce'}));		
		
		$(createDiv({id:'div-industrialTitle',clazz:''}))
		.appendTo('#div-adminipage-content')
		.append(createHTag({size:2,val:'비공개 정보'}))
		.append(createP({val:'서비스 운영을 위해 필요한 개인 정보로, 다른 사용자에게 공개되지 않습니다.'}));
		$(createTable({id:'table-induProfile',clazz:'table-induProfile'}))
		.appendTo('#div-industrialTitle');
		
		$.each([
			'성명','아이디','이메일 주소','휴대전화번호','생년월일'
		],(k,v)=>{
			$(createTr({id:'tr-indu-'+k}))
			.appendTo('#table-induProfile');
			$(createTh({id:'',clazz:''}))
			.attr('style','text-align: left;')
			.appendTo('#tr-indu-'+k)
			.text(v);
			$(createTd({id:'td-indu-'+k,clazz:''}))
			.appendTo('#tr-indu-'+k);
			$(createInput({id:'input-indu-'+k,clazz:'my-border-input',type:'text'}))
			.appendTo('#td-indu-'+k)
			.attr('readonly','readonly');;
		});
		
		$(createButton({id:'btn-phone',clazz:'lo-btn',val:'번호변경'}))
		.appendTo('#td-indu-3');
		
		
		$(createTr({id:'tr-indu-5'}))
		.appendTo('#table-induProfile');
		$(createTh({id:'',clazz:''}))
		.attr('style','text-align: left;')
		.appendTo('#tr-indu-5')
		.text('주소');
		$(createTd({id:'td-indu-5',clazz:''}))
		.appendTo('#tr-indu-5');
		
		$('#td-indu-5')
		.append(createInput({id:'my-postCodeAddress',clazz:'my-border-input',type:'text'}))
		.append(createButton({id:'my-btn-address',clazz:'lo-btn',val:'우편번호 찾기'})+'</br>')
		.append(createInput({id:'my-roadAddress',clazz:'my-border-input',type:'text'})+'</br>'
				+createInput({id:'my-jibunAddress',clazz:'my-border-input',type:'text'})+'</br>'
				+createInput({id:'my-detailAddress',clazz:'my-border-input',type:'text'})+'</br>')
		.append($(createSpan({id:'',clazz:''})).text('주문한 도서를 수령할 주소를 입력합니다.'));
		
		$(createTr({id:'tr-indu-6'}))
		.appendTo('#table-induProfile');
		$(createTh({id:'',clazz:''}))
		.attr('style','text-align: left;')
		.appendTo('#tr-indu-6')
		.text('알림설정');
		$(createTd({id:'td-indu-6',clazz:''}))
		.appendTo('#tr-indu-6')
		.append($(createSpan({id:'',clazz:''})).text('구매, 판매, 정산에 관한 알림을 수신합니다.'))
		.append('</br>'+createInput({id:'alarm',clazz:'',type:'checkbox'}))
		.append(createLabel({fo:'notice_type2',val:'휴대전화'}))
		.append(createInput({id:'alarm',clazz:'',type:'checkbox'}))
		.append(createLabel({fo:'notice_type2',val:'이메일'}));
		
		$(createDiv({id:'div-titleBtn-group',clazz:''}))
		.appendTo('#div-adminipage-content');
		$(createButton({id:'',clazz:'lo-btn',val:'저장'}))
		.appendTo('#div-titleBtn-group')
		.attr('style','width:904px')
		.on('click',e=>{
			e.preventDefault();
			$.ajax({
				url:x.context+'/member/update',
				method:'POST',
				data:JSON.stringify({
					id:userid,
					pass:userpass,
					type:type
					}),
				dataType:'json',
				contentType:'application/json',
				success : d =>{
					if(d!==null){
						if($('input[name=admin-check]').is(':checked')){
							sessionStorage.setItem('admin',JSON.stringify(d));
							user.admin.login(x);
						}else{
							sessionStorage.setItem('user',JSON.stringify(d));
							user.member.costomer(x);
						}
						$.magnificPopup.close();
					}else{
						alert('로그인 실패');
					}
				},
				error : ()=>{
					alert('일치하는 정보가 없습니다');
				}
			});
		});

		$('#my-postCodeAddress')
		.attr('value',d.addrPostCode)
		.attr('placeholder','우편번호')
		.attr('readonly','readonly');
		$('#my-roadAddress')
		.attr('value',d.addrRoad)
		.attr('readonly','readonly')
		.attr('style','width:500px')
		.attr('placeholder','도로명');
		$('#my-jibunAddress')
		.attr('value',d.addrJibun)
		.attr('readonly','readonly')
		.attr('style','width:500px')
		.attr('placeholder','지번');
		$('#my-detailAddress')
		.attr('value',d.addrDetailAddr)
		.attr('style','width:500px')
		.attr('placeholder','상세주소');
		
		
		$('#nickName').attr('value',d.memNickName);
		$('#introduce')
		.text(d.memIntroduce)
		.attr('style','resize: none;border: 1px solid #dfdfdf;min-height: 200px;width: 100%;');
		
		$.each([d.memName,d.memID,d.memEmail,d.memPhone,(d.memSsn)],(k,v)=>{
			$('#input-indu-'+k)
			.attr('value',v);					
		});

		$('table')
		.attr('style','display:table;border-collapse: collapse;border-color: inherit;border-top: 1px solid #f3f4f5;border-bottom: 1px solid #f3f4f5;')
		$('tr')
		.attr('style','border-bottom: 1px solid #f3f4f5;')
		
		$('#my-btn-address')
		.on('click',e=>{
			e.preventDefault();
			new daum.Postcode({
		        oncomplete: function(data) {
		        	// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

		            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
		            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
		            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
		            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

		            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
		            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
		            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
		                extraRoadAddr += data.bname;
		            }
		            // 건물명이 있고, 공동주택일 경우 추가한다.
		            if(data.buildingName !== '' && data.apartment === 'Y'){
		                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
		            }
		            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
		            if(extraRoadAddr !== ''){
		                extraRoadAddr = ' (' + extraRoadAddr + ')';
		            }
		            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
		            if(fullRoadAddr !== ''){
		                fullRoadAddr += extraRoadAddr;
		            }

		            // 우편번호와 주소 정보를 해당 필드에 넣는다.
		            document.getElementById('my-postCodeAddress').value = data.zonecode; //5자리 새우편번호 사용
		            document.getElementById('my-roadAddress').value = fullRoadAddr;
		            document.getElementById('my-jibunAddress').value = data.jibunAddress;

		        }
		    }).open();
		});
	},
	login:x=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-login',clazz:'auth-form'}))
					.attr('style','width: 300px; height: 500px;border-radius: 50px; left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background:white;border:1px solid #969696;')}, type : 'inline'}, 0);
		$('#form-login')
		.append(DcreateHTag({size:2,val:'로그인',clazz:'login-htag'}))
		.append($(createDiv({id:'div-form-group',clazz:'form-group'})).attr('style','margin-bottom: 15px;'))
		.append(createDiv({id:'div-btn-group',clazz:'wrap-check'})
				+createDiv({id:'div-auth-help',clazz:'form-group auth-help'}));
		$('.login-htag').attr('style','text-align: center;');
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'아이디'})+'<br/>'
				+createInput({id:'login-id',clazz:'my-login-input',type:'text'})+'<br/>')
		.append(createLabel({fo:'comment',val:'비밀번호'})+'<br/>'
				+createInput({id:'login-password',clazz:'my-login-input',type:'password'})+'<br/>');
		$('label')
		.attr('style','display: inline-block;margin-bottom: 5px;max-width: 100%;font-weight: 700;');
		$('#login-id')
		.attr('value','user');
		$('#login-password')
		.attr('value','user');
		
		$('#div-btn-group')
		.append($(createInput({id:'',clazz:'',type:'checkbox'}))
				.attr('name','admin-check')
				.on('click',()=>{
					$('#login-id')
					.attr('value','master');
					$('#login-password')
					.attr('value','master');
				}))
		.append($(createLabel({fo:'comment',val:'관리자 로그인'}))
				.attr('style','font-size: 11px;'))
		.append('<br/>');
		
		$(createButton({id:'btn-login',type:'submit',clazz:'lo-btn',val:'로그인'}))
		.attr('style','padding: 6px 12px;border: 1px solid transparent;border-radius: 4px;position: relative;width: 100%;height: 50px;top: 40px;color: white;background: black;')
		.appendTo('#div-btn-group')
		.on('click',e=>{
			e.preventDefault();
			var type='member';
			if($('input[name=admin-check]').is(':checked')){
				type='admin';
			}
			var userid=$('#login-id').val();
			var userpass=$('#login-password').val();
			$.ajax({
				url:x.context+'/'+type+'/login',
				method:'POST',
				data:JSON.stringify({
					id:userid,
					pass:userpass,
					type:type
					}),
				dataType:'json',
				contentType:'application/json',
				success : d =>{
					if(d!==null){
						if($('input[name=admin-check]').is(':checked')){
							sessionStorage.setItem('admin',JSON.stringify(d));
							user.admin.login(x);
						}else{
							sessionStorage.setItem('user',JSON.stringify(d));
							user.member.costomer(x);
						}
						$.magnificPopup.close();
					}else{
						alert('로그인 실패');
					}
				},
				error : ()=>{
					alert('일치하는 정보가 없습니다');
				}
			});
		});

		$(createDiv({id:'login-div-form'})).attr('style','position: relative;top: 40px;').appendTo('#form-login');
		$(createHTag({val:'잠깐! 비회원구입을 원하시나요?!<br/>부크크의 회원가입은 다른 곳의 비회원 구매보다 간단합니다.'})).attr('style','font-size: 13px;color: red;').appendTo('#login-div-form');
		$('#div-auth-help').attr('style','position: relative;top: 150px;');
		$(createATag({link:'#',val:'아이디가 없나요?'})).attr('style','font-size: 11px;font-weight: bold;')
		.appendTo('#div-auth-help')
		.on('click',e=>{
			e.preventDefault();
			user.member.join(x);
		});
		$('<a href="#" class="find-user pull-right">아이디/비밀번호 찾기</a>').attr('style','font-size: 11px;font-weight: bold;')
		.appendTo('#div-auth-help');
	},
	costomer:x=>{
		$('#div-header-userMenu').html(createDiv({id:'div-member-bar',clazz:''}));
		$('#div-member-bar').attr('style','text-align: center; line-height: 50px;');
		$(createATag({id:'a-cs',val:'고객센터'})).appendTo('#div-member-bar').attr('style','position: relative;right: 100px;color: white;font-weight: bold;')
		.on('click',()=>{
			alert('서비스 준비중..');
		});
		$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
		$(createATag({id:'a-delivery-check',val:'주문배송조회'})).appendTo('#div-member-bar').attr('style','position: relative;right: 50px;color: white;font-weight: bold;')
		.on('click',()=>{
			document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
			$.getScript($.javascript()+'/book.js',()=>{
				book.main.bookNav(x);
				$.getScript($.javascript()+'/shop.js',()=>{
					shop.mall.orderCheck(x);
				});
			});
				
		});
		$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
		$(createATag({id:'a-cart',val:'장바구니'})).appendTo('#div-member-bar').attr('style','position: relative;color: white;font-weight: bold;')
		.on('click',e=>{
			e.preventDefault();
			
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
			
			document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
			$.getScript($.javascript()+'/book.js',()=>{
				book.main.bookNav(x);
				$.getScript($.javascript()+'/shop.js',()=>{
					shop.mall.cart(x);
				});
			});
		});
		
		$(createATag({id:'a-mypage',type:'',clazz:'lo-btn',val:'마이페이지'})).attr('style','position: relative;left: 50px;color: white;font-weight: bold;')
		.appendTo('#div-member-bar')
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
			document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
			$.getScript($.javascript()+'/book.js',()=>{
				book.main.bookNav(x);   			
				$.getScript($.javascript()+'/user.js',()=>{
					user.member.admempage(x);
					user.member.mypage(x);
				});
			});
		});
		$('#div-member-bar').append(createSpan({id:'division',clazz:'division'}))
		$(createATag({id:'a-logout',val:'로그아웃'})).appendTo('#div-member-bar').attr('style','position: relative;left: 100px;color: white;font-weight: bold;')
		.on('click',e=>{
			e.preventDefault();
			document.getElementById('wizcss').href=(x.context+'/resources/css/style.css');
				sessionStorage.removeItem('user');
			$('#div-advertise').html(createDiv({id:'div-content',clazz:'container cart-div'}));
			$.getScript($.javascript()+'/app.js',()=>{
				app.init(x.context);
			})
		});
	},
	join:x=>{
		$.magnificPopup.open(
				{items: {src: $(createForm({id:'form-join',clazz:'auth-form'}))
					.attr('style','width: 300px; border-radius:50px;left: 0;right: 0;margin-left: auto;margin-right: auto;padding:12px 19px;background-color:#fff;border:1px solid #969696;')}, type : 'inline'}, 0);
		$('#form-join')
		.append(createHTag({size:2,val:'회원가입'})+'<br/>')
		.append($(createDiv({id:'div-form-group',clazz:'form-group'})).attr('style','margin-bottom: 15px;'))
		.append(createDiv({id:'div-btn-group',clazz:'wrap-check'}));
		
		$.each([
			{labelfo:'comment',labelval:'아이디',inputid:'id',inputclazz:'',inputtype:'text'},
			{labelfo:'comment',labelval:'비밀번호',inputid:'password',inputclazz:'my-border-input',inputtype:'password'},
			{labelfo:'comment',labelval:'이름',inputid:'name',inputclazz:'my-border-input',inputtype:'text'}
			],(k,v)=>{
					$('#div-form-group')
					.append(createLabel({fo:v.labelfo,val:v.labelval})+'<br/>'
							+createInput({id:'join-'+v.inputid,clazz:v.inputclazz,type:v.inputtype})+'<br/>');
		});
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'이메일'})+'<br/>'
				+createInput({id:'join-email',clazz:'my-border-input',type:'text'})+'@'
				+createSelect('join-url')+'<br/>');

		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'전화번호'})+'<br/>'
				+createSelect('join-phoneB')+'-'
				+createInput({id:'join-phoneM',clazz:'my-border-input',type:'text'})+'-'
				+createInput({id:'join-phoneA',clazz:'my-border-input',type:'text'})+'<br/>');
		
		$(createDiv({id:'ssns',clazz:''}))
		.attr('style','position: relative;')
		.appendTo('#div-form-group')
		.append(createLabel({fo:'comment',val:'주민번호'})+'<br/>'
				+createInput({id:'join-ssnB',clazz:'my-border-input',type:'text'})+'-'
				+createSelect('join-ssnA')+'<br/>');
		
		$('#div-form-group')
		.append(createLabel({fo:'comment',val:'주소'})+'<br/>'
				+createInput({id:'join-postCodeAddress',clazz:'my-border-input',type:'text'}))
		.append($(createButton({id:'join-btn-address',clazz:'lo-btn',val:'우편번호 찾기'}))
				.on('click',function(){
					  
        new daum.Postcode({
            oncomplete: function(data) {
            	
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if(fullRoadAddr !== ''){
                    fullRoadAddr += extraRoadAddr;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('join-postCodeAddress').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('join-roadAddress').value = fullRoadAddr;
                document.getElementById('join-jibunAddress').value = data.jibunAddress;

                // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                if(data.autoRoadAddress) {
                    //예상되는 도로명 주소에 조합형 주소를 추가한다.
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

                } else if(data.autoJibunAddress) {
                    var expJibunAddr = data.autoJibunAddress;
                    document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

                } else {
                    document.getElementById('guide').innerHTML = '';
                }
            }
        }).open();
				})
				.attr('style','padding: 6px 12px;border: 1px solid transparent;border-radius: 4px;'))
		.append(createInput({id:'join-roadAddress',clazz:'my-border-input',type:'text'})
				+createInput({id:'join-jibunAddress',clazz:'my-border-input',type:'text'})
				+createInput({id:'join-detailAddress',clazz:'my-border-input',type:'text'}));
		var str='';
		$.each(
				{
					'join-url':[{opVal:'@naver.com',opTxt:'naver.com'},{opVal:'@gmail.com',opTxt:'gmail.com'},{opVal:'@daum.net',opTxt:'daum.net'}],
					'join-ssnA':[{opVal:'1',opTxt:'남자'},{opVal:'2',opTxt:'여자'}],
					'join-phoneB':[{opVal:'010',opTxt:'010'},{opVal:'011',opTxt:'011'}]
				},(sk,sv)=>{
				str='';
					$.each(sv,(k,v)=>{
						str+=createOption({val:v.opVal,txt:v.opTxt});
					});
					
				$('#'+sk)
				.append(str);
		});
		$('label')
		.attr('style','display: inline-block;margin-bottom: 5px;max-width: 100%;font-weight: 700;');
		$('input')
		.attr('required',true);
		
		$('#join-postCodeAddress')
		.attr('style','width:80px;')
		.attr('placeholder','우편번호')
		.attr('readonly','readonly');
		$('#join-roadAddress')
		.attr('readonly','readonly')
		.attr('placeholder','도로명');
		$('#join-jibunAddress')
		.attr('readonly','readonly')
		.attr('placeholder','지번');
		$('#join-detailAddress')
		.attr('placeholder','상세주소');
		
		$('.my-border-input')
		.attr('autofocus','autofocus');

		$('#join-ssnB')
		.attr('readonly','readonly')
		.attr('style','width:120px;')
		.attr('placeholder','앞자리 6자리')
		.daterangepicker({
			autoUpdateInput: false,
				locale: {
					cancelLabel: 'Clear',
			        format: 'YYMMDD'
			    },
				singleDatePicker: true,
		        showDropdowns: true
	    }, 
	    function(start, end, label) {
	    	$('#join-ssnB').val(moment().format('YYMMDD'));
	    });
		$('.daterangepicker').attr('style','display: none;position: fixed;width: 300px;left: 0;right: 0;margin-left: auto;margin-right: auto;top: 62%;border: 1px solid #969696;background-color: #fff;');
	    
	    
		$('#join-email')
		.attr('style','width:70px;');
		$('#join-phoneM')
		.attr('style','width:70px;')
		.attr('pattern','[0-9]{4}');
		$('#join-phoneA')
		.attr('style','width:70px;')
		.attr('pattern','[0-9]{4}');
		$('#join-btn-address')
		.on('click',e=>{
			
		});
		
		$(createButton({id:'',type:'submit',clazz:'lo-btn',val:'가입하기'}))
		.attr('style','padding: 6px 12px;border: 1px solid transparent; border-radius: 50px; width:100%; font-weight: 900;background-color:aqua;color:darkmagenta')
		.appendTo('#div-btn-group')
		.on('click',e=>{
			e.preventDefault();
			id=$('#join-id').val();
			pass=$('#join-password').val();
			ssn=$('#join-ssnB').val();
			postDetail=$('#join-postCodeAddress').val();
			phoneM=$('#join-phoneM').val();
			phoneA=$('#join-phoneA').val();
			name=$('#join-name').val();
			if(id===''){
				alert('아이디를 입력하세요');
				$('#join-id').focus();
				return;
			}
			if(pass===''){
				alert('비밀번호를 입력하세요');
				$('#join-password').focus();
				return;
			}
			if(name===''){
				alert('이름을 입력하세요');
				$('#join-name').focus();
				return;
			}
			if(ssn===''){
				alert('생년월일을 입력하세요');
				$('#join-ssnB').focus();
				return;
			}
			for(var i=0;i<ssn.length;i++){
				var cha = ssn.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자만 가능합니다');
					$('#join-ssnB').select();
					return;
				}
			}
			if(ssn.length!=6){
				alert('생년월일 6자리를 입력하세요');
				$('#join-ssnB').select();
				return;
			}
			if(phoneM===''){
				alert('전화번호를 입력하세요');
				$('#join-phoneM').focus();
				return;
			}
			for(var i=0;i<phoneM.length;i++){
				var cha = ssn.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자만 가능합니다');
					$('#join-phoneM').select();
					return;
				}
			}
			if(phoneM.length!=4){
				alert('전화번호 4자리를 입력하세요');
				$('#join-phoneM').select();
				return;
			}
			if(phoneA===''){
				alert('전화번호를 입력하세요');
				$('#join-phoneA').focus();
				return;
			}
			for(var i=0;i<phoneA.length;i++){
				var cha = ssn.charAt(i)
				if(cha<'0'||cha>'9'){
					alert('숫자만 가능합니다');
					$('#join-phoneA').select();
					return;
				}
			}
			if(phoneA.length!=4){
				alert('전화번호 4자리를 입력하세요');
				$('#join-phoneA').select();
				return;
			}
			if(postDetail===''){
				alert('주소를 입력하세요');
				$('#join-btn-address').click();
				return;
			}
			
			$.ajax({
				url:x.context+'/member/join',
				method:'POST',
				data:JSON.stringify({
					id:id,
					pass:pass,
					name:name,
					email:$('#join-email').val()+$('#join-url').val(),
					phone:$('#join-phoneB').val()+'-'+phoneM+'-'+phoneA,
					ssn:ssn+'-'+$('#join-ssnA').val(),
					postDetail:postDetail,
					roadAddress:$('#join-roadAddress').val(),
					jibunAddress:$('#join-jibunAddress').val(),
					detailAddress:$('#join-detailAddress').val(),
					type:'member'
					}),
				dataType:'json',
				contentType:'application/json',
				success : d =>{
					if(d.success===1){
						$.magnificPopup.close();
						user.member.login(x);
					}else{
						alert('아이디가 중복됩니다.');
					}
				},
				error : ()=>{
					alert('전부 입력하세요');
					}
			});
		});
	}
};
