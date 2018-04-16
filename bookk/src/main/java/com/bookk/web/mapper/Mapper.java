package com.bookk.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	    public int selectCount();
	    public int addMember(HashMap<?, ?> param);
	    public Object selectMemberById(HashMap<?, ?> param);
	    public Object selectById(HashMap<?, ?> param);
		public HashMap<?, ?> mallCartCount(HashMap<?, ?> map);
		public HashMap<?,?> mallCartList(HashMap<?, ?> map);
		public void insertBoard();
		public void updateBoard();
		public void deleteBoard();
		public List<?> boardList(HashMap<?, ?> param);
		public void selectBoard(HashMap<?, ?> param);
		public int selectBoardCount(HashMap<?, ?> param);
		public List<?> searchWriter(HashMap<?, ?> param);
		public List<?> searchWriterTitle(HashMap<?, ?> param);
		public List<?> searchTitle(HashMap<?, ?> param);
		public List<?> pageList(HashMap<?, ?> param);
}
