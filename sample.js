$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
     let sum = subject_points[0];
     sum = sum + subject_points[1];
     sum = sum + subject_points[2];
     sum = sum + subject_points[3];
     sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let num = subject_points.length;
    let avarage = (sum/num)
    $("#avarage_indicate").text(avarage);
    return avarage;
  };

  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    let score = score_indicate();
    if (score >= 80) {
      return "A";
    }
    else if (score >= 60) {
      return "B";
    }
    else if (score >= 40) {
      return "C";
    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
      let judge = "合格";
      for(let i = 0; i < subject_points.length; i++){
        if(subject_points[i] < 60){
          judge= "不合格";
          break;
        }
      }
      return judge;
  };

  function judgement(){
    let lank = get_achievement();
    let judgement = get_pass_or_failure();
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').empty();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${lank}です${judgement}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    let lank = get_achievement();
    $("#evaluation").text(lank);
  });

  $('#btn-judge').click(function() {
    let judgement = get_pass_or_failure();
    $("#judge").text(judgement);
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});

/*それぞれのコードの意味（何をしているコードなのか）を記述すること
① $(document).ready(function(){ ~ });
functionの中の処理をするという意味

② $('#btn-evaluation').click(function() { ~ });
evaluationのボタンイベントをクリックすることでfunction内の出力をするという意味

③ $('#national_language, #english, #mathematics, #science, #society').change(function() { ~ });
national〜（教科）の値を入力した時にはfunction内の処理をするということ

④ $('#national_language').val()
national〜のvalue値を取得する意味

⑤ Number()
numberという変数に代入

⑥ $("#sum_indicate").text(sum);
合計点の出力

⑦ .append
対象となる要素に挿入
*/
