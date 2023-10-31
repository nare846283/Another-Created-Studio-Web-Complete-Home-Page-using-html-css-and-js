const clickableDivs = document.querySelectorAll('.clickable-div');


clickableDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        const targetId = div.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        const colorTag1 = document.querySelector('.heading-first-color');
        const colorTag2 = document.querySelector('.heading-second-color');
        const linkColor = document.querySelector('.link-color');
        const linkColor1 = document.querySelector('.link-color1');
        const linkColor2 = document.querySelector('.link-color2');
        const elementHiddan = document.querySelector('.hiddan-text-area');
        // const listItem = document.querySelector('list-item');

        if (targetDiv.style.height === '0vh') {
            targetDiv.style.height = '100vh'; // Show the hidden div
            clickableDivs.style.background = '#242424';
            clickableDivs.style.borderBottom = 'none';
            colorTag1.style.color = '#fff';
            colorTag2.style.color = '#fff';
            linkColor.style.color = '#fff';
            linkColor1.style.color = '#fff';
            linkColor2.style.color = '#fff';
            linkColor.style.border = '1px solid #fff';
            linkColor1.style.border = '1px solid #fff';
            linkColor2.style.border = '1px solid #fff';
            elementHiddan.style.display = 'block'
        } else {
            targetDiv.style.height === '0vh'; // Hide the div if it's visible
            clickableDivs.style.background = '#EBE2DA';
            clickableDivs.style.borderBottom = '1px solid #000';
            colorTag1.style.color = '#242424';
            colorTag2.style.color = '#242424';
            linkColor.style.color = '#242424';
            linkColor1.style.color = '#242424';
            linkColor2.style.color = '#242424';
            linkColor.style.border = '1px solid #242424';
            linkColor1.style.border = '1px solid #242424';
            linkColor2.style.border = '1px solid #242424';
            elementHiddan.style.display = 'none'
        }
    });
});
