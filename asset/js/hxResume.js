$(document).ready(function () {
    //加载gif
    $(window).load(function () {
        $('#page-loader').fadeOut(1000);
    });
    //导航条按钮
    $('.btn1').on('click', function () {
        $('#myIssue').collapse('toggle')
    });
    //滚动事件
    $(window).scroll(function () {
        if ($(window).scrollTop() < 10) {
            $('#main-nav').removeClass('scrolled');
        }
        else {
            $('#main-nav').addClass('scrolled');
        }
    });
    //滚动监听触发动画事件
    $(window).load(function () {
        $('.scrollimation').waypoint(function () {
            $(this).addClass('in');
        }, {offset: '95%'});

    });
    $('#skills').waypoint(function () {
        $('.chart').each(function () {
            $(this).easyPieChart({
                size: 200,
                animate: 1600,
                lineCap: 'round',
                scaleColor: false,
                trackColor: 'transparent',
                barColor: $('.main-color').css('color'),
                lineWidth: 5
            })
        })
    }, {offset: '80%'});

    $('a.scrollto').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').stop().animate(
            {scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',

            function () {
                window.location.hash = target;
            }
        );
        var $navbarCollapse = $('.navbar-collapse');
        if ($navbarCollapse.hasClass('in')) {
            $navbarCollapse.removeClass('in');
        }
    });
    setTimeout(function () {
        var $container = $('#projects-container');
        $container.masonry({
            itemSelector: '.project-item',
            isAnimated: true
        });
    }, 1000);


});






