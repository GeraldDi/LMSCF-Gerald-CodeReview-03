function calculateInsurance(){
	
	var country = document.getElementById("country");
	var i = country.selectedIndex;
	var countryid = country.options[i].value;//to choose the selectedd country

	var hp=document.getElementById("horsepower").value;
	var ag = document.getElementById("age").value;
	var insurance=0;
	var horsepower=parseInt(hp);
	var age=parseInt(ag);

	if(countryid=="Austria"){
		insurance = "Insurance cost: " +Math.round((horsepower*100/age+50)); //bracket is necessary or it will just add the number 50 to the result

	}else if(countryid=="Hungary"){
		insurance ="Insurance cost: " +Math.round((horsepower*120/age+100));

	}else{
		insurance ="Insurance cost: " +Math.round((horsepower*150/(age+3)+50));
	}
	var endcalc = document.getElementById('resultfield');
	endcalc.innerHTML = insurance;
	endcalc.style.visibility="visible";
}

var elementNode = document.getElementById('calcbutton');
elementNode.addEventListener('click', calculateInsurance, false);
