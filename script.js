const advice = document.getElementById('advice');
const adviceIdNumber = document.getElementById('advice-id-number');
const adviceBtn = document.getElementById('advice-btn');

adviceBtn.addEventListener('click', ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceIdNumber.innerText = `${data.slip.id}`;
        advice.innerText = `${data.slip.advice}`
    })
})

