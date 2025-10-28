function downloadPlanner() {
    const dateValue = document.getElementById('date').value;
    const dayChecked = document.querySelector('input[name="day"]:checked');

    if (!dateValue) {
        Swal.fire({
            toast: true,              
            position: 'center',     
            icon: 'warning',
            title: 'Please select a Date before downloading.',
            showConfirmButton: false, 
            timer: 2500,              
            timerProgressBar: true     
        });
        return;
    }
    if (!dayChecked) {
        Swal.fire({
            toast: true,              
            position: 'center',     
            icon: 'warning',
            title: 'Please select a Dayname before downloading.',
            showConfirmButton: false, 
            timer: 2500,              
            timerProgressBar: true     
        });
        return;
    }

    if (!dateValue || !dayChecked) {
        Swal.fire({
            toast: true,              
            position: 'center',     
            icon: 'warning',
            title: 'Please select a Date and Day before downloading.',
            showConfirmButton: false, 
            timer: 2500,              
            timerProgressBar: true     
        });
        return;
    }

  
    const planner = document.querySelector('.planner-container');

    html2canvas(planner, {scrollY: -window.scrollY}).then(canvas => {
        const link = document.createElement('a');
        link.download = `DailyPlanner_${dateValue}_${dayChecked.value}.png`;
        link.href = canvas.toDataURL();
        link.click();

        Swal.fire({
            toast: true,
            position: 'center',
            icon: 'success',
            title: 'Download Successful! Check your downloads folder.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: '#ffffffff',
            color: '#000000ff',
            iconColor: '#4ceb71ff'
        });
    });
}