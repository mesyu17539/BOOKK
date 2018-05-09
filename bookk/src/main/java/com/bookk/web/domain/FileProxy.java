package com.bookk.web.domain;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;


@Lazy
@Component
@Data
public class FileProxy {
	private MultipartFile file;
	private List<MultipartFile> flist;
	public void execute(Model model, Object object) {
		// TODO Auto-generated method stub
		
	}
	public MultipartFile getFile() {
		return file;
	}
	public void setFile(MultipartFile file) {
		this.file = file;
	}
	public List<MultipartFile> getFlist() {
		return flist;
	}
	public void setFlist(List<MultipartFile> flist) {
		this.flist = flist;
	}
}
