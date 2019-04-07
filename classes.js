class Timer {
     constructor(time) {
        this.minutes = time;
        this.seconds = 0;
        this.semesterOver = false;
    }

    getTime() {
        return this.seconds < 10 ? 
        (this.minutes + ":0" + this.seconds) : 
        (this.minutes + ":" + this.seconds);
    }

    getMinutes() {
        return this.minutes;
    }

    getSeconds() {
        return this.seconds;
    }

    setMinutes(time) {
        this.minutes = time;
    } 
     
    endOfSemester() {
         if (this.minutes == 0 && this.seconds == 0) {
              this.semester = true;
              return this.semester;
         } else {
              return this.semester;
         }
    }
}

function countDown() {
    var display = document.getElementById('time');

    var secondsDisplay = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + secondsDisplay;

    seconds--;

    if (seconds <= 0) {
        minutes--;
        seconds = 59;
    }
}

var masterTime = new Timer(4);

function loadPage() {
    seconds = masterTime.getSeconds();
    minutes = masterTime.getMinutes();

    var counter = setInterval(countDown, 1000);

    if (minutes == 0) {
        clearInterval(counter);
    }
}
