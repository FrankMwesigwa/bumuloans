import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { updateBook, getBook } from '../../store/books/actions';

class EditBook extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }

    handleInput = (event,name) => {
        const newFormdata = {...this.state.formdata}
        newFormdata[name] = event.target.value
        this.setState({formdata:newFormdata})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.updateBook(this.state.formdata, this.props.history)
    }

    componentWillMount(){
        this.props.getBook(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps){
        const { book } = nextProps.book
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
            }
        })
    }

    render() {
        return (
            <div className="rl_container article">

                <form onSubmit={this.submitForm}>
                    <h2>Edit review</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter author"
                            value={this.state.formdata.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter pages"
                            value={this.state.formdata.pages}
                            onChange={(event)=>this.handleInput(event,'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event)=>this.handleInput(event,'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Price"
                            value={this.state.formdata.price}
                            onChange={(event)=>this.handleInput(event,'price')}
                        />
                    </div>

                    <button type="submit">Edit review</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({ book: state.book })

export default connect(mapStateToProps, { updateBook, getBook })(withRouter(EditBook))