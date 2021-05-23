import { Path, Point } from 'paper'


let Audi = () => {
    const radius = 18
    const border = 4
    const strokeColor = '#000'

    const circleOne = Path.Circle({
        center: [30, 80],
        radius: radius,
        strokeColor: strokeColor,
        strokeWidth: border
    })

    for (let i = 1; i < 4; i++) {
        let circle = circleOne.clone()
        circle.translate(new Point(i * 2 * radius * 2 / 3, 0))
    }
}

export default Audi
