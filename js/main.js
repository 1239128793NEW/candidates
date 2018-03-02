$(document).ready(function () {
    var candidates = [{
        name: 'Биг Рашн Босс',
        vote: 0
    }, {
        name: 'Юрий Хованский',
        vote: 0
    }, {
        name: 'Совергон',
        vote: 0
    }, {
        name: 'Данил Кашин',
        vote: 0
    }, {
        name: 'Lizzka',
        vote: 0
    }, {
        name: 'Юлик',
        vote: 0
    }, {
        name: 'Кузьма',
        vote: 0
    }, {
        name: 'Даня Комков',
        vote: 0
    }, {
        name: 'Маш Милаш',
        vote: 0
    }, {
        name: 'Ёрник и Косс',
        vote: 0
    }];

    $('.questions__blocList .questions__item').bind('click', function () {
        var self = $(this);

        setTimeout(function () {
            var currentBlockHide = self.closest('.questions__blocList');

            $('.questions__item').removeClass('active');
            currentBlockHide.removeClass('show');

            candidates[self.attr('number-candidate')].vote++;

            if (currentBlockHide.attr('id') !== 'questions__blocList_13') {
                currentBlockHide.next().addClass('show');
            } else {
                var highestNumberVotes = [],
                    resultIndex = 0;

                candidates.filter(function (data) {
                   return highestNumberVotes.push(data.vote);
                });

                highestNumberVotes.forEach(function (value, index) {
                    if (Math.max.apply(Math, highestNumberVotes) === value) {
                        resultIndex = index;
                    }
                });

                //console.log(candidates[resultIndex]);
                //console.log(resultIndex);

                $("#end").addClass("show");
                $('.testResultItem:visible').hide();
                $('#page' + resultIndex).show();
                $(".h3__test").hide(250);
                $(".h3__resul").show(400);
                $(".h3__resul").addClass("active");
            }
        }, 500);
    });

    $("#startText").click(function () {
        setTimeout(function () {
            $("#questions__blocList_0").addClass("show");
            $("#end").removeClass("show");
            $(".h3__test").show(400);
            $(".h3__resul").hide(250);
            $(".h3__test").addClass("active");

            candidates.forEach(function (data) {
                data.vote = 0;
            });
        }, 500);
    });

    $('.questions__item:nth-of-type(2)').click(function () {
        $('.questions__item:nth-of-type(2)').addClass('active');
    });
    $('.questions__item:nth-of-type(3)').click(function () {
        $('.questions__item:nth-of-type(3)').addClass('active');
    });
    $('.questions__item:nth-of-type(4)').click(function () {
        $('.questions__item:nth-of-type(4)').addClass('active');
    });
    $('.questions__item:nth-of-type(5)').click(function () {
        $('.questions__item:nth-of-type(5)').addClass('active');
    });

});