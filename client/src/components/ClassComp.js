import React from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Fade } from '@material-ui/core';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.initNum,
            time: (new Date()).toString(),
            checked: false,
            display: 'none',
            count: 0,
        };
    }

    randomGen = () => {
        this.setState({
            num: Math.random(),
        });
    }

    getNow = () => {
        this.setState({
            time: (new Date()).toString(),
        });
    }

    handleChange = () => {
        let checked = this.state.checked;
        let count = this.state.count;
        const nextState = {};

        if (count < 2) {
            nextState.display = checked ? 'none' : '';
            nextState.checked = !checked;
            nextState.count = ++count;
            this.setState(nextState);
            console.log(this.state.count);
        } else {
            nextState.display = 'none';
            nextState.checked = false;
            nextState.count = 0;
            this.setState(nextState);
        }
    }

    componentDidUpdate() {
        if (this.state.count != 0) {
            setTimeout(this.handleChange, 1500);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="alert" style={{ display: this.state.display }}>
                    <Fade in={this.state.checked}>
                        <Alert severity="warning">This is a warning alert — check it out!</Alert>
                    </Fade>
                </div>
                <h2>Class Style Component</h2>
                <p>Number: {this.state.num}</p>
                <p>현시각: {this.state.time}</p>
                <Button variant="contained" color="primary" onClick={this.randomGen}>Randomize</Button>
                <Button variant="contained" color="secondary" onClick={this.getNow}>get now</Button>
                <Button variant="contained" color="primary" onClick={this.handleChange}>Alert</Button>
            </div>
        );
    }
}

export default ClassComp;