function mutiply()
{
    var num1= document.getElementById("n1").value; 
    console.log("user passed value is " + num1); 
    
    if (num1!=0) {

       document.write("</br> <h1> " + "Mutilication table " + num1 + "</br> </h1>")
        for (i = 1; i<=10; i++) {
             
            console.log(   num1 * i  );
            document.write("</br> " + num1 + " * " + i  + " = " + (num1 * i)  );
           // document.write("</br> </br>   " +  (num1 * i) );
           // console.log("itreation value is " +i);
        }
        
    } else {
        console.log("Input must be passed"); // it will show in the log
        document.write("</br> </br> Input is must ")
    }
}