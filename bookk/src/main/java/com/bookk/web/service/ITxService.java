package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component  @FunctionalInterface
public interface ITxService {
	public Object execute(HashMap<?, ?> param);
	
}
