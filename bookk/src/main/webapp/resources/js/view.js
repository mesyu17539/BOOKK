var createLogin=x=>{
	return '<form action="/login" method="post" class="auth-form" id="login" style="z-index: 10001; display: block;">'
	+'    <h2 class="text-center">로그인</h2>'
	+'    <div class="form-group">'
	+'        <label for="comment">아이디</label>'
	+'        <input type="text" name="id" id="login-id" class="border-input" autofocus="autofocus"><br/>'
	+'        <label for="comment">비밀번호</label>'
	+'        <input type="password" name="password" id="login-password" class="border-input"><br/>'
	+'        <div class="wrap-check">'
	+'            <input type="checkbox" id="save_session" name="save_session" value="1" class="hidden">'
	+'            <label class="check" for="save_session"></label>'
	+'            <label for="save_session">로그인 상태 유지</label>'
	+'        </div>'
	+'    </div>'
	+'    <div class="wrap-btn">'
	+'        <button class="btn gray close">닫기</button>'
	+'    </div>'
	+'    <div class="form-group auth-help">'
	+'        <div class="clearfix">'
	+'            <a href="/findid" class="find-user pull-right">아이디/비밀번호 찾기</a>'
	+'        </div>'
	+'    </div>'
	+'  </form>'
}
var createSelect=x=>{
	return '<select id="'+x+'"></select>'
}
var createOption=x=>{
	return '<option value="'+x.val+'">'+x.txt+'</option>'
}
var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>'
}
var createForm=x=>{
	return '<form id="'+x.id+'" class="'+x.clazz+'"></form>'
}
var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'"> '+x.val+'</a>';
}
var createTable=x=>{
	return '<table id="'+x.id+'" class = "'+x.clazz+'"></table>'
}
var createTr = x=>{
	return '<tr id="'+x.id+'"></tr>'
}
var createTh = x=>{
	return '<th id="'+x.id+'" class="'+x.clazz+'"></th>';
}
var createTd = x=>{
	return '<td id="'+x.id+'" class="'+x.clazz+'"></td>'
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>'
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>'
}
var createLabel=x=>{
	return '<label for="'+x.fo+'">'+x.val+'</label>'
}
var createButton=x=>{
	return  '<button id="'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}
var createInput=x=>{
	return '<input id="'+x.id+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="'+x.clazz+'></span>';
}
var createHTag=x=>{
	return '<h'+x.size+'>'+x.val+'</h'+x.size+'>';
}
