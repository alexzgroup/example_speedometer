$(document).ready(function (){

    function showResult(resultDeg, speed) {
        $('#modal p').html('Ваш рейтинг: <span class="badge bg-success">' + speed + '</span>, градус: <span class="badge bg-danger">' + resultDeg + '</span>');
        $('#modal').modal('show');
    }

    $('#rating_arrow').css('transform', 'rotate(75deg)');
    setTimeout(function (){
        $('#rating_arrow').css('transform', 'rotate(-90deg)');
    }, 1000);

    $('#button').on('click', function (){
        $('#modal p').empty();
        let elem = $('#rating_arrow'),
            speed = parseInt($('[name="speed"]').val()),
            center = 375,
            resultDeg = 0;


        let oneDeg = 90 / center; // находим сколько 1 градус от значения 375
        let activeDeg = speed - center; // найдем сколько значение от введенного
        resultDeg = Math.ceil(oneDeg * activeDeg);

        elem.css('transition-duration', '5s');

        setTimeout(function () {
            elem.css('transform', 'rotate(' + resultDeg + 'deg)');
        }, 1000);

        setTimeout(function () {
            showResult(resultDeg, speed);
        }, 7000)
    });

    $('#reset').on('click', function (){
        let elem = $('#rating_arrow');
        elem.css('transform', 'rotate(-90deg)');
    });
});
