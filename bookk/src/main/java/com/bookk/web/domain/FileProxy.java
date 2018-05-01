package com.bookk.web.domain;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;


@Lazy
@Component
@Data
public class FileProxy {
	private MultipartFile file;
	private List<MultipartFile> flist;

}
