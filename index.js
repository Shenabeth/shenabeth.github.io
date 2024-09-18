// $(document).ready(function () {
//   $("#footer").load("footer.html");
// });


// document.addEventListener('DOMContentLoaded', function () {
//   var menuToggle = document.querySelector('.menu-toggle');
//   var menuItems = document.querySelector('.menu');

//   menuToggle.addEventListener('click', function () {
//     menuItems.classList.toggle('show');
//   });

// Close the menu when a menu item is clicked
//   var menuLinks = document.querySelectorAll('.menu a');

//   menuLinks.forEach(function (link) {
//     link.addEventListener('click', function () {
//       menuItems.classList.remove('show');
//     });
//   });
// });


// Email address must be valid
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const sendButton = document.querySelector('.primary-button');

    emailInput.addEventListener('input', function() {
        if (emailInput.checkValidity()) {
            sendButton.removeAttribute('disabled');
        } else {
            sendButton.setAttribute('disabled', 'disabled');
        }
    });
});


// Navbar
(function () {
    // Load Navbar
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        });

    // Load Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        });

    // Load Logos
    const logosPlaceholder = document.getElementById("logos-placeholder");
    fetch("logos.html")
        .then(response => response.text())
        .then(data => {
            logosPlaceholder.innerHTML = data;
        });
})();


// Starry Background
const canvas = document.getElementById('starryBackground');
const ctx = canvas.getContext('2d');

// Function to resize the canvas to match the container
function resizeCanvas() {
    const container = document.getElementById('container');
    if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        console.log('Canvas resized to:', canvas.width, canvas.height); // Debugging line

        // Clear existing stars and recreate them
        stars1 = [];
        stars2 = [];
        stars3 = [];
        createStars();
    } else {
        console.error('Container not found!');
    }
}

// Define the Star class
class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';  // 50% transparent stars
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
        // Reset star's position if it moves off-screen
        if (this.y < 0 - this.radius) {
            this.y = canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

// Create arrays to hold different sizes of stars
let stars1 = [];
let stars2 = [];
let stars3 = [];

// Function to create stars with varying properties
function createStars() {
    for (let i = 0; i < 100; i++) {
        // Small, slow-moving stars
        stars1.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0.25));
        // Medium-sized, slower-moving stars
        stars2.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height, 1.5, 0.4));
        // Large, slower-moving stars
        stars3.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0.6));
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each star in the arrays
    stars1.forEach(star => star.update());
    stars2.forEach(star => star.update());
    stars3.forEach(star => star.update());

    requestAnimationFrame(animate);
}

// Initial setup
resizeCanvas(); // Resize canvas and create stars initially
animate(); // Start the animation

// Resize canvas and regenerate stars on window resize
window.addEventListener('resize', resizeCanvas);




// Fade in containers
// Function to check if 25% of an element is in the viewport
function is25PercentInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const visibleHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate the amount of the element that is visible
    const elementTopVisible = Math.max(0, visibleHeight - rect.top);
    const elementBottomVisible = Math.max(0, rect.bottom);

    // Check if at least 25% of the element is visible
    const visiblePortion = Math.min(elementTopVisible, elementBottomVisible) / elementHeight;

    return visiblePortion >= 0.25;
}

// Function to add the animation class when the container is 25% in view
function checkFadeIn() {
    const containers = document.querySelectorAll('.fade-container');
    containers.forEach(container => {
        if (is25PercentInViewport(container)) {
            container.classList.add('scrolled-into-view');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);










// Music Player
let audioPlayer = new Audio();
let playPauseBtn = document.getElementById('playPauseBtn');
let volumeControlBtn = document.getElementById('volumeBtn');
let volumeControlSlider = document.querySelector('.volume-control');
let progressBar = document.getElementById('progressBar');
let volumeContainer = document.querySelector('.volume-container');
let currentSongIndex = 0;

const songs = [
    { src: "../music/song1.mp3", title: "Ring Ring", artist: "Shenabeth", thumbnail: "../images/stock1.png" },
    { src: "../music/song2.mp3", title: "Space Sandwich", artist: "Shenabeth", thumbnail: "../images/stock1.png" },
    { src: "../music/song3.mp3", title: "Escape", artist: "Shenabeth", thumbnail: "../images/stock2.png" },
    { src: "../music/song4.mp3", title: "Digital Bird", artist: "Shenabeth", thumbnail: "../images/stock3.png" },
    { src: "../music/song5.mp3", title: "Chiptunes", artist: "Shenabeth", thumbnail: "../images/stock1.png" },
    { src: "../music/song6.mp3", title: "Tech House", artist: "Shenabeth", thumbnail: "../images/stock4.png" }
];

// Function to load a song based on index
function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.src;
    document.getElementById('activeSongTitle').textContent = song.title;
    document.getElementById('activeSongArtist').textContent = song.artist;
    document.querySelector('.music-thumbnail').src = song.thumbnail;
    progressBar.value = 0;
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.classList.remove('paused');
    } else {
        audioPlayer.pause();
        playPauseBtn.classList.add('paused');
    }
});

// Next/Previous buttons
document.getElementById('nextBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Progress bar control
audioPlayer.addEventListener('timeupdate', function() {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    document.getElementById('totalTime').textContent = formatTime(audioPlayer.duration);
});

progressBar.addEventListener('input', function() {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Format time function
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Clickable song items in the song list
document.querySelectorAll('.music-item').forEach(item => {
    item.addEventListener('click', function() {
        currentSongIndex = [...document.querySelectorAll('.music-item')].indexOf(this);
        loadSong(currentSongIndex);
        audioPlayer.play();
    });
});

// Initial setup
window.addEventListener('load', function() {
    loadSong(0);  // Load the first song as default
});

