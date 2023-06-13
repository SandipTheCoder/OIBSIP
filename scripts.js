let result = document.getElementById("grid-0");

let calculate=(number)=>{
  result.value=result.value+number;
}

function Result(){
  try{
    result.value=eval(result.value);
  }
  catch(err){
    alter("Enter the valid result.")
  }
}


function clr(){
  result.value="";
}

function del(){
  result.value=result.value.slice(0,-1);
}


