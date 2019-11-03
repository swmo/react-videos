import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({term: e.target.value}, function(){
          //  this.props.callbackOnSearchSubmit(this.state.term);
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.callbackOnSearchSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <div className="ui icon input">
                        <i className="search icon"></i>
                        <input 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default  SearchBar;