import SectionTitle from "./SectionTitle.css"

const Title = (props) => {
    return (
        <div className="section-Title text-center">
            {props.title}
        </div>
    );
};

export default Title;