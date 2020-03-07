import React, {useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import * as PropTypes from "prop-types";

class ExampleToast extends React.Component {
    render() {
        let {children} = this.props;
        const [show, toggleShow] = useState(true);

        return (
            <>
                {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
                <Toast show={show} onClose={() => toggleShow(false)}>
                    <Toast.Header>
                        <strong className="mr-auto">React-Bootstrap</strong>
                    </Toast.Header>
                    <Toast.Body>{children}</Toast.Body>
                </Toast>
            </>
        );
    }
}

ExampleToast.propTypes = {children: PropTypes.any}

class App extends React.Component {
    render() {
        return (
            <Profile>

            </Profile>
        );
    }
}

class Profile extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            dataLoaded: false
        }
        this.profile = ""
        // this.props = {
        //   p
        // }
    }

    componentDidMount() {
        if (!this.state.dataLoaded) {
            fetch("http://localhost:5000/me").then(
                result => result.json()
            ).then(
                data => {
                    console.log("Got data")
                    console.log(data)
                    this.profile = data;
                    this.setState({"dataLoaded": true});
                }
            )
        }
    }

    render() {
        return (
            <Container>
              {this.state.dataLoaded && this.profile.name}
            </Container>
        )
    }

}

export default App;
