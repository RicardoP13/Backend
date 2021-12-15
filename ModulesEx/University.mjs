async function getAvailableDoctors(){
  let module;
  const hour = new Date().getHours();

  if(hour > 4 && hour < 19 ){
    module = await import ('./LosOlivos.mjs');     
  }
  else{
    module = await import ('./SanPedro.mjs');
  }
    
  return module.getDoctors();

}

export {
  getAvailableDoctors
}