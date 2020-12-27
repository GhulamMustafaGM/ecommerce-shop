import React, { Component } from 'react'
import { additems } from './functions';


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

        additems(admins_id, formData).then(res => {
            console.log(res);
        });

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
    
        <div>
            
            <div className="card text-white bg-dark mb-3 card_login" style={{maxWidth: '18rem'}} >
                <div className="card-header">add item</div>
                <div className="card-body">

                <form onSubmit={this.submitState}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">name address</label>
                    <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.changeState} />
                    <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputdescription1">description</label>
                    <input type="text" className="form-control" id="exampleInputdescription1" name='description' value={this.state.description} onChange={this.changeState} />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputstatus1">status</label>
                    <select type="text" className="form-control" id="exampleInputdescription1" name='status' value={this.state.status} onChange={this.changePhoto} >
                    <option value=''>...</option>
                    <option value='1'>new</option>
                    <option value='2'>used</option>
                    </select>

                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputprice1">price</label>
                    <input type="text" className="form-control" id="exampleInputprice1" name='price' value={this.state.price} onChange={this.changeState} />
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="exampleInputphoto1">photo</label>
                    <input type="text" className="form-control" id="exampleInputphoto1" name='photo'  onChange={this.changeState} />
                    </div>

                    <button type="submit" className="btn btn-primary">add</button>
                </form>
                </div>
            </div>
        </div>
    }
}

export default AddItems;