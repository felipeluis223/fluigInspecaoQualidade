<div id="Chart_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Chart.instance()">
    
    <!-- Container do gráfico -->
    <div id="MY_SELECTOR"></div>

    <!-- Script do gráfico -->
    <script src="/style-guide/js/fluig-style-guide-chart.min.js"></script>
    <script>
        $(document).ready(function() {
            // Dados do gráfico com 12 meses
            var data = {
                labels: [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ],
                datasets: [
                    {
                        label: "Linha - Dataset 1",
                        type: "line",
                        borderColor: "rgba(220,220,220,1)",
                        backgroundColor: "rgba(220,220,220,0.2)",
                        data: [65, 59, 4, 81, 56, 55, 40, 48, 52, 66, 73, 80]
                    },
                    {
                        label: "Barra - Dataset 2",
                        type: "bar",
                        borderColor: "rgba(220,20,220,1)",
                        backgroundColor: "rgba(220,20,220,0.2)",
                        data: [32, 25, 33, 88, 12, 92, 33, 44, 39, 50, 61, 77]
                    }
                ]
            };

            // Opções do gráfico
            var options = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };

            // Inicialização do gráfico com FLUIGC
            var chart = FLUIGC.chart('#MY_SELECTOR', {
                id: 'set_an_id_for_my_chart',
                width: '900',
                height: '350'
            });

            // Renderização do gráfico combinado (linha + barra)
            chart.lineBar(data, options);
        });
    </script>
</div>
