function startTimer() {
    const breakTime = document.getElementById('breakTime').value;
  
    if (breakTime === "") {
      alert("Please enter a valid break time.");
      return;
    }
  
    const interval = breakTime * 60 * 1000; // Convert minutes to milliseconds
  
    let remainingSeconds = breakTime * 60; // Track remaining time in seconds
  
    const timerElement = document.getElementById('timer');
  
    const intervalId = setInterval(() => {
      remainingSeconds--;
  
      // Calculate minutes and seconds from remaining seconds
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
  
      // Pad minutes and seconds with leading zeros for formatting
      const timerElement = document.getElementById('timer');
timerElement.classList.add('timer-clock');

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
      // Update timer display with clock format
      timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
  
      if (remainingSeconds === 0) {
        clearInterval(intervalId); // Stop the interval
        showNotification();
      }
    }, 1000); // Update every second
  
    showReminderAddedNotification(breakTime);
  
    document.getElementById('breakTime').value = ""; // Clear input field
  }
  
  
  // ... (other functions remain the same)
  

function showNotification() {
    if (Notification.permission === 'granted') {
        const notification = new Notification('Take a Break!', {
            body: 'It\'s time to relax for a while.',
            icon: 'icon.png', // You can replace this with your own icon
        });

        // Include a pop-up notification
        alert('Take a Break! It\'s time to relax for a while.');

        // Include a sound notification
        playNotificationSound();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                showNotification();
            }
        });
    }
}

function playNotificationSound() {
    const audio = new Audio('notification.mp3'); 
    audio.play();
}

function showReminderAddedNotification(minutes) {
    if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                const notification = new Notification('Reminder Added', {
                    body: `Notification added for ${minutes} minutes.`,
                    icon: 'https://www.jiomart.com/images/product/original/rvsmfqvzwq/arima-uv-and-3d-printed-stainless-steel-water-bottle-emoji-multicolor-white-980ml-product-images-orvsmfqvzwq-p606802501-0-202312191947.jpg?im=Resize=(1000,1000)', // You can replace this with your own icon
                });
            }
        });
    }
}
