package com.bookk.web.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bookk.web.domain.FileProxy;
import com.bookk.web.domain.Page;
import com.bookk.web.domain.PageAdapter;
import com.bookk.web.mapper.Mapper;
import com.bookk.web.service.ICountService;
import com.bookk.web.service.IGetService;
import com.bookk.web.service.IPostService;
import com.bookk.web.service.ISearchService;


@RestController
public class Controller{
	private static final Logger logger=LoggerFactory.getLogger(Controller.class);
	@Autowired Mapper mapper;
	@Autowired PageAdapter adapter;
	@Autowired Page page;
	
	
	
	//장만호 영역 start
	@RequestMapping(value="/cartlist/{userid}",
			method=RequestMethod.POST,consumes="application/json")
	public Object cartList(@RequestBody HashMap<String, String> param) {
		System.out.println(param.get("userid"));
		return new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
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
	@RequestMapping(value="/cartList/{userid}",
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
		 	page.setPageSize(3);
		 	page.setBlockSize(3);
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
		param.get("data");
		/*
		 * 
		 * 
		 * 
		 * 
		  
		  */
		
		page.setTotalCount( new ICountService() {
			
			@Override
			public int execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.searchCount(param);
			}
		}.execute(param));
	 	page.setPageNum(Integer.parseInt(pageNum));
	 	System.out.println("페이지 넘버요  : "+page.getPageNum());
	 	page.setPageSize(3); //게시글
	 	page.setBlockSize(3); // 3까지 페이지넘버
	
	 	page = (Page) adapter.attr(page);
	 	map.put("page", page);	
	 	
	 	
	 	map.put("list", new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
			return mapper.searchList(param);
			}
		}.execute(param));
		/*
		 * 
		 * 
		 * 
		 * 
		 * */
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
		o = new IGetService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.articleDetail(param);
			}
		}.execute((HashMap<?, ?>) map);
		map.put("o", o);
		
		return map;
		
	}
	@RequestMapping("/articleW")
	public Map<?,?> articleWriting(
			MultipartHttpServletRequest request,
			 @RequestBody HashMap<String, String> param) throws IllegalStateException, IOException{
		Map<String, Object> map = new HashMap<>();
		FileProxy pxy=new FileProxy();
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
	 System.out.println(param+"탑니까 지금 ? ");
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
		map.put("genreL", new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.bookGenreDate(param);
			}
		}.execute((HashMap<?, ?>) map));
		System.out.println(map.get("genreL"));
		return map;
		
	}
	
	@RequestMapping(value="/bookGenreSmallCount",
			method=RequestMethod.POST,consumes="application/json")
		public Object bookGenreSmallCount(@RequestBody HashMap<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		param.put("genre",param.get("small"));
		System.out.println("뭐냐고"+param.get("genre"));
		int i = new ICountService() {
			@Override
			public int execute(HashMap<?, ?> map) {
				return mapper.bookGenreSmallCount(param);
			}
		}.execute(param);
		System.out.println("test::"+i);
		return i;
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
}
