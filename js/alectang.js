// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});


//footer_svg
var footerDiv="<div style='overflow:hidden' class='footer_svg'><div><svg class='waves' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 24 150 28' preserveAspectRatio='none' shape-rendering='auto'><defs><path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' /></defs><g class='parallax'>	<use xlink:href='#gentle-wave' x='48' y='0' fill='rgba(125,215,215,0.7' /><use xlink:href='#gentle-wave' x='48' y='3' fill='rgba(125,215,215,0.5)' /><use xlink:href='#gentle-wave' x='48' y='5' fill='rgba(125,215,215,0.3)' /><use xlink:href='#gentle-wave' x='48' y='7' fill='#fff' /></g></svg></div></div>";

$(function() {
$("#footer").append(footerDiv); 
});


