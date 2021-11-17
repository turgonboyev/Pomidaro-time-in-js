window.addEventListener("DOMContentLoaded",() => {

  let start = document.querySelector('.start');

  start.addEventListener('click', startClick)

  function write(x, time) {
    if (time / 10 >= 1) {
      x.innerHTML = `${time}`
    } else {
      x.innerHTML = `0${time}`
    }
  }

  function startClick() {
    let time = Number(document.querySelector('#time').value),
        clock = document.querySelector('.clock'),
        minute = document.querySelector('.minute'),
        second = document.querySelector('.second'),
        clocks = Math.round(time / 60),
        minutes = time - Math.round(time / 60) * 60,
        seconds = 0;

    let timer = setInterval(sec, 1000)

    function sec() {

      if(time == ''){
        alert('Xatolik son kiriting')
        clocks = 0
        minutes = 0
        seconds = 0
      }

      function write(x, time) {
        if (time / 10 >= 1) {
          x.innerHTML = `${time}`
        } else {
          x.innerHTML = `0${time}`
        }
      }

      if (seconds == 0) {
        if(minutes != 0){
          write(second, seconds)
          seconds = 60
          minutes -= 1
        }

        // Soatlar uchun
        write(clock, clocks)
        if (clocks == 0) {
          clock.classList.remove('btn-success')
          clock.classList.add('btn-danger')
        }

        // Minutlar uchun
        write(minute, minutes)
        if (minutes == 0 && seconds == 0) {
          if (clocks == 0) {
            minute.classList.remove('btn-success')
            minute.classList.add('btn-danger')
            clearInterval(timer)
            second.classList.remove('btn-success')
            second.classList.add('btn-danger')

            // Vibration code
            navigator.vibrate(200);
          } else {
            clocks -= 1
            minutes = 60
          }
        }
      } else {
        second.classList.remove('btn-danger')
        write(second, seconds)
        seconds -= 1

        // Minutlar uchun
        write(minute, minutes)
        if (minutes == 0) {
          minute.classList.remove('btn-success')
          minute.classList.add('btn-danger')
        }
      }
    }

  }

})


