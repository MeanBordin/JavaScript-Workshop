//การเข้าถึง element ที่มี Id และตามด้วยชื่อ Id  
const cerrency_one = document.getElementById('cerrency-one');
const cerrency_two = document.getElementById('cerrency-two');

const amount_one = document.getElementById('amount-one'); 
const amount_two = document.getElementById('amount-two'); 

const rateText = document.getElementById('rate');
const swap_btn = document.getElementById('btn');

// เมื่อมีการเปลี่ยยนตัวเลือก ให้เรียกใช้ function calculateMoney
// addEventListener เป็นการใส่ event เมื่อเกิด event นั้นขึ้น
cerrency_one.addEventListener('change',calculateMoney);
cerrency_two.addEventListener('change',calculateMoney);

amount_one.addEventListener('input', calculateMoney);
amount_two.addEventListener('input', calculateMoney);

function calculateMoney(){
    // รับค่า จากตัวแปร cerrency_one, cerrency_two และ ตามด้วย .value
    // และนำค่ามาเก็บที่ตัวแปร cer_one, cer_two
    const cer_one = cerrency_one.value;
    const cer_two = cerrency_two.value;

    //เรียกใช้ api โดยการใช้ function fetch
    //function then เมื่อมีการเรียกใช้ api แล้วจะให้ทำอะไร
    fetch(`https://api.exchangerate-api.com/v4/latest/${cer_one}`).then(res=>res.json()).then(data => {
        const rate = data.rates[cer_two];
        rateText.innerText = `1 ${cer_one} = ${rate} ${cer_two}`;
        
        //ทำการนำสกุลเงินมาคำควณ 
        // ทำหนด value ให้กับ amount_two โดยใช้ function .value  
        // amount_one.value นำค่า value มาคูณกับ rate
        amount_two.value = (amount_one.value * rate);
    })
}

// เมื่อมีการคล๊กที่ ปุ่ม จะให้ทำอะไร
swap_btn.addEventListener('click', () => {
    const temp = cerrency_one.value;
    cerrency_one.value = cerrency_two.value;
    cerrency_two.value = temp;
    calculateMoney(); 
})


// เรียกใช้ functions
calculateMoney();