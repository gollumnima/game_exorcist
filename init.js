let bg_img = new Image()
bg_img.src = './images/bg.png'
bg_img.className='bg_img2'
document.body.appendChild(bg_img)


/****************************************************
 캐릭터를 한 클래스에서 만들어보려고 시도했던 식. 
*****************************************************/
// class Character{
//     constructor() {
//         this.ch = ch;
//         this.ch_position = ch_position;
//         this.ch_left=ch_left;
//         this.ch_top= ch_top;
//         this.ch_pX = ch_pX;
//         this.event = event;
//     }
// }

// let hero_maker = new Character(document.getElementById('hero'),400,hero.style.left,hero.style.top,hero.style.backgroundPositionX,event)
// let ghost_maker = new Character(document.getElementById('ghost'),400,ghost.style.left,ghost.style.top,ghost.style.backgroundPositionX,event)
