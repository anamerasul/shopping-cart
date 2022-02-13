function updateCaseNumber(inputId,isIncrease,anotherId, price){
        const caseInput=document.getElementById(inputId);
        const caseNumberText=caseInput.value;
        let caseNumber=parseInt(caseNumberText);
        if(isIncrease===true){
                caseNumber=caseNumber+1;
}

else if(caseNumber>0){
        
        caseNumber=caseNumber-1;

}

else{
        return false;
}

caseInput.value=caseNumber

const caseTotal =document.getElementById(anotherId);
caseTotal.innerText=caseNumber*price
}



document.getElementById('phone-plus').addEventListener('click', function(){
        // console.log('plus clicked');

        const price=1219
        updateCaseNumber('phone-input-value',true,'phone-total',price)

});

document.getElementById('phone-minus').addEventListener('click', function(){
        // console.log('minus clicked');
        const price=1219
        // const caseInput=document.getElementById('input-value-1');
        // const caseNumberText=caseInput.value;
        // const  caseNumber=parseInt(caseNumberText);

        // if(caseNumber<=0){
        //         return false;
        // }

        // caseInput.value=caseNumber-1;
        // console.log(caseNumber)

        updateCaseNumber('phone-input-value',false,'phone-total',price)


})
document.getElementById('case-plus').addEventListener('click', function(){
        // console.log('plus clicked');
        const price=59;
        // const caseInput=document.getElementById('input-value-2');
        // const caseNumberText=caseInput.value;
        // const  caseNumber=parseInt(caseNumberText);

        // caseInput.value=caseNumber+1;
        // console.log(caseNumber)
        updateCaseNumber('case-input-value',true,'case-total',price);

});

document.getElementById('case-minus').addEventListener('click', function(){
        // console.log('minus clicked');
        const price=59;
        // const caseInput=document.getElementById('input-value-2');
        // const caseNumberText=caseInput.value;
        // const  caseNumber=parseInt(caseNumberText);

        // if(caseNumber<=0){
        //         return false;
        // }

        // caseInput.value=caseNumber-1;
        // console.log(caseNumber)
        updateCaseNumber('case-input-value',false,'case-total',price);

})