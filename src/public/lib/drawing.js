document.addEventListener('DOMContentLoaded', () => {
    let mouse = {
        click: false, move: false, position: { x: 0, y: 0 }, posprevius: false
    }

    //Canvas
    let canvas = document.getElementById('drawing');
    let context = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    //Socket IO
    let socket = io()

    canvas.width = width; canvas.height = height;

    canvas.addEventListener('mousedown', () => mouse.click = true)
    
    canvas.addEventListener('mouseup', () => mouse.click = false)

    canvas.addEventListener('mousemove', (e) => {
        mouse.position.x = e.clientX / width;
        mouse.position.y = e.clientY / height;
        mouse.move = true;
    })

    socket.on('server:drawLine', data => {
        let line = data.line;
        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(line[0].x * width, line[0].y * height);
        context.lineTo(line[1].x * width, line[1].y * height);
        context.stroke();
    })

    const mainLoop = () => {
        if (mouse.click && mouse.move && mouse.posprevius) {
            socket.emit('client:drawLine', { line: [mouse.position, mouse.posprevius] });
            mouse.move = false;
        }
        mouse.posprevius = { 
            x: mouse.position.x, y: mouse.position.y 
        };
        setTimeout(mainLoop, 25);

    }; mainLoop()
})