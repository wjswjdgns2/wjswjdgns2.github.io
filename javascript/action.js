window.onload = function(){
    // 동일한 클래스를 불러와 클릭 이벤트 주기
    const click_tabs = document.querySelectorAll('.click_tab');
    const about_area = document.querySelectorAll('.about_area');

    for (const click_tab of click_tabs){
        click_tab.addEventListener('click',tab_effect);
    }
    
    function tab_effect(){
        // activate 전부 지우고
        click_tabs.forEach((currentElement)=>{
            currentElement.classList.remove('activate');
        });
        // 모든 내용을 삭제하고
        about_area.forEach((currentElement)=>{
            currentElement.classList.add('deactivate');
        });

        // 클릭한 목록에 activate 추가
        this.classList.add('activate');

        // 관련된 내용을 불러온다
        const select_value = this.getAttribute('value') + '_value'
        document.querySelector("[value="+select_value+"]").classList.remove('deactivate')
  

    }
    
}


