function downloadPlanner() {
    const dateValue = document.getElementById('date').value;
    const dayChecked = document.querySelector('input[name="day"]:checked');

    if (!dateValue || !dayChecked) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops!',
            text: 'Please select a Date and Day before downloading.',
        });
        return;
    }


    const planner = document.querySelector('.planner-container');

    html2canvas(planner, {scrollY: -window.scrollY}).then(canvas => {
        const link = document.createElement('a');
        link.download = `DailyPlanner_${dateValue}_${dayChecked.value}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}