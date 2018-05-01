package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service  @FunctionalInterface
public interface IGetService {
	public Object execute(HashMap<?, ?> param);
}
