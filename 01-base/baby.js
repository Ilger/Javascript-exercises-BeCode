
document.getElementById('root').innerHTML = bowlingScore('09 7/ 41 7/ 42 53 X 04 52 1/X');


function bowlingScore(frames) {
    const frameArr = frames.split(' ')

    let score = 0;
    for (let i = 0; i < frameArr.length; i++) {
        const frame = frameArr[i];
        if (i < 8) { // calc first 8 frames
            if (isSpare(frame)) { //spare case
                score += 10
                score += (nextRollIsStrike(frameArr, i))
                    ? 10
                    : parseInt(frameArr[(i + 1)][0])
            } else if (isStrike(frame)) { // strike = +10 +next two roles
                score += 10
                score = score + strikeCheck(frameArr, i)
            } else {
                score += parseInt(frame[0])
                score += parseInt(frame[1])
            }
        } else if (i == 8) { // before last frame
            if (isSpare(frame)) { //spare case
                score += 10
                score += (nextRollIsStrike(frameArr, i))
                    ? 10
                    : parseInt(frameArr[(i + 1)][0])
            } else if (isStrike(frame)) { // strike = +10 +next two roles
                score += 10
                score = score + beforeLastIsStrike(frameArr, i)
            } else {
                score += parseInt(frame[0])
                score += parseInt(frame[1])
            }
        } else { // calc frame 9
            if (frame.length === 3) {
                if (isSpare(frame)) { //spare case
                    score += 10
                    score += (frame[2] === 'X')
                        ? 10
                        : parseInt(frame[2])
                } else { // first roll is strike 
                    score += 10
                    score = score + endFrameHasStrike(frame)
                }
            } else { // frame 10 is only 2 roles
                score = score + parseInt(frame[0]) + parseInt(frame[1]) //if next two roles are just nuberscore
            }
        }
    }
    return score
}

function isStrike(currentFrame) {
    return (
        (currentFrame[0] === 'X')
            ? true
            : false
    )
}
function isSpare(currentFrame) {
    return (
        (currentFrame[1] === '/')
            ? true
            : false
    )
}
function nextRollIsStrike(frameArr, index) {
    return (
        (frameArr[(index + 1)][0] === 'X')
            ? true
            : false
    )
}
function whenStrikeAndNextTwoRollsAreStrikes(frameArr, index) {
    return (
        (frameArr[(index + 1)][0] === 'X' && frameArr[(index + 2)][0] === 'X')
            ? true
            : false
    )
}
function whenStrikeAndNextRollIsStrikeButSecondNot(frameArr, index) {
    return (
        (frameArr[(index + 1)][0] === 'X')
            ? true
            : false
    )
}
function whenStrikeAndAndNextTwoIsSpare(frameArr, index) {
    return (
        (frameArr[(index + 1)][1] === '/')
            ? true
            : false
    )
}
function strikeCheck(frameArr, i) {
    return (
    (whenStrikeAndNextTwoRollsAreStrikes(frameArr, i)) // if next two rolles are strikes
        ? 20
        : (whenStrikeAndAndNextTwoIsSpare(frameArr, i)) // if seconde role is a spare
            ?10
            :   (whenStrikeAndNextRollIsStrikeButSecondNot(frameArr, i)) // if next role is strike but second isent
                ? 10 + parseInt(frameArr[(i + 2)][0])
                : parseInt(frameArr[(i + 1)][0]) + parseInt(frameArr[(i + 1)][1]) //if next two roles are just nuberscore
)
}
function beforeLastIsStrike(frameArr, index) {
    const i = index;
    const nextFrame = (index + 1);
    const checkScore = (((frameArr[nextFrame][0] === 'X' && frameArr[nextFrame][1] === 'X')) // if next two rolles are strikes
        ? 20
        : (whenStrikeAndNextRollIsStrikeButSecondNot(frameArr, i)) // if next role is strike but second isent
            ? 10 + parseInt(frameArr[nextFrame][1])
            : (whenStrikeAndAndNextTwoIsSpare(frameArr, i)) // if seconde role is a spare
                ? 10
                : parseInt(frameArr[nextFrame][0]) + parseInt(frameArr[nextFrame][1])
    ) //if next two roles are just nuberscore
    return checkScore
}
function endFrameHasStrike(frame) {
    return (
        (frame[2] === 'X' && frame[1] === 'X') // if last frame is 3 strikes
            ? 20
            : (frame[1] === 'X') // if next role is strike but second isent
                ? 10 + parseInt(frame[2])
                : (frame[2] === '/') // if seconde role is a spare
                    ? 10
                    : parseInt(frame[1]) + parseInt(frame[2]) //if next two roles are just nuberscore
    )
}
