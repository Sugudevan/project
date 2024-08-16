document.addEventListener('DOMContentLoaded', function () {
    // Initialize the progress chart with more advanced configurations
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress',
                data: [20, 40, 60, 80],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            }
        }
    });

    // Fetch personalized recommendations with animations
    fetch('/recommendations')
        .then(response => response.json())
        .then(data => {
            const recommendationList = document.getElementById('recommendationList');
            data.recommendations.forEach((recommendation, index) => {
                setTimeout(() => {
                    const li = document.createElement('li');
                    li.textContent = recommendation;
                    li.style.opacity = 0;
                    recommendationList.appendChild(li);
                    setTimeout(() => {
                        li.style.opacity = 1;
                        li.style.transition = 'opacity 0.5s ease-in-out';
                    }, 100);
                }, index * 300);
            });
        });
});
