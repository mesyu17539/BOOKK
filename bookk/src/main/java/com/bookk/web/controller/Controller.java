package com.bookk.web.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.eclipse.jdt.internal.compiler.parser.ParserBasicInformation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bookk.web.domain.Image;
import com.bookk.web.domain.Page;
import com.bookk.web.domain.PageAdapter;
import com.bookk.web.enums.ENUMS;
import com.bookk.web.mapper.Mapper;
import com.bookk.web.service.ICountService;
import com.bookk.web.service.IDeleteService;
import com.bookk.web.service.IGetService;
import com.bookk.web.service.IPostService;
import com.bookk.web.service.ISearchService;
import com.bookk.web.service.ITxService;
import com.bookk.web.service.IUpdateService;


@RestController
public class Controller{
	private static final Logger logger=LoggerFactory.getLogger(Controller.class);
	@Autowired Mapper mapper;
	@Autowired PageAdapter adapter;
	@Autowired Page page;
	@Autowired ITxService tx;
	@Autowired Image image;
	
	
	
	//장만호 영역 start
	@RequestMapping(value="/cartlist/{df}",
			method=RequestMethod.POST,consumes="application/json")
	public Object cartList(
			@RequestBody HashMap<String, Object> param) {
		
		
		System.out.println(param.get("deleteNum"));
		System.out.println
		(" orderNum:"+param.get("modifyKey")+" 수정 할 amount: "+param.get("modifyVal"));
		
		if(param.get("postDetail")!=null) {
			
			
			System.out.println("파람 값은 무엇이냐?"+param);
			tx.execute(param);
		}
		//빈 배열 체크시 equals를 쓴다.
		if(param.get("modifyKey")!=null&&!(param.get("modifyKey").equals(""))) {
			System.out.println("흠냐");
			List<String> list = new ArrayList<>();
			List<String> list2 = new ArrayList<>();
			for(int i =0; i<((String) param.get("modifyKey")).split(",").length;i++) {
				list.add(((String) param.get("modifyKey")).split(",")[i]);
				list2.add(((String) param.get("modifyVal")).split(",")[i]);
			}
			/*List<String> list = (List<String>) param.get("modifyKey");
			List<String> list2 = (List<String>) param.get("modifyVal");*/
			param.put("modifyKey", list);
			param.put("modifyVal", list2);
			
			logger.info("array[0] is {}", list);
			tx.execute(param);
		}
		if(param.get("deleteNum")!=null&&param.get("deleteNum")!="") {
				new IDeleteService() {
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.deleteCartList(param);
			}
		}.execute(param);
		}
		
		return new IGetService() {
			
			@Override 
			public Object execute(HashMap<?, ?> param) {
				
				return mapper.mallCartList(param);
			}
		}.execute(param) ;
		
	}
	
	//장만호 영역 end
	//박상우 start
	@RequestMapping(value="/{type}/login")
	public Object login(@RequestBody HashMap<String, String> param){
		logger.info("welcom {}","login ");
		param.put("data1", param.get("id"));
		param.put("data2", param.get("pass"));
		Object o=null;
		switch (param.get("type")) {
		case "member":
			System.out.println("mem");
			param.put("colum1", "MEM_ID");
			param.put("colum2", "MEM_PASS");
			param.put("type", param.get("type"));
			o= new IGetService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.selectById(param);
				}
			}.execute(param);
			break;
		case "admin":
			System.out.println("adm");
			param.put("colum1", "ADM_ID");
			param.put("colum2", "ADM_PASS");
			param.put("type", param.get("type"));
			o=  new IGetService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.selectAdminById(param);
				}
			}.execute(param);
			break;
		default:
			break;
		}
		System.out.println("넘길 값 : "+o);
		return o;
	}
	@RequestMapping(value="/{type}/myProfile")
	public Object myProfile(@RequestBody HashMap<String, String> param){
		logger.info("welcom {}","myProfile ");
		param.put("data1", param.get("id"));
		param.put("data2", param.get("pass"));
		Object o=null;
		switch (param.get("type")) {
		case "member":
			System.out.println("mem");
			param.put("colum1", "MEM_ID");
			param.put("colum2", "MEM_PASS");
			param.put("type", param.get("type"));
			o= new IGetService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					
					return mapper.selectMemberById(param);
				}
			}.execute(param);
			break;
		case "admin":
			System.out.println("adm");
			param.put("colum1", "ADM_ID");
			param.put("colum2", "ADM_PASS");
			param.put("type", param.get("type"));
			
			break;
		default:
			break;
		}
		System.out.println("넘길 값 : "+o);
		return o;
	}
	@RequestMapping(value="/{type}/join")
	public Map<?, ?> join(@RequestBody HashMap<String, String> param){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","join");
		switch (param.get("type")) {
		case "member":
			System.out.println("mem");
			param.put("colum", "id");
			map.put("success", new IPostService() {
				@Override @Transactional
				public int execute(HashMap<?, ?> param) {
					mapper.addAddress(param);
					return mapper.addMember(param);
				}
			}.execute(param));
			break;
		case "admin":
			System.out.println("adm");
			param.put("colum", "adm_id");
//			o=  new ISerachService() {
//				@Override
//				public Object excute(HashMap<?, ?> param) {
//					// TODO Auto-generated method stub
//					return mapper.searchAll(param);
//				}
//			}.excute(param);
			break;
		default:
			break;
		}
		return map;
	}
	@RequestMapping(value="/chartData/book")
	public Map<?, ?> chartDataBook(){
		Map<String,Object> map=new HashMap<>();
		map.put("chartData", new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.chartDateBook(param);
			}
		}.execute((HashMap<?, ?>) map)) ;
		return map;
	}
	@RequestMapping(value="/chartData/books")
	public Map<?, ?> chartDataBooks(){
		Map<String,Object> map=new HashMap<>();
		map.put("chartData", new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.chartDateBooks(param);
			}
		}.execute((HashMap<?, ?>) map)) ;
		return map;
	}
	@RequestMapping(value="/genreInfo")
	public Map<?, ?> genreInfo(){
		Map<String,Object> map=new HashMap<>();
		map.put("genres", new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.genreInfo(param);
			}
		}.execute((HashMap<?, ?>) map));
		return map;
	}
	@RequestMapping(value="/book/delete")
	public Map<?, ?> bookDelete(
			@RequestBody HashMap<String, String> param){
		Map<String,Object> map=new HashMap<>();
		new IDeleteService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				mapper.bookDelete(param);
			}
		}.execute(param);
		return map;
	}
	@RequestMapping(value="/book/fileupLoad", method=RequestMethod.POST)
	public Map<?, ?> bookFileupLoad(
			MultipartHttpServletRequest request) throws Exception{
		Map<String,Object> map=new HashMap<>();
		String path="";
		System.out.println("파일업로드1");
		Iterator<String> it=request.getFileNames();
		System.out.println("파일업로드2");
//		MultipartFile file = request.getFile("file");
		if(it.hasNext()) {
			MultipartFile file = request.getFile(it.next());
			String filename=file.getOriginalFilename();
//			String rootPath=request.getSession().getServletContext().toString();
			String rootPath=ENUMS.IMAGESRC.toString();
			path=rootPath+filename;
			System.out.println("path "+path);
			File files=new File(path);
			
			file
			.transferTo(files);
		}
		System.out.println("파일업로드 파일 추가");
		map.put("Imgpath", path);
		return map;
	}
	@RequestMapping(value="/book/ADD")
	public Map<?, ?> bookADD(
			@RequestBody HashMap<String, String> param){
		Map<String,Object> map=new HashMap<>();
		map.put("su", new IPostService() {
				@Override
				public int execute(HashMap<?, ?> param) {
					mapper.imageADD(param);
					return mapper.bookADD(param);
				}
			}.execute(param));
		return map;
	}
	//박상우 end
	@RequestMapping(value="/cartcount/{userid}",
			method=RequestMethod.POST,consumes="application/json")
	public Object cartCount(
			@PathVariable("userid")String userid,
			@RequestBody HashMap<String, String> param) {
				
				logger.info("넘어온 ID값은? {}",param.get("userid"));
		return new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> map) {
				// TODO Auto-generated method stub
				return mapper.mallCartCount(map);
			}
		}.execute(param);
		
	}
	@RequestMapping(value="/cart/{userid}",
			method=RequestMethod.GET,consumes="application/json")
	public Object cartList(@PathVariable("userid")String userid,
			@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> map) {
				// TODO Auto-generated method stub
				return mapper.mallCartList(map);
			}
		}.execute(param);
		return o;
		
	}
	@RequestMapping("/articles/{pageNum}")
	  public Map<?,?> getArticles(
			  @PathVariable String pageNum
			  ){
		  logger.info("welcom control {}","getArticles");
		 	Map<String,Object> map = new HashMap<>();
			page.setTotalCount( new ICountService() {
				
				@Override
				public int execute(HashMap<?, ?> param) {
					
					return mapper.selectBoardCount(param);
				}
			}.execute((HashMap<?, ?>) map));
		 	page.setPageSize(5);
		 	page.setBlockSize(5);
		 	page.setPageNum(Integer.parseInt(pageNum));
		 	page = (Page) adapter.attr(page);
		 	map.put("page", page);	
		 	
		 	map.put("list", new IGetService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
				return mapper.boardList(param);
				}
			}.execute((HashMap<?, ?>) map));
			
		 	System.out.println(map.get("list") );
		 	System.out.println("page"+ page);
				return map;
		  
	  }
	
	@RequestMapping("/searchArticle/{select}/{pageNum}")
	public Map<?, ?> search(
		 @PathVariable String select,
		 @PathVariable String pageNum,
		 @RequestBody HashMap<String, String> param) {
		Map<String, Object> map = new HashMap<>();
		Object o = null;
		System.out.println("select :"+select);
		System.out.println("pageNum :"+pageNum );
		System.out.println("타입 : " +param.get("type"));
		System.out.println("검색명 : "+param.get("data"));
	
		page.setTotalCount( new ICountService() {			
			@Override
			public int execute(HashMap<?, ?> param) {
				return mapper.searchCount(param);
			}
		}.execute(param));
	 	page.setPageNum(Integer.parseInt(pageNum));
	 	System.out.println("페이지 넘버요  : "+page.getPageNum());
	 	page.setPageSize(5); //게시글
	 	page.setBlockSize(5); // 3까지 페이지넘버
	 	//엔드스타트 스타트로우 구현!
	 	page.setStartRow(1);
	 	page.setEndRow(5);
	 	page = (Page) adapter.attr(page); 	
	 	map.put("page", page);	
	 	map.put("data", param.get("data"));
	 	map.put("type", param.get("type"));
	 	System.out.println(page.getStartRow()+"//1111111111//"+page.getEndRow());	 	
	 	
	 	map.put("list", new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
			return mapper.searchList(param);
			}
		}.execute((HashMap<?, ?>) map));
	 	
	 	System.out.println("list"+ map.get("list"));
		System.out.println("type :  "+param.get("type"));
		switch (param.get("type")) {
		case "co_title":

			o = new ISearchService() {
					
					@Override
					public Object execute(HashMap<?, ?> param) {
						// TODO Auto-generated method stub
						return mapper.searchAll(param);
					}
				}.execute(param);
			break;
			
		case "titleContent":
			System.out.println("titleContent");
			o = new ISearchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAll(param);
				}
			}.execute(param);
			break;
			
		case "content":
			System.out.println("content");
			o = new ISearchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAll(param);
				}
			}.execute(param);
			break;
		}
		map.put("o", o);
		System.out.println("넘어온 값 : "+o);
		System.out.println("map :" + map);
		System.out.println("page"+ page);
		System.out.println("list"+ map.get("list"));
		return map;
	}
	
	
	// 상세게시판
	@RequestMapping("/articleDetail/{x}")
	public Map<?,?> articleDetail(
			@PathVariable("x") String x			
		){
	
		Map<String, Object> map = new HashMap<>();
		map.put("x", x);
		Object o = null;
		System.out.println("x : "+x);
		o = new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				
				return mapper.articleDetail(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("viewStack",new IUpdateService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				mapper.viewStack(param);
			}
		});
	/*	System.out.println("viewStack2"+Integer.parseInt((String) map.get("viewStack")));*/

		map.put("o", o);
		
		return map;
		
	}
	@RequestMapping("/articleW")
	public Map<?,?> articleWriting(
			 @RequestBody HashMap<String, String> param){
		Map<String, Object> map = new HashMap<>();
/*		FileProxy pxy=new FileProxy();
		Iterator<String> it = request.getFileNames();
		String rootPath = "";
		String uploadPath = "";
		String fileName = "";
		if(it.hasNext()) {
			MultipartFile file = request.getFile(it.next());
			rootPath = request.getSession().getServletContext().toString();
			uploadPath = "resources/image/";
			fileName= file.getOriginalFilename();
		}
		String path = rootPath+uploadPath;
		File files = new File(path);
		System.out.println(fileName+"1");
		pxy.getFile().transferTo(files);
	 System.out.println("이거탑니까 지금 ? ");
	 System.out.println(param+"탑니까 지금 ? ");*/
		System.out.println("넘어왔나요"+param.get("select"));
		System.out.println("넘어왔나요"+param.get("title"));
		System.out.println("넘어왔나요"+param.get("contents"));
		map.put("select", param.get("select"));
		map.put("title", param.get("title"));
		map.put("contents", param.get("contents"));
		System.out.println();
	 map.put("insertA", new IPostService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.insertBoard(param);
			}
		}.execute(param));
		System.out.println("담긴값 : "+ map );
		
		return map;
		
	}
/*	@RequestMapping("/articleComment")
	public Map<?,?> articleComment(
			@RequestBody HashMap<String, String> param){
		new IPostService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return 0;
			}
		};
		return null;
	}*/
	
	// book
	@RequestMapping("/bookMain")
	public Map<?,?> bookMain(){
		Map<String, Object> map = new HashMap<>();
		map.put("1", "시/에세이");
		Object book1 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook1(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book1", book1);
		
		map.put("2", "소설");
		Object book2 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook2(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book2", book2);
		
		map.put("3", "전기/회고록");
		Object book3 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook3(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book3", book3);
		
		map.put("4", "경영/경제/자기계발");
		Object book4 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook4(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book4", book4);
		
		map.put("5", "인문사회");
		Object book5 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook5(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book5", book5);
		
		map.put("6", "기타");
		Object book6 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook6(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book6", book6);
		
		map.put("weekStart", "20180428");
		map.put("weekEnd", "20180505");
		Object bookWeekRanking = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookWeekRanking(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("bookWeekRanking", bookWeekRanking);
		
		map.put("MonthStart", "20180401");
		map.put("MonthEnd", "20180430");
		Object bookMonthRanking = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMonthRanking(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("bookMonthRanking", bookMonthRanking);
		
		map.put("allStart", "20180401");
		map.put("allEnd", "20180430");
		Object bookAllRanking = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookAllRanking(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("bookAllRanking", bookAllRanking);
		
		Object bookNewRanking = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookNewRanking(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("bookNewRanking", bookNewRanking);
		
		return map;
		
	}
	
	@RequestMapping(value="/bookGenreSmallList",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookGenreSmallCount(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("small"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreSmallCount(param);
			}
		}.execute(param);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookGenreSmallList(param);
			}
		}.execute(param);
		map.put("count",i);
		map.put("smallList",o);
		return map;
	}
	
	@RequestMapping(value="/bookGenreLargeList",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookGenreLargeList(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("large"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreLargeCount(param);
			}
		}.execute(param);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookGenreLargeList(param);
			}
		}.execute(param);
		map.put("count",i);
		map.put("largeList",o);
		return map;
	}
	
	@RequestMapping(value="/bookNameLargeList",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookNameLargeList(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("large"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreLargeCount(param);
			}
		}.execute(param);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookNameLargeList(param);
			}
		}.execute(param);
		map.put("count",i);
		map.put("largeList",o);
		return map;
	}
	
	@RequestMapping(value="/bookNameSmallList",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookNameSmallList(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("small"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreSmallCount(param);
			}
		}.execute(param);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookNameSmallList(param);
			}
		}.execute(param);
		map.put("count",i);
		map.put("smallList",o);
		return map;
	}
	
	@RequestMapping(value="/bookDetail",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookDetail(@RequestBody HashMap<String, Object> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("bookNum",param.get("bookList"));
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookDetail(param);
			}
		}.execute(param);
		map.put("bookList",o);
		return map;
	}
	
	@RequestMapping(value="/bookInven",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookInven(@RequestBody HashMap<String, Object> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("bookNum",param.get("bookNum"));
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookInven(param);
			}
		}.execute(param);
		map.put("inven",o);
		return map;
	}
}
