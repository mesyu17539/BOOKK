package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

// 삼성 같은 곳 빼고는 안씀
@Service
public interface IDeleteService {
	public void execute(HashMap<?, ?> param);
}
