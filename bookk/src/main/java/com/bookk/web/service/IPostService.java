package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;


@Service  @FunctionalInterface
public interface IPostService {
	public int execute(HashMap<?, ?> param);
}
