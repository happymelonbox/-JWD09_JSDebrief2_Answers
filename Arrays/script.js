let drivers = ["Milo", "Otis", "Garfield"]

function resetDrivers() {
    drivers.length = 0
    drivers.push('Milo', 'Otis', 'Garfield')
}

resetDrivers()

function destructivelyAppendDriver(name){
    drivers.push(name)
    console.log(drivers)
}

resetDrivers()

function destructivelyPrependDriver(name){
    drivers.unshift(name)
    console.log(drivers)
}

resetDrivers()

function destructivelyRemoveLastDriver(name){
    drivers.pop()
    console.log(drivers)
}

resetDrivers()

function destructivelyRemoveFirstDriver(name){
    drivers.shift()
    console.log(drivers)
}

resetDrivers()

function appendDriver(name){
    const newDriver = [...drivers, name]
    return console.log(newDriver)
}

resetDrivers()

function prependDriver(name){
    const newDriverStart = [name,...drivers]
    return console.log(newDriverStart)
}

resetDrivers()

function removeLastDriver(){
    const newDriverLastRemove = drivers.slice(0,drivers.length-1)
    return console.log(newDriverLastRemove)
}

resetDrivers()

function removeFirstDriver(){
    const newDriverFirstRemove = drivers.slice(1)
    return console.log(newDriverFirstRemove)
}

resetDrivers()