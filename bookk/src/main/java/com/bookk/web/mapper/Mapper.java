package com.bookk.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	    public int selectCount();
	    public int addMember(HashMap<?, ?> param);
	    public int addAddress(HashMap<?, ?> param);
	    public Object selectMemberById(HashMap<?, ?> param);
	    public Object selectAdminById(HashMap<?, ?> param);
	    public Object selectById(HashMap<?, ?> param);
	    public List<?> genreInfo(HashMap<?, ?> param);
		public List<?> chartDateBook(HashMap<?, ?> param);
		public List<?> chartDateBooks(HashMap<?, ?> param);
		public int imageADD(HashMap<?, ?> param);
		public int bookADD(HashMap<?, ?> param);
		public void bookDelete(HashMap<?, ?> param);
	    //장만호 영역
	    public List<?> orderList(HashMap<?, ?> param);
	    public int insertCheck(HashMap<?, ?> param);
	    public void addCartList(HashMap<?, ?> map);
		public HashMap<?, ?> mallCartCount(HashMap<?, ?> map);
		public List<?> mallCartList(HashMap<?, ?> param);
		public void insertcart(HashMap<?, ?> param);
		public void deleteCartList(HashMap<?, ?> param);
		public void cartAmountUpdate(HashMap<?, ?> map);
		public void insertAmountUpdate(HashMap<?, ?> param);
		public void malladdSalesDetail(HashMap<?,?> param);
		//장만호영역 끝;
		//김정원영역 시작
		public int insertBoard(HashMap<?, ?> param);
		public void updateBoard(HashMap<?, ?> param);
		public void viewStack(HashMap<?, ?> param);
		public void deleteBoard(HashMap<?, ?> param);
		public List<?> boardList(HashMap<?, ?> param);
		public Object articleDetail(HashMap<?, ?> param);
		public List<?> detailMore(HashMap<?, ?> param);
		public List<?> commentList(HashMap<?, ?> param);
		public int commentCount(HashMap<?, ?> param);
		public int selectBoardCount(HashMap<?, ?> param);
		public int detailMoreCount(HashMap<?, ?> param);
		public List<?> detailCommentList(HashMap<?, ?> map);
		public void deleteComment(HashMap<?, ?> param);
		public int searchCount(HashMap<?, ?> map);
		public int titleContentCount(HashMap<?, ?> map);
		public List<?> searchList(HashMap<?, ?> map);
		public List<?> searchAll(HashMap<?, ?> param);
		public List<?> searchTitle(HashMap<?, ?> param);
		public List<?> searchContent(HashMap<?, ?> param);
		public int insertComment(HashMap<?,?> param);	
		public int DetailCommentInsert(HashMap<?,?> param);
		//김정원 영역 끝
		public List<?> pageList(HashMap<?, ?> param);
		public List<?> bookMainBook1(HashMap<?, ?> param);
		public List<?> bookMainBook2(HashMap<?, ?> param);
		public List<?> bookMainBook3(HashMap<?, ?> param);
		public List<?> bookMainBook4(HashMap<?, ?> param);
		public List<?> bookMainBook5(HashMap<?, ?> param);
		public List<?> bookMainBook6(HashMap<?, ?> param);
		public HashMap<?, ?> largeGenre();
		public int bookGenreSmallCount(HashMap<?, ?> param);
		public int bookGenreLargeCount(HashMap<?, ?> param);
		public List<?> bookGenreLargeList(HashMap<?, ?> param);
		public List<?> bookGenreSmallList(HashMap<?, ?> param);
		public List<?> bookDetail(HashMap<?, ?> param);
		public List<?> bookNameLargeList(HashMap<?, ?> param);
		public List<?> bookNameSmallList(HashMap<?, ?> param);
		public List<?> bookWeekRanking(HashMap<?, ?> param);
		public List<?> bookMonthRanking(HashMap<?, ?> param);
		public List<?> bookAllRanking(HashMap<?, ?> param);
		public List<?> bookNewRanking(HashMap<?, ?> param);
		public List<?> bookInven(HashMap<?, ?> param);
		
		
		
		
}
