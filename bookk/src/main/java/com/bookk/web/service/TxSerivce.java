package com.bookk.web.service;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bookk.web.mapper.Mapper;

@Service 
public class TxSerivce implements ITxService{
	private static final Logger logger=LoggerFactory.getLogger(TxSerivce.class);
	@Autowired Mapper mapper;
	@Override @Transactional
	public String execute(HashMap<String,Object > param) {
		@SuppressWarnings("unchecked")
		//클론을쓰면
		HashMap<String, String> temp = (HashMap<String, String>) param.clone();
		if(param.get("postDetail")!=null) {
			if(param.get("recipentCheck").equals("true")) {
				logger.info("{}",temp);
				for(int i =0; i< (int) param.get("size");i++) {
					temp.put("bookNum",((String) param.get("bookNum")).split(",")[i]);
					temp.put("salesamount",((String) param.get("salesamount")).split(",")[i]);
					mapper.malladdSalesDetail(temp);
					
				}
				System.out.println("딜리트 타기 전 "+"bookNum:"+param.get("orderNum"));
				mapper.deleteCartList(param);
				System.out.println("딜리트 타기 후 ");
			}else {
				mapper.addAddress(temp);
				for(int i =0; i< (int) param.get("size");i++) {
					temp.put("bookNum",((String) param.get("bookNum")).split(",")[i]);
					temp.put("salesamount",((String) param.get("salesamount")).split(",")[i]);
					mapper.malladdSalesDetail(temp);
				}
				mapper.deleteCartList(param);
			}
		
			
			/*mapper.addAddress(temp);*/
			
		}else if(param.get("modifyKey") != null) {
			@SuppressWarnings("unchecked")
			List<String> list1 = (List<String>) param.get("modifyKey");
			@SuppressWarnings("unchecked")
			List<String> list2 = (List<String>) param.get("modifyVal");
			
			for (int i = 0; i <list1.size() ; i++) {
				
				temp.put("modifyKey", list1.get(i));
				temp.put("modifyVal", list2.get(i));
				mapper.cartAmountUpdate(temp);
			}
		}else if(param.get("insertBook") != null) {
			System.out.println("인서트 준비됐다 서비스 안~~\n"+param);
			
			int check =mapper.insertCheck(param);
			System.out.println("체크된 값은?"+check);
			if(check==1) {
				System.out.println("책이 있으니 업데이트 해라");
				mapper.insertAmountUpdate(param);
			}else if(check==0) {
				System.out.println("책이 없으니 인서트 해라");
				mapper.insertcart(param);
			}
			
		}
		
		return null;
	}
	
}
