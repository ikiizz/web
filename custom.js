// ajax form
var form = document.getElementById("ajax-form");
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("ajax-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "✅ Pesan anda berhasil dikirim";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "❌ Error, pesan anda tidak dapat dikirim"
                    }
                })
                }
            }).catch(error => {
                status.innerHTML = "❌ Error, pesan anda tidak dapat dikirim"
            });
        }
        form.addEventListener("submit", handleSubmit)

// get current date
const date = document.getElementById('date');
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    date.textContent = now.toLocaleDateString('id-ID', options);

// get current time
function displayTime() {
      var currentDate = new Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      var timeString = hours + ":" + minutes + ":" + seconds;
      document.getElementById("time").innerHTML = timeString;
    }
    setInterval(displayTime, 1000);

// preloader
$(window).load(function () {
    "use strict";
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'auto'
        });
    })

// show scrollbar after page loaded
    $(window).on("load", function() {
        document.body.classList.remove('no-scroll');
    });
