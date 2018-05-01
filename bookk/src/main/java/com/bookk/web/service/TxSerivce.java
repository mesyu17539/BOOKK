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
	public Object execute(HashMap<?, ?> param) {
		HashMap<String, String> temp = new HashMap<>();
		if(param.get("postDetail")!=null) {
			temp.put("requirements", (String)param.get("requirements"));
			temp.put("postDetail", (String)param.get("postDetail"));
			temp.put("roadAddress", (String)param.get("roadAddress"));
			temp.put("recipient", (String)param.get("recipient"));
			temp.put("jibunAddress", (String)param.get("jibunAddress"));
			temp.put("jibunAddress", (String)param.get("detailAddress"));
			temp.put("phonenum", (String)param.get("phonenum"));
			temp.put("memId", (String)param.get("memId"));
			if(param.get("recipentCheck").equals("true")) {
				System.out.println("구매자 정보와 동일");
				for(int i =0; i< (int) param.get("size");i++) {
					temp.put("bookNum",((String) param.get("bookNum")).split(",")[i]);
					temp.put("salesamount",((String) param.get("salesamount")).split(",")[i]);
					System.out.println(temp+"결제 완료 리스트 값은?");
					mapper.malladdSalesDetail(temp);
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
