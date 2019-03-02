import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className = "form-group">
                  <label>Name</label>
                  <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange} />
                </div>
                <div className = "form-group">
                  <label>Job</label>
                  <input
                      className="form-control"
                      type="text"
                      name="job"
                      value={job}
                      onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
