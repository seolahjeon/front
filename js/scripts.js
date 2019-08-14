$(document).on('ready', function() {
    document.createElement('header');
    document.createElement('nav');
    document.createElement('main');
    document.createElement('footer');
    if ($(window).width() > 767) {
        $('.nav').find('.drop-menu').css('transition', 'all .6s cubic-bezier(0.77, 0, 0.175, 1)');
    }

    var Drawer = (function() {
        var $window = $(window),
            $drawer = $('.drawer'),
            $opener = $('.menu-open'),
            $closer = $('.menu-close');

        (function init() {
            if ($window.width() > 767) {
                removeTransition();
            } else {
                setTransition();
            }

            addEvent();
        })();

        function addEvent() {
            $opener.on('click', drawerOpen);
            $closer.on('click', drawerClose);
            $window.on('resize', resizeWindow);
        }

        function resizeWindow() {
            if ($window.width() > 767) {
                removeTransition();
            } else {
                setTransition();
            }
        }

        function setTransition() {
            $drawer.css('transition', 'all .6s cubic-bezier(0.77, 0, 0.175, 1)');
        }

        function removeTransition() {
            $drawer.removeAttr('style');
        }

        function drawerOpen() {
            $drawer.addClass('-active');
        }

        function drawerClose(e) {
            $drawer.removeClass('-active');
        }
    })();

    var Nav = (function() {
        var $nav = $('.nav');

        (function init() {
            addEvent();
        })();

        function addEvent() {
            $(window).resize(onResize);

            if ($(window).width() > 767) {
                $('.nav').on('mouseleave', deactivate);
                $('.nav').on('mouseenter', 'a', activate);
            } else {
                $('.nav > ul > li > a').on('click', clickOpen);
            }
        }

        function onResize() {
            if ($(window).width() > 767) {
                setTransition();
            } else {
                removeTransition();
            }

            if ($(window).width() > 767) {
                console.log('pc');
                $('.nav a').off().on('mouseenter', activate);
                $('.nav').off().on('mouseleave', deactivate);
            } else {
                console.log('mobile');
                $('.nav a').off('mouseenter');
                $('.nav').off('mouseleave');

                $('.nav > ul > li > a').off().on('click', clickOpen);
            }
        }

        function activate(e) {
            $(e.currentTarget).parent().toggleClass('-active').siblings().removeClass('-active');
            e.preventDefault();
        }

        function clickOpen(e) {
            $(this).parent().toggleClass('-active').siblings().removeClass('-active');
            e.preventDefault();
        }

        function deactivate() {
            $nav.find('.-active').removeClass('-active');
        }

        function setTransition() {
            $('.nav').find('.drop-menu').css('transition', 'all .6s cubic-bezier(0.77, 0, 0.175, 1)');
        }

        function removeTransition() {
            $('.nav').find('.drop-menu').removeAttr('style');
        }
    })();
});