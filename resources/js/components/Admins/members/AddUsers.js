import React, { Component } from 'react';
import { getauthadmin } from "../../Admins/functions";
import { additems } from './functions';


class AddItems extends Component {
    state = {
    //inputs 
    name: "",
    email: "",
    password: "",
    photo: "",

    //validation
    nameRequired: "",
    emailRequired: "",
    statusRequrired: "",
    passwordRequired: "",
    photoRequired: "",
    photoType: "",
    photoSize: "",
    success: ""
    };

    inputRef = React.createRef();

    validateName=()=>{
        let nameRequired='';
        if(this.state.name.length < 4) {
            nameRequired='you should enter at least 10 characters';
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

    validateemail=()=>{
        let emailRequired='';
        if(this.state.name.length < 4) {
            emailRequired='you should enter at least 10 characters';
        }
        if(emailRequired) {
            this.setState({
                emailRequired
            })
        }else{
            this.setState({
                emailRequired:''
            })
        }
    }

    validatepassword=()=>{
        let passwordRequired='';
        if( this.state.password.length < 8) {
            passwordRequired='you should enter at least 8 characters';
        }
        if(passwordRequired) {
            this.setState({
                passwordRequired
            })
        }else{
            this.setState({
                passwordRequired:''
            })
        }
    }

    validatephoto=()=>{
        let photoRequired="";
        if( this.state.photo) {
            photoRequired='you should select photo';

            let photoType="";
        if(! this.state.photo.type !=='image/jpg' && this.state.photo.type !=='image/jpeg' && this.state.photo.type !=='image/png' && this.state.photo.type !=='image/gif') {
            photoType = "invalid image";
        }
        if(photoType) {
            this.setState({
                photoType
            });
            
        }else{
            this.setState({
                photoType:""
            });
        }

        let photoSize="";
        if( this.state.photo.size > 14048) {
            photoSize = "maximum size should be less than 14 MB";
        }
        if(photoSize) {
            this.setState({
                photoSize
            });
        }else{
            this.setState({
                photoSize:""
            });
        }
        }

        
    };


    changeState=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }

    changeStatePhoto = (e)=>{
        this.setState({
            photo:e.target.files[0]
        })
    };

    submitState=(e)=>{
        e.preventDefault();

        this.validateName();
        this.validateemail();
        this.validatepassword();
        this.validatephoto();

        const formData = new FormData();
        formData.append('name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('password',this.state.password)
        formData.append('photo',this.state.photo)

        const admins_id=this.state.admins_id

        additems(admins_id, formData).then(res => {
            if(res) {
                this.inputRef.current.value=''
                this.setState({
                    success:'you created item successfully',
                    name : "",
                    email : "",
                    status : "",
                    password : "",
                });
            }
        });

        // login(adminsData).then(res=>{
        // if(res) {
        //     this.props.history.push(`/home`);
        // } else{
        //     this.setState({
        //     error:'email or password is wrong'
        //     })
        // }
        // })
    };

    render() { 
        const success=<div className='alert alert-sucess' > {this.state.success} </div>
        return (
                    <div>     
                        {this.state.success ? success : null}
                        <div className="card text-white bg-dark mb-3 card_login" style={{maxWidth: '18rem'}} >
                            <div className="card-header">add item</div>
                            <div className="card-body">

                            <form onSubmit={this.submitState}>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">name address</label>
                                <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.nameRequired} </small>
                                </div>

                                <div className="form-group">
                                <label htmlFor="exampleInputemail1">email</label>
                                <input type="text" className="form-control" id="exampleInputemail1" name='email' value={this.state.email} onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.emailRequired} </small>
                                </div>

                                <div className="form-group">
                                <label htmlFor="exampleInputstatus1">status</label>
                                <select type="text" className="form-control" id="exampleInputemail1" name='status' value={this.state.status} onChange={this.changePhoto} >
                                <option value=''>...</option>
                                <option value='1'>new</option>
                                <option value='2'>used</option>
                                </select>
                                <small style={{ color:'red' }}>{this.state.statusRequired} </small>

                                </div>

                                <div className="form-group">
                                <label htmlFor="exampleInputpassword1">password</label>
                                <input type="text" className="form-control" id="exampleInputpassword1" name='password' value={this.state.password} onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.passwordRequired} </small>
                                </div>
                                
                                <div className="form-group">
                                <label htmlFor="exampleInputphoto1">photo</label>
                                <input ref={this.inputRef} type="file" className="form-control" id="exampleInputphoto1" name='photo'  onChange={this.changeState} />
                                <small style={{ color:'red' }}>{this.state.photoRequired} </small>
                                <small style={{ color:'red' }}>{this.state.photoType} </small>
                                <br/>
                                <small style={{ color:'red' }}>{this.state.photoSize} </small>
                                </div>

                                <button type="submit" className="btn btn-primary">add</button>
                            </form>
                            </div>
                        </div>
                    </div>
                )
    }
}

export default AddItems;