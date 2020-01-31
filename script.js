function calculateInsurance(){
	
	var country = document.getElementById("country").value;
	var hp=document.getElementById("horsepower").value;
	var ag = document.getElementById("age").value;
	var insurance=0;
	var horsepower=parseInt(hp);
	var age=parseInt(ag);

	if(country="Austria"){
		insurance = horsepower*100/age+50;

	}else if(country="Hungary"){
		insurance =horsepower*120/age+100;

	}else{
		insurance =horsepower*150/(age+3)+50;

	}
	
	console.log(insurance);
	var endcalc = document.getElementById('resultfield');
	endcalc.innerHTML = insurance;
}

var elementNode = document.getElementById('calcbutton');
elementNode.addEventListener('click', calculateInsurance, false);
