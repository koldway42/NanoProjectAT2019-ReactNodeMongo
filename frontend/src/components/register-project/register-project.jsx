import React, { Component } from "react";

import Main from "../template/main";
import api from "../../services/api";
import "./register-project.css"

export default class extends Component {

    defaultState = {
        title: "",
        description: "",
        image: null,
        group: "",
        room: ""
    }

    state = this.defaultState

    handleChange(e) {
        this.setState( {[e.target.name]: e.target.value } )
    }

    handleImage(e) {
        this.setState({image: e.target.files[0] })
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { title, description, image, room, group} = this.state
        const data = new FormData();

        data.append("title", title);
        data.append("description", description);
        data.append("image", image);
        data.append("room", room);
        data.append("group", group);

        await api.post("/projects", data, {})
            .then(resp => {
                if(resp.status >= 200 && resp.status < 300) {
                    alert("Projeto Cadastrado com Sucesso");
                    this.props.history.push("/projects")
                }
            })
            .catch(err => alert("Ocorreu um erro ao processar sua solicitação."));
    }
    

    render() {
        return (
            <Main>
                <div className="container-fluid m-2 p-3">
                    <h1 className="display-4">Registro</h1>
                    <hr/>
                    <form id="register-form" onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group row m-3">
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Projeto</label>
                                <input type="text"  onChange={e => this.handleChange(e)} id="nome-projeto" className="form-control"
                                name="title" placeholder="Digite o nome do seu projeto..." required />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Grupo</label>
                                <input type="text"  onChange={e => this.handleChange(e)} id="nome-projeto" className="form-control"
                                name="group"placeholder="Digite o nome do grupo..." required />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Descrição</label>
                                <textarea id="nome-projeto" onChange={e => this.handleChange(e)} className="form-control"
                                name="description" placeholder="Dê uma descrição amigável..." rows="5" required />
                            </div>
                            <div className="form-group col-12 mb-4">
                            <label htmlFor="exampleFormControlSelect1">Sala</label>
                                <select className="form-control mb-3" defaultValue="Selecione Sua Sala" onChange={e => this.handleChange(e)} name="room" required>
                                    <option disabled>Selecione Sua Sala</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                                <label htmlFor="exampleFormControlFile1">Imagem</label>
                                <input type="file" className="form-control-file" onChange={e => this.handleImage(e)} />
                            </div>
                            <div className="col-12 mt-4 d-flex justify-content-end">
                                <button className="btn bg-danger" type="reset">Cancelar</button>
                                <button className="btn ml-2" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Main>
        )
    }
} 