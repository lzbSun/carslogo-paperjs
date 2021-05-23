import { Path, Point, PointText } from 'paper'

let BMW = () => {

    const radius = 38
    const strokeColor = '#717171'
    const strokeWidth = 4
    const center = new Point(200, 80)
    const BMWColor = '#0065b1'

    let circle = new Path.Circle({
        center,
        radius,
        strokeColor,
        strokeWidth
    })

    let innerCircle = circle.clone().scale(0.5)
    innerCircle.strokeWidth = strokeWidth / 2

    // draw blue sector
    let Sector = null
    let from = new Point(center.x, center.y - radius * 0.5),
    to = new Point(center.x - radius * 0.5, center.y),
    through = from.subtract(center).rotate(-45).add(center)


    Sector = new Path()
    Sector.add(from)
    Sector.arcTo(through, to)

    Sector.add(center)
    
    Sector.fillColor = BMWColor
    Sector.strokeColor = BMWColor

    Sector.clone().rotate(180, center)


    // text
    let MText = new PointText(new Point(center.x - 6, center.y - radius * 3 / 4 + 5))
    MText.content = 'M'
    MText.fillColor = strokeColor
    MText.fontSize = 14
    MText.fontWeight = 'bolder'
    MText.fontFamily = 'Helvetica'


    let BText = MText.clone(), WText = MText.clone()
    BText.content = 'B'
    WText.content = 'W'
    BText.rotate(-45, center)
    WText.rotate(45, center)

}

export default BMW