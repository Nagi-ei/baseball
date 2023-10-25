import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from './Constant.js';


// 세자리 숫자 클래스
class Numbers {
    constructor(numbersArray) {
        this.numbersArray = numbersArray ?? this.generateAnswer();
        this.first = this.numbersArray[0];
        this.second = this.numbersArray[1];
        this.third = this.numbersArray[2];
    }

    // 랜덤 배열 생성
    generateAnswer() {
        const answerArray = [];
        while (answerArray.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!answerArray.includes(randomNumber)) {
                answerArray.push(randomNumber);
            }
        }
        return answerArray;
    }

    
}




export { Numbers };
