const totalViewChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthChart = document.getElementById('growth-chart');
const subscriberCountChart = document.getElementById('subscriber-count');
const trafficSourcesElement = document.getElementById('traffic-sources');
const datatable = document.getElementById('datatable');


fetch('/api/total_views')
.then(res => res.json())
.then(data => {
    new Chart(totalViewChart,{
    type: 'line',
    data: {
        labels: data.lables,
        datasets: [
            {
            label: '# for total number of views',
            data: data.data ,
            borderWidth: 1,
            }]
        },


    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 })



// new Chart(totalViewChart,{
//     type: 'line',
//     data: {
//         labels: ["aug","sep","oct","nov","dec","jan"],
//         datasets: [
//             {
//             label: '# of people Voted',
//             data: [13950, 19512, 30000,24576,29564,14547] ,
//             borderWidth: 1,
//             }]
//         },


//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

new Chart(revenueChart,{
    type: 'line',
    data: {
        labels: ["aug","sep","oct","nov","dec","jan"],
        datasets: [
            {
            label: '# for revenue',
            data: [13950, 19512, 30000,24576,29564,14547],
            borderWidth: 1,
            }]
        },


    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


new Chart(subscriberCountChart,{
    type: 'line',
    data: {
        labels: ["aug","sep","oct","nov","dec","jan"],
        datasets: [
            {
            label: '# of people subscribed',
            data: [13950, 19512, 30000,24576,29564,14547],
            borderWidth: 1,
            }]
        },


    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(trafficSourcesElement,{
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
            label: '# for total number of views',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            }]
        },


    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    } 
})

//  Initializing datatable

const dataTable = new simpleDatatables.DataTable("#datatable", {
	searchable: true,
	fixedHeight: true,
    data : {
        headings : ["Vedio Title","Published Date","Views Count"],

    }
})

fetch('/api/datatable_api')
.then(res => res.json())
.then(data =>{
    dataTable.insert({data:data.data}) 
})

