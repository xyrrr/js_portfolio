$(function () {
    // 儲存目前作答到第幾題
    var currentQuiz = null;
    //當按鈕按下後，要做的事
    $("#startButton").on("click", function () {
        if (currentQuiz == null) {
            //開始作答,設定目前作答從第0題開始
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function (element, index, array) {
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });

            $("#startButton").attr("value", "Next");
        } else {
            //已經開始了，哪一個選項被選取
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //已經要通往最終結果
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value","restart");
                    }else{
                        //正常跳下一題
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        //顯示新題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });

        }

    });
});