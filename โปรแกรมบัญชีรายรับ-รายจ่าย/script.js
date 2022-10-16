const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const list = document.getElementById('list');
const form = document.getElementById('from');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// จำลองข้อมูล
// array + object
const dataTransaction = [
    {id : 1, text : 'ค่าขนม', amount : -100},
    {id : 2, text : 'ค่าห้อง', amount : -3000},
    {id : 3, text : 'เงินเดือน', amount : +18000}
];

const trasactions =  dataTransaction;

//กรองข้อมูล
function addDataTolist (trasactions) {
    // เปรียบเทียบ
    const symbol = trasactions.amount < 0 ? '-' : '+';
    const status = trasactions.amount < 0 ? 'minus' : 'plus';
    // console.log(trasactions);
    // console.log(status);

    // สร้าง tag <li></li>
    const item = document.createElement('li');
    // add class
    item.classList.add(status);
    item.innerHTML = `${trasactions.text}<span>${symbol}${Math.abs(trasactions.amount)}</span><button class="delete-btn"> x </button>`;
    // console.log(item);

    list.appendChild(item);
}

function init () {
    // วนรูปเพื่อเข้าถึงข้อมูล
    trasactions.forEach(addDataTolist);
    calculateMoney();
}

function calculateMoney () {
    const amounts = trasactions.map(trasactions.amount)
}

init();