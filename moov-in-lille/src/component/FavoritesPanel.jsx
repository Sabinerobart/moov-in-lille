import React from 'react';
import '../App.scss';

class FavoritesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          identity: ''
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.state.identity)
    };
    render() {
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="lastname">Identifiant:</label>
                        <input
                            type="text"
                            id="identity"
                            name="identity"
                            onChange={this.onChange}
                            value={this.state.identity}
                        />
                        <button type="submit" value="OK">OK</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FavoritesPanel;