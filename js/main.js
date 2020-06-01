//Function to toggle content in section collapsedDiv

const collapseButtons = document.getElementsByClassName('collapseButton');
const collapseHeadings = document.getElementsByClassName('collapseContentHeading');
const collapseContents = document.getElementsByClassName('collapseContent');

for (let i=0; i<collapseButtons.length; i++){
    collapseButtons[i].addEventListener('click', toggleContent);
    collapseHeadings[i].addEventListener('click', toggleContent);

    function toggleContent(){
        if(collapseContents[i].style.display === 'block'){
            collapseButtons[i].classList.remove('active');
            collapseButtons[i].innerHTML = '<i class="fas fa-chevron-right"></i>';
            collapseContents[i].style.display = 'none';
        } else {
            collapseButtons[i].classList.add('active');
            collapseButtons[i].innerHTML = '<i class="fas fa-chevron-down"></i>';
            collapseContents[i].style.display = 'block';
            //close all other contents
            for (let j=0; j<collapseContents.length; j++){
                if(j != i){
                    collapseButtons[j].classList.remove('active');
                    collapseButtons[j].innerHTML = '<i class="fas fa-chevron-right"></i>';
                    collapseContents[j].style.display = 'none';
                }
            }
        }
    }
}