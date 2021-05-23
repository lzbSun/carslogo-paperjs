import { Path, Point } from 'paper'

const Benz = () => {
    const center = new Point(300, 80)
    const radius = 38
    const borderColor = '#717171'
    const strokeWidth = 4
    let circle = new Path.Circle({
        center,
        radius
    })
    circle.strokeColor = borderColor
    circle.strokeWidth =  strokeWidth

    // star
    const points = 3
    const radius1 = 6
    const Star = new Path.Star(center,points, radius, radius1)
    Star.fillColor = borderColor
}

export default Benz