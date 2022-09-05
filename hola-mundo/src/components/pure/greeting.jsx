import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props); // Información que se le pasa por atributos del componente superior
        this.state = { // Información privada del componente (inmutable)
            age : 20
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name }
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => ( // * Única forma de cambiar el estado de un componente
            {
                age: prevState.age + 1
            }
        )) // * Un cambio de estado genera una renderización del componente
    }

}


Greeting.propTypes = { // Especifica el tipo de dato que se le pasa en las props
    name: PropTypes.string, // * Revisar: PropTypes.shape y otras opciones
};


export default Greeting;
