function downloadVideo() {
    const url = document.getElementById('videoUrl').value;
    const quality = document.getElementById('quality').value;
    const status = document.getElementById('status');

    if (!url) {
        status.textContent = 'කරුණාකර වලංගු URL එකක් ඇතුලත් කරන්න!';
        status.style.color = 'red';
        return;
    }

    // Simulate video download process
    status.textContent = බාගත කිරීම ආරම්භ විය: ${quality} ගුණාත්මකභාවයෙන්...;
    status.style.color = 'green';

    // For actual download, you'd need a backend API (e.g., using a service like PasteDownload)
    setTimeout(() => {
        status.textContent = 'බාගත කිරීම සාර්ථකයි! (සිමියුලේෂන්)';
    }, 2000);
}
