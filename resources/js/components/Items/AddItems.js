import React, { Component } from 'react'


class AddItems extends Component {
    state = {
    //inputs 
    name: '',
    description:'',
    status:'',
    price:'',
    photo:'',

    //validation 
    error:''
    };

    ComponentDidMount() {
        getauthadmin().then(res=>{
            this.setState({
                admins_id:res.data.admin.id
            })
        })
    }

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

        const formData = new FormData();
        formData.append('name',this.state.name)
        formData.append('description',this.state.description)
        formData.append('status',this.state.status)
        formData.append('price',this.state.price)
        formData.append('photo',this.state.photo)

        const admins_id=this.state.admins_id


        login(adminsData).then(res=>{
        if(res) {
            this.props.history.push(`/home`);
        } else{
            this.setState({
            error:'email or password is wrong'
            })
        }
        })
    }

    render() { 
    const error=<div className='alert alert-danger' >{this.state.error}</div>
        return ( 
        <div>
            {this.state.error ? error : null}
            <div className="card text-white bg-dark mb-3 card_login" style={{maxWidth: '18rem'}} >
                <div className="card-header">Header</div>
                <div className="card-body">

                <form onSubmit={this.submitState}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={this.state.email} onChange={this.changeState} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={this.state.password} onChange={this.changeState} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default AddItems;