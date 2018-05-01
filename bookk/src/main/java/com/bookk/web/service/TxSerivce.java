package com.bookk.web.service;

import java.util.ArrayList;
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
		HashMap<String, String> temp = new HashMap<>();
		if(param.get("postDetail")!=null) {
			if(param.get("recipentCheck").equals("true")) {
				System.out.println("구매자 정보와 동일");
				System.out.println("파람 값?"+param);
				System.out.println("파람 값?"+param.get("size"));
				System.out.println("파람 값?"+param.get("bookNum"));
				System.out.println("파람 값?"+param.get("salesamount"));
				for(int i =0; i< (int) param.get("size");i++) {
					param.put("bookNum",((String) param.get("bookNum")).split(",")[i]);
					param.put("salesamount",((String) param.get("salesamount")).split(",")[i]);
					System.out.println("param 값은?"+param);
					mapper.malladdSalesDetail(param);
					
				}
			}else {
				System.out.println("구매자 정보와 다름");
			}
			System.out.println("파람 값은 무엇이냐?"+param);
			
			
			System.out.println();
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
		}
		
		return null;
	}
	
}
