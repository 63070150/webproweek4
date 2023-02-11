// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here
    if(window.confirm()){
        callback("ยืนยันจ้า")
    }else{
        callback("ไม่ดีกว่า")
    }
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    /*let start = document.getElementById('start').innerHTML = "Program started"
    let process = document.getElementById('process').innerHTML = "Hello World"
    let end = document.getElementById('end').innerHTML = "Program ended"
    setTimeout(, 1)
    setTimeout(process, 2000)
    setTimeout(end, 3000)*/
    setTimeout( () => {
        document.getElementById('start').innerHTML = "Program started"
    }, 0)
    setTimeout( () => {
        let process = document.getElementById('process').innerHTML = "Hello World"
    }, 2000)
    setTimeout( () => {
        let end = document.getElementById('end').innerHTML = "Program ended"
    }, 3000)

}


// ข้อ 2.3
function stopTime() {
    let time = document.getElementById('Time').value
    let min = Math.floor(time/60) //ปัดเศษลง
    let sec = time%60
    setInterval( () => {
        document.getElementById('setSecond').innerHTML = String(sec).padStart(2, '0') //padstart เติม0ข้างหน้าให้เต็มสองหลัก
        document.getElementById('setMinute').innerHTML = String(min).padStart(2, '0')
        if(sec==0 && min > 0){
            min -= 1
            sec = 60
        }
        else if(sec==0 && min <= 0){
            return
        }
        sec -= 1
    }, 1000)
}






/*
    let second = 0
    let txtsec
    let txtmin
    document.getElementById('setSecond').innerHTML = '00'
    document.getElementById('setMinute').innerHTML = '00'
    setInterval(() => {
        setTimeout( () => {
            document.getElementById('setSecond').innerHTML = txtsec
        }, 0)
        second += 1
        if(second<=9){
            txtsec = '0'+second
        }
        else if(second>9 && second<=59){
            txtsec = second
        }
    }, 1000)*/