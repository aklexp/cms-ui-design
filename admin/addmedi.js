var validate=function (validation){
    var form= document.getElementById("form")
    var medicine = document.getElementById("mname")
    var company = document.getElementById("cname")
    var stock = document.getElementById("stock")
    var price = document.getElementById("price")
    var edate = document.getElementById("date")


    if (medicine.value==""){
        alert("Enter Medicine name")
        // document.getElementById("pmname").innerHTML="** Please fill the Medicine name field"
        // document.getElementById("mname").style.borderColor = "red"
        return false;
    }
    if ((medicine.value.length<=2)||(medicine.value.length>30)){
        alert("medicine name length must be between 2 and 30")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        // document.getElementById("mname").style.borderColor = "red"
        return false;
    }

    if (company.value==""){
        alert("please fill the Company name field")
        // document.getElementById("pcname").innerHTML="** please fill the Company name field"
        // document.getElementById("cname").style.borderColor = "red"
        return false;
    }
    if (company.value<=2){
        alert("Company name must be greater than 2")
        // document.getElementById("pcname").innerHTML="** Company name must be greater than 2"
        // document.getElementById("cname").style.borderColor = "red"
        return false;
    }

    if (stock.value==""){
        alert("please fill the stock quantity field")
        // document.getElementById("pstock").innerHTML="** please fill the stock quantity field"
        // document.getElementById("stock").style.borderColor = "red"
        return false;
    }
   if ((stock.value<=0)||(stock.value.length>=5)||(isNaN(stock.value))){
       alert(" Please fill the stock field with valid data")
        // document.getElementById("pstock").innerhtml="** Please fill the field with valid data"
        //document.getElementById("stock").style.borderColor = "red"
        return false;
    }
    

    if ((price.value<=0)||(price.value.length>=5)||(isNaN(price.value))){
        alert("Please fill the field price with valid data")
        // document.getElementById("pprice").textContent="** Please fill the field with valid data"
        // document.getElementById("price").style.borderColor = "red"
        return false;
    }

   if (edate.value.length<=0){
       alert("enter date")
        // document.getElementById("pdate").textContent="** Enter date."
        // document.getElementById("edate").style.borderColor = "red"
        return false;
    }
 
if(!false){
    alert("medicine added")
}
    
}