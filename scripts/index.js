
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메세지 표시 함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m
}

//보드 초기화
const boardInit = () => {
    const board = document.querySelectorAll(".boardBox");
    for (let item of board) {
        item.innerHTML = '' ;
    }
    cnt = 0;
    selNum.length = 0 ;    
    console.log(board);
} 

//보드 전체 하트 만들기
const showAll = () => {
    let idx = num.indexOf(1) + 1;
    console.log(idx);
    document.querySelector("#box" + idx).innerHTML = `<img src="./images/hart.png">`;
}

//보드 숫자 누른 후 보여주기 함수
const show = (n) => {
    if (!shuffleFlag) {
        showMsg('게임 종료. 다시 하실려면 폭탄섞기 클릭.') ;
        //boxShuffle();
        return ;
    }
    console.log(n);

    let img ;
    if (num[n-1] == 0) img = 'hart';
    // else if (cnt == 8) {
    //     img = 'boom';
    //     shuffleFlag = false ;
    //     showMsg('성공!') ;
    // }
    else {
        img = 'boom';
        shuffleFlag = false ;
        showMsg('실패!') ;
    }
    document.querySelector("#box" + n).innerHTML = `<img src="./images/${img}.png">` ;
        
    if (selNum.indexOf(n) != -1) return ; // 같은 곳을 여러번 눌렀을 때
    cnt++; // 누른 횟수
    console.log(cnt);
    selNum.push(n); //눌러진 정보 저장
    console.log(selNum);

    if (cnt == 8) {
        showAll();
        shuffleFlag = false ;
        showMsg('성공!') ;
    }
}

//폭탄섞기 함수
const boxShuffle = () => {
    if (shuffleFlag) {
        showMsg('폭탄위치를 결정했습니다. 게임을 진행해 주세요.');
        boardInit();
        return;
    }
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;
    boardInit();  
    console.log(num);
}


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
    
});