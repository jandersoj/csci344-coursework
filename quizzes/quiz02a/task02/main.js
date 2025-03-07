// your function here
// Write a function in main.js that adds the following HTML inside the <div id="track-list"></div> element when the “Show Track” button is clicked.

//  <section class="track">
//      <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41">
//      <div>
//          <h3>When the Sun Hits</h3>
//          <p>Slowdive</p>
//          <p>Souvlaki</p>
//      </div>
//  </section>
// Then attach this function to the button’s click event handler.

function playTrack(event) {
  let trackList = document.getElementById("track-list");
  trackList.innerHTML = `
        <section class="track">
            <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41">
            <div>
                <h3>When the Sun Hits</h3>
                <p>Slowdive</p>
                <p>Souvlaki</p>
            </div>
        </section>
    `;
}

document.getElementById("show-track").addEventListener("click", playTrack);
