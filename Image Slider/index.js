const body=document.querySelector('.whole');
const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');
const imagelist = ["flower1", "flower3", "flower4","flower5"];
let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = imagelist.length - 1;
            }
        } else {
            index++;
            if (index === imagelist.length) {
                index = 0;
            }
            
        }
        if(index === 1) {
            body.style.background = 'rgb(164, 246, 157)';
        } 
        else if(index===imagelist.length-1){
            body.style.background = 'rgb(202,222,239)';
        }else {
            body.style.background = ''; // Reset the background to default if not index 1
        }
        container.style.background = `url("images/${imagelist[index]}.jpg") center/cover fixed no-repeat`;
    });
});
