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
