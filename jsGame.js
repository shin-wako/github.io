// (()=>{}) ();
//＊即時関数　↑で全体を囲むことで、グローバル変数が汚染されないようになる。（この部分にだけ適用）


(()=>{

  const quiz = [
    {
      question:"ハラリ氏著「サピエンス全史」で、約7万年前に起こったと言われる、人類が他の人類種より秀でるきっかけとなった革命は何でしょうか？",
       answers:[
        "認知革命",
        "農業革命",
        "石器革命",
        "神話革命"
      ],
      correct:"認知革命",
    },{
      question:"スティーブン・Ｒ・コヴィー氏著「７つの習慣」の第一の習慣とは何でしょうか？",
       answers:[
        "目的をもって始める",
        "重要事項を優先する",
        "主体性を発揮する",
        "相手を思いやる"
      ],
      correct:"主体性を発揮する",
    },{
      question:"円の面積の求め方は？",
       answers:[
        "直径×π",
        "半径×π",
        "半径×半径×π",
        "直径×2×π"
      ],
      correct:"半径×半径×π",
    }
  ];

  let quizIndex = 0;
  let score = 0;


  //buttonタグを取得するbutton定数を定義
  const $button = document.getElementsByTagName('button');


  const setupQuiz = ()=>{
    //問題分を挿入
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    //buttanタグへ、選択肢を挿入。button定数の数だけ繰り返す
    for(let i=0; i<$button.length; i++){
      $button[i].textContent = quiz[quizIndex].answers[i];
    }
  };



  //ボタンが押されたときの処理
  const clickHandler = (e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert("正解！！");
      score++;
    }else{
      window.alert("不正解。");
    }
    quizIndex++;

    if(quizIndex < quiz.length){
      setupQuiz();
    }else{
      window.alert(`あなたの正解数は${score} / ${quiz.length}です`);
      window.alert("クイズは終了します");
    }
  };

  //最初のクイズの設定
  setupQuiz();
  //ボタンが押されたときの処理の実装
  for(let i=0; i<$button.length; i++){
    $button[i].addEventListener("click",(e)=>{
      clickHandler(e);
    });
  }

})();
