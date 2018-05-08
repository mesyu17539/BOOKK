package com.bookk.web.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

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

import com.bookk.web.domain.FileProxy;
import com.bookk.web.domain.Page;
import com.bookk.web.domain.PageAdapter;
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
		page.setTotalCount(new ICountService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.searchCount(param);
			}
		}.execute(param));
	 	page.setPageNum(Integer.parseInt(pageNum));
	 	page.setPageSize(5); //게시글
	 	page.setBlockSize(5); // 3까지 페이지넘버
	 	//엔드스타트 스타트로우 구현!
	 	page.setStartRow(1);
	 	page.setEndRow(5);
	 	page = (Page) adapter.attr(page); 	
	 	map.put("page", page);	
	 	map.put("data", param.get("data"));
	 	map.put("type", param.get("type"));	 	
	 	map.put("list", new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
			return mapper.searchList(param);
			}
		}.execute((HashMap<?, ?>) map));
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
		case "contents":
			System.out.println("content");
			o = new ISearchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchContent(param);
				}
			}.execute(param);
			
			break;
		}
		map.put("o", o);
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
		
		new IUpdateService() {			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.viewStack(param);
			}
		}.execute((HashMap<?, ?>) map);
	/*	System.out.println("viewStack2"+Integer.parseInt((String) map.get("viewStack")));*/
		map.put("count",new ICountService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.commentCount(param);
			}
		}.execute((HashMap<?, ?>) map));
		map.put("Clist",new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.commentList(param);
			}
		}.execute((HashMap<?, ?>) map));
		map.put("o", o);
		System.out.println("o  : "+o);
		System.out.println(map.get("count")+": 까운트");
		System.out.println(map.get("Clist")+"륐쓰뜨");
		return map;
		
	}
	/*/deleteComment/*/
	@RequestMapping("/deleteComment/{x}")
	public Map<?,?> deleteComment(
			@PathVariable("x") String x){
		Map<String,Object> map = new HashMap<>();
		System.out.println(x);
		map.put("x", x);
		new IDeleteService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.deleteComment(param);
				
			}
		}.execute((HashMap<?, ?>) map);
		return map;
	}
	@RequestMapping("/articleW")
	public Map<?,?> articleWriting(
			 @RequestBody HashMap<String, String> param){
		Map<String, Object> map = new HashMap<>();
		System.out.println("넘어왔나요"+param.get("select"));
		System.out.println("넘어왔나요"+param.get("title"));
		System.out.println("넘어왔나요"+param.get("contents"));
		map.put("select", param.get("select"));
		map.put("title", param.get("title"));
		map.put("contents", param.get("contents"));
		map.put("memID", param.get("id"));
		
	
		System.out.println(param.get("id"));
	 map.put("insertA", new IPostService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.insertBoard(param);
			}
		}.execute((HashMap<?, ?>) map));
		System.out.println("담긴값 : "+ map );
		
		return map;
		
	}
	//--------------------------- 댓글
	@RequestMapping("/articleComment/{x}")
	public Map<?,?> articleComments(
			@PathVariable("x") String x,
			@RequestBody HashMap<String, String> param){
		Map<String, Object> map = new HashMap<>();
		System.out.println("코멘트입성");
		System.out.println(x+" : who");
		map.put("x",x);
		map.put("comment", param.get("comment"));
		map.put("id", param.get("id"));
		map.put("commentSuccess",new IPostService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.insertComment(param) ;
			}
		}.execute((HashMap<?, ?>) map));
		System.out.println(map);
		return map;
	}
	//-------------------------- 더보기
	@RequestMapping("/DetailCommentInsert/{x}")
	public Map<?,?> DetailCommentInsert(
			@PathVariable("x") String x,
			@RequestBody HashMap<String, String> param){
		Map<String, Object> map = new HashMap<>();
		System.out.println(x);
		map.put("x", x);
		map.put("comment", param.get("comment"));
		map.put("id", param.get("id"));
		System.out.println(param.get("comment"));
		System.out.println(param.get("id"));
		map.put("detailComment",new IPostService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.DetailCommentInsert(param);
			}
		}.execute((HashMap<?, ?>) map));
		
		return map;
	}
	@RequestMapping("/DetailMore")
	public Map<?,?> detailMores(
		
			){
		Map<String,Object> map = new HashMap<>();
		System.out.println("more");
	
	 	
		map.put("Dlist",new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.detailMore(param);
			}
		}.execute((HashMap<?, ?>) map));
		
		System.out.println(map);
	return map;	
	}
	@RequestMapping("/CommentMore/{x}")
	public Map<?,?> CommentMore(
			@PathVariable("x") String x){
		Map <String,Object> map = new HashMap<>();
		System.out.println(x);
		map.put("x", x);
		map.put("count",new ICountService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.detailMoreCount(param);
			}
		}.execute((HashMap<?, ?>) map));
		map.put("DComment",new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.detailCommentList(param);
			}
		}.execute((HashMap<?, ?>) map));
		return map;
	}
	//deleteArticle
	@RequestMapping("/deleteArticle/{x}")
	public Map<?,?> deleteArticle(
			@PathVariable("x") String x){
		Map <String,Object> map = new HashMap<>();
		map.put("x", x);
		System.out.println("쿼리타나요?"+x);
		new IDeleteService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.deleteBoard(param);
				
			}
		}.execute((HashMap<?, ?>) map);
		return map;
	}
	//updateBoard
	@RequestMapping("/updateBoard/{x}")
	public Map<?,?> updateArticle(
			@PathVariable("x") String x,
			@RequestBody Map<?,?> param){
		Map<String,Object> map = new HashMap<>();
		System.out.println("연결 완료");
		param.get("contents");
		System.out.println("x : "+x);
		System.out.println("2 : "+param.get("contents"));
		map.put("contents", param.get("contents"));
		map.put("x", x);
		map.put("title", param.get("title"));
		new IUpdateService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.updateBoard(param);
				
			}
		}.execute((HashMap<?, ?>) map);;
		return map; 
	}
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
		System.out.println("1::"+map.get("book1"));
		
		map.put("2", "소설");
		Object book2 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook2(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book2", book2);
		System.out.println("2::"+map.get("book2"));
		
		map.put("3", "전기/회고록");
		Object book3 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook3(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book3", book3);
		System.out.println("3::"+map.get("book3"));
		
		map.put("4", "경영/경제/자기계발");
		Object book4 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook4(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book4", book4);
		System.out.println("4::"+map.get("book4"));
		
		map.put("5", "인문사회");
		Object book5 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook5(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book5", book5);
		System.out.println("5::"+map.get("book5"));
		
		map.put("6", "기타");
		Object book6 = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookMainBook6(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("book6", book6);
		System.out.println("6::"+map.get("book6"));
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
		System.out.println("test::"+i);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookGenreSmallList(param);
			}
		}.execute(param);
		System.out.println("test::"+o);
		map.put("count",i);
		map.put("smallList",o);
		return map;
	}
	
	@RequestMapping(value="/bookGenreLargeList",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookGenreLargeList(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("large"));
		System.out.println("뭐냐고"+param.get("genre"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreLargeCount(param);
			}
		}.execute(param);
		System.out.println("test::"+i);
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookGenreLargeList(param);
			}
		}.execute(param);
		System.out.println("test::"+o);
		map.put("count",i);
		map.put("largeList",o);
		return map;
	}
	
	@RequestMapping(value="/bookDetail",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookDetail(@RequestBody HashMap<String, Object> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("bookNum",param.get("bookList"));
		System.out.println("넘버 :?"+param.get("bookList"));
		Object o = new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.bookDetail(param);
			}
		}.execute(param);
		System.out.println("나오는 값::"+o);
		map.put("bookList",o);
		return map;
	}
}
