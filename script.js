function calculateInsurance(){
	
	var country = document.getElementById("country");
	var hp=document.getElementById("horsepower");
	var ag = document.getElementById("age");
	var insurance=0;
	var horsepower=parseInt(hp);
	var age=parseInt(ag);

	/*zu testzewecken ohne if: if(country=="Austria"){
		insurance = horsepower*100/age+50;

	}else if(country=="Hungary"){
		insurance =horsepower*120/age+100;

	}else{
		insurance =horsepower*150/(age+3)+50;

	}*/
	insurance = horsepower;
	return insurance;
	console.log(insurance);
	var endcalc = document.getElementById('resultfield');
	endcalc.innerHTML = insurance;
}

var elementNode = document.getElementById('calcbutton');
elementNode.addEventListener('click', calculateInsurance, false);

var elementNodet = document.getElementById('löschenisttest');
elementNodet.addEventListener('click', testf, false);

function testf(){
		var endcalc = document.getElementById('resultfield2');
		endcalc.innerHTML = "testergebnisXXXXXXXXXXXXX";
		console.log("terfolgreich")
}