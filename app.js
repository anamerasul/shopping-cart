document.getElementById('case-plus-1').addEventListener('click', function(){
        console.log('plus clicked');

        const caseInput=document.getElementById('input-value-1');
        const caseNumberText=caseInput.value;
        const  caseNumber=parseInt(caseNumberText);

        caseInput.value=caseNumber+1;
        console.log(caseNumber)


});

document.getElementById('case-minus-1').addEventListener('click', function(){
        console.log('minus clicked');

        const caseInput=document.getElementById('input-value-1');
        const caseNumberText=caseInput.value;
        const  caseNumber=parseInt(caseNumberText);

        if(caseNumber<=0){
                return false;
        }

        caseInput.value=caseNumber-1;
        console.log(caseNumber)


})