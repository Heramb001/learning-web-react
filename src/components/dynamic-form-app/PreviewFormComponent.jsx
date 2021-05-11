import { Link } from "react-router-dom";

function PreviewForm(props){
    return (
        <div>
            <Link to="/dynamic-form"> Back to Create Form</Link>
            {/* {props.data.fields.map((inputField, index) => (
                inputField
            ))} */}
            {props.title}
        </div>
    );
}

export default PreviewForm;