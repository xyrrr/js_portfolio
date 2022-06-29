$(function(){
    main();
    let start = document.getElementById("myDate");
    start.onchange = changeDate;
})
    

function main() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topic.length;

    // 電腦世界中，使用milliseconds，一秒鐘有1000毫秒
    // 計算一天秒數量
    let millisecsPerDay = 24 * 60 * 60 * 1000; 

    for (var x = 0; x < topicCount; x++) {
        let hostDay = new Date(startDate.getTime()+7 * x * millisecsPerDay);
        let atd = "<td>";
        if (topic[x].includes("停課") == true){
            atd = `<td class="td1">`;
        };
        let atr = `<tr class="tr2">`;
        if ((x+dn)%2 == 0) {
            atr =  `<tr class="tr1">`;
        };
        $("#courseTable").append(
            `${atr}<td>${x + 1}</td><td>${hostDay.getMonth() + 1}月${hostDay.getDate()}日</td>${atd}${topic[x]}</td></tr>`);
    };
        // $("#courseTable").append(
        //     `<tr><td>${x + 1}</td>
        //     <td>${(new Date((startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()).slice(5)}</td>
        //     <td>${topic[x]}</td></tr>`
        // );
        // if (topic[x].includes("停課")){
        //     $(topic[x]).css("color","grey");
        // }
        // 日期為object, 與number運算後會得到string, 故須先將時間轉換成累積毫秒(可運算),運算完再轉回日期時間格式
        // startDate.getTime()；從1970/01/01到今天過了多少秒
        // new Date(milliseconds)
    };