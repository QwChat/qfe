import * as React from "react"
import * as ReactDOM from "react-dom"

import { Register, Login } from "./../services/user"

Register({
    nickname: "chenhuan",
    password: "123456"
})

Login({
    nickname: "chenhuan",
    password: "123456"
})

interface IndexProps {}

interface IndexState {
    count: number
}

class Index extends React.Component<IndexProps, IndexState> {
    private timer: number = 0
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    public render(): JSX.Element {
        return <span>Index test, count is: {this.state.count}</span>
    }

    beginTimer() {
        this.timer = window.setTimeout(() => {
          console.log(performance.now())
            this.setState(
                {
                    count: this.state.count + 1
                },
                this.beginTimer
            )
        }, 1000)
    }

    componentDidMount() {
        this.beginTimer()
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }
}

ReactDOM.render(<Index />, document.getElementById("reactApp"))
