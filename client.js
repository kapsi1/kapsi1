fetch('http://localhost:7777', {
    method: "GET",
    // mode: "no-cors",
    cache: "no-cache"
}).then(res => res.text()).then(res => console.log('res', res));