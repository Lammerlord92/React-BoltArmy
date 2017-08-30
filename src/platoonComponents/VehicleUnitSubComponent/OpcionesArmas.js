import React, { Component } from 'react';
import OpcionArma from './OpcionArma.js';

class OpcionesArmas extends Component {
    render() {
        let OpcionesArmas = [];
        const addOpciones = this.props.vehic.armamento.forEach(
            (value, index) => {
                var arma = < div key = { value.nombre + value.opcionEscogida } >
                    <OpcionArma nombre = { value.nombre }
                opciones = { this.props.vehic.armamento[index].opciones }
                opcionEscogida = { this.props.vehic.armamento[index].opcionEscogida }
                unit = { this.props.unidad }
                opcion = { index }
                cambiaArmaSeleccionada = {
                    (indice_u, indice_opcArma, indice_armaSel, evento_d) =>
                    this.props.UnitData.cambiaArmaSeleccionada(indice_u, indice_opcArma, indice_armaSel)
                }
                /> </div>;
                OpcionesArmas.push(arma);
            }
        );

        return ( <div > { OpcionesArmas } </div>
        )
    }
}

export default OpcionesArmas;