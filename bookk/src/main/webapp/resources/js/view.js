var createJoin=x=>{
	return '<form action="/join" method="post" class="auth-form" id="join" style="z-index: 10001; display: block;">'
	+'    <h2 class="text-center">회원가입</h2>'
	+'    <div class="form-group">'
	+'        <label class="label" for="form-login-id">아이디</label>'
	+'        <input type="text" name="id" id="join-id" class="border-input" autofocus="autofocus"><br/>'
	+'        <label class="label" for="form-login-password">비밀번호</label>'
	+'        <input type="password" name="password" id="join-password" class="border-input"><br/>'
	+'        <label class="label" for="form-login-password">비밀번호 확인</label>'
	+'        <input type="password" name="password_re" id="form-login-password-re" class="border-input"><br/>'
	+'        <label class="label" for="form-login-password">이름</label>'
	+'        <input type="text" name="password_re" id="join-name" class="border-input"><br/>'
	+'        <label class="label" for="form-login-email">이메일</label>'
	+'        <input type="text" name="email" id="join-email" class="border-input"><br/>'
	+'        <label class="label" for="form-login-password">전화번호</label>'
	+'        <input type="text" name="password_re" id="join-phone" class="border-input"><br/>'
	+'        <label class="label" for="form-login-password">주민번호</label>'
	+'        <input type="text" name="password_re" id="join-ssn" class="border-input"><br/>'
	+'        <label class="label" for="form-login-password">주소</label>'
	+'        <input type="text" name="password_re" id="join-address" class="border-input"><br/>'
	+'        <div class="wrap-check">'
	+'            <input id="agree_terms" type="checkbox" name="agree_terms" value="1" class="hidden">'
	+'            <label for="agree_terms" class="check"></label>'
	+'            <label for="agree_terms"><a href="/policy/terms" target="_blank">서비스 이용약관</a>에 동의합니다.</label><br/>'
	+'            <input id="agree_privacy" type="checkbox" name="agree_privacy" value="1" class="hidden">'
	+'            <label for="agree_privacy" class="check"></label>'
	+'            <label for="agree_privacy"><a href="/policy/privacy" target="_blank">개인정보 보호정책</a>에 동의합니다.</label>'
	+'        </div>'
	+'    </div>'
	+'    <div class="wrap-btn">'
	+'        <button class="btn gray close">닫기</button>'
	+'    </div>'
	+'</form>'
}
var createLogin=x=>{
	return '<form action="/login" method="post" class="auth-form" id="login" style="z-index: 10001; display: block;">'
	+'    <h2 class="text-center">로그인</h2>'
	+'    <div class="form-group">'
	+'        <label class="label" for="form-login-id">아이디</label>'
	+'        <input type="text" name="id" id="login-id" class="border-input" autofocus="autofocus"><br/>'
	+'        <label class="label" for="form-login-password">비밀번호</label>'
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
var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
}
var createButton=x=>{
	return  '<button type ="'+x.type+'" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInput=x=>{
	return '<input id="'+x.id+'" class="'+x.clazz+'" type="'+x.type+'"/>';
}
var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'"> '+x.val+'</a>';
}