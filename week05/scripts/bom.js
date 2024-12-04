const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
    else {
        console.log("The input is blank");
        input.focus();
    }
})

function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

}

function setChapterList(){
    localStorage.setItem('myFavList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item!== chapter);
    setChapterList();
}
