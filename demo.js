function appendvalue(value){
    document.getElementById('display').value+=value;
}
function clearDisplay(){
    document.getElementById('display').value="";
}
function calculationResult(){
    try{
        document.getElementById('display').value=eval(document.getElementById('display').value)
    }
    catch{
        alert('Invalid Expression')
    }
}