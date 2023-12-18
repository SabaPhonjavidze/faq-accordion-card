const TxtDoc = document.getElementsByClassName('Txt');
const Info = document.getElementsByClassName('hidden-text-styles');
let LastIndex;

for ( let  i = 0 ; i < TxtDoc.length ; i++){
 TxtDoc[i].addEventListener('click', (event) =>{
  
    if (LastIndex !== undefined){
    
        TxtDoc[LastIndex].childNodes[1].classList.remove('txt2');
     TxtDoc[LastIndex].childNodes[5].classList.add('Hidden');
     TxtDoc[LastIndex].childNodes[3].classList.remove('arrowRotate');
     Info[LastIndex].setAttribute('index','false')
    } 
   
   
    if (LastIndex === i){
        console.log(Info[i].getAttribute('index'))
        if(Info[i].getAttribute("index")==="false"){
            Info[i].classList.add('Hidden'); 
            Info[i].setAttribute('index', 'true');
        } else{
        Info[i].classList.remove('Hidden');
        Info[i].setAttribute('index', 'false');
    }
        TxtDoc[i].childNodes[3].classList.add('arrowRotate');
    
    }
    else{
        Info[i].classList.remove('Hidden');

        Info[i].setAttribute('index','true')
    }
    LastIndex = i;
   
    
} )

}
