


const alphanums =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
";","<",">",".","?","/"];

const all = alphanums.concat(symbols);

const generateBtn = document.querySelector('.generate-pass');
const pass1Div = document.querySelector('.pass1');
const pass2Div = document.querySelector('.pass2');


generateBtn.addEventListener('click', () => {

    const passLen = document.querySelector('.pass-length-input').value;
    const checkboxValue = document.querySelector('.toggle').checked;

    const generatePassword = () => {
        let password = '';
        
        if (checkboxValue) {
            for (let i = 0; i < passLen; i++) {
                let randNum = Math.floor(Math.random() * all.length);
                password += all[randNum];
            }
        } else if (!checkboxValue) {
            for (let i = 0; i < passLen; i++) {
                let randNum = Math.floor(Math.random() * alphanums.length);
                password += alphanums[randNum];
            }
            
        }
        return password
    }


    const passOne = generatePassword();
    const passTwo = generatePassword();

    pass1Div.innerText = passOne;
    pass2Div.innerText = passTwo;

    


        
})
  


function copy(div) {
    let range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
   }

document.querySelector('.copy1').addEventListener('click', () => {
    copy(pass1Div)
})
document.querySelector('.copy2').addEventListener('click', () => {
    copy(pass2Div)
})
   

























