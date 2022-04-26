document.querySelector('.question').style.display = 'none';
document.querySelector('.result').style.display = 'none';
document.querySelector('.quit').style.display = 'none';

// 랜덤으로 문제뽑기 위해 문제번호 담을 Array생성 ; 이렇게 하는 이유는 문제가 추가되거나 삭제되도 따로 변경해주 필요가 없기 때문.
var num = new Array();
console.log(num);

// 문제에 대한 정보를 담는 객체 생성
// js에서 객체는 파이썬의 딕셔너리(key:value)랑 구조가 같다.
var q = {
    0 : {'type':'악기', '문제':'외부의 자극을 받아 마음의 감동을 일으킬 때 흔히 "심금을 울리다"라는 표현을 씁니다. 여기서 심금은 마음속에 있는 이 악기를 뜻하는 말로 무언가 감동했을 때 울리는 마음을 이 악기에 비유한 것입니다.  여섯 줄의 우리나라 전통 현악기이자 고구려의 음악가 왕산악이 만든 이 악기는 무엇일까요?','보기1':'가야금', '보기2':'피리','보기3':'거문고','보기4':'대금'},
    1 : {"type" : "과일", '문제':'인류 역사상 가장 오래된 과일은 이것입니다. 성경에서는 아담과 이브가 수치심을 느끼자 이것의 잎을 이용해 벗은 몸을 가렸다고 기록되어 있는데요. "꽃이 없는 열매"라는 뜻에서 이름 붙여진 이것은 무엇일까요?','보기1':'사과', '보기2':'바나나','보기3':'무화과','보기4':'두리안'},
    2 : {"type" : "목포별미", '문제':'목포를 대표하는 별미 중 하나인 이 생성은 옛 말에 "이 생선 껍질로 밥 싸 먹다가, 논밭 다 팔아먹는다."라고 했을 정도로 맛이 좋고 귀한 생선인데요. 이 생선은 무엇일까요?','보기1':'대구', '보기2':'민어','보기3':'숭어','보기4':'낙지'}
};
// q객체에 담긴 key들(0,1,2)이 num에 append.
for (i in Object.keys(q)) {
    num.push(i);
};
console.log(num);

// 0,1,2 (문제객체 키)중에 하나 랜덤 선택되어 담기는 변수. 

var random = Math.floor(Math.random() * num.length);
var qKey = num[random];
console.log(qKey);
// 결과 담긴 객체 생성
var result = {
    "악기" : {"correct":"정답입니다", "wrong":"오답입니다.", "explain":"고구려 음악가 왕산악이 만든 악기는 거문고입니다."},
    "과일" : {"correct":"정답입니다", "wrong":"오답입니다.", "explain":"고구려 음악가 왕산악이 만든 악기는 거문고입니다."},
    "목포별미" : {"correct":"정답입니다", "wrong":"오답입니다.", "explain":"고구려 음악가 왕산악이 만든 악기는 거문고입니다."}
}

// display와 visibility의 차이
// 전자는 영역이 자체가 사라졌다가 생겼다하는 것. 후자는 영역은 유지되지만 보였다가 안보였다가 하는 것.
function start() {
    document.querySelector('.start').style.display = 'none';    //시작페이지 사라짐
    document.querySelector('.question').style.display = '';     //문제 show
    next()
};
function quit() {
    document.querySelector('.start').style.display = 'none';    //시작페이지 사라짐
    document.querySelector('.quit').style.display = '';     //goodbye화면 show
}

// value값 가져오고 값이 +1 되는 함수 발동 ; A버튼이 클릭됐을 때 동작하기 위해 addEventListener이용
// 만약 jQuery였다면 click(익명함수) 형태로 코르를 썼겠지만.
// function getValue() { 
//     var type = document.getElementById('type').value;
//     var preValue = document.getElementById(type).value;
//     document.getElementById(type).value = parseInt(preValue) + 1;
//     // 위코드는 작동하고 아래코드는 작동안하는 이유? = 질문
//     // preValue = parseInt(preValue) + 1
//     next();
// };

// 문제내용과 보기 페이지로 넘어가는 함수.
function next() {
    // 문제 내용
    document.getElementById('q-content').innerHTML = q[qKey]['문제'];

    // 보기버튼
    document.getElementById('A').innerHTML = q[qKey]['보기1'];
    document.getElementById('B').innerHTML = q[qKey]['보기2'];
    document.getElementById('C').innerHTML = q[qKey]['보기3'];
    document.getElementById('D').innerHTML = q[qKey]['보기4'];

    // if (num == 13) {
    //     document.querySelector('.question').style.display = 'none';
    //     document.querySelector('.result').style.display = '';
    //     mbti = '';
    //     // 삼항 연산자 ; (조건) ? (참일 때) : (거짓일 때)
    //     (document.getElementById('EI').value >= 2) ? mbti += 'E' : mbti += 'I';
    //     (document.getElementById('SN').value >= 2) ? mbti += 'S' : mbti += 'N';
    //     (document.getElementById('TF').value >= 2) ? mbti += 'T' : mbti += 'F';
    //     (document.getElementById('JP').value >= 2) ? mbti += 'J' : mbti += 'P';
    //     alert(mbti);
    //     // 위 코드 첫줄이 아래 if문을 축약한 것.
    //     // if (document.getElementById('EI').value >= 2) {
    //     //     mbti += 'E'
    //     // } else {
    //     //     mbti += 'I'
    //     // }
    //     // result객체에 결과값을 다 적어놓고 mbti변수값에 따라 html의 값 변경
    //     document.getElementById('animal').innerHTML = result[mbti]["animal"];
    //     document.getElementById('explain').innerHTML = result[mbti]["explain"];
    //     document.getElementById('img').setAttribute('src', result[mbti]["img"]);

    // } else {
        // jqery에서 attr이 setAttribute와 같다.
        // calc 오타나지 않게 주의.
        // +로 연산 가능.
        // document.querySelector('.progress-bar').style.cssText = 'width: clac(100/12*1%)';

        // 무슨 type에 관한 문제인지 hidden input태그안에 있는 type 변경
        document.getElementById('title').value = q[num]['type'];

    // }
}

document.querySelector('.btn-success').addEventListener('click', start)    //Yes버튼 누르면 문제 시작
document.querySelector('.btn-danger').addEventListener('click', quit)      //No버튼 누르면 끝나는 페이지

var buttonA = document.getElementById('A');
// buttonA.addEventListener('click', getValue);

var buttonB = document.getElementById('B');
// B버튼 눌렀을 때는 value값 바뀌지 않고 페이지 넘어감.
buttonB.addEventListener('click', next);
