package com.bookk.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Image {
	private String ImageID,filename,extension,regdate,userid;
}
