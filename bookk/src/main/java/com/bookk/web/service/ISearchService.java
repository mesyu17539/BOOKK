package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;
@Service  @FunctionalInterface
public interface ISearchService {
	public Object execute(HashMap<?, ?> param);
}
