const bill = document.querySelectorAll('input');
const val = document.getElementsByClassName('in')[1];
const selectTip = document.querySelectorAll('.btn');
const reAmount = document.getElementById('resAmount');
const reTotal = document.getElementById('resTotal');
const reset = document.getElementById('reset');

let billInt = 0;
let Tips = 0;
let People = 0;


reset.disabled = true;


let billInput = (e)=>{
    func(e);
}
let peopleInput = (e)=>{
	func(e);
    
}
let tipInputfc = (e)=>{
	Tips = parseFloat(bill[1].value)/100;
	btnDisable();
	tipTotalval();
	activButton();
	
}
let func = (e)=>{
	billInput = parseFloat(bill[0].value);
	People = parseFloat(bill[2].value);	
	btnDisable();
    tipTotalval();

}

let btnDisable = () =>{
	reset.disabled = false;
	reset.classList.add('resToggle');
	// if (reset.disabled === false ) {
    //     reset.style.backgroundColor = 'hsl(172, 67%, 45%)';
    //     reset.style.color = ' hsl(183, 100%, 15%)';
	// }
}

let resetbtn = ()=>{
	const p = document.getElementsByClassName('err')[0];
	p.style.display = 'none';
	bill.forEach(i =>{
		i.value = '';
	})
	Tips = 0;
	reAmount.textContent = '0.00';
	reTotal.textContent = '0.00';
	reset.disabled = true;
	reset.classList.remove('resToggle');
	val.classList.remove('inToggle');
	activButton();
}
let activButton = ()=>{
     selectTip.forEach(actv =>{
           	   actv.classList.remove('toggle');
      })
}

let tipTotalval = ()=>{
	const p = document.getElementsByClassName('err')[0];
     if(People >= 1){
     	let TipAmount = (billInput * Tips)/People;
     	let totalAmount = (Tips + 1)*billInput/People;
        reTotal.textContent = totalAmount.toFixed(2);
     	reAmount.textContent = TipAmount.toFixed(2);
     	// bill[2].style.border = '2px solid hsl(172, 67%, 45%)';
     	val.classList.remove('inToggle');
     	p.style.display = 'none';
     	if(isNaN(billInput)){
             reTotal.textContent = '---';
     	     reAmount.textContent = '---';
     	}
	}else{
		p.style.display = 'block';
		val.classList.add('inToggle');
		// bill[2].style.border = '2px solid red';
	}
}




bill[0].addEventListener('input', billInput);
bill[1].addEventListener('input',tipInputfc);
bill[2].addEventListener('input', peopleInput);
reset.addEventListener('click', resetbtn);
selectTip.forEach(i =>{ 
     let tipInput = (e)=>{
           Tips = parseFloat(e.target.getAttribute('id'))/100;
           bill[1].value = '';
           btnDisable();
           tipTotalval();
           activButton();
           i.classList.add('toggle');
     }
	i.addEventListener('click', tipInput);
})
