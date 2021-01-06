import React, { Component } from 'react';
import { updateCategories, editCategories } from './functions';


class EditCategory extends Component {
    state = {
    //inputs 
    name: "",
    description: "",

    //validation
    nameRequired: "",
    nameUnique:'',
    descriptionRequired: "",
    success: ""
    };

    componentDidMount() {
        const id=this.props.match.params.id
        editCategories(id).then(res=>{
            this.setState({
                name:res.data.category.name,
                description:res.data.category.description
            })
        })
    }

    inputRef = React.createRef();

    validateName=()=>{
        let nameRequired='';
        if(this.state.name.length < 4) {
            nameRequired='you should enter at least 4 characters';
        }
        if(nameRequired) {
            this.setState({
                nameRequired
            })
        }else{
            this.setState({
                nameRequired:''
            })
        }
    }

    validatedescription=()=>{
        let descriptionRequired='';
        if(this.state.name.length < 4) {
            descriptionRequired='you should enter at least 4 characters';
        }
        if(descriptionRequired) {
            this.setState({
                descriptionRequired
            })
        }else{
            this.setState({
                descriptionRequired:''
            })
        }
    }

    changeState=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }

    submitState=(e)=>{
        e.preventDefault();

        this.validateName();
        this.validatedescription();

        const formData = new FormData();
        formData.append('name',this.state.name)
        formData.append('description',this.state.description)

        const id=this.props.match.params.id
        updateCategories(id, formData).then(res => {
            if(res) {
                this.setState({
                    success:'you created item successfully',
                    name : "",
                    description : "",
                    nameUnique: ''
                });
            } else {
                this.setState({
                    success: "",
                });
            }
            
        }).catch(err=>{
            this.setState({
                nameUnique:err.response.data.name_unique
            })
        });
    };

        // login(adminsData).then(res=>{
        // if(res) {
        //     this.props.history.push(`/home`);
        // } else{
        //     this.setState({
        //     error:'email or password is wrong'
        //     })
        // }
        // })


    render() { 
        const success=<div className='alert alert-sucess' > {this.state.success} </div>
        return (
                    <div>     
                        {this.state.success ? success : null}
                        <div className="card text-white bg-dark mb-3 card_login" style={{maxWidth: '18rem'}} >
                            <div className="card-header">add category</div>
                            <div className="card-body">

                            <form onSubmit={this.submitState}>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">name address</label>
                                <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.nameRequired} </small>
                                <small style={{ color:'red' }}>{this.state.nameUnique} </small>
                                </div>

                                <div className="form-group">
                                <label htmlFor="exampleInputdescription1">description</label>
                                <input type="text" className="form-control" id="exampleInputdescription1" name='description' value={this.state.description} onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.descriptionRequired} </small>
                                </div>

                                <button type="submit" className="btn btn-primary">add</button>
                            </form>
                            </div>
                        </div>
                    </div>
                )
    }
}

export default EditCategory;