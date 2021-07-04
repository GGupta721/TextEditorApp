
function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}


function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}


function makeUnderline(elem){
  elem.classList.toggle('active');
  let textWUnderline = document.getElementById('text-output');
  if(textWUnderline.classList.contains('underline')){
    textWUnderline.classList.remove('underline');
  }
  else{
    textWUnderline.classList.add('underline');
  }

}


function alignText(elem, alignType){
  document.getElementById('text-output').style.textAlign = alignType;
  let buttons = document.getElementsByClassName('align');
  for(let i = 0; i< buttons.length; i++){
    buttons[i].classList.remove('active');
  }
  elem.classList.toggle('active');


}