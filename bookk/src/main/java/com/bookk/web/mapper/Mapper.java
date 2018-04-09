package com.bookk.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	    public int selectCount();
	    public int addMember(HashMap<?, ?> param);
	    public Object selectMemberById(HashMap<?, ?> param);
}
