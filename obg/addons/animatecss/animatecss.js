/* Расширяем jQuery чтобы можно было просто прописать например:
	$('#yourElement').animateCss('bounce');
	и элемент бы анимировался (добавляется класс), а по завершению класс сам убирается */

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});	