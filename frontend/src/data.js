export const Year = [
    { id:2022, name: '2022'},
    { id:2021, name: '2021'}
];
export const Months = [
    { id:1, name: 'January'},
    { id:2, name: 'February'},
    { id:3, name: 'March'},
    { id:4, name: 'April'},
    { id:5, name: 'May'}, 
    { id:6, name: 'June'}, 
    { id:7, name: 'July'}, 
    { id:8, name: 'August'}, 
    { id:9, name: 'September'}, 
    { id:10, name: 'October'}, 
    { id:11, name: 'November'}, 
    { id:12, name: 'December'}
];

export const Days = [
    { id:1, name:"1"},
    { id:2, name:"2"},
    { id:3, name:"3"},
    { id:4, name:"4"},
    { id:5, name:"5"},
    { id:6, name:"6"},
    { id:7, name:"7"},
    { id:8, name:"8"},
    { id:9, name:"9"},
    { id:10, name:"10"},
    { id:11, name:"11"},
    { id:12, name:"12"},
    { id:13, name:"13"},
    { id:14, name:"14"},
    { id:15, name:"15"},
    { id:16, name:"16"},
    { id:17, name:"17"},
    { id:18, name:"18"},
    { id:19, name:"19"},
    { id:20, name:"20"},
    { id:21, name:"21"},
    { id:22, name:"22"},
    { id:23, name:"23"},
    { id:24, name:"24"},
    { id:25, name:"25"},
    { id:26, name:"26"},
    { id:27, name:"27"},
    { id:28, name:"28"},
    { id:29, name:"29"},
    { id:30, name:"30"},
    { id:31, name:"31"},
];

// export function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(color)
//     return color;
// }
export var getRandomColor = function () { 
    var o = Math.round, r = Math.random, s = 240;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};