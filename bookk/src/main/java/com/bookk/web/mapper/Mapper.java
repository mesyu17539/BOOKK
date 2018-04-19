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
		public void insertBoard();
		public void updateBoard();
		public void deleteBoard();
		public List<?> boardList(HashMap<?, ?> param);
		public Object articleDetail(HashMap<?, ?> param);
		public int selectBoardCount(HashMap<?, ?> param);
		public int searchCount(HashMap<?, ?> map);
		public List<?> searchList(HashMap<?, ?> map);
		public List<?> searchAll(HashMap<?, ?> param);
		public List<?> searchWriterTitle(HashMap<?, ?> param);
		public List<?> searchTitle(HashMap<?, ?> param);
		public List<?> pageList(HashMap<?, ?> param);
}
