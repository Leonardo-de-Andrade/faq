const responses = document.querySelectorAll('.item');

responses.forEach(function (item) {
    item.addEventListener('click', function () {
        const active = item.classList.contains('active');
        if (!active) {
        responses.forEach(function(item){
            item.classList.remove('active');
        }) 
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
});