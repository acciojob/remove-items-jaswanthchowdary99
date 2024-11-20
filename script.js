//your JS code here. If required.
let removeColor = document.querySelector('input[type="button"]')
removeColor.addEventListener('click',function(){
	let colorSelect = document.getElementById('colorSelect');
	let colorIndex = colorSelect.colorIndex;
	if(colorIndex !== -1){
		colorSelect.remove(colorIndex);
	}
})