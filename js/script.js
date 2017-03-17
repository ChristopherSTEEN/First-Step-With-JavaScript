// VERIFICATION FUNCTIONS

function textcheck(champ){
	if (champ.value == ""){
		return false;
	}else{
		return true;
	}
}

function regmailcheck (champ){
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if (!regex.test(champ.value)){
		return false;
	}else{
		return true;
	}
}

function mailcheck(champ1, champ2){
	if (champ1.value != champ2.value){
		return false;
	}else{
		return true;
	}
}

function telcheck(champ){
	if (champ.value.length != 10){
		return false;
	}else{
		var telfirst = champ.value.substring(0, 1);
		if (telfirst != "0"){
			return false;
		}else{
			var phonevar = 1;
			for (var i = 1; i < 10; i ++){
				var telnumber = champ.value.substring(i, i+1);
				if ((i == 1 && (telnumber == "1" || telnumber == "2" || telnumber == "3" || telnumber == "4" || telnumber == "5" 
				|| telnumber == "6" || telnumber == "7" || telnumber == "8" || telnumber == "9")) 
				|| (i != 1 && (telnumber == "0" || telnumber == "1" || telnumber == "2" || telnumber == "3" || telnumber == "4" || telnumber == "5" 
				|| telnumber == "6" || telnumber == "7" || telnumber == "8" || telnumber == "9"))){
					phonevar += 1;
				}else{
					phonevar += 0;
				}
			}
			if (phonevar != i){
				return false;
			}else{
				return true;
			}
		}
	}
}

// FORM VERIFICATION

function verifform(f){
	
	if (!textcheck(f.nom)){
		nocheck("divnom", "checknom");
	}else{
		goodcheck("divnom", "checknom");
	}
	
	if (!textcheck(f.prenom)){
		nocheck("divprenom", "checkprenom");
	}else{
		goodcheck("divprenom", "checkprenom");
	}
	
	if (!textcheck(f.email)){
		nocheck("divemail", "checkemail");
	}else if (!regmailcheck(f.email)){
		badmail("divemail", "checkemail");
	}else{
		goodcheck("divemail", "checkemail");
	}
	
	if (!textcheck(f.email2)){
		nocheck("divemail2", "checkemail2");
	}else if (!regmailcheck(f.email2)){
		badmail("divemail2", "checkemail2");
	}else if (!mailcheck(f.email, f.email2)){
		wrongmail("divemail2", "checkemail2");
	}else{
		goodcheck("divemail2", "checkemail2");
	}
	
	if (!textcheck(f.phone)){
		nocheck("divtel", "checktel");
	}else if (!telcheck(f.phone)){
		wrongtel("divtel", "checktel");
	}else{
		goodcheck("divtel", "checktel");
	}

	return false;
}

//STYLE CHANGES

function nocheck(divid, checkid){
	elem = document.getElementById(checkid);
	elem.innerHTML = "* Ce champ est obligatoire!";
	elem2 = document.getElementById(divid);
	elem2.style.background = "#FF8888";
}

function goodcheck(divid, checkid){
	elem = document.getElementById(checkid);
	elem.innerHTML = "*";
	elem2 = document.getElementById(divid);
	elem2.style.background = "#FFFFFF";
}

function badmail(divid, checkid){
	elem = document.getElementById(checkid);
	elem.innerHTML = "* Le mail n'est pas valide!";
	elem2 = document.getElementById(divid);
	elem2.style.background = "#FF8888";
}

function wrongmail(divid, checkid){
	elem = document.getElementById(checkid);
	elem.innerHTML = "* Les mails ne correspondent pas!";
	elem2 = document.getElementById(divid);
	elem2.style.background = "#FF8888";
}

function wrongtel(divid, checkid){
	elem = document.getElementById(checkid);
	elem.innerHTML = "* Le numéro n'est pas valide!";
	elem2 = document.getElementById(divid);
	elem2.style.background = "#FF8888";
}
