import { Path, Size, Point } from 'paper'

const Nio = () => {

    const NioTopSize = new Size(40, 20)
    const vectorX = new Point(20, 0)
    const center = new Point(600, 80)
    
    // top path
    const topPath = new Path()
    topPath.strokeColor = '#000'
    let centerLeftPoint = center.subtract(vectorX)
    let centerRightPoint = center.add(vectorX)
    topPath.add(centerLeftPoint)
    let leftPoint = center.subtract(vectorX.multiply(2))
    topPath.add(leftPoint)
    let leftTopPoint = leftPoint.rotate(90, center)
    let rightPoint = leftPoint.rotate(180, center)
    topPath.arcTo(leftTopPoint, rightPoint)
    topPath.add(centerRightPoint)
    let centerTopPoint = centerLeftPoint.rotate(90, center)
    topPath.arcTo(centerTopPoint, centerLeftPoint)
    topPath.fillColor = '#000'

    // bottom path
    const bottomPath = new Path()
    bottomPath.fillColor = '#000'
    bottomPath.strokeColor = '#000'
    
    let bottomLeftPoint = centerLeftPoint.rotate(135)
    bottomLeftPoint.length = 20
    bottomLeftPoint = centerLeftPoint.add(bottomLeftPoint)

    let vector = new Point()
    vector.angle = 45
    vector.length = 20
    let bottomLeftRightPoint = bottomLeftPoint.add(vector)

    let centerBottomPoint = center.add(new Point(0, 6))

    let bottomRightLeftPoint = bottomLeftRightPoint.rotate(-90, centerBottomPoint)
    let vectorClone = vector.clone()
    vectorClone.angle = -45
    let bottomRightPoint = bottomRightLeftPoint.add(vectorClone)

     


    bottomPath.add(centerLeftPoint, 
                    bottomLeftPoint, 
                    bottomLeftRightPoint, 
                    centerBottomPoint, 
                    bottomRightLeftPoint, 
                    bottomRightPoint, 
                    centerRightPoint)

}

export default Nio