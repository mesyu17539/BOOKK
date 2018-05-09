package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component  
public interface ITxService {
	public String execute(HashMap<String, Object> param);
	
}
