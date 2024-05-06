function addRecentSearch() {
    let searchInput = document.getElementById('search1').value;
    let recentSearchList = document.getElementById('recent-search-list');
    
    // 새로운 검색 결과를 추가
    let listItem = document.createElement('li');
    listItem.innerHTML = `
      <ul class="rec-content">
        <li><i class="fas fa-clock"></i></li>
        <li>${searchInput}</li>
        <li><i class="fas fa-times delete-search" onclick="deleteRecentSearch(this)"></i></li>
      </ul>
    `;
    
    // 최근 검색 결과 리스트에 새로운 항목을 추가
    recentSearchList.appendChild(listItem);
  }
  
  function deleteRecentSearch(element) {
    // 클릭한 아이콘의 부모 노드인 li 요소를 삭제
    element.parentElement.parentElement.parentElement.remove();
  }