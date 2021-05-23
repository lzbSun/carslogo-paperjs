import { Path, Point, CompoundPath } from 'paper'

const Dazhong = () => {
    
    const center = new Point(400, 80)
    const gapePoint = new Point(0, 3)
    const topVCenterPoint = center.subtract(gapePoint)
    const radius = 38
    const color = '#000'
    const border = 4
    const vBorder = 6
    const deg45 = 45
    const circle = new Path.Circle({
        center,
        radius
    })
    circle.strokeColor = color
    circle.strokeWidth = border

    // top v
    const centerVector = center.subtract(new Point(0, radius))
    const vLeftTopPoint = centerVector.rotate(-deg45/ 2, center)
    const vRightTopPoint = vLeftTopPoint.rotate(deg45, center)
    const vLine = new Path(vLeftTopPoint, topVCenterPoint, vRightTopPoint)
    vLine.strokeColor = color
    vLine.strokeWidth = vBorder
    vLine.strokeJoin = 'bevel'

    // bottom w
    const WRightBottomPoint = vLeftTopPoint.rotate(184, center).subtract(gapePoint.multiply(3))
    const WLeftBottomPoint = vRightTopPoint.rotate(176, center).subtract(gapePoint.multiply(3))
    const wCenterPoint = center.add(gapePoint)
    const halfW = new Path(WLeftBottomPoint, wCenterPoint, WRightBottomPoint)
    halfW.strokeColor = color
    halfW.strokeWidth = vBorder
    halfW.strokeJoin = 'bevel'

    const wLeftTopPoint = vLeftTopPoint.rotate(-45, center)
    const wRightTopPoint = vRightTopPoint.rotate(45, center)

    const wLeftLine = new Path(wLeftTopPoint, WLeftBottomPoint, wCenterPoint)
    const wRightLine = new Path(wRightTopPoint, WRightBottomPoint, wCenterPoint)


    const wPath = new CompoundPath(wLeftLine, wRightLine)
    wPath.strokeColor = color
    wPath.strokeWidth = vBorder
    
}

export default Dazhong