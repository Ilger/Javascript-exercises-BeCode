
document.innerHTML = bowlingScore('00 5/ 4/ 53 33 22 4/ 5/ 45 XXX')






function bowlingScore(frames) {
    const frameArr = frames.split(' ')
    let score = 0;
    for (let i = 0; i < frameArr.length; i++) {
        const frame = frameArr[i];
        if(i<8){
            if (frame[1]==='/') { //spare case
                score += 10 
                score += (frameArr[(i+1)][0]==='X')
                                                ? 10 
                                                : frameArr[(i+1)][0];
            } else if (frame[0]==='X'){ // strike = +10 +next two roles
                score += 10
                score = score + (frameArr[(i+1)][0]==='X' && frameArr[(i+2)][0]==='X') // if next two rolles are strikes
                                ? 20
                                :   (frameArr[(i+1)][0]==='X') // if next role is strike but second isent
                                    ? 10 + parseInt(frameArr[(i+1)][0])
                                    :   ((frameArr[(i+1)][1]==='/')) // if next role is a spare
                                        ? 10
                                        : parseInt(frameArr[(i+1)][0]) + parseInt(frameArr[(i+1)][1]) //if next two roles are just nuberscore
            } else {
                score += frame[0]
                score += frame[1]
            }
        }
        return score
    }
    
    
    // } else if (i == 8){

    // } else{

    // } 


// function bowlingScore(frames) {
//     const [a,b,c,d,e,f,g,h,i,j] = frames.split(' ')
//     let score = 0;
// for (let index = 0; index < parsedFrames.length; index++) {
//     const frame = frames[index];

//     switch (frame) {
//         case /[0-9]/:
//             score += frame
//             break;
//         case '/':
//             score = frame
//             break;
//         case 'x':

//             breakk
//         default:
//             break;
//     }
//     return score
// }
// return frames.split(' ')
// }