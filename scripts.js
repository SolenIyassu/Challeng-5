let save = document.querySelector('.save-data');
let Activity = document.querySelector('#form-control')

save.addEventListener('click', function(){
let key = Activity.value;
let added = save.value;

console.log(key);
console.log(added)

    localStorage.setItem(key, added);
console.log(localStorage)
    
}
)