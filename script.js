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
           Tips = parseFloat(e.target.getAttribute('value'))/100;
           bill[1].value = '';
           btnDisable();
           tipTotalval();
           activButton();
           i.classList.add('toggle');
     }
	i.addEventListener('click', tipInput);
})


































// reset.disabled = true;


// bill.forEach(i =>{
// 	const enter = (e)=>{
// 		if(e.keyCode === 13){
// 			if(bill[0].value.length === 0&&bill[2].value.length === 0){
// 				p[0].style.display = 'block';
//                 p[1].style.display = 'block';
//                 billInt = 0;
//                 People = 0;
// 			}else if(bill[0].value.length === 0){
// 				p[0].style.display = 'block';
// 				p[1].style.display = 'none';
// 				billInt = 0;
// 			}else if(bill[2].value.length === 0){
// 				People = 0;
// 				p[0].style.display = 'none';
// 				p[1].style.display = 'block';
// 			}else if(bill[1].value.length > 0){
//                 Tips = bill[1].value/100;
//                 console.log(billInt, People, Tips);
// 			}else{
// 				People = bill[2].value;
// 				billInt = bill[0].value;
// 				p[0].style.display = 'none';
//                 p[1].style.display = 'none';
//                 selectTip.forEach(i=>{
// 				const inputTips = ()=>{
// 			          Tips = i.value/100;
// 			    }
// 			    const inputclick=(e)=>{
// 			    	if(e.keyCode === 13){
// 			    	     People = bill[2].value;
// 				         billInt = bill[0].value;
// 			    		Tips = i.value/100;
// 			    		console.log(billInt, People, Tips);
// 			    	}
// 			    }
// 				   i.addEventListener('click', inputTips);
// 				   i.addEventListener('keypress',inputclick);
// 			    })
// 			}
// 		}	
// 	}
// 	i.addEventListener('keypress', enter);
// })




























// let bills = 0;
// let tips = 0;


// const billInput = () =>{
//     if(bill[0].value > 0 && event.keyCode ===13){
//     	bills = parseInt(bill[0].value);
//     }else{
//     	bill[0].style.backgroundColor = 'red';
//     }
// }

// bill[0].addEventListener('keypress', billInput);

// selectTip.forEach(val =>{
// 	val.addEventListener('click', ()=>{
// 		tip = val.value;
// 		console.log(val.value);
// 	});
// })

