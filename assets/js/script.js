const mode= document.getElementById('mode-icon');
mode.addEventListener('click',() =>{
// criar agora um evento para o modo escuro
const form= document.getElementById('login-form');

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark')
    return;

    }
    //é como se fosse fazer um else, porem não precisa fazer o else já é altomatico
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark')

});
//criando um evento de clique
