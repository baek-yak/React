import { Component } from 'react';

class Counter extends Component {
    state = {
        number : 0,
        fixedNumber: 0
    }
    render() {
        // state 를 조회 할 때에는 this.state 로 조회.
        const { number, fixedNumber } = this.state; 
        return (
        <div>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값:{ fixedNumber }</h2>
            <button
            // onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수 지정.
            onClick={()=>{
                this.setState(
                    {
                        number:number+1
                    },
                    () => {
                        console.log('방금 setState가 호출되었습니다.')
                        console.log(this.state)
                    }
                )
            }}
            >
                +1
            </button>
        </div>
        )
    }
}
export default Counter;