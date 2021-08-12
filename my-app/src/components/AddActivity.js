import React from 'react';

class AddActivity extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChange = (event, value) => {

        this.setState({ 
            [value]: event.target.value
         });
      };
    render(){
        return(
            <>
            <section className = "hero-section">
                <h1>Activity Tracker</h1>
                <form className = "flex" onSubmit = {(event) => {
                    event.preventDefault();
                    if(event.target.input.value){
                        this.props.addNewActivity(event)
                    }
                }}>
                    <fieldset>
            <label htmlFor='input'></label>
            <input
              type='text'
              name='input'
              id='input'
              placeholder='  e.g. Learn React'
            />
            <span></span>
          </fieldset>
          <button type='submit'>Add Activity</button>

                </form>
            </section>
            </>
        )
    }
}

export default AddActivity