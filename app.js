const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', lost: false },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', lost: false },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', lost: false },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', lost: false },
    { heavy: true, priority: true, fragile: true, to: 'Brittany', lost: false },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', lost: false },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', lost: false }]

let current = []

function draw() {
    let template = ''
    for (let i = 0; i < current.length; i++) {
        const package = current[i];
        template += `
            <div class="col-12 col-md-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        Package: ${i + 1}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Heavy: ${package.heavy}</li>
                        <li class="list-group-item">Priority: ${package.priority}</li>
                        <li class="list-group-item">Fragile: ${package.fragile}</li>
                        <li class="list-group-item">Shipped To: ${package.to}</li>
                        <li class="list-group-item">Tracking Number: ${package.trackingNumber}</li>
                        <li class="list-group-item">Is Lost? : ${package.lost}</li>
                    </ul>
                </div>
            </div>
        `
    }
    document.getElementById('cards').innerHTML = template
}


function reset() {
    packages.forEach(p => p.lost = false)
    const randomIndex = Math.floor(Math.random() * packages.length)
    packages[randomIndex].lost = true
    current = packages
    draw()
}

function filterHeavy() {
    current = current.filter(p => p.heavy)
    console.log(current);
    draw()
}

function filterPriority() {
    current = current.filter(p => p.priority)
    draw()
}

function filterFragile() {
    current = current.filter(p => p.fragile)
    draw()
}

function filterTo(name) {
    current = packages.filter(p => p.to == name)
    // current = []
    // current.push(package)
    draw()
}

function filterTrack(number) {
    current = packages.filter(p => p.trackingNumber == number)
    draw()
}
function filter(filterProperty) {
    let lostPackage = packages.find(package => package.lost)
    current = current.filter(p => p[filterProperty] === lostPackage[filterProperty])
    draw()
}
reset()