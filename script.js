//your JS code here. If required.
let removeColor = document.querySelector('input[type="button"]')
removeColor.addEventListener('click',function(){
	let colorSelect = document.getElementById('colorSelect');
	let colorIndex = colorSelect.selectedIndex;
	if(colorIndex !== -1){
		colorSelect.options[colorIndex].remove();
	}
})