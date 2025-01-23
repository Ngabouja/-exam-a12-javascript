function estNegatif(nombre) {
	if (nombre < 0) {
		return true;
	}else if (nombre >0){
      return false ;
    }
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false