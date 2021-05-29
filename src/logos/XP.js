import { Path, Segment, Point, Matrix } from 'paper'


// create point
const createPoint = (point) => {
    let x = 0, y = 0;
    if (typeof point === 'string') {
        let position = point.split(',')
       
        x = +position[0]
        y = +position[1]
    } 
    if (typeof point === 'object') {
        x = point.x
        y = point.y
    }

    let matrix = new Matrix(1, 0, 0, 1, 470, 50)
    let targetPoint = new Point(x, y)
    
    return targetPoint.transform(matrix)
}

const createSegment = (positionHandleIn, positionHandleOut, position) => {

    if (typeof position === 'string') {
        position = position.split(',')
        position = {x: +position[0], y: +position[1]}
    }
    if (typeof positionHandleIn === 'string') {
        positionHandleIn = positionHandleIn.split(',')
        positionHandleIn = {x: +positionHandleIn[0], y: +positionHandleIn[1]}
    }
    if (typeof positionHandleOut === 'string') {
        positionHandleOut = positionHandleOut.split(',')
        positionHandleOut = {x: +positionHandleOut[0], y: +positionHandleOut[1]}
    }

    let point = new Point(position)
    let handleIn = new Point(positionHandleIn)
    let handleOut = new Point(positionHandleOut)

    let offsetHandleIn = handleIn.subtract(point)
    let offsetHandleOut = handleOut.subtract(point)
    point = createPoint(point)  
    return new Segment(point, offsetHandleIn, offsetHandleOut)
    
}

const XP = () => {

    const XPPath = new Path()
    XPPath.strokeColor = '#000'
    XPPath.fillColor = '#000'
    const startPoint = createPoint({x: 36.26, y:18.62})
    
    const point1 = createPoint({x:51.86, y:18.62})
    const segment1 = createSegment({x:54.15, y:17.62}, {x: 52.7377046,y:18.6630754}, {x: 53.5850217,y:18.2930679})
    const segment2 = createSegment('63.15,8.62', '66.47,5.17 ', '56.61,15.2')
    const segment3 = createSegment('67.602945,3.39926799', '67.3,2.39', '67.2766899,4.49202589')
    const segment4 = createSegment('66.6350639,1.35769949', '66.0720994,1.11187166', '67.0769273,1.81763745')
    const point5 = createPoint('64.03,1.2')
    const segment6 = createSegment('60.54,2.58', '37.03,13.2', '36.23,13.53')
    const segment7 = createSegment('35.4873968,13.7288357', '34.9784722,14.4115394', '35,15.18')
    const point8 = createPoint('35,17.25')
    const segment9 = createSegment('34.9891163,17.4572961', '35.0197139,17.6646798', '35.09,17.86')
    const segment10 = createSegment('35.2697622,18.3196132   ', '35.716562,18.6188094', '36.21,18.61')
    
    XPPath.add(startPoint)
    XPPath.add(point1)
    XPPath.add(segment1)
    XPPath.add(segment2)
    XPPath.add(segment3)
    XPPath.add(segment4)
    XPPath.add(point5)
    XPPath.add(segment6)
    XPPath.add(segment7)
    XPPath.add(point8)
    XPPath.add(segment9)
    XPPath.add(segment10)

    const {size: { width, height }} = XPPath.bounds
    
    const leftPath = XPPath.clone()
    
    leftPath.translate(new Point(-width - 4, 0)).scale(-1, 1)

    leftPath.clone().translate(new Point(0, height + 4)).scale(1, -1) // bottomLeftPath
    XPPath.clone().translate(new Point(0, height + 4)).scale(1, -1)  // bottomRightPath
}

export default XP