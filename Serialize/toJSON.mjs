export function myStringify(obj){
	return JSON.stringify(obj,(key,value) =>{
		if(value === obj){
			return value;
		}
		else if(typeof value === "bigint"){
			return value.toString()+"n";
		}
		else{
			return value;
		}
	});
}

