// Updated JavaScript (script.js)
function openModal(element, type) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var modalVideo = document.getElementById("modalVideo");
    
    modal.style.display = "block";
    
    if (type === 'image') {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = element.src;
    } else if (type === 'video') {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = element.getAttribute("data-video-src");
        modalVideo.play();
    }
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var modalVideo = document.getElementById("modalVideo");
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.style.display = "none";
}

function adjustGridHeight() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.height = window.innerHeight * 0.96 + 'px';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    var span = document.getElementsByClassName("close")[0];
    span.onclick = closeModal;

    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            closeModal();
        }
    }

    window.addEventListener('resize', adjustGridHeight);
    adjustGridHeight(); // Call once on load
});