const getTodayDate = () : string =>{
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let todayString = String(today);
  todayString = yyyy + "-" + mm + "-" + dd;
  return todayString;
}

export{
    getTodayDate
}