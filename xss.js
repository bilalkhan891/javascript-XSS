/*			first name 					*/
var firstName = document.getElementById('firstName');
var event = document.createEvent('HTMLEvents');
var event2 = document.createEvent('HTMLEvents');
  event.initEvent('focus', true,false);
  firstName.dispatchEvent(event);
  firstName.value = 'Aliya';
  event2.initEvent('blur',true,false);
  firstName.dispatchEvent(event2);


/*				last name 		*/
var lastName = document.getElementById('lastName');
var event = document.createEvent('HTMLEvents');
var event2 = document.createEvent('HTMLEvents');
  event.initEvent('focus', true,false);
  lastName.dispatchEvent(event);
  lastName.value = 'Khan';
  event2.initEvent('blur',true,false);
  lastName.dispatchEvent(event2);


/*           Radio Button Female                */
var radioFemale = document.getElementById('female');
radioFemale.addEventListener('select', myScript());
	function myScript(){
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		  event.initEvent('focus', true,false);
		  radioFemale.dispatchEvent(event);
		  radioFemale.click();
		  radioFemale.checked = true;
		  event2.initEvent('blur',true,false);
		  radioFemale.dispatchEvent(event2);
	}




/*           Radio Button Female                */
/*var radioMale = document.getElementById('male');
radioMale.addEventListener('select', myScript());
	function myScript(){
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		  event.initEvent('focus', true,false);
		  radioMale.dispatchEvent(event);
		  radioMale.click();
		  radioMale.checked = true;
		  event2.initEvent('blur',true,false);
		  radioMale.dispatchEvent(event2);
	}*/






/*					year  							*/
var yearField = document.querySelector('input[name="year"]');
yearField.addEventListener('select', myScript());
function myScript(){
	var event = document.createEvent('HTMLEvents');
	var event2 = document.createEvent('HTMLEvents');
	  event.initEvent('focus', true,false);
	  yearField.dispatchEvent(event);
	  yearField.click();
	  yearField.value = '1994';
	  event2.initEvent('blur',true,false);
	  yearField.dispatchEvent(event2);
}






/* 				Month 						*/
var month = document.querySelector('select[name="month"]');
month.addEventListener('click', myScript(), true);
function myScript(){
	var event = document.createEvent('HTMLEvents');
 	var event2 = document.createEvent('HTMLEvents');
	  event.initEvent('focus', true,false);
	  month.dispatchEvent(event);
	  
	  month.selectedIndex = 3;
	  fireEvent(month,'change');
	  event2.initEvent('blur',true,false);
	  month.dispatchEvent(event2);
}
function fireEvent(element,event){
    if (document.createEventObject){
    // dispatch for IE
    var evt = document.createEventObject();
    return element.fireEvent('on'+event,evt)
    }
    else{
    // dispatch for firefox + others
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true ); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt);
    }
}






/*			day 							*/
var day = document.querySelector('input[name="day"]');
day.addEventListener('select', myScript());
	function myScript(){
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
			event.initEvent('focus', true,false);
			day.dispatchEvent(event);
			day.click();
			day.value = '23';
			event2.initEvent('blur',true,false);
			day.dispatchEvent(event2);
	}


		

		//  Login
		var loginId = document.getElementById('login');
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		loginId.click();
		  event.initEvent('focus', true,false);
		  loginId.dispatchEvent(event);
		  loginId.value = 'aliyakhan891';
		  event2.initEvent('blur',true,false);
		  loginId.dispatchEvent(event2);


/*             Passowrd                        */
var password = document.getElementById('password');
password.addEventListener('select', myScript());
	function myScript(){
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		  event.initEvent('focus', true,false);
		  password.dispatchEvent(event);
		  password.value = '123Hello';
		  event2.initEvent('blur',true,false);
		  password.dispatchEvent(event2);
	}


/*             rePassword                         */
var repassword = document.getElementById('rePassword');
repassword.addEventListener('select', myScript());
function myScript(){
	var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		  event.initEvent('focus', true,false);
		  repassword.dispatchEvent(event);
		  repassword.value = '123Hello';
		  event2.initEvent('blur',true,false);
		  repassword.dispatchEvent(event2);
}




// recovery phone
		var recoveryPhone = document.getElementById('recoveryPhone');
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		recoveryPhone.click();
		  event.initEvent('focus', true,false);
		  recoveryPhone.dispatchEvent(event);
		  recoveryPhone.value = '+41 1234567890';
		  event2.initEvent('blur',true,false);
		  recoveryPhone.dispatchEvent(event2);





		//     Agreements
		var agreement = document.getElementById("agreeAllTerms");
		var event = document.createEvent('HTMLEvents');
		var event2 = document.createEvent('HTMLEvents');
		agreement.click();
		  event.initEvent('focus', true,false);
		  agreement.dispatchEvent(event);
		  agreement.checked = true;
		  event2.initEvent('blur',true,false);
		  agreement.dispatchEvent(event2);
		if (agreement.classList.contains('invalid')){
			agreement.classList.add('valid');
			agreement.classList.remove('invalid');
		}
