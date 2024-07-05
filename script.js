// Updated JavaScript (script.js)
function openModal(element, type) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var modalVideo = document.getElementById("modalVideo");
    
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    
    if (type === 'image') {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = element.getAttribute('data-full-image') || element.src;
        
        // Reset dimensions
        modalImg.style.width = 'auto';
        modalImg.style.height = 'auto';
        
        // Wait for the image to load
        modalImg.onload = function() {
            var imgRatio = this.naturalWidth / this.naturalHeight;
            var windowRatio = window.innerWidth / window.innerHeight;
            
            if (imgRatio > windowRatio) {
                // Image is wider than the window
                if (this.naturalWidth > window.innerWidth * 0.9) {
                    this.style.width = '90%';
                    this.style.height = 'auto';
                }
            } else {
                // Image is taller than the window
                if (this.naturalHeight > window.innerHeight * 0.9) {
                    this.style.height = '90vh';
                    this.style.width = 'auto';
                }
            }
        };
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