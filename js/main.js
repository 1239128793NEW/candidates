$(document).ready(function () {
    var candidates = [{
        name: 'Юрий Хованский', // 0
        vote: 0
    }, {
        name: 'Руслан Тушенцов', // 1
        vote: 0
    }, {
        name: 'Данил Кашин', // 2
        vote: 0
    }, {
        name: 'Lizzka', // 3
        vote: 0
    }, {
        name: 'Юлик', // 4
        vote: 0
    }, {
        name: 'Кузьма', // 5
        vote: 0
    }, {
        name: 'Даня Комков', // 6
        vote: 0
    }, {
        name: 'Маш Милаш', // 7
        vote: 0
    }, {
        name: 'Ёрник и Косс', // 8
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

    $('[data-modal-open]').bind('click', function () {
        var modalId = $(this).attr('data-modal-open'),
            numberCand = $(this).attr('data-number-cand');

        $(modalId).find('input[name="number"]').val(numberCand);
        $(modalId).show();
    });

    $(document).bind('click', function(event) {
        if ($(event.target).closest('.feedback-modal__wrapper, [data-modal-open]').length) return;
        $('.feedback-modal').hide();
        $('.feedback-modal__wrapper form').show();
        $('.feedback-modal__info').remove();
        event.stopPropagation();
    });

    $('.feedback-modal__close').bind('click', function(event) {
        $(this).closest('.feedback-modal').hide();
        $('.feedback-modal__wrapper form').show();
        $('.feedback-modal__info').remove();
    });

    $('form[name="feedback"]').on('submit', function () {
        $.ajax({
            url: 'mail.php',
            data: $(this).serialize(),
            success: function () {
                $('.feedback-modal__wrapper form').hide();
                $('.feedback-modal__wrapper').append('<div class="feedback-modal__info">Спасибо!</div>');
                $(this).get(0).reset();
            }
        });
        return false;
    });
});