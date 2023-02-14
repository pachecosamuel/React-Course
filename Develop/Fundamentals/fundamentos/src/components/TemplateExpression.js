import FirstComponent from "./FirstComponent";

const TemplateExpression = () => {

    const name = "Samuel";
    const data = {
        age: 26,
        job: "Scrum master",
        Salary: 19562.20
    };

    return (
        <div>
            <p>My age is: {data.age}</p>
            <p>My job is: {data.job}</p>
            <p>My Salary is: {data.Salary}</p>
        </div>
    );
};

export default TemplateExpression;