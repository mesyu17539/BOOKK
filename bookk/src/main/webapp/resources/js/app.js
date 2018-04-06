var app=app || {};
app = {init:x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x));
		app.nav.onCreate();
	})
}
};
app.nav=(()=>{
	var $wrapper;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		image=$.image();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
			$wrapper.html(createDiv({id:'header',clazz:'container text-center'}))
			.append(createDiv({id:'content',clazz:'container text-center'}))
			.append(createDiv({id:'footer',clazz:'container text-center'}));
		});
	}
	return {onCreate:onCreate}
})();