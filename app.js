function handleProductChange(isIncrease){
    var firstMobileInput = document.getElementById("fistMobileValue");
    var firstMobileNum = parseInt(firstMobileInput.value);
    let firstPlusCount = firstMobileNum;
    if(isIncrease == true){
        firstPlusCount = firstMobileNum +1;
    } if( isIncrease == false && firstMobileNum>0){
        firstPlusCount = firstMobileNum-1;
    }
    firstMobileInput.value = firstPlusCount;
    var totalPlusFirst = firstPlusCount *1219;

    document.getElementById("totalFirstMobile").innerText = totalPlusFirst;
    subtotalCount();
}






function handleTheCaseChange(isIncreaseCase){
      var secondMobileInput = document.getElementById("secondMobileValue");
      var secondMobileNum = parseInt(secondMobileInput.value);
      let secondPlusCount = secondMobileNum;
      if(isIncreaseCase == true){
          secondPlusCount = secondMobileNum + 1;
      }if (isIncreaseCase == false && secondMobileNum>0){
          secondPlusCount = secondMobileNum - 1;
          }
        secondMobileInput.value = secondPlusCount;
        var totalSecondPlus = secondPlusCount*59;
        document.getElementById("totalSecondMobile").innerText = totalSecondPlus;
        subtotalCount();
}

function subtotalCount(){
    const firstSubTotal= document.getElementById("fistMobileValue");
    const firstSubTotalNum =parseInt(firstSubTotal.value)

    
     const secondSubTotalNum = getInputValue(subtotal);

     const totalSubTotal = firstSubTotalNum*1219 + secondSubTotalNum*59;
     document.getElementById("subtotal").innerText = totalSubTotal;
     
     const taxCount = totalSubTotal * 0.15;
     document.getElementById("taxCount").innerText = taxCount.toFixed(0);

     const finalTotal = taxCount * 1219;
     document.getElementById("finalTotal").innerText = finalTotal.toFixed(0);
     
     
}


 function getInputValue(product){
    const secondSubTotal= document.getElementById("secondMobileValue");
    const secondSubTotalNum =parseInt(secondSubTotal.value);
    return secondSubTotalNum;
 }

