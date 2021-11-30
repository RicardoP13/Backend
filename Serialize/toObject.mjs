export function myParse(json){
	return JSON.parse(json,(key,value) =>{
		if(typeof value === "string" && /^\d+n$/.test(value)){		
			return BigInt(value.substr(0, value.length - 1));		
		}
		return value;
	});
}