const clickeablebutton = document.querySelector('button');
const editableinput = document.querySelector('#favchap');
const resultlist = document.querySelector('.list');

clickeablebutton.addEventListener('click',  function () {
    const valueinput = editableinput.value;
    document.querySelector('#alertInfo').textContent="";

    if (valueinput != '' ){
        const lioption = document.createElement("li");
        const textnode = document.createTextNode(valueinput);
        lioption.appendChild(textnode);
        document.querySelector('.list').appendChild(lioption);
    
        const libutton = document.createElement("button");
        libutton.classList.add('closebuton');
        libutton.textContent=" ❌ ";
        libutton.ariaLabel = "Close chapter"
        lioption.appendChild(libutton);
    
    
        libutton.addEventListener('click', function () {
            resultlist.removeChild(lioption);
        });
    } else{
        document.querySelector('#alertInfo').textContent="This field is required";
    }

    editableinput.value="";
    editableinput.focus();
});

const closebutton = document.querySelector('button.close');