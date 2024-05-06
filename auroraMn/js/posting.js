let posts = [];
        
// 포스트 제출 함수
function submitPost() {
    let form = document.getElementById("postForm");
    let title = form.ntbtitle.value;
    let detail = form.detail.value;
    let date = new Date().toLocaleString();
    let author = "Typhoon"; // 작성자

    // 배열에 포스트 추가
    posts.unshift({ title: title, detail: detail, date: date, author: author });

    // 테이블 업데이트
    updateTable();

    // 폼 리셋
    form.reset();

    //토글
    toggleDiv('noticePostWrap', 'noticeTableWrap')

}
// 테이블 업데이트 함수
function updateTable() {
    let tableBody = document.getElementById("noticeTableBody");
    tableBody.innerHTML = ""; // 기존 내용 지우기

    // 포스트를 테이블에 추가
    posts.forEach(function (post, index) {
        let row = "<tr class='body'>";
        row += "<td>" + (index + 1) + "</td>";
        row += "<td class='ntbtitle'>" + post.title + "</td>";
        row += "<td>" + post.author + "</td>";
        row += "<td>" + post.date + "</td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    });
}

// // 초기 데이터
// for (let i = 1; i <= 10; i++) {
//     posts.push({ title: "Title " + i, detail: "Detail " + i, date: new Date().toLocaleString(), author: "User" });
// }

// // 초기 테이블 업데이트
// updateTable();


function toggleDiv(showID, hideID) {
    let showDiv = document.getElementById(showID);
    let hideDiv = document.getElementById(hideID);
    showDiv.style.display = "none";
    hideDiv.style.display = "block";
}