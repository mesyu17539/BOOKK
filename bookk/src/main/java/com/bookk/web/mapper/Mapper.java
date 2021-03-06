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
	    public Object selectById(HashMap<?, ?> param);
		public HashMap<?, ?> mallCartCount(HashMap<?, ?> map);
		public List<?> mallCartList(HashMap<?, ?> param);
		public int insertBoard(HashMap<?, ?> param);
		public void updateBoard(HashMap<?, ?> param);
		public void deleteBoard(HashMap<?, ?> param);
		public List<?> boardList(HashMap<?, ?> param);
		public Object articleDetail(HashMap<?, ?> param);
		public int selectBoardCount(HashMap<?, ?> param);
		public int searchCount(HashMap<?, ?> map);
		public List<?> searchList(HashMap<?, ?> map);
		public List<?> searchAll(HashMap<?, ?> param);
		public List<?> searchWriterTitle(HashMap<?, ?> param);
		public List<?> searchTitle(HashMap<?, ?> param);
		public List<?> pageList(HashMap<?, ?> param);
		public List<?> bookGenreDate(HashMap<?, ?> param);
		public HashMap<?, ?> largeGenre();
		public int bookGenreSmallCount(HashMap<?, ?> param);
		public int bookGenreLargeCount(HashMap<?, ?> param);
		public List<?> bookGenreLargeList(HashMap<?, ?> param);
}
