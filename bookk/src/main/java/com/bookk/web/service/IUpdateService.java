package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service  @FunctionalInterface
public interface IUpdateService {
	public void execute(HashMap<?, ?> param);
}
