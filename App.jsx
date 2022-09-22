import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
constructor(){
        super()
        this.state = {
           
            userName: '',
            Email: '',
            passWord: ''
        }
        
        this.changeEmail = this.changeEmail.bind(this)
        this.changeuserName = this.changeuserName.bind(this)
        this.changepassWord = this.changepassWord.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    changeuserName(event) {
        this.setState({
            userName:event.target.value
        })
        }
       
        changeEmail(event) {
            this.setState({
                Email:event.target.value
            })
        }

        changepassWord(event) {
            this.setState({
                passWord:event.target.value
            })
        }
        onSubmit(event) {
            event.preventDefault()
            const registered = {
                userName:this.state.userName,
                Email:this.state.Email,
                passWord:this.state.passWord
            }

            axios.post('http://localhost:8800/app/signup', registered)
                .then(response => console.log(response.data))

            this.setState({
            userName:'',
            Email:'',
            passWord:''

        })
    }

        render() {
            return ( 
                <div>
                    <div className='container'>
                        <div className='form-div'>
                            <form onSubmit = {this.onSubmit}>
                                

                                <input type='text'
                                placeholder='Käyttäjänimi'
                                onChange={this.changeuserName}
                                value={this.state.userName}
                                className = 'form-control form-group' 
                                />

                                <input type='text'
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.Email}
                                className = 'form-control form-group' 
                                />

                                <input type='passWord'
                                placeholder='Salasana'
                                onChange={this.changepassWord}
                                value={this.state.passWord}
                                className = 'form-control form-group' 
                                />

                                
                                <input type='submit'
                                 className='btn btn-danger btn-block' value='Submit'/>
                                <input type='submit'
                                 className='btn btn-danger btn-block' value='Jatka kirjautumatta'/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
}

export default App;