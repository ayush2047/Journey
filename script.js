let namasteBtn= document.queryselector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name= prompt("Enter name of student");
    namasteBtn.textContent = 'Roll No. 1:' + name;
}