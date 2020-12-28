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
    nameRequired:'',
    descriptionRequired:'',
    statusRequrired:'',
    priceRequired:'',
    photoRequired:'',
    photoType:'',
    photoSize:'',
    error:""
    };

    ComponentDidMount() {
        getauthadmin().then(res=>{
            this.setState({
                admins_id:res.data.admin.id
            });
        });
    }

    validateName=()=>{
        let nameRequired='';
        if(this.state.name.length < 4) {
            nameRequired='you should enter at least 4 characters'
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
            descriptionRequired='you should select status'
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

    validatestatus=()=>{
        let statusRequired='';
        if(! this.state.status) {
            statusRequired='you should enter at least 4 characters'
        }
        if(statusRequired) {
            this.setState({
                statusRequired
            })
        }else{
            this.setState({
                statusRequired:''
            })
        }
    }

    validateprice=()=>{
        let priceRequired='';
        if(! this.state.price) {
            priceRequired='you should select price'
        }
        if(priceRequired) {
            this.setState({
                priceRequired
            })
        }else{
            this.setState({
                priceRequired:''
            })
        }
    }

    validatephoto=()=>{
        let photoRequired='';
        if(! this.state.photo) {
            photoRequired='you should select photo'
        }
        if(photoRequired) {
            this.setState({
                photoRequired
            })
        }else{
            this.setState({
                photoRequired:''
            })
        }

        let photoType='';
        if(! this.state.photo.type !=='image/jpg' && ! this.state.photo.type !=='image/jpeg' && ! this.state.photo.type !=='image/png' && ! this.state.photo.type !=='image/gif') {
            photoRequired='you should select photo'
        }
        if(photoRequired) {
            this.setState({
                photoRequired
            })
        }else{
            this.setState({
                photoRequired:''
            })
        }
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

        this.validateName();
        this.validatedescription();
        this.validatestatus();
        this.validateprice();

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
                    <small style={{ color:'red' }}>{this.state.nameRequired} </small>
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputdescription1">description</label>
                    <input type="text" className="form-control" id="exampleInputdescription1" name='description' value={this.state.description} onChange={this.changeState} />
                    <small style={{ color:'red' }}>{this.state.descriptionRequired} </small>
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputstatus1">status</label>
                    <select type="text" className="form-control" id="exampleInputdescription1" name='status' value={this.state.status} onChange={this.changePhoto} >
                    <option value=''>...</option>
                    <option value='1'>new</option>
                    <option value='2'>used</option>
                    </select>
                    <small style={{ color:'red' }}>{this.state.statusRequired} </small>

                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputprice1">price</label>
                    <input type="text" className="form-control" id="exampleInputprice1" name='price' value={this.state.price} onChange={this.changeState} />
                    <small style={{ color:'red' }}>{this.state.priceRequired} </small>
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