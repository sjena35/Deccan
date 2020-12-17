import { MDBInput } from 'mdbreact'
import React, { Component } from 'react'
import './Form.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import RichTextEditor from 'react-rte';

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checked:true,
             event:'',
             title:'',
             timezone:'',
             categories:'',
             summary:'',
             startDate:'',
             startTime:'',
             endDate:'',
             endTime:'',
             file:'',
             site:'',
             img:'',
             description:RichTextEditor.createEmptyValue()

            
        }
    }

    onFileChange = event => { 

        this.setState({ file: event.target.files}); 
       
      }; 


    imageUpload = (event) => {

		if (event.target.files) {
			const filesArr = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
            this.setState({img:filesArr})
			
		}
	};

    handleChange = (event) => {
        this.setState({checked:event.target.checked});
      };
    
      handler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
      }

    paragraph=(event)=>{
            this.setState({description:event})
    }


      submit=(event)=>{
          
    
          if(this.validation()){
            event.preventDefault()
            console.log(this.state)
          localStorage.setItem("data",JSON.stringify(this.state))
          alert("Successfully submitted data")
          }


      }

      //validations required are made required at input
      validation=()=>{

        if(!this.state.title.match("[a-zA-Z]{2,}")){
            alert("Invalid Title")
            return false
        }
        else if(this.state.startDate>this.state.endDate){
            alert("Start Date should be before end date")
            return false
        }

        else if(this.state.event===""){
            alert("select an event")
            return false
        }
        else if(this.state.categories===""){
            alert("select a category")
            return false
        }

        else{
            return true
        }


      }
    
    render() {
        const {event, title,categories,summary,site,startDate,startTime,endDate,endTime,file,timezone}=this.state;
        return (
            <div>
                <form>
                <div class="row">
                    <button class="btn btn-link">create event</button>
                    <button class="btn btn-primary create" type="submit" onClick={this.submit}>Create</button>
                    <button className="cancel">Cancel</button>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-sm-3"></div>
    
                    <div class="col-sm-6">
                        
                        <div class="form-group">
                            <label>Add Event in</label><span>*</span>
                            <select name="event" onChange={this.handler} required>
                                <option value="" disabled selected>select</option>
                                <option value="school">School</option>
                                <option value="college">College</option>
                            </select>
                         </div>

                         <div className="form-control">
                             <input type="file" accept="image/png, image/jpeg" onChange={this.imageUpload}/>

                         </div>

                         <div class="form-group">
                             <label>Title</label><span>*</span>
                             <input type="text" name="title"  maxLength="250" value={title} onChange={this.handler} required/>

                         </div>

                         <div class="form-group">
                            <label>Categories</label><span>*</span>
                            <select name="categories" onChange={this.handler}  required>
                                <option value="" selected disabled>select</option>
                                <option value="sports">sports</option>
                                <option value="entertainment">entertainment</option>
                                <option value="webinar">webinar</option>
                            </select>
                         </div>

                         <div class="form-group">
                             <label>Short Summary</label><span>*</span>
                            <textarea maxLength="500" name="summary" value={summary} onChange={this.handler} required/>
                         </div>

                         <div class="form-group">
                            <label><b>Type:Public</b></label>
                            <input type="url" maxLength="1024" name="site" onChange={this.handler} value={site}/>
                         </div>
                        
                        <div class="form-group">
                            <label>Is this a virtual event?</label>
                            <FormControlLabel control={<Switch checked={this.state.checked} onChange={this.handleChange}
                            name="checked" color="primary" />} label="Yes" labelPlacement="start" />
                            {this.state.checked?<input type="url" placeholder="Online Link"/>:""}
                        </div>

                        <div class="form-group">
                            <label>Select Timezone</label><span>*</span>
                        <select name="timezone" onChange={this.handler}  className="timezone" onChange={this.handler} required>
	                        <option value="GMT-12:00">International Date Line West</option>
	                        <option value="GMT-11:00">Midway Island, Samoa</option>
	                        <option value="GMT-10:00">Hawaii</option>
	                        <option value="GMT-09:00">Alaska</option>
	                        <option value="GMT-08:00">Pacific Time (US & Canada)</option>

	                        <option value="GMT+05:00">Islamabad, Karachi, Tashkent</option>
	                        <option value="GMT+05:30">Sri Jayawardenapura</option>
	                        <option value="GMT+05:30">Chennai, Kolkata, Mumbai, New Delhi</option>
	                        <option value="GMT+07:00">Krasnoyarsk</option>
	                        <option value="GMT+08:00">Beijing, Chongqing, Hong Kong, Urumqi</option>
	                        <option value="GMT+09:00">Osaka, Sapporo, Tokyo</option>
	                        <option value="GMT+09:00">Seoul</option>
	                        <option value="GMT+09:00">Yakutsk</option>
	                        <option value="GMT+09:30">Darwin</option>
	                        <option value="GMT+10:00">Brisbane</option>
	                        <option value="GMT+10:00">Canberra, Melbourne, Sydney</option>
	                        <option value="GMT+12:00">Magadan, Solomon Is., New Caledonia</option>
	                        <option value="GMT+12:00">Auckland, Wellington</option>
	                        <option value="GMT+12:00">Fiji, Kamchatka, Marshall Is.</option>
	                        <option value="GMT+13:00">Nuku'alofa</option>
                        </select>
                        <span><b>{this.state.timezone}</b></span>
                        </div>

                        <div className="form-group">

                            <label>Start Date</label><span>*</span>
                            <label className="labeltime">Start Time</label><span>*</span>
                            <br/>
                            <input type="date" className="date" name="startDate" onChange={this.handler} required/>
                            <input type="time" className="time" name="startTime" onChange={this.handler}   required/>
                        </div>

                        <div className="form-group">
                            <label>End Date</label><span>*</span>
                            <label className="labeltime">End Time</label><span>*</span>
                            <br/>
                            <input type="date" className="date" name="endDate" onChange={this.handler}  required/>
                            <input type="time" className="time" name="endTime" onChange={this.handler} required/>
                        </div>

                    
                            <RichTextEditor value={this.state.description} onChange={this.paragraph}/>
                        

                        <label>Attachments</label>
                        <div className="image-upload">
                        
                            <label for="file">
                                <img src="https://img.icons8.com/pastel-glyph/64/000000/image--v1.png"/>
                                <p>Click here to upload files</p>
                            </label>
                            <input type="file" name="file" placeholder="click here to upload files" onChange={this.onFileChange}/>
                        </div>
                   
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Form
